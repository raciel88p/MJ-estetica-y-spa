import { defineCollection, z } from 'astro:content';
import { notionLoader } from "@astro-notion/loader";

// Helper to get env vars safely in both Node and Vite environments
const getNotionToken = () => {
  const token = process.env.NOTION_TOKEN || import.meta.env.NOTION_TOKEN;
  if (!token) console.warn("⚠️ NOTION_TOKEN is missing. The build may fail if Notion Content Collections are queried.");
  return token;
};

const getBlogDbId = () => {
  const rawId = process.env.NOTION_DATASOURCE_ID || import.meta.env.NOTION_DATASOURCE_ID;
  if (!rawId) console.warn("⚠️ NOTION_DATASOURCE_ID is missing.");
  const cleanId = (rawId || "default-blog-id-missing").replace(/-/g, "");
  if (cleanId.length === 32) {
    return `${cleanId.slice(0,8)}-${cleanId.slice(8,12)}-${cleanId.slice(12,16)}-${cleanId.slice(16,20)}-${cleanId.slice(20)}`;
  }
  return cleanId;
};

const getAuthorsDbId = () => {
  const rawId = process.env.NOTION_AUTHORS_ID || import.meta.env.NOTION_AUTHORS_ID;
  if (!rawId) console.warn("⚠️ NOTION_AUTHORS_ID is missing.");
  const cleanId = (rawId || "default-authors-id-missing").replace(/-/g, "");
  if (cleanId.length === 32) {
    return `${cleanId.slice(0,8)}-${cleanId.slice(8,12)}-${cleanId.slice(12,16)}-${cleanId.slice(16,20)}-${cleanId.slice(20)}`;
  }
  return cleanId;
};

const blogCollection = defineCollection({
  loader: notionLoader({
    auth: getNotionToken(),
    database_id: getBlogDbId(),
  }),
});

const authorsCollection = defineCollection({
  loader: notionLoader({
    auth: getNotionToken(),
    database_id: getAuthorsDbId(),
  }),
});

export const collections = {
  blog: blogCollection,
  autores: authorsCollection,
};
