import { useState } from "react";

const navLinks = [
  { label: "Visit", href: "#visit" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Leadership", href: "#leadership" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Give", href: "#donate" },
  { label: "Blog", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-header fixed inset-x-0 top-0 z-50 bg-navy-900/95 backdrop-blur-sm shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-bold text-navy-900">
            GC
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-white sm:text-xl">
            Grace Community Church
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="ml-3 rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-900 shadow-md transition hover:bg-gold-400"
          >
            Give Online
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-4 pb-4 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-navy-900 shadow-md transition hover:bg-gold-400"
            >
              Give Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
