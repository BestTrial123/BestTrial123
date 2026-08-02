import Reveal from "./Reveal";

const quickLinks = [
  { label: "Plan Your Visit", href: "#visit" },
  { label: "What We Believe", href: "#beliefs" },
  { label: "Leadership", href: "#leadership" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
];

const connectLinks = [
  { label: "Give Online", href: "#donate" },
  { label: "Blog", href: "#blog" },
  { label: "Prayer Requests", href: "#contact" },
  { label: "Contact Us", href: "#contact" },
];

const serviceTimes = [
  "Sunday Worship — 9:00 & 11:00 AM",
  "Sunday School — 10:15 AM",
  "Wednesday Bible Study — 7:00 PM",
];

const socials = [
  {
    label: "Facebook",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter strip */}
      <Reveal variant="fade">
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
            <div>
              <h3 className="font-serif text-2xl font-bold">
                Stay Connected with Grace
              </h3>
              <p className="mt-1 text-white/65">
                Get weekly encouragement, event updates, and sermon alerts.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-gold-400"
              />
              <button
                type="submit"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-900 transition hover:bg-gold-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Reveal>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <Reveal variant="up">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-bold text-navy-900">
                GC
              </span>
              <span className="font-serif text-lg font-semibold">
                Grace Community Church
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              A place to belong, grow, and serve. We exist to help people take
              their next step toward Jesus Christ.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-gold-500 hover:text-navy-900"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Quick links */}
        <Reveal variant="up" delay={120}>
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Connect */}
        <Reveal variant="up" delay={240}>
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-2.5">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Service times */}
        <Reveal variant="up" delay={360}>
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              Service Times
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceTimes.map((time) => (
                <li key={time} className="text-sm text-white/65">
                  {time}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">
                📍 1234 Grace Lane
              </p>
              <p className="text-sm text-white/65">Springfield, ST 56789</p>
              <p className="mt-1 text-sm text-white/65">(555) 123-4567</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} Grace Community Church. All rights
            reserved.
          </p>
          <p className="text-sm text-white/55">
            Made with <span className="text-gold-400">♥</span> for the glory of
            God.
          </p>
        </div>
      </div>
    </footer>
  );
}
