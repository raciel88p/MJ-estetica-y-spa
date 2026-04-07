import express, { type Express } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// ── Security headers (reduces attack surface + removes X-Powered-By) ──
app.use(
  helmet({
    contentSecurityPolicy: false, // SPA handles CSP via meta tags
    crossOriginEmbedderPolicy: false,
  }),
);

// ── Gzip/Brotli compression for all responses ────────────────────────
app.use(
  compression({
    level: 6,            // balanced speed / compression ratio
    threshold: 1024,     // only compress responses > 1KB
    filter(req, res) {
      if (req.headers["x-no-compression"]) return false;
      return compression.filter(req, res);
    },
  }),
);

// ── Request logging ───────────────────────────────────────────────────
app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: { id: unknown; method: string; url?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: { statusCode: number }) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

// ── CORS ──────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN ?? "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400, // preflight cache: 24 h
  }),
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// ── Routes ────────────────────────────────────────────────────────────
app.use("/api", router);

export default app;
