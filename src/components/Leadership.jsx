import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { getStaff } from "../content";

export default function Leadership() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStaff()
      .then((data) => setStaff(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="leadership" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Staff & Leadership
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A dedicated team of pastors and leaders committed to shepherding our
            church family with love, wisdom, and integrity.
          </p>
        </Reveal>

        {loading ? (
          <div className="mt-14 text-center text-white/60">Loading team...</div>
        ) : staff.length === 0 ? (
          <div className="mt-14 text-center text-white/50">
            Team profiles coming soon.
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member, i) => (
              <Reveal
                key={member.id || member.name}
                variant="up"
                delay={(i % 3) * 130}
              >
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1.5 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={
                        member.img ||
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop"
                      }
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-70" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-gold-400">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-navy-600">
                      {member.bio}
                    </p>
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
