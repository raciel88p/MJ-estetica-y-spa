import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'c7ltnbh1',
  dataset: 'production',
  apiVersion: '2024-03-13',
  useCdn: true,
});
