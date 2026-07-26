import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://mazayadc.com/sitemap.xml',
    host: 'https://mazayadc.com',
  };
}
