import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Mobile Development",
  description:
    "Gisela's mobile development blog — React Native, Expo, and building cross-platform apps.",
};

const posts = [
  {
    title: "React Native vs Expo: What I Learned",
    desc: "Comparing bare React Native with Expo — which one should you choose as a beginner? I share my experience setting up both and the trade-offs I found.",
    tags: ["React Native", "Expo"],
    date: "Mar 10, 2025",
    readTime: "5 min read",
  },
  {
    title: "Navigation in React Native with Expo Router",
    desc: "File-based routing isn't just for the web. I explore how Expo Router brings Next.js-style navigation to mobile apps.",
    tags: ["Expo Router", "Navigation"],
    date: "Mar 22, 2025",
    readTime: "6 min read",
  },
  {
    title: "Styling in React Native: StyleSheet vs NativeWind",
    desc: "Coming from Tailwind CSS on the web, I tried NativeWind for React Native. Here's how it compares to the built-in StyleSheet API.",
    tags: ["Styling", "NativeWind", "Tailwind"],
    date: "Apr 5, 2025",
    readTime: "5 min read",
  },
];

export default function MobileBlogPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📱</span>
        <h2 className="text-2xl font-bold">Mobile Development</h2>
      </div>
      <p className="text-[var(--muted)] mb-8">
        Building cross-platform apps with React Native and Expo.
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
                  className="text-xs font-medium bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full"
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
