/**
 * Client for the Strapi CMS API.
 * Ensure environment variables STRAPI_API_URL and STRAPI_API_TOKEN are set.
 */

const STRAPI_URL = import.meta.env.STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN || '';

interface FetchApiOptions {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Helper to fetch data from Strapi API
 */
export async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: FetchApiOptions): Promise<T | null> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.replace('/', '');
  }

  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.keys(query).forEach((key) => {
      url.searchParams.append(key, query[key]);
    });
  }

  try {
    const res = await fetch(url.toString(), {
      headers: {
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch API: ${res.status} ${res.statusText}`);
      return null;
    }

    let data = await res.json();

    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    if (wrappedByList) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.error(`Error fetching Strapi API:`, error);
    return null;
  }
}

/**
 * Example function to fetch blog posts
 */
export async function getBlogPosts() {
  return fetchApi({
    endpoint: 'articles', // Adjust endpoint based on your Strapi configuration
    query: {
      populate: '*',
      sort: 'publishedAt:desc',
    },
    wrappedByKey: 'data',
  });
}

/**
 * Example function to fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  return fetchApi({
    endpoint: 'articles',
    query: {
      'filters[slug][$eq]': slug,
      populate: '*',
    },
    wrappedByKey: 'data',
    wrappedByList: true,
  });
}
