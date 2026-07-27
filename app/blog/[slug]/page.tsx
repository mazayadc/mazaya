import { client, isContentfulConfigured } from '@/lib/contentful';
import { getLocalBlogPostBySlug, LOCAL_BLOG_POSTS } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReadAloud from '@/components/ReadAloud';
import JsonLd from '@/components/JsonLd';
import LocalBlogClient from './components/LocalBlogClient';

interface ContentfulBlogPost {
  isLocal?: false;
  fields: {
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

interface LocalBlogPostWrapped {
  isLocal: true;
  localData: ReturnType<typeof getLocalBlogPostBySlug> extends infer T ? NonNullable<T> : never;
  fields: {
    title: string;
    date: string;
    readTime: string;
    slug: string;
    author: string;
    tags: string[];
    body?: {
      content: any[];
    };
  };
}

type BlogPostUnion = ContentfulBlogPost | LocalBlogPostWrapped;

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Mazaya Dental Center',
    };
  }

  if (post.isLocal) {
    const localPost = post.localData;
    return {
      title: `${localPost.title.en} | Mazaya Dental Center`,
      description: localPost.seo.metaDescriptionEn,
      keywords: localPost.seo.keywords,
      alternates: {
        canonical: `/blog/${params.slug}/`,
      },
      openGraph: {
        title: `${localPost.title.en} | Mazaya Dental Center`,
        description: localPost.seo.metaDescriptionEn,
        url: `https://mazayadc.com/blog/${params.slug}/`,
        type: 'article',
        publishedTime: localPost.date,
        authors: [localPost.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${localPost.title.en} | Mazaya Dental Center`,
        description: localPost.seo.metaDescriptionEn,
      },
    };
  }

  const description = post.fields.body?.content[0]?.content[0]?.value || 'Read expert dental insights from Mazaya Dental Center.';

  return {
    title: `${post.fields.title} | Mazaya Dental Center`,
    description: description,
    alternates: {
      canonical: `/blog/${params.slug}/`,
    },
    openGraph: {
      title: `${post.fields.title} | Mazaya Dental Center`,
      description: description,
      url: `https://mazayadc.com/blog/${params.slug}/`,
      type: 'article',
      publishedTime: post.fields.date,
      authors: [post.fields.author || 'Mazaya Dental Specialists'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.fields.title} | Mazaya Dental Center`,
      description: description,
    },
  };
}

async function getBlogPost(slug: string): Promise<BlogPostUnion | null> {
  // Check local static blog posts first
  const localPost = getLocalBlogPostBySlug(slug);
  if (localPost) {
    return {
      isLocal: true,
      localData: localPost,
      fields: {
        title: localPost.title.en,
        date: localPost.date,
        readTime: localPost.readTimeEn,
        slug: localPost.slug,
        author: localPost.author,
        tags: localPost.tags,
      },
    };
  }

  if (!isContentfulConfigured || !client) {
    return null;
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      'fields.slug[match]': slug,
      limit: 1,
    });

    if (!response.items.length) {
      return null;
    }

    return response.items[0] as unknown as ContentfulBlogPost;
  } catch (error) {
    console.error('Error fetching Contentful blog post:', error);
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
  return readTimeMinutes < 1 ? '1 min read' : `${readTimeMinutes} mins read`;
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

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  if (post.isLocal) {
    const localPost = post.localData;
    const blogPostingJsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": localPost.title.en,
      "description": localPost.seo.metaDescriptionEn,
      "datePublished": localPost.date,
      "author": {
        "@type": "Organization",
        "name": localPost.author,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mazaya Dental Center",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mazayadc.com/MAZAYA logo Transparent 01.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://mazayadc.com/blog/${params.slug}/`
      }
    };

    const faqJsonLd = localPost.content.en.faqs ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": localPost.content.en.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    return (
      <>
        <JsonLd data={blogPostingJsonLd} />
        {faqJsonLd && <JsonLd data={faqJsonLd} />}
        <LocalBlogClient post={localPost} />
      </>
    );
  }

  const readTime = post.fields.body ? calculateReadTime(post.fields.body.content) : '1 min read';
  const fullText = post.fields.body ? extractTextContent(post.fields.body.content) : '';

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.fields.title,
    "description": fullText.substring(0, 160),
    "datePublished": post.fields.date,
    "author": {
      "@type": "Organization",
      "name": post.fields.author || "Mazaya Dental Center",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mazaya Dental Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mazayadc.com/MAZAYA logo Transparent 01.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mazayadc.com/blog/${params.slug}/`
    }
  };

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
    <>
      <JsonLd data={blogPostingJsonLd} />
      <article className="min-h-screen bg-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">{post.fields.title}</h1>
              
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{post.fields.date}</span>
                </div>
                <ReadAloud text={fullText} />
              </div>

              <div className="prose prose-lg text-gray-700 leading-relaxed">
                {post.fields.body && renderContent(post.fields.body.content)}
              </div>
            </div>
            
            <aside className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-sm mb-2 font-heading">Read Aloud</h3>
                <ReadAloud text={fullText} />
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-sm mb-2 font-heading">Book Consultation</h3>
                <p className="text-xs text-gray-600 mb-4">Schedule your appointment with our dental specialists today.</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-xs">
                  Book Appointment
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}