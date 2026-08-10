import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { getEvents } from "../content";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MIN_MONTH = new Date(2026, 1, 1); // August 2026
const MAX_MONTH = new Date(2026, 11, 1); // December 2026

export default function Events() {
  const [monthDate, setMonthDate] = useState(() => new Date(MIN_MONTH));
  const month = monthDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPrevMonth = () => {
    const prev = new Date(monthDate.getFullYear(), monthDate.getMonth() - 1, 1);
    if (prev >= MIN_MONTH) setMonthDate(prev);
  };
  const goToNextMonth = () => {
    const next = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1);
    if (next <= MAX_MONTH) setMonthDate(next);
  };

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getEvents()
      .then((data) => setEvents(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const upcomingEvents = events.slice(0, 5);

  const year = monthDate.getFullYear();
  const monthIndex = monthDate.getMonth();
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingBlanks = Array.from({ length: firstWeekday }, (_, i) => `blank-${i}`);
  const dayCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const parseEventDate = (ev) => {
    if (!ev.date) return null;
    const d = new Date(ev.date);
    return isNaN(d.getTime()) ? null : d;
  };

  return (
    <section id="events" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
            Event Calendar
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            What's Happening
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            From worship gatherings to community outreach, there's always a
            place for you to connect.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal variant="left" className="lg:col-span-2">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-semibold text-navy-900">
                  {month}
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goToPrevMonth}
                    className="rounded-lg bg-white p-2 text-navy-700 shadow-sm transition hover:bg-navy-100"
                    aria-label="Previous month"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goToNextMonth}
                    className="rounded-lg bg-white p-2 text-navy-700 shadow-sm transition hover:bg-navy-100"
                    aria-label="Next month"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-1 text-center">
                {weekDays.map((d) => (
                  <span key={d} className="py-2 text-xs font-bold uppercase tracking-wider text-navy-500">
                    {d}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {leadingBlanks.map((key) => (
                  <div key={key} className="min-h-[4rem]" />
                ))}
                {dayCells.map((day) => (
                  <div
                    key={day}
                    className="relative flex min-h-[4rem] flex-col items-center rounded-lg bg-white p-1.5 shadow-sm"
                  >
                    <span className="text-sm font-medium text-navy-700">{day}</span>
                    {events
                      .filter((ev) => {
  if (ev.recurringDay !== undefined) {
    const cellDate = new Date(year, monthIndex, day);
    return cellDate.getDay() === ev.recurringDay;
  }
  const d = parseEventDate(ev);
  if (!d) return false;
  return (
    d.getDate() === day &&
    d.getMonth() === monthIndex &&
    d.getFullYear() === year
  );
})
                      .slice(0, 2)
                      .map((ev, idx) => (
                        <span
                          key={idx}
                          className="mt-1 hidden w-full rounded-full bg-gold-500 px-1 py-0.5 text-center text-[10px] font-semibold text-white sm:block"
                          title={ev.title}
                        >
                          {ev.title.split(" ")[0]}
                        </span>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" className="flex flex-col gap-4 lg:col-span-3">
            {loading ? (
              <div className="text-center text-navy-500">Loading events...</div>
            ) : upcomingEvents.length === 0 ? (
              <div className="text-center text-navy-400">No upcoming events at this time.</div>
            ) : (
              upcomingEvents.map((ev, i) => {
                const eventDate = parseEventDate(ev);
                return (
                  <Reveal key={ev.id || ev.title} variant="up" delay={i * 100}>
                    <div className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-navy-900 text-white">
                        {eventDate ? (
                          <>
                            <span className="text-lg font-bold leading-none">{eventDate.getDate()}</span>
                            <span className="mt-1 text-[10px] uppercase tracking-wider text-gold-400">
                              {eventDate.toLocaleString("en-US", { month: "short" }).toUpperCase()}
                            </span>
                          </>
                        ) : (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400 text-center px-1">
                            {ev.tag || "Recurring"}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-block rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-semibold text-gold-800">
                          {ev.tag || "General"}
                        </span>
                        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-navy-900">
                          {ev.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-navy-600">
                          {ev.time ? ev.time + (ev.location ? " · " : "") : ""}
                          {ev.location || ""}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="hidden shrink-0 rounded-full border border-navy-200 px-4 py-1.5 text-xs font-semibold text-navy-700 transition hover:bg-navy-900 hover:text-white sm:block"
                      >
                        RSVP
                      </button>
                    </div>
                  </Reveal>
                );
              })
            )}
            <a
              href="#events"
              className="mt-2 text-center text-sm font-semibold text-gold-700 transition hover:text-gold-600"
            >
              View Full Calendar →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}