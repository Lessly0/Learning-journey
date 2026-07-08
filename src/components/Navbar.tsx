"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[var(--border)] sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-[var(--primary)] tracking-tight"
          >
            Sage<span className="text-[var(--secondary)]">.dev</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${
                    pathname === href || (href !== "/" && pathname.startsWith(href))
                      ? "text-[var(--primary)] border-b-2 border-[var(--primary)] pb-0.5"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[var(--foreground)] hover:text-[var(--primary)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium px-2 py-1 rounded transition-colors hover:text-[var(--primary)] ${
                    pathname === href || (href !== "/" && pathname.startsWith(href))
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
