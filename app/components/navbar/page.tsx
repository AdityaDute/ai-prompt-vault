'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BotMessageSquare } from 'lucide-react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/prompts', label: 'Browse prompts' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
            <BotMessageSquare className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>AI Prompt <span className="text-blue-400">Vault</span></span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {navigation.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  active ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/create"
            className="ml-1 rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 sm:px-4"
          >
            <span className="sm:hidden">Add</span>
            <span className="hidden sm:inline">Add a prompt</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
