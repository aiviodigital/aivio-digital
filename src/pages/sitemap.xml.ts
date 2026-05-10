import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = 'https://aivio-digital.com';
  const locales = ['en', 'zh'];
  
  const staticPages = [
    { url: '', priority: '1.0' },
    { url: '/about-us', priority: '0.8' },
    { url: '/blogs', priority: '0.8' },
    { url: '/case-study', priority: '0.8' },
    { url: '/contact', priority: '0.9' },
    { url: '/google-ads-audit', priority: '0.9' },
    { url: '/google-ads-faq', priority: '0.7' },
    { url: '/google-ads-management', priority: '0.9' },
  ];

  const blogSlugs = [
    'responsive-web-design-bootstrap',
    'customer-persona',
    'mobile-optimization',
    'seo-vs-ppc',
    'integrated-digital-marketing',
    'custom-chatbot',
    'website-traffic',
    'ai-digital-marketing',
    'ai-chatbot-business',
  ];

  const caseStudySlugs = [
    'toronto-packaging-company',
    'ai-trust-gap-welding',
  ];

  const urls: string[] = [site];

  for (const lang of locales) {
    for (const page of staticPages) {
      const prefix = `/${lang}`;
      urls.push(`${site}${prefix}${page.url}`);
    }

    for (const slug of blogSlugs) {
      const prefix = `/${lang}`;
      urls.push(`${site}${prefix}/blog/${slug}`);
    }

    for (const slug of caseStudySlugs) {
      const prefix = `/${lang}`;
      urls.push(`${site}${prefix}/case-study/${slug}`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
