import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { getSermons } from "../content";

const series = ["All", "Sunday Sermons", "Bible Study", "Special Series"];

export default function Sermons() {
  const [active, setActive] = useState("All");
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getSermons(active)
      .then((data) => setSermons(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [active]);

  const filtered =
    active === "All" ? sermons : sermons.filter((s) => s.category === active);

  return (
    <section id="sermons" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          variant="up"
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
              Sermons & Media
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
              Latest Messages
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Missed a service? Stream or download our latest sermons and Bible
              studies anytime, anywhere.
            </p>
          </div>
          <a
            href="#sermons"
            className="rounded-full border border-navy-900 px-6 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
          >
            Browse Full Library →
          </a>
        </Reveal>

        <Reveal
          variant="fade"
          delay={120}
          className="mt-10 flex flex-wrap gap-3"
        >
          {series.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === cat
                  ? "bg-gold-500 text-navy-900 shadow-md"
                  : "bg-white text-navy-700 hover:bg-navy-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {loading ? (
          <div className="mt-10 text-center text-navy-500">
            Loading sermons...
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-10 text-center text-navy-400">
            No sermons found in this category yet.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((sermon, i) => (
              <Reveal key={sermon.id} variant="up" delay={(i % 3) * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        sermon.img ||
                        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1170&auto=format&fit=crop"
                      }
                      alt={sermon.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <button
                      type="button"
                      aria-label={`Play sermon: ${sermon.title}`}
                      className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-xl transition hover:scale-110 hover:bg-gold-400"
                    >
                      <svg
                        className="ml-1 h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    {sermon.duration && (
                      <span className="absolute right-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-white">
                        {sermon.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                      {sermon.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-navy-900 transition group-hover:text-gold-700">
                      {sermon.title}
                    </h3>
                    {sermon.passage && (
                      <p className="mt-1 text-sm font-medium text-navy-500">
                        {sermon.passage}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
                      <div>
                        <p className="text-sm font-semibold text-navy-700">
                          {sermon.speaker}
                        </p>
                        <p className="text-xs text-navy-500">
                          {sermon.date
                            ? new Date(sermon.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )
                            : ""}
                        </p>
                      </div>
                      <div className="flex gap-2 text-navy-400">
                        <span
                          className="rounded-md bg-navy-50 p-1.5"
                          title="Podcast audio"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 11a7 7 0 01-14 0m14 0a7 7 0 00-14 0m14 0v1a7 7 0 01-14 0v-1M12 4v8"
                            />
                          </svg>
                        </span>
                        <span
                          className="rounded-md bg-navy-50 p-1.5"
                          title="Video"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
