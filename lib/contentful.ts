import { createClient, ContentfulClientApi } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '';

export const isContentfulConfigured = spaceId.length > 0 && accessToken.length > 0;

function createContentfulClient(): ContentfulClientApi<undefined> | null {
  if (!isContentfulConfigured) {
    return null;
  }
  try {
    return createClient({
      space: spaceId,
      accessToken: accessToken,
    });
  } catch (error) {
    console.warn('Failed to initialize Contentful client:', error);
    return null;
  }
}

export const client = createContentfulClient();

export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    body: {
      content: any[];
      nodeType: string;
    };
    image: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
} 