# 🧠 AI Prompt Vault

Full-stack Next.js app to save, browse, search, and share AI prompts — built with TypeScript, Tailwind CSS, and the App Router.

🔗 **Live:** [your-url.vercel.app](#)
💻 **Repo:** you're looking at it

---

## Features

- 🔍 Browse and search prompts with live category filtering
- 📋 One-click copy to clipboard
- ➕ Create new prompts via a validated form (Server Actions)
- 🗂️ Category-specific pages
- 🔌 REST API for prompts and categories
- 🌓 Dark theme, responsive, animated UI
- ⚡ SEO metadata, sitemap, and robots.txt out of the box

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Data | JSON file (upgrade path to a database) |
| Deployment | Vercel |

---

## Getting Started

```bash
git clone https://github.com/<your-username>/ai-prompt-vault.git
cd ai-prompt-vault
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## Project Structure

```
ai-prompt-vault/
├── app/
│   ├── layout.tsx              Root layout (navbar + footer)
│   ├── page.tsx                Home page (hero + featured prompts)
│   ├── prompts/                Browse, search, filter + [id] detail page
│   ├── create/                 Create new prompt form
│   ├── categories/[category]/  Prompts filtered by category
│   └── api/                    REST routes for prompts + categories
├── components/                 Navbar, PromptCard, SearchBar, etc.
├── lib/
│   ├── types.ts                TypeScript type definitions
│   ├── data.ts                 Prompt data (JSON storage)
│   └── utils.ts                Helper functions
└── public/
```

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/prompts` | Get all prompts |
| GET | `/api/prompts?category=coding` | Get prompts filtered by category |
| POST | `/api/prompts` | Create a new prompt |
| GET | `/api/prompts/[id]` | Get a single prompt |
| DELETE | `/api/prompts/[id]` | Delete a prompt |
| GET | `/api/categories` | Get categories with counts |

---

## Data Model

```typescript
type Prompt = {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: Category;
  tags: string[];
  copyCount: number;
  createdAt: string;
  author: string;
};

type Category =
  | "coding" | "writing" | "marketing"
  | "design" | "business" | "education" | "fun";
```

---

## Roadmap

- [ ] Auth with NextAuth.js
- [ ] Database (Prisma + PostgreSQL)
- [ ] Like / bookmark prompts
- [ ] Analytics dashboard
- [ ] AI-powered prompt improvement
- [ ] Shareable links with dynamic OG images

---

## License

MIT