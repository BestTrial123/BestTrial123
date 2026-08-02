import { useState } from "react";
import Reveal from "./Reveal";

const tabs = ["Photos", "Videos"];

const photos = [
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1170&auto=format&fit=crop",
];

const videos = [
  {
    title: "Sunday Worship Highlights",
    duration: "4:32",
    img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Baptism Sunday 2025",
    duration: "6:18",
    img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Youth Camp Recap",
    duration: "3:45",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1170&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("Photos");

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          variant="up"
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
              Gallery
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
              Moments of Grace
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              A look back at worship, fellowship, and everything in between.
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 gap-1 rounded-full bg-navy-50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                  active === tab
                    ? "bg-navy-900 text-white shadow"
                    : "text-navy-600 hover:text-navy-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {active === "Photos" ? (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((src, i) => (
              <Reveal key={i} variant="zoom" delay={(i % 4) * 100}>
                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={`Gallery photo ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-900/0 opacity-0 transition group-hover:bg-navy-900/50 group-hover:opacity-100">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {videos.map((video, i) => (
              <Reveal key={video.title} variant="up" delay={i * 140}>
                <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl">
                  <img
                    src={video.img}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-900/40 transition group-hover:bg-navy-900/60">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-xl transition group-hover:scale-110 group-hover:bg-gold-400">
                      <svg
                        className="ml-1 h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white drop-shadow">
                      {video.title}
                    </span>
                    <span className="rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
