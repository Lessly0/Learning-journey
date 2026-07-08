import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog | Gisela's Learning Journey",
  },
};

const blogLinks = [
  { href: "/blog", label: "📋 All Posts", exact: true },
  { href: "/blog/frontend", label: "🎨 Frontend" },
  { href: "/blog/backend", label: "⚙️ Backend" },
  { href: "/blog/mobile", label: "📱 Mobile Dev" },
];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Blog Header */}
      <header className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest opacity-75 mb-2">
            My Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">Learning in Public</h1>
          <p className="mt-2 opacity-85 max-w-xl">
            Notes, tutorials, and reflections from my journey as a developer.
          </p>
        </div>
      </header>

      {/* Blog Nav */}
      <nav className="bg-white border-b border-[var(--border)] px-4">
        <div className="max-w-6xl mx-auto flex gap-1 overflow-x-auto">
          {blogLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] border-b-2 border-transparent hover:border-[var(--primary)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Blog Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 space-y-6">
            <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-4">Topics</h3>
              <ul className="space-y-2">
                {blogLinks.slice(1).map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors py-1"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-3">About This Blog</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I write about what I learn as I learn it. Expect honest
                reflections, code snippets, and lessons from real projects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">
                New posts every week as I progress through my bootcamp.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-[var(--primary)] text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
