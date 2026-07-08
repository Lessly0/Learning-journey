import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sage — whether you want to collaborate, ask a question, or just say hello.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[var(--surface)] py-20 px-4 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-[var(--muted)] text-lg">
            Have a question, want to collaborate, or just want to say hi? My
            inbox is always open.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm resize-none"
                />
              </div>
              <Button type="submit" className="w-full justify-center">
                Send Message 🚀
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                I&apos;m currently open to new opportunities, collaborations,
                and conversations. Feel free to reach out through any of the
                channels below.
              </p>
            </div>

            {[
              { icon: "📧", label: "Email", value: "sage@example.com" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sage" },
              { icon: "🐙", label: "GitHub", value: "github.com/sage" },
              { icon: "📍", label: "Location", value: "Available Remotely" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[var(--surface)] rounded-xl px-6 py-4 border border-[var(--border)]"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs text-[var(--muted)] font-medium uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-6 text-white mt-2">
              <p className="font-semibold text-lg mb-2">Open to opportunities</p>
              <p className="text-sm opacity-90">
                I&apos;m actively looking for junior developer roles and
                internships. Let&apos;s build something great together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
