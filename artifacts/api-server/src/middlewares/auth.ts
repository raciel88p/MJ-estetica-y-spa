import type { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // In a real application, we would check for a session or a JWT token.
  // For this project, we check for a simple X-Admin-Key header.
  const adminKey = req.headers["x-admin-key"];
  const expectedKey = process.env.ADMIN_KEY || "mj-admin-secret-2025";

  if (adminKey === expectedKey) {
    return next();
  }

  res.status(401).json({ error: "Unauthorized. Admin access required." });
};
