import { Category } from './types';

export const CATEGORY_CONFIG: Record<Category, { color: string; emoji: string; bg: string; text: string; border: string }> = {
  coding: { color: '#3b82f6', emoji: '💻', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  writing: { color: '#8b5cf6', emoji: '✍️', bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  marketing: { color: '#ec4899', emoji: '📢', bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
  design: { color: '#f59e0b', emoji: '🎨', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  business: { color: '#10b981', emoji: '💼', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  education: { color: '#06b6d4', emoji: '📚', bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  fun: { color: '#ef4444', emoji: '🎮', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
};

export const getCategoryConfig = (category: Category) => CATEGORY_CONFIG[category];
