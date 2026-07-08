import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Gisela — her background, skills, and what drives her passion for software development.",
};

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 65 },
  { name: "React / Next.js", level: 70 },
  { name: "Node.js", level: 55 },
  { name: "React Native", level: 50 },
];

const timeline = [
  {
    year: "2023",
    title: "The Spark",
    desc: "Discovered coding through an online HTML/CSS course and fell in love with building things on the web.",
  },
  {
    year: "2024",
    title: "Going Deeper",
    desc: "Learned JavaScript, started React, and built my first interactive projects.",
  },
  {
    year: "2025",
    title: "SheCanCode Bootcamp",
    desc: "Enrolled in SheCanCode to level up with structured learning, mentorship, and real-world projects.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--surface)] py-20 px-4 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-6xl shrink-0 shadow-lg">
            👩‍💻
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-3">About Me</h1>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              I&apos;m Gisela, a self-driven developer based in the world of
              code. I started my journey out of curiosity and it quickly became
              a passion. I believe in learning by building, sharing what I know,
              and never stopping growing.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Before coding, I was always drawn to problem-solving and creativity.
            When I wrote my first line of HTML and saw it render in a browser, I
            knew I had found something special. That curiosity turned into
            dedication, and dedication turned into a career path.
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            Today I&apos;m focused on mastering the full stack — from crafting
            pixel-perfect UIs to building robust APIs. Every project I build
            teaches me something new, and I document it all on my blog.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="space-y-5">
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>{name}</span>
                  <span className="text-[var(--muted)]">{level}%</span>
                </div>
                <div className="w-full bg-[var(--border)] rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">My Journey</h2>
          <div className="relative border-l-2 border-[var(--primary)] pl-8 space-y-10">
            {timeline.map(({ year, title, desc }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[2.65rem] w-5 h-5 rounded-full bg-[var(--primary)] border-4 border-white shadow" />
                <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest">
                  {year}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
                <p className="text-[var(--muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-[var(--surface)] border-t border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
        <p className="text-[var(--muted)] mb-8">
          Check out my blog or drop me a message!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/blog">Read My Blog</Button>
          <Button href="/contact" variant="outline">Contact Me</Button>
        </div>
      </section>
    </div>
  );
}
