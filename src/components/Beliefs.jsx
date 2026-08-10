import Reveal from "./Reveal";

const beliefs = [
  {
    title: "The Bible",
    verse: "2 Timothy 3:16",
    text: "We believe the Bible is the inspired, infallible Word of God — our final authority for faith and daily living.",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "The Trinity",
    verse: "Matthew 28:19",
    text: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit — equal in power and glory.",
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
          d="M12 3l1.912 5.813H20l-4.956 3.6 1.893 5.757L12 14.57l-4.937 3.6 1.893-5.757L4 8.813h6.088L12 3z"
        />
      </svg>
    ),
  },
  {
    title: "Salvation by Grace",
    verse: "Ephesians 2:8–9",
    text: "We believe salvation is a gift of God’s grace through faith in Jesus Christ alone — not by works, so no one can boast.",
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Jesus Christ",
    verse: "John 14:6",
    text: "We believe Jesus is the Son of God, born of a virgin, lived sinlessly, died for our sins, and rose again on the third day.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-3-5h6" />
      </svg>
    ),
  },
  {
    title: "Baptism & Communion",
    verse: "Matthew 28:19–20",
    text: "We practice water baptism by immersion and regularly observe the Lord’s Supper as acts of obedience and remembrance.",
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
          d="M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
        />
      </svg>
    ),
  },
  {
    title: "The Church",
    verse: "Ephesians 4:4–6",
    text: "We believe the Church is the body of Christ — a family of believers called to worship, fellowship, and make disciples.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Beliefs() {
  return (
    <section id="beliefs" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
            What We Believe
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            Statement of Faith
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Our beliefs are rooted in Scripture and centered on the gospel of
            Jesus Christ. Here are the essentials we hold dear.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <Reveal
              key={b.title}
              variant={i % 3 === 1 ? "zoom" : "up"}
              delay={(i % 3) * 120}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-navy-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold-100 transition group-hover:bg-gold-200" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-navy-900">
                    {b.icon}
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {b.verse}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">
                    {b.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
