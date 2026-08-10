import { Prompt } from './types';

export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'React Custom Hook Architect',
    description: 'Generates a robust, production-ready React custom hook with TypeScript types, detailed comments, and full JSDoc explanations.',
    prompt: `Act as an expert React & TypeScript Developer. Build a highly-optimized, type-safe custom React hook.
The hook needs to solve the following problem: [DESCRIBE PROBLEM].

Requirements:
- Written in TypeScript with explicit return types and state interfaces.
- Adhere to the rules of React hooks.
- Handle edge cases, clean up memory/listeners (e.g., in useEffect), and implement debounce or memoization where necessary.
- Include JSDoc comments explaining the parameters and returned values.
- Provide a brief usage example.`,
    category: 'coding',
    tags: ['react', 'typescript', 'custom-hook', 'frontend'],
    copyCount: 142,
    createdAt: '2026-08-01T10:30:00.000Z',
    author: 'CodeMaster_AD',
  },
  {
    id: '2',
    title: 'Visual Copywriter & Headline Generator',
    description: 'Creates highly engaging headlines, hook sentences, and call-to-action variants based on target audience persona.',
    prompt: `You are an elite conversion copywriter. I need a set of marketing headlines and hooks for my product: [PRODUCT_NAME].
Target Audience: [DESCRIBE TARGET AUDIENCE, E.G., SaaS FOUNDERS].
Core Benefit: [DESCRIBE PRIMARY BENEFIT].

Please generate:
1. 5 High-Impact Headlines (focus on urgency, curiosity, or value).
2. 3 Opening Hooks (first-sentence formulas that grab immediate attention).
3. 3 Compelling CTAs (calls to action that focus on value, not friction).

Ensure the tone matches: [TONE, E.G., PLAYFUL, PROFESSIONAL, BOLD].`,
    category: 'marketing',
    tags: ['copywriting', 'headlines', 'marketing-copy', 'conversion'],
    copyCount: 89,
    createdAt: '2026-08-03T14:15:00.000Z',
    author: 'AdWriter_Pro',
  },
  {
    id: '3',
    title: 'Fiction World-Builder & Story Planner',
    description: 'Generates detailed fantasy/sci-fi world building lore, including factions, geography, history, and plot outlines.',
    prompt: `You are an acclaimed creative writer and world-building expert. Help me flesh out the world for my upcoming [FANTASY/SCI-FI/THRILLER] story.
The core premise is: [PREMISE].

Develop a comprehensive outline covering:
1. Geography & Setting: 3 key locations with distinct atmospheric vibes.
2. Magic/Tech System: The fundamental rules, limitations, and societal impact.
3. Key Factions: 2 rival factions, their motivations, leaders, and symbols.
4. Main Conflict: A inciting incident and a potential plot twist.`,
    category: 'writing',
    tags: ['storytelling', 'creative-writing', 'lore', 'worldbuilding'],
    copyCount: 112,
    createdAt: '2026-08-02T08:00:00.000Z',
    author: 'LoreWeaver',
  },
  {
    id: '4',
    title: 'Color Palette & Style Guide Creator',
    description: 'Generates UI/UX styling guides, Tailwind configs, and beautiful color palettes customized for brand aesthetics.',
    prompt: `Act as a senior UI/UX designer and design system architect.
Generate a comprehensive theme styling guide for a brand with the following description: [BRAND_DESCRIPTION].

Provide:
1. Primary, secondary, accent, and neutral color hex codes with semantic names (e.g., brand-success, brand-warning).
2. Tailwind CSS configuration extend-block object for these colors.
3. Typography guidance: recommended font pairs (headings + body) and hierarchy scale.
4. UI component styling tokens (e.g., border-radius, button-focus behavior) to match the brand's mood: [MOOD, E.G., MINIMALIST, HIGH-TECH, PLAYFUL].`,
    category: 'design',
    tags: ['ui-ux', 'tailwind-css', 'branding', 'color-palette'],
    copyCount: 67,
    createdAt: '2026-08-05T11:45:00.000Z',
    author: 'PixelPerfect',
  },
  {
    id: '5',
    title: 'Business Model Canvas Generator',
    description: 'Analyzes a business idea and maps out a complete 9-block Lean/Business Model Canvas to evaluate market viability.',
    prompt: `You are an elite startup mentor and venture strategist.
Help me analyze and map my business idea into a Lean Business Model Canvas.
Business Idea: [DESCRIBE BUSINESS IDEA].

Provide structured insights for each of the 9 canvas blocks:
1. Customer Segments (Who are we solving for?)
2. Value Propositions (What is our unique value?)
3. Channels (How do we reach them?)
4. Customer Relationships (How do we retain them?)
5. Revenue Streams (How do we make money?)
6. Key Activities (What do we need to do daily?)
7. Key Resources (What assets do we need?)
8. Key Partners (Who can help us scale?)
9. Cost Structure (What are our major costs?)`,
    category: 'business',
    tags: ['startups', 'business-strategy', 'lean-canvas', 'planning'],
    copyCount: 156,
    createdAt: '2026-08-04T16:20:00.000Z',
    author: 'FounderAlly',
  },
  {
    id: '6',
    title: 'Interactive Socratic Tutor',
    description: 'Explains complex educational concepts using the Socratic method of active questioning to encourage critical thinking.',
    prompt: `You are a warm, highly-skilled teacher who uses the Socratic method to tutor students.
The topic we are exploring today is: [INSERT TOPIC].

Guidelines:
- Do not immediately explain everything or give the complete answer.
- Ask one stimulating question at a time to check my current understanding or guide me to the next logical step.
- Encourage active recall, and validate correct parts of my reasoning while gently highlighting logical flaws.
- Provide real-world analogies where helpful to break down abstract ideas.

Begin by introducing yourself and asking me the first open-ended question to gauge my knowledge on this topic.`,
    category: 'education',
    tags: ['teaching', 'socratic-method', 'learning-aid', 'tutoring'],
    copyCount: 95,
    createdAt: '2026-08-06T09:10:00.000Z',
    author: 'SocratesAI',
  },
  {
    id: '7',
    title: 'Text Adventure Game Master',
    description: 'Operates as an interactive text-based RPG game master, driving fantasy narratives based on player choices.',
    prompt: `Act as a classic Text-Based RPG Game Master. We are playing a fantasy survival game.
Setting: A mysterious, decaying mechanical forest where nature and ancient clockwork machines merge.

Your duties:
- Set the scene with rich, atmospheric sensory descriptions (sights, sounds, smells).
- At the end of every turn, offer me 3 distinct choices (labeled A, B, C) and leave an option [D] for user custom action.
- Track my status: HP (starts at 100) and Inventory (starts with a rusty key and a brass compass). Display these status levels at the bottom of every turn.
- Let the outcomes of my choices be unpredictable, magical, or hazardous.

Begin the game by introducing the first scene and my initial status.`,
    category: 'fun',
    tags: ['rpg', 'game-master', 'adventure', 'interactive-fiction'],
    copyCount: 184,
    createdAt: '2026-08-07T12:00:00.000Z',
    author: 'DungeonLord',
  },
];
