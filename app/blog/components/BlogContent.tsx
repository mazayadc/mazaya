'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface BlogContentProps {
  posts: any[];
}

function calculateReadTime(content: any[]): string {
  const wordsPerMinute = 200;
  let wordCount = 0;
  
  content.forEach(item => {
    if (item.nodeType === 'paragraph') {
      item.content?.forEach((textNode: any) => {
        const words = (textNode.value || '').trim().split(/\s+/).length;
        wordCount += words;
      });
    }
  });
  
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readTimeMinutes < 1 ? '1 min read' : `${readTimeMinutes} mins read`;
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { language, t } = useLanguage();
  const isAr = language === 'ar';
  const postsPerPage = 12;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-emerald-50/60 via-gray-50/50 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isAr ? 'المدونة الطبية والعروض' : 'Dental Blog & Offers'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading leading-tight">
              {t.blogContent.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {t.blogContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4 font-heading">{t.blogContent.comingSoonTitle}</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {t.blogContent.comingSoonDesc}
              </p>
            </div>
          ) : (
          <>
          {/* Blog Posts Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentPosts.map((post: any) => {
              const postTitle = isAr && post.fields.titleAr ? post.fields.titleAr : post.fields.title;
              const postExcerpt = isAr && post.fields.excerptAr 
                ? post.fields.excerptAr 
                : (post.fields.excerpt || post.fields.body?.content[0]?.content[0]?.value || "");
              const postReadTime = isAr && post.fields.readTimeAr 
                ? post.fields.readTimeAr 
                : (post.fields.readTime || (post.fields.body ? calculateReadTime(post.fields.body.content) : `1 ${t.blogContent.readTime}`));
              const offerBadge = post.fields.campaignInfo 
                ? (isAr ? post.fields.campaignInfo.offerBadgeAr : post.fields.campaignInfo.offerBadgeEn)
                : null;
              const categoryName = post.fields.category || (isAr ? 'مقالات صحية' : 'Dental Health');

              return (
                <motion.div
                  key={post.sys.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    href={`/blog/${post.fields.slug}/`} 
                    className="group block h-full"
                  >
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div>
                        {/* Badges & Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 border border-emerald-100">
                            <BookOpen className="w-3 h-3 me-1 text-emerald-600" />
                            {categoryName}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <Clock className="h-3.5 w-3.5 text-emerald-600" />
                            <span>{postReadTime}</span>
                          </div>
                        </div>

                        {offerBadge && (
                          <div className="mb-4">
                            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                              {offerBadge}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-700 transition-colors font-heading leading-snug mb-3">
                          {postTitle}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-6">
                          {postExcerpt}
                        </p>
                      </div>

                      {/* Footer CTA & Date */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                        <span>{post.fields.date}</span>
                        <span className="inline-flex items-center text-emerald-700 font-bold group-hover:translate-x-1 transition-transform">
                          {isAr ? 'اقرأ المزيد' : 'Read Article'}
                          {isAr ? <ArrowLeft className="w-3.5 h-3.5 ms-1" /> : <ArrowRight className="w-3.5 h-3.5 ms-1" />}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-14">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="border-emerald-600/30 hover:border-emerald-600 text-emerald-950"
                >
                  {t.blogContent.previous}
                </Button>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "bg-emerald-700 hover:bg-emerald-800 text-white" : "border-emerald-600/30 hover:border-emerald-600 text-emerald-950"}
                  >
                    {index + 1}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="border-emerald-600/30 hover:border-emerald-600 text-emerald-950"
                >
                  {t.blogContent.next}
                </Button>
              </div>
            </div>
          )}
          </>
          )}
        </div>
      </section>
    </>
  );
}