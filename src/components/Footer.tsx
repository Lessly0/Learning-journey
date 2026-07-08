import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-[var(--primary)] mb-2">
              Gisela<span className="text-[var(--secondary)]">.dev</span>
            </h3>
            <p className="text-sm text-gray-400">
              Documenting my journey from curious learner to confident developer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--primary)] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">
              Blog Topics
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/blog/frontend" className="hover:text-[var(--primary)] transition-colors">Frontend</Link></li>
              <li><Link href="/blog/backend" className="hover:text-[var(--primary)] transition-colors">Backend</Link></li>
              <li><Link href="/blog/mobile" className="hover:text-[var(--primary)] transition-colors">Mobile Dev</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gisela Campillo. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
