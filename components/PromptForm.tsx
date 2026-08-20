'use client';

import { useState } from 'react';
import { createPrompt } from '@/app/actions';
import { Category } from '@/lib/types';

const CATEGORIES: Category[] = ['coding', 'writing', 'marketing', 'design', 'business', 'education', 'fun'];

export default function PromptForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const prompt = formData.get('prompt') as string;
    const author = formData.get('author') as string;

    if (!title || title.length < 3 || title.length > 100) newErrors.title = 'Title must be 3-100 characters';
    if (!description || description.length < 10 || description.length > 200) newErrors.description = 'Description must be 10-200 characters';
    if (!prompt || prompt.length < 20) newErrors.prompt = 'Prompt must be at least 20 characters';
    if (!author) newErrors.author = 'Author is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (formData: FormData) => {
    if (!validate(formData)) return;
    setIsSubmitting(true);
    await createPrompt(formData);
    setIsSubmitting(false);
  };

  return (
    <form action={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div>
        <label className="block text-sm text-gray-400 mb-1">Title</label>
        <input name="title" className="w-full bg-black border border-gray-700 rounded-lg p-2 text-white" />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Description</label>
        <input name="description" className="w-full bg-black border border-gray-700 rounded-lg p-2 text-white" />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Prompt</label>
        <textarea name="prompt" rows={5} className="w-full bg-black border border-gray-700 rounded-lg p-2 text-white" />
        {errors.prompt && <p className="text-red-500 text-xs mt-1">{errors.prompt}</p>}
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Category</label>
        <select name="category" className="w-full bg-black border border-gray-700 rounded-lg p-2 text-white">
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Tags (comma separated)</label>
        <input name="tags" placeholder="react, typescript, ..." className="w-full bg-black border border-gray-700 rounded-lg p-2 text-white" />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Author</label>
        <input name="author" className="w-full bg-black border border-gray-700 rounded-lg p-2 text-white" />
        {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white py-2 rounded-lg font-semibold"
      >
        {isSubmitting ? 'Creating...' : 'Create Prompt'}
      </button>
    </form>
  );
}
