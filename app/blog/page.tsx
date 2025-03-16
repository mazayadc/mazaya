import { client } from '@/lib/contentful';
import BlogContent from './components/BlogContent';

// Make the page dynamic
export const dynamic = 'force-dynamic';

async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPage',
    order: ['-sys.createdAt'],
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

  return <BlogContent posts={posts} />;
}