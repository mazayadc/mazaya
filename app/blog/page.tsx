import { client, isContentfulConfigured } from '@/lib/contentful';
import { LOCAL_BLOG_POSTS } from '@/lib/blogData';
import BlogContent from './components/BlogContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Health Blog | Mazaya Dental Center Bahrain',
  description: 'Expert dental health advice, patient guides, special treatment offers, and updates from specialists at Mazaya Dental Center in Isa Town, Bahrain.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Dental Health Blog | Mazaya Dental Center Bahrain',
    description: 'Expert dental health advice, patient guides, special treatment offers, and updates from specialists at Mazaya Dental Center in Isa Town, Bahrain.',
  },
};

// Make the page dynamic
export const dynamic = 'force-dynamic';

async function getBlogPosts() {
  const localPosts = LOCAL_BLOG_POSTS.map(post => ({
    sys: {
      id: post.id,
      createdAt: post.date,
    },
    isLocal: true,
    fields: {
      title: post.title.en,
      titleAr: post.title.ar,
      slug: post.slug,
      date: post.date,
      category: post.category,
      tags: post.tags,
      author: post.author,
      readTime: post.readTimeEn,
      readTimeAr: post.readTimeAr,
      excerpt: post.excerpt.en,
      excerptAr: post.excerpt.ar,
      campaignInfo: post.campaignInfo,
      body: {
        content: [
          {
            nodeType: 'paragraph',
            content: [{ value: post.excerpt.en }],
          },
        ],
      },
    },
  }));

  if (!isContentfulConfigured || !client) {
    return localPosts;
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      order: ['-sys.createdAt'],
    });
    
    // Combine Contentful posts with local campaign posts
    return [...response.items, ...localPosts];
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return localPosts;
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogContent posts={posts} />;
}