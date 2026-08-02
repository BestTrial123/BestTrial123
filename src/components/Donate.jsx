import { useState } from "react";
import Reveal from "./Reveal";

const presetAmounts = [25, 50, 100, 250, 500];

export default function Donate() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");
  const [custom, setCustom] = useState("");
  const [fund, setFund] = useState("General Fund");
  const [submitted, setSubmitted] = useState(false);

  const selectedAmount = custom ? Number(custom) : amount;

  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-28"
    >
      {/* Background decor */}
      <div className="animate-float absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-3xl" />
      <div
        className="animate-float absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left copy */}
          <Reveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
                Online Giving
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Give Generously, Live Joyfully
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                Your generosity fuels ministry — from local outreach and worship
                to caring for those in need. Every gift makes an eternal impact.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { title: "Secure", text: "Encrypted & PCI compliant" },
                  { title: "Convenient", text: "Give anytime, anywhere" },
                  { title: "Impactful", text: "Directly supports ministry" },
                ].map((f, i) => (
                  <Reveal key={f.title} variant="up" delay={i * 120}>
                    <div className="h-full rounded-xl border border-white/10 bg-white/5 p-4">
                      <h3 className="font-serif text-lg font-semibold text-gold-300">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/65">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Every gift counts
                  </p>
                  <p className="text-sm text-white/65">
                    Your donation is tax-deductible. Need help? Contact our
                    giving team.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Giving form */}
          <Reveal variant="right">
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-navy-900">
                    Thank You for Your Gift!
                  </h3>
                  <p className="mt-2 max-w-sm text-navy-600">
                    Your donation of ${selectedAmount} was received. A receipt
                    has been sent to your email. God bless you!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-700 transition hover:bg-navy-50"
                  >
                    Make Another Gift
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-navy-900">
                    Make a Donation
                  </h3>
                  <p className="mt-1 text-sm text-navy-600">
                    Choose an amount and giving frequency below.
                  </p>

                  {/* Frequency toggle */}
                  <div className="mt-6 grid grid-cols-2 gap-1 rounded-full bg-navy-50 p-1">
                    {["one-time", "monthly"].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFrequency(f)}
                        className={`rounded-full py-2 text-sm font-semibold capitalize transition ${
                          frequency === f
                            ? "bg-navy-900 text-white shadow"
                            : "text-navy-600 hover:text-navy-900"
                        }`}
                      >
                        {f === "one-time" ? "One-Time" : "Monthly"}
                      </button>
                    ))}
                  </div>

                  {/* Amount presets */}
                  <div className="mt-5 grid grid-cols-5 gap-2">
                    {presetAmounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setAmount(a);
                          setCustom("");
                        }}
                        className={`rounded-lg border py-2.5 text-sm font-bold transition ${
                          amount === a && !custom
                            ? "border-gold-500 bg-gold-100 text-gold-800"
                            : "border-navy-100 bg-white text-navy-700 hover:border-gold-300 hover:bg-gold-50"
                        }`}
                      >
                        ${a}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div className="mt-3">
                    <label htmlFor="custom-amount" className="sr-only">
                      Custom amount
                    </label>
                    <input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Custom amount ($)"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="w-full rounded-lg border border-navy-100 bg-navy-50 px-4 py-3 text-sm font-medium text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                    />
                  </div>

                  {/* Fund selection */}
                  <div className="mt-4">
                    <label
                      htmlFor="fund"
                      className="text-xs font-semibold uppercase tracking-wider text-navy-500"
                    >
                      Giving Fund
                    </label>
                    <select
                      id="fund"
                      value={fund}
                      onChange={(e) => setFund(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-navy-100 bg-navy-50 px-4 py-3 text-sm font-medium text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                    >
                      <option>General Fund</option>
                      <option>Missions & Outreach</option>
                      <option>Building Fund</option>
                      <option>Benevolence</option>
                    </select>
                  </div>

                  {/* Summary */}
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3">
                    <span className="text-sm font-medium text-navy-600">
                      {frequency === "monthly"
                        ? "Monthly gift"
                        : "One-time gift"}{" "}
                      · {fund}
                    </span>
                    <span className="font-serif text-xl font-bold text-navy-900">
                      ${selectedAmount || 0}
                    </span>
                  </div>

                  {/* Payment method placeholder */}
                  <div className="mt-5 rounded-xl border border-dashed border-navy-200 bg-navy-50/50 p-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                      Payment Method
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-2 text-sm text-navy-700">
                      <svg
                        className="h-5 w-5 text-navy-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path strokeLinecap="round" d="M3 10h18" />
                      </svg>
                      Card · PayPal · Bank (checkout integration)
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="mt-6 w-full rounded-full bg-gold-500 py-3.5 text-sm font-bold text-navy-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-gold-400"
                  >
                    Give ${selectedAmount || 0}
                    {frequency === "monthly" ? " / month" : ""}
                  </button>
                  <p className="mt-3 text-center text-xs text-navy-400">
                    Secured by 256-bit SSL encryption.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
