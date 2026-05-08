# Vivek Debnath — Portfolio Website

A premium, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or pnpm

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Set root directory to `website`
5. Deploy

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # SEO sitemap
│   │   ├── robots.ts           # SEO robots
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/              # About page
│   │   ├── projects/           # Projects page
│   │   ├── case-studies/       # Case studies page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills grid
│   │   ├── Experience.tsx      # Timeline
│   │   ├── Projects.tsx        # Project cards
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer
│   │   └── SectionHeading.tsx  # Reusable components
│   └── lib/
│       └── data.ts             # All portfolio content
├── public/
│   └── resume.pdf              # Place your resume PDF here
├── tailwind.config.ts
├── next.config.ts
├── vercel.json
├── tsconfig.json
└── package.json
```

## Customization

All content is centralized in `src/lib/data.ts`. Update:

- `siteConfig` — Your personal links and email
- `heroContent` — Hero section text and stats
- `aboutContent` — About section content
- `skills` — Skill categories and items
- `experience` — Work experience entries
- `projects` — Project cards
- `caseStudies` — Detailed case studies

## Adding Your Resume

Place your resume PDF at `public/resume.pdf`. The download button and resume link will work automatically.

## Custom Domain

After deploying to Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `sitemap.ts` with your actual domain

## License

Private — All rights reserved.
