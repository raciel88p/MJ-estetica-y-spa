import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const promotionsTable = pgTable("promotions", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
