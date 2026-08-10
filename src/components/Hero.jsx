export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 28, 46, 0.82), rgba(16, 42, 67, 0.88)), url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop)",
        }}
      />
      {/* Decorative gold glows */}
      <div className="animate-float absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
      <div
        className="animate-float absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p
          className="hero-anim mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold-400"
          style={{ animationDelay: "0.15s" }}
        >
          Welcome to
        </p>
        <h1
          className="hero-anim font-serif text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.3s" }}
        >
          Christ Empowerment Chapel</h1>
        <p
          className="hero-anim mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          style={{ animationDelay: "0.45s" }}
        >
          A place to belong, grow, and serve. Join us as we encounter the love
          of Christ together — where every person matters and hope is alive.
        </p>
        <div
          className="hero-anim mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#visit"
            className="w-full rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-gold-400 sm:w-auto"
          >
            Plan Your Visit
          </a>
          <a
            href="#sermons"
            className="w-full rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
          >
            Watch Sermons
          </a>
        </div>

        {/* Service times strip */}
        <div
          className="hero-anim mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 rounded-2xl border border-..."
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { day: "Sunday", time: "9:30 AM" },
            { day: "Sunday", time: "10:30 AM" },
            { day: "Wednesday", time: "9:00 AM" },
            { day: "Friday", time: "6:00 PM" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                {s.day}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{s.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#visit"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-gold-400"
        aria-label="Scroll down"
      >
        <svg
          className="h-8 w-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 13l-7 7-7-7m14-6l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
