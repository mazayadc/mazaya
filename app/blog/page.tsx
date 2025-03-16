import { client } from '@/lib/contentful';
import BlogContent from './components/BlogContent';

// Use revalidate instead of force-dynamic
export const revalidate = 0;

async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPage',
    order: ['-sys.createdAt'] as const, // Fix: Wrap in array and use const assertion
  });
  return response.items;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Add this console log to check the data
  console.log('Posts data:', posts.map(post => ({
    title: post.fields.title,
    slug: post.fields.slug
  })));

  // Add caching headers using Next.js headers API
  return (
    <>
      <head>
        <meta httpEquiv="Cache-Control" content="public, s-maxage=10, stale-while-revalidate=59" />
      </head>
      <BlogContent posts={posts} />
    </>
  );
}