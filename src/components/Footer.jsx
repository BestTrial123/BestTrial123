import Reveal from "./Reveal";
import chapelLogo from "../assets/Christ-Empowerment-Chapel-logo.png";

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
  "Sunday School — 9:30 – 10:30 AM",
  "Sunday Worship — 10:30 AM – 12:30 PM",
  "Wednesday Bible Study — 9:00 AM – 12:30 PM",
  "Friday Bible Study — 6:00 PM– 7:00 PM",
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/YOUR-PAGE-NAME",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
  },
  {
  label: "Instagram",
  href: "https://instagram.com/YOUR-HANDLE",
  icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
},
{
  label: "YouTube",
  href: "https://www.youtube.com/@Christ-Empowerment-Chapel",
  icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
},
]; //
export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter strip */}
      <Reveal variant="fade">
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
            <div>
              <h3 className="font-serif text-2xl font-bold">
                Stay Connected with C.E.C.
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
              <img src={chapelLogo} 
              alt="Christ Empowerment Chapel logo" 
              className="h-10 w-10 object-contain"
              />
              <span className="font-serif text-lg font-semibold">
                Christ Empowerment Chapel
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              A place to belong, grow, and serve. We exist to help people take
              their next step toward Jesus Christ.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
  <a
    key={social.label}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.label}
    className="hover:text-blue-400 transition"
  >
    {social.icon}
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
  📍 Telecom Community, Wein Town
</p>
<p className="text-sm text-white">
  Monrovia, Liberia
</p>

              <p className="mt-1 text-sm text-white/65">+231779285257</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/55">
            © April 18, 2019 Christ Empowerment Chapel. All rights reserved.
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
