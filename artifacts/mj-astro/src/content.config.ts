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
      // REMOVED Public Filter temporarily to fetch unpublished posts if necessary, but actually let's remove filter to see if it works
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
    }),
  }),
});

export const collections = {
  blog: blogCollection,
};
