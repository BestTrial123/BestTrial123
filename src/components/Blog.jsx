import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { getPosts } from "../content";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((data) => setPosts(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section id="blog" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          variant="up"
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
              From the Blog
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
              Encouragement for the Journey
            </h2>
          </div>
          <a
            href="#blog"
            className="rounded-full border border-navy-900 px-6 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
          >
            View All Articles →
          </a>
        </Reveal>

        {loading ? (
          <div className="mt-12 text-center text-navy-500">
            Loading articles...
          </div>
        ) : posts.length === 0 ? (
          <div className="mt-12 text-center text-navy-400">
            No articles published yet.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Featured post */}
            <Reveal variant="zoom" className="lg:col-span-2 lg:row-span-2">
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl">
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <img
                    src={
                      featured.image ||
                      "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1170&auto=format&fit=crop"
                    }
                    alt={featured.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
                      {featured.category}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-bold leading-snug text-white sm:text-3xl">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {featured.author} · {formatDate(featured.date)} · 5 min
                      read
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-navy-600">{featured.excerpt}</p>
                  <a
                    href="#blog"
                    className="mt-4 inline-block text-sm font-semibold text-gold-700 transition hover:text-gold-600"
                  >
                    Read Full Article →
                  </a>
                </div>
              </article>
            </Reveal>

            {/* Other posts */}
            {rest.map((post, i) => (
              <Reveal key={post.id} variant="right" delay={i * 140}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={
                        post.image ||
                        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1170&auto=format&fit=crop"
                      }
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium text-navy-500">
                      {post.author} · {formatDate(post.date)}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-navy-900 transition group-hover:text-gold-700">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href="#blog"
                        className="text-sm font-semibold text-gold-700 transition hover:text-gold-600"
                      >
                        Read Article →
                      </a>
                      <span className="text-xs text-navy-400">4 min read</span>
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
