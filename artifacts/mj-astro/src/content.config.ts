import { defineCollection, z } from 'astro:content';
import { loader, notroProperties, pageWithMarkdownSchema } from "notro-loader";

const blogCollection = defineCollection({
  loader: loader({
    queryParameters: {
      data_source_id: process.env.NOTION_DATASOURCE_ID || import.meta.env.NOTION_DATASOURCE_ID,
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    },
    clientOptions: {
      auth: process.env.NOTION_TOKEN || import.meta.env.NOTION_TOKEN,
    },
  }),
  schema: pageWithMarkdownSchema.extend({
    properties: z.object({
      Name: notroProperties.title,
      Description: notroProperties.richText,
      Public: notroProperties.checkbox,
      Slug: notroProperties.richText,
      Tags: notroProperties.multiSelect,
      Date: notroProperties.date,
      // We will allow Autor to be either a relation or people to prevent crashes depending on how the user sets it up
      Autor: z.any().optional(),
    }),
  }),
});

const authorsCollection = defineCollection({
  loader: loader({
    queryParameters: {
      // Re-resolving ID if it's a data source, otherwise it handles DBs. We tested earlier, and we can fetch it if we know it.
      data_source_id: process.env.NOTION_AUTHORS_ID || import.meta.env.NOTION_AUTHORS_ID || "35faf7d8cb3980d4a548d08b6bd84089",
    },
    clientOptions: {
      auth: process.env.NOTION_TOKEN || import.meta.env.NOTION_TOKEN,
    },
  }),
  schema: pageWithMarkdownSchema.extend({
    properties: z.object({
      Name: notroProperties.title,
      Slug: notroProperties.richText,
      Bio: notroProperties.richText.optional(),
      Role: notroProperties.richText.optional(),
      Public: notroProperties.checkbox.optional(),
      Foto: z.any().optional(), // Using any for files array
    }),
  }),
});

export const collections = {
  blog: blogCollection,
  autores: authorsCollection,
};
