import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Gisela's learning journey — a developer in the making, passionate about frontend, backend, and mobile development.",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-80">
            Welcome to my world
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I&apos;m <span className="underline decoration-wavy decoration-white/50">Gisela</span> 👋
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            A passionate learner on a mission to become a full-stack developer.
            I document everything I learn — the wins, the struggles, and the
            breakthroughs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/about" variant="secondary">
              Learn About Me
            </Button>
            <Button
              href="/blog"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--primary)]"
            >
              Read My Blog
            </Button>
          </div>
        </div>
      </section>

      {/* What I'm learning */}
      <section className="py-20 px-4 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            What I&apos;m Learning
          </h2>
          <p className="text-center text-[var(--muted)] mb-12 max-w-xl mx-auto">
            My learning journey spans three main areas of software development.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎨",
                title: "Frontend",
                desc: "React, Next.js, TypeScript, Tailwind CSS — building beautiful, accessible UIs.",
                href: "/blog/frontend",
              },
              {
                emoji: "⚙️",
                title: "Backend",
                desc: "Node.js, REST APIs, databases — understanding how the server side works.",
                href: "/blog/backend",
              },
              {
                emoji: "📱",
                title: "Mobile",
                desc: "React Native & Expo — bringing apps to iOS and Android.",
                href: "/blog/mobile",
              },
            ].map(({ emoji, title, desc, href }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-[var(--muted)] text-sm mb-6">{desc}</p>
                <Button href={href} variant="outline">
                  Read Posts
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">My 2025 Goals</h2>
          <p className="text-[var(--muted)] mb-12">
            Milestones I&apos;m working towards this year.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "✅ Complete SheCanCode bootcamp",
              "🚀 Build and deploy 3 full-stack projects",
              "📚 Contribute to an open-source project",
              "💼 Land my first developer role",
              "🌐 Master Next.js App Router",
              "📱 Publish a mobile app",
            ].map((goal) => (
              <div
                key={goal}
                className="flex items-center gap-3 bg-[var(--surface)] rounded-xl px-6 py-4 border border-[var(--border)]"
              >
                <span className="text-base font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--primary)] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect!</h2>
        <p className="opacity-90 mb-8 max-w-md mx-auto">
          Have a question, want to collaborate, or just say hi? I&apos;d love to
          hear from you.
        </p>
        <Button
          href="/contact"
          variant="secondary"
        >
          Get In Touch
        </Button>
      </section>
    </div>
  );
}
