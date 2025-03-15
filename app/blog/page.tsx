import { client } from '@/lib/contentful';
import BlogContent from './components/BlogContent';
import Link from "next/link";

async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPage',
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