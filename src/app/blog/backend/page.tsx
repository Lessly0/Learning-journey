import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Backend",
  description:
    "Gisela's backend development blog — Node.js, REST APIs, databases, and server-side concepts.",
};

const posts = [
  {
    title: "Building My First REST API with Node.js",
    desc: "A step-by-step walkthrough of creating a REST API from scratch using Express and MongoDB. I cover routes, controllers, middleware, and error handling.",
    tags: ["Node.js", "Express", "REST API"],
    date: "Feb 5, 2025",
    readTime: "8 min read",
  },
  {
    title: "Understanding Databases: SQL vs NoSQL",
    desc: "When should you use PostgreSQL vs MongoDB? I break down the differences with real examples from projects I've built.",
    tags: ["Database", "SQL", "MongoDB"],
    date: "Feb 20, 2025",
    readTime: "6 min read",
  },
  {
    title: "JWT Authentication Explained Simply",
    desc: "Authentication confused me for a long time. Here's how I finally understood JSON Web Tokens and implemented them in a Node.js app.",
    tags: ["Auth", "JWT", "Security"],
    date: "Mar 3, 2025",
    readTime: "7 min read",
  },
];

export default function BackendBlogPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">⚙️</span>
        <h2 className="text-2xl font-bold">Backend Development</h2>
      </div>
      <p className="text-[var(--muted)] mb-8">
        Exploring server-side development, APIs, and databases.
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
                  className="text-xs font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full"
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
