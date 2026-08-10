import Reveal from "./Reveal";

const visitPoints = [
  {
    title: "What to Expect",
    description:
      "A warm welcome, meaningful worship, and a message from God’s Word. Come as you are — no dress code, no pressure.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Parking & Entrance",
    description:
      "Free parking available on-site with reserved spaces for guests and families. Our welcome team will greet you at the main entrance.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1zm3 6h2m4 0h6m-8 0v2"
        />
      </svg>
    ),
  },
  {
    title: "Kids & Students",
    description:
      "Safe, fun, age-appropriate programs for infants through high school during every service. Check-in is quick and easy.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "Fully accessible building with elevators, wheelchair seating, and hearing assistance available at every service.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="5" r="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 21l3.5-2.5 1.5-4 2 3.5L9.5 21m2-7l1-4 3.5 2 2 5"
        />
      </svg>
    ),
  },
];

const services = [
  { label: "Sunday School", time: "9:30 AM – 10:30 AM" },
  { label: "Sunday Worship Service", time: "10:30 AM – 12:30 PM" },
  { label: "Midweek Service (Wed)", time: "9:00 AM – 12:30 PM" },
  { label: "Bible Study (Fri)", time: "6:00 PM – 7:00 PM" },
];


export default function PlanVisit() {
  return (
    <section id="visit" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
            Plan Your Visit
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            We'd Love to Have You
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Visiting a new church can feel overwhelming. Here's everything you
            need to know before you arrive — so you can simply relax and
            worship.
          </p>
        </Reveal>

        {/* Info cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visitPoints.map((point, i) => (
            <Reveal key={point.title} variant="up" delay={i * 110}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition group-hover:bg-gold-500 group-hover:text-white">
                  {point.icon}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Service schedule */}
        <Reveal variant="zoom" delay={120} className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-navy-900 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div
                className="lg:col-span-2 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(16, 42, 67, 0.55), rgba(16, 42, 67, 0.55)), url(https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1740&auto=format&fit=crop)",
                }}
              >
                <div className="flex h-full flex-col justify-center p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
                    Service Times
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-white">
                    Join Us This Sunday
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 sm:p-10">
                <div className="space-y-4">
                  {services.map((s, i) => (
                    <Reveal key={s.label} variant="right" delay={i * 120}>
                      <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                        <span className="text-base font-semibold text-white">
                          {s.label}
                        </span>
                        <span className="text-sm font-medium text-gold-300">
                          {s.time}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-6 text-sm text-white/70">
                  Directions: Telecom Community, Wein Town Monrovia, Liberia · Free
                  parking & kids check-in at the west entrance.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
