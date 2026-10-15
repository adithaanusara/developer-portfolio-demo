// DEMO CONTENT — every person, company, project, credential and contact
// detail on this site is fictional sample data for a portfolio showcase.
// `example.com` is a reserved domain and +44 20 7946 0xxx is an Ofcom
// number range reserved for drama, so neither reaches a real person.
export const profile = {
  name: 'Alex Morgan',
  firstName: 'Alex',
  handle: 'alexmorgan.dev',
  role: 'Available for freelance',
  tagline: 'Creative Full-Stack Developer',
  location: 'London, United Kingdom',
  timeZone: 'Europe/London',
  coordinates: [51.5074, -0.1278],
  email: 'hello@example.com',
  phone: '+44 20 7946 0958',
  // Generic destinations: the demo has no real social accounts.
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com',
  quote: 'Designing and building fast, interactive web experiences — from the first pixel to the production database.',
  about:
    'I am a creative full-stack developer based in London, crafting beautiful, interactive and high-performance digital experiences. I partner with startups, studios and small businesses to turn ideas into polished websites and web apps — from motion-rich interfaces and 3D interactions to the APIs, databases and cloud infrastructure behind them.',
}

export const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'journey', label: 'journey' },
  { id: 'stack', label: 'stack' },
  { id: 'projects', label: 'projects' },
  { id: 'certifications', label: 'certs' },
]

export const ribbons = {
  intro: ['Creative Development', 'Interactive 3D Websites', 'Full-Stack Web Apps', 'Motion & Micro-interactions', 'React · Next.js · Node.js', 'Performance & SEO'],
  journey: ['Northgate University', 'B.Sc. Computer Science', 'Pixelmoor Studio', 'Brightwell & Finch Digital', 'Freelance · London'],
  stack: ['Frontend · Backend · Design', 'React · Three.js · Motion', 'Node.js · NestJS · GraphQL', 'PostgreSQL · MongoDB · Prisma'],
  footer: ['Available for freelance work', 'London, United Kingdom', 'hello@example.com', 'Creative Full-Stack Developer'],
}

// Logo files live in src/assets/tech (from devicon, MIT). `invert` marks
// black logos that need flipping to show on the dark background.
export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs', invert: true },
      { name: 'React Native', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Three.js', icon: 'threejs', invert: true },
      { name: 'Framer Motion' },
      { name: 'GSAP' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'REST APIs' },
      { name: 'Stripe Payments' },
    ],
  },
  {
    category: 'AI & LLM',
    items: [
      { name: 'LLM Integrations' },
      { name: 'RAG' },
      { name: 'Vector Search' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Prisma ORM', icon: 'prisma', invert: true },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    category: 'DevOps & Design',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Vercel', icon: 'vercel', invert: true },
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github', invert: true },
      { name: 'Figma', icon: 'figma' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
]

// Sample work for the demo — fictional products, shown with `status: 'Sample project'`.
//
// Optional per project:
//   repo        GitHub URL, or `repos: [{ label, href }]` for several
//   demo        live site URL
//   screenshots file prefix in src/assets/projects — `lumen` picks up
//               lumen-1.webp, lumen-2.webp, … and shows them as a gallery
//   status      short badge such as 'In progress'
// Projects without screenshots get a code-style preview built from `preview`.
export const projects = [
  {
    name: 'Lumen',
    title: 'SaaS Analytics Dashboard',
    category: 'SaaS · Data Visualisation',
    status: 'Sample project',
    description:
      'Real-time product analytics with revenue charts, conversion funnels, retention cohorts and AI-generated insights, wrapped in a fast, keyboard-friendly dashboard.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'tRPC', 'PostgreSQL', 'Prisma ORM', 'Recharts'],
    screenshots: 'lumen',
    highlights: [
      ['Data', 'Real-time'],
      ['Insights', 'AI-assisted'],
    ],
  },
  {
    name: 'Verde & Co.',
    title: 'Plant Shop E-Commerce Storefront',
    category: 'E-Commerce · Brand',
    status: 'Sample project',
    description:
      'Editorial storefront for an independent plant shop, with filterable collections, product pages, a slide-out basket and one-tap checkout — tuned for speed and SEO.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Headless CMS', 'Tailwind CSS', 'Vercel'],
    screenshots: 'verde',
    highlights: [
      ['Checkout', 'Stripe'],
      ['Lighthouse', '98+'],
    ],
  },
  {
    name: 'Nomad Trails',
    title: 'Travel Booking Platform',
    category: 'Full Stack · Marketplace',
    status: 'Sample project',
    description:
      'Booking platform for unique stays, with map-based search, live availability, multi-step checkout and host dashboards for managing listings and payouts.',
    stack: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Mapbox GL', 'Stripe Connect', 'Docker'],
    screenshots: 'nomad',
    highlights: [
      ['Search', 'Map + filters'],
      ['Payments', 'Marketplace'],
    ],
  },
  {
    name: 'Pulse',
    title: 'Fitness Tracking Mobile App',
    category: 'Mobile · Health',
    status: 'Sample project',
    description:
      'Cross-platform workout tracker with personalised plans, streaks, offline sync and animated progress charts that make every session feel rewarding.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'Reanimated'],
    highlights: [
      ['Platform', 'iOS + Android'],
      ['Sync', 'Offline-first'],
    ],
    preview: {
      file: 'useStreak.ts',
      lines: [
        ['kw', 'const '], ['fn', 'streak'], ['tx', ' = '], ['fn', 'useStreak'], ['tx', '(user.'], ['fn', 'workouts'], ['tx', ')'], ['nl'],
        ['kw', 'if '], ['tx', '(streak.days >= '], ['st', '7'], ['tx', ') {'], ['nl'],
        ['tx', '  '], ['fn', 'celebrate'], ['tx', '({ confetti: '], ['kw', 'true'], ['tx', ' })'], ['nl'],
        ['tx', '}'], ['nl'],
        ['cm', '// → 🔥 12-day streak, personal best'], ['nl'],
      ],
    },
  },
  {
    name: 'Harbour Studio',
    title: 'Architecture Practice Website',
    category: 'Studio Website · Motion',
    status: 'Sample project',
    description:
      'Bold, type-led website for an architecture studio, with scroll-driven animation, a filterable project archive, a headless CMS for the team and a structured enquiry form.',
    stack: ['React', 'Vite', 'Framer Motion', 'GSAP', 'Sanity CMS', 'Tailwind CSS'],
    screenshots: 'harbour',
    highlights: [
      ['Design', 'Type-led'],
      ['Content', 'Headless CMS'],
    ],
  },
  {
    name: 'Orbit UI',
    title: 'Open Component Library',
    category: 'Design System · Open Source',
    status: 'Sample project',
    description:
      'Accessible, themeable React component library with motion presets, dark mode and documentation — the building blocks behind every client project.',
    stack: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Vitest', 'CSS Variables'],
    highlights: [
      ['A11y', 'WCAG 2.2 AA'],
      ['Theming', 'Tokens'],
    ],
    preview: {
      file: 'Button.tsx',
      lines: [
        ['kw', 'export const '], ['fn', 'Button'], ['tx', ' = '], ['fn', 'styled'], ['tx', '('], ['st', "'button'"], ['tx', ', {'], ['nl'],
        ['tx', '  variants: { tone: { primary, ghost } },'], ['nl'],
        ['tx', '  motion: '], ['st', "'spring'"], ['tx', ','], ['nl'],
        ['tx', '})'], ['nl'],
        ['cm', '// <Button tone="primary">Ship it</Button>'], ['nl'],
      ],
    },
  },
]

// Chronological. Years are only shown where known.
export const journey = [
  {
    kind: 'University',
    title: 'B.Sc. (Hons) Computer Science',
    detail: 'First-class honours · HCI & graphics focus',
    institution: 'Northgate University, London',
    period: '2014 – 2017',
  },
  {
    kind: 'Work',
    title: 'Front-End Developer',
    detail: 'Interactive campaign sites and product launches',
    institution: 'Pixelmoor Studio',
    period: '2017 – 2019',
  },
  {
    kind: 'Work',
    title: 'Full-Stack Developer',
    detail: 'SaaS dashboards, e-commerce and API platforms',
    institution: 'Brightwell & Finch Digital',
    period: '2019 – 2022',
  },
  {
    kind: 'Freelance',
    title: 'Creative Full-Stack Developer',
    detail: 'Websites and web apps for startups, studios and small businesses',
    institution: 'Independent · London',
    period: '2022 – Present',
  },
]

// Certificate images live in src/assets/certificates as <image>-card.webp
// (shown in the card) and <image>-full.webp (opened in the viewer).
export const certifications = [
  {
    title: 'Advanced Front-End Engineering',
    short: 'AFE',
    issuer: 'Meridian Code Academy',
    category: 'Front-End Engineering · Professional Certificate',
    issued: 'March 2024',
    credentialId: 'DEMO-2024-0427',
    image: 'sample-certificate',
    description:
      'Professional programme covering rendering performance, accessibility, WebGL and 3D on the web, motion design, testing and modern React architecture.',
    topics: ['React', 'Performance', 'Accessibility', 'WebGL', 'Motion', 'Testing'],
  },
]

// `certificates` are shown as a gallery. Their images live in
// src/assets/certificates as <image>-thumb.webp (preview on the card) and
// <image>-full.webp (opened in the viewer).
export const achievements = [
  {
    title: 'Hackathon Winner & Mentor',
    category: 'Community & Leadership',
    description: 'Won awards for product and user experience at 48-hour hackathons, and now mentors first-time teams.',
    levels: ['Local', 'National', 'Global'],
    certificatesIssuer: 'Open Build Hackathon Series',
    certificates: [
      {
        image: 'hackathon-ux-2022',
        event: 'Open Build Hackathon 2022',
        result: 'Winner, Best User Experience',
        year: 2022,
      },
      {
        image: 'hackathon-winner-2023',
        event: 'Open Build Hackathon 2023',
        result: '1st Place, Best Overall Product',
        year: 2023,
      },
      {
        image: 'hackathon-mentor-2024',
        event: 'Open Build Hackathon 2024',
        result: 'Certificate of Appreciation, Lead Mentor',
        year: 2024,
      },
    ],
  },
]
