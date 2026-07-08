# Gisela's Learning Journey

A personal website documenting my path from curious learner to confident developer — covering frontend, backend, and mobile development.

## Description

This project is a multi-page Next.js website built as part of the SheCanCode bootcamp. It showcases my learning journey, blog posts across three development tracks, and a contact form. The site demonstrates key Next.js App Router concepts including nested layouts, file-based routing, metadata, and responsive design with Tailwind CSS.

## Features

- **Multi-page app** — Home, About, Blog, Contact
- **Nested Blog Layout** — Blog section has its own header, sidebar, and navigation
- **Reusable Components** — Navbar, Footer, Button used throughout
- **SEO Metadata** — Unique title and description per page
- **Responsive Design** — Mobile, tablet, and desktop layouts
- **Global Styling** — Poppins font + custom color palette via CSS variables
- **Custom 404 Page** — Friendly not-found experience
- **Loading States** — Spinner shown during page transitions
- **Active Link Highlighting** — Navbar reflects current route

## Technologies Used

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS v4 | Utility-first styling |
| React 19 | UI library |
| Google Fonts (Poppins) | Typography |
| Vercel | Deployment |

## Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/giselacampillo/learning-journey.git
cd learning-journey

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer + global font)
│   ├── page.tsx            # Home page (/)
│   ├── loading.tsx         # Global loading state
│   ├── not-found.tsx       # Custom 404 page
│   ├── globals.css         # Global styles + CSS variables
│   ├── about/
│   │   └── page.tsx        # About page (/about)
│   ├── contact/
│   │   └── page.tsx        # Contact page (/contact)
│   └── blog/
│       ├── layout.tsx      # Nested blog layout (header + sidebar + blog nav)
│       ├── page.tsx        # Blog landing page (/blog)
│       ├── frontend/
│       │   └── page.tsx    # Frontend blog (/blog/frontend)
│       ├── backend/
│       │   └── page.tsx    # Backend blog (/blog/backend)
│       └── mobile/
│           └── page.tsx    # Mobile blog (/blog/mobile)
└── components/
    ├── Navbar.tsx           # Reusable navigation bar
    ├── Footer.tsx           # Reusable footer
    └── Button.tsx           # Reusable button component
```

## Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--primary` | `#6c63ff` | Main brand color, links, accents |
| `--secondary` | `#ff6584` | Highlights, CTAs |
| `--foreground` | `#1a1a2e` | Body text |
| `--muted` | `#6b7280` | Secondary text |

## Live Deployment

[View on Vercel →](https://your-deployment-url.vercel.app)
