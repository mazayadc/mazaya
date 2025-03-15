import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,  
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

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