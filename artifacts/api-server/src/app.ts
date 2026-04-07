import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// ── Security headers ──────────────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy:      false,
    crossOriginEmbedderPolicy:  false,
  }),
);

// ── Gzip compression ─────────────────────────────────────────────────
app.use(
  compression({
    level:     6,
    threshold: 1024,
    filter(req: Request, res: Response) {
      if (req.headers["x-no-compression"]) return false;
      return compression.filter(req, res);
    },
  }),
);

// ── Request logger (inline — avoids pino-http CJS/ESM type issues) ───
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on("finish", () => {
    logger.info({
      method:     req.method,
      url:        (req.url ?? "").split("?")[0],
      statusCode: res.statusCode,
      ms:         Date.now() - start,
    });
  });
  next();
});

// ── CORS ──────────────────────────────────────────────────────────────
app.use(
  cors({
    origin:         process.env.ALLOWED_ORIGIN ?? "*",
    methods:        ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge:         86400,
  }),
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// ── Routes ────────────────────────────────────────────────────────────
app.use("/api", router);

export default app;
