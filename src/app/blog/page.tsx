import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore Gisela's blog — covering frontend, backend, and mobile development topics from a learner's perspective.",
};

const featuredPosts = [
  {
    category: "Frontend",
    emoji: "🎨",
    href: "/blog/frontend",
    title: "Getting Started with Next.js App Router",
    desc: "My experience learning the new App Router in Next.js 14 — layouts, pages, and everything in between.",
    date: "Jan 2025",
    color: "from-[var(--primary)] to-blue-500",
  },
  {
    category: "Backend",
    emoji: "⚙️",
    href: "/blog/backend",
    title: "Building My First REST API with Node.js",
    desc: "A step-by-step walkthrough of creating a REST API from scratch using Express and MongoDB.",
    date: "Feb 2025",
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Mobile",
    emoji: "📱",
    href: "/blog/mobile",
    title: "React Native vs Expo: What I Learned",
    desc: "Comparing bare React Native with Expo — which one should you choose as a beginner?",
    date: "Mar 2025",
    color: "from-[var(--secondary)] to-orange-400",
  },
];

export default function BlogPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">All Posts</h2>
      <p className="text-[var(--muted)] mb-8">
        Everything I&apos;ve written so far on my learning journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featuredPosts.map(({ category, emoji, href, title, desc, date, color }) => (
          <Link
            key={href}
            href={href}
            className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className={`h-3 bg-gradient-to-r ${color}`} />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{emoji}</span>
                <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                  {category}
                </span>
                <span className="ml-auto text-xs text-[var(--muted)]">{date}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-[var(--muted)] text-sm mb-4">
          More posts coming soon as I continue learning!
        </p>
        <Button href="/contact" variant="outline">
          Suggest a Topic
        </Button>
      </div>
    </div>
  );
}
