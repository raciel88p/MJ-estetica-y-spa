import { Router, type Request, type Response } from "express";
import { db, promotionsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

// GET /promotions - Publicly accessible
router.get("/", async (req: Request, res: Response) => {
  try {
    const promotions = await db.query.promotionsTable.findMany({
      orderBy: (promotions, { desc }) => [desc(promotions.createdAt)],
    });
    res.json(promotions);
  } catch (error) {
    console.error("Error fetching promotions", error);
    res.status(500).json({ error: "Failed to fetch promotions" });
  }
});

// POST /promotions - Protected
router.post("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl is required" });
    }

    // Basic size validation for Base64 strings (approx 5MB limit)
    if (imageUrl.length > 7 * 1024 * 1024) {
      return res.status(413).json({ error: "Image is too large. Max 5MB." });
    }

    const [newPromotion] = await db.insert(promotionsTable)
      .values({ imageUrl })
      .returning();

    res.status(201).json(newPromotion);
  } catch (error) {
    console.error("Error creating promotion", error);
    res.status(500).json({ error: "Failed to create promotion" });
  }
});

// DELETE /promotions/:id - Protected
router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    await db.delete(promotionsTable).where(eq(promotionsTable.id, id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting promotion", error);
    res.status(500).json({ error: "Failed to delete promotion" });
  }
});

export default router;
