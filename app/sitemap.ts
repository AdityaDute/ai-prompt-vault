import { MetadataRoute } from 'next';
import { SAMPLE_PROMPTS } from '@/lib/data';
import { Category } from '@/lib/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-prompt-vault.vercel.app';
  const categories: Category[] = ['coding', 'writing', 'marketing', 'design', 'business', 'education', 'fun'];

  const promptRoutes = SAMPLE_PROMPTS.map((prompt) => ({
    url: `${baseUrl}/prompts/${prompt.id}`,
    lastModified: new Date(prompt.createdAt),
  }));

  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/create`,
      lastModified: new Date(),
    },
    ...categoryRoutes,
    ...promptRoutes,
  ];
}
