import { client, isContentfulConfigured } from '@/lib/contentful';
import BlogContent from './components/BlogContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Health Blog',
  description: 'Expert dental health advice, tips, and the latest updates from the specialists at Mazaya Dental Center in Bahrain.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Dental Health Blog | Mazaya Dental Center',
    description: 'Expert dental health advice, tips, and the latest updates from the specialists at Mazaya Dental Center in Bahrain.',
  },
};

// Make the page dynamic
export const dynamic = 'force-dynamic';

async function getBlogPosts() {
  if (!isContentfulConfigured || !client) {
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      order: ['-sys.createdAt'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogContent posts={posts} />;
}