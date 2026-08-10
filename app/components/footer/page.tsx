import Link from 'next/link';
import { ArrowUpRight, BotMessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500 text-white">
                <BotMessageSquare className="h-4 w-4" aria-hidden="true" />
              </span>
              AI Prompt <span className="text-blue-400">Vault</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              A focused collection of useful AI prompts for people who want to make better work, faster.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm md:gap-x-16">
            {/* <Link href="/prompts" className="text-gray-400 transition hover:text-white">Browse prompts</Link> */}
            {/* <Link href="/create" className="text-gray-400 transition hover:text-white">Submit a prompt</Link> */}
            {/* <Link href="/categories/coding" className="text-gray-400 transition hover:text-white">Coding</Link> */}
            {/* <Link href="/categories/writing" className="text-gray-400 transition hover:text-white">Writing</Link> */}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AI Prompt Vault. Built for better ideas.</p>
          <p className="text-gray-400">Made with care by <span className="font-semibold text-gray-300">AD</span>.</p>
          <Link href="/create" className="inline-flex items-center gap-1 font-medium text-blue-400 transition hover:text-blue-300">
            Add a prompt <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
