'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

interface BlogContentProps {
  posts: any[];
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

export default function BlogContent({ posts }: BlogContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
            alt="Dental blog"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Mazaya Dental Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Expert advice and the latest updates on dental health from Mazaya's specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          {/* Blog Posts Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentPosts.map((post: any) => (
              <motion.div
                key={post.sys.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href={`/blog/${post.fields.slug}/`} 
                  className="group"
                >
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="space-y-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        {post.fields.image && (
                          <Image
                            src={`https:${post.fields.image.fields.file.url}`}
                            alt={post.fields.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {post.fields.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                          {post.fields.body?.content[0]?.content[0]?.value || ""}
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{post.fields.date}</span>
                          <span>•</span>
                          <span>{post.fields.body ? calculateReadTime(post.fields.body.content) : '1 min read'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="border-primary/50 hover:border-primary"
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "" : "border-primary/50 hover:border-primary"}
                  >
                    {index + 1}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="border-primary/50 hover:border-primary"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}