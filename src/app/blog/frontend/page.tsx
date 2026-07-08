import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Frontend",
  description:
    "Gisela's frontend development blog — React, Next.js, TypeScript, Tailwind CSS, and more.",
};

const posts = [
  {
    title: "Getting Started with Next.js App Router",
    desc: "My experience learning the new App Router in Next.js 14 — layouts, pages, and everything in between. I cover file-based routing, nested layouts, and how metadata works.",
    tags: ["Next.js", "React", "App Router"],
    date: "Jan 15, 2025",
    readTime: "5 min read",
  },
  {
    title: "Why I Chose Tailwind CSS",
    desc: "After trying styled-components and CSS modules, I switched to Tailwind. Here's why utility-first CSS changed how I think about styling.",
    tags: ["Tailwind CSS", "CSS", "Styling"],
    date: "Jan 28, 2025",
    readTime: "4 min read",
  },
  {
    title: "TypeScript for React Developers",
    desc: "A practical guide to adding TypeScript to your React projects — props typing, hooks, and common patterns I use every day.",
    tags: ["TypeScript", "React"],
    date: "Feb 10, 2025",
    readTime: "7 min read",
  },
];

export default function FrontendBlogPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🎨</span>
        <h2 className="text-2xl font-bold">Frontend Development</h2>
      </div>
      <p className="text-[var(--muted)] mb-8">
        Notes and tutorials on React, Next.js, TypeScript, and CSS.
      </p>

      <div className="space-y-6">
        {posts.map(({ title, desc, tags, date, readTime }) => (
          <article
            key={title}
            className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-purple-100 text-[var(--primary)] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">
                {date} · {readTime}
              </span>
              <Button variant="outline" className="text-xs px-4 py-2">
                Read More →
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
