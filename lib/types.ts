export type Category = 'coding' | 'writing' | 'marketing' | 'design' | 'business' | 'education' | 'fun';

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string; // The actual AI prompt text
  category: Category;
  tags: string[];
  copyCount: number;
  createdAt: string; // ISO date string
  author: string;
}

export type PromptFormData = Omit<Prompt, 'id' | 'copyCount' | 'createdAt'>;
