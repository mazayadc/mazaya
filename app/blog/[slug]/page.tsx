import { client } from '@/lib/contentful';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReadAloud from '@/components/ReadAloud';

interface BlogPost {
  fields: {
    image?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title: string;
    date: string;
    readTime?: string;
    body?: {
      content: any[];
    };
    slug: string;
    author?: string;
    tags?: string[];
  };
}

export async function generateStaticParams() {
  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
    });

    return response.items.map((post: any) => ({
      slug: post.fields.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.fields.title,
    description: post.fields.body?.content[0]?.content[0]?.value || '',
    openGraph: {
      images: post.fields.image ? [`https:${post.fields.image.fields.file.url}`] : [],
    },
  };
}   

async function getBlogPost(slug: string): Promise<BlogPost | null> {    
  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      'fields.slug[match]': slug,
      limit: 1,
    });

    if (!response.items.length) {
      return null;
    }

    return response.items[0] as unknown as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

function calculateReadTime(content: any[]): string {
  const wordsPerMinute = 200;
  let wordCount = 0;
  
  content.forEach(item => {
    if (item.nodeType === 'paragraph') {
      item.content.forEach((textNode: any) => {
        const words = textNode.value.trim().split(/\s+/).length;
        wordCount += words;
      });
    }
  });
  
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  if (readTimeMinutes < 1) {
    return 'Less than 1 min read';
  } else if (readTimeMinutes === 1) {
    return '1 min read';
  } else {
    return `${readTimeMinutes} mins read`;
  }
}

function extractTextContent(content: any[]): string {
  let fullText = '';
  
  content.forEach(item => {
    if (item.nodeType === 'paragraph') {
      item.content.forEach((textNode: any) => {
        fullText += textNode.value + ' ';
      });
    }
  });
  
  return fullText.trim();
}

// Add revalidation time
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const readTime = post.fields.body ? calculateReadTime(post.fields.body.content) : '1 min read';

  const renderContent = (content: any[]) => {
    return content.map((item, index) => {
      if (item.nodeType === 'paragraph') {
        return (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed">
            {item.content.map((textNode: any, textIndex: number) => {
              const text = textNode.value;
              if (textNode.marks?.some((mark: any) => mark.type === 'bold')) {
                return <strong key={textIndex}>{text}</strong>;
              }
              return <span key={textIndex}>{text}</span>;
            })}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Content Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <div className="prose prose-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold mt-8">{post.fields.title}</h1>
            </div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readTime}</span>
                </div>
                <span>•</span>
                <span>{post.fields.date}</span>
              </div>
              <ReadAloud text={post.fields.body ? extractTextContent(post.fields.body.content) : ''} />
            </div>
            
            {post.fields.image && (
              <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
                <Image
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt={post.fields.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {post.fields.body && renderContent(post.fields.body.content)}
          </div>
          
          {/* Interactive Sidebar */}
          <aside className="space-y-8 sticky top-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold mb-4">Reading Progress</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Time to read:</span>
                  <span>{readTime}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold mb-4">Share this post</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold mb-4">Comments</h3>
              <div className="text-gray-500">
                <MessageCircle className="h-6 w-6 mb-2" />
                <p>Comments are coming soon!</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold mb-4">Did you know?</h3>
              <p className="text-gray-600">This blog uses AI-powered features to enhance your reading experience!</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold mb-4">Read Aloud</h3>
              <ReadAloud text={post.fields.body ? extractTextContent(post.fields.body.content) : ''} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}