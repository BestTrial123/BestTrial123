import { useState } from "react";
import Reveal from "./Reveal";
import { submitPrayerRequest, submitContactMessage } from "../content";

const contactInfo = [
  {
    title: "Visit Us",
    lines: ["Telecom Community", "Wein Town, Monrovia, Liberia"],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.7}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Call Us",
    lines: ["+231779285257", "Office: Mon–Fri, 9 AM – 5 PM"],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.7}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email Us",
    lines: ["spdolo79@gmail.com", "We respond during the day"],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.7}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const [requestType, setRequestType] = useState("Prayer Request");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      if (requestType === "Prayer Request") {
        await submitPrayerRequest({
          name: form.name,
          email: form.email,
          request: form.message,
        });
      } else {
        await submitContactMessage({
          name: form.name,
          email: form.email,
          subject: form.subject || "General Contact",
          message: form.message,
        });
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
            Contact & Prayer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            We'd Love to Hear From You
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Have a question, need prayer, or want to get connected? Reach out —
            our team is here for you.
          </p>
        </Reveal>

        {/* Contact info cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactInfo.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 120}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                {item.lines.map((line, idx) => (
                  <p key={idx} className="mt-1 text-sm text-navy-600">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal variant="left">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
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
                    {requestType === "Prayer Request"
                      ? "Prayer Received"
                      : "Message Sent"}
                  </h3>
                  <p className="mt-2 max-w-sm text-navy-600">
                    Thank you, {form.name || "friend"}. Our team has received
                    your
                    {requestType === "Prayer Request"
                      ? " prayer request"
                      : " message"}{" "}
                    and will be in touch soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-8 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-700 transition hover:bg-navy-50"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl font-bold text-navy-900">
                      Prayer Request & Contact
                    </h3>
                  </div>

                  {/* Request type toggle */}
                  <div className="mt-5 grid grid-cols-2 gap-1 rounded-full bg-navy-50 p-1">
                    {["Prayer Request", "General Contact"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setRequestType(type)}
                        className={`rounded-full py-2 text-sm font-semibold transition ${
                          requestType === type
                            ? "bg-navy-900 text-white shadow"
                            : "text-navy-600 hover:text-navy-900"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold uppercase tracking-wider text-navy-500"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="NEA-DEV CODER"
                          className="mt-1.5 w-full rounded-lg border border-navy-100 bg-navy-50 px-4 py-3 text-sm font-medium text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-wider text-navy-500"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="mt-1.5 w-full rounded-lg border border-navy-100 bg-navy-50 px-4 py-3 text-sm font-medium text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold uppercase tracking-wider text-navy-500"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="mt-1.5 w-full rounded-lg border border-navy-100 bg-navy-50 px-4 py-3 text-sm font-medium text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-wider text-navy-500"
                      >
                        {requestType === "Prayer Request"
                          ? "Prayer Request"
                          : "Message"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={
                          requestType === "Prayer Request"
                            ? "Share your prayer request confidentially..."
                            : "Tell us how we can help..."
                        }
                        className="mt-1.5 w-full resize-none rounded-lg border border-navy-100 bg-navy-50 px-4 py-3 text-sm font-medium text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                      />
                    </div>

                    {error && (
                      <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-gold-500 py-3.5 text-sm font-bold text-navy-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting
                        ? "Sending..."
                        : requestType === "Prayer Request"
                          ? "Submit Prayer Request"
                          : "Send Message"}
                    </button>
                    <p className="text-center text-xs text-navy-400">
                      Your information is kept confidential and never shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal variant="right" className="h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
              <div className="border-b border-navy-100 p-6">
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Find Us Here
                </h3>
                <p className="mt-1 text-sm text-navy-600">
                  Telecom Community, Wein Town, Monrovia, Liberia. 
                </p>
              </div>
              <iframe
  title="Church location map"
  src="https://www.google.com/maps?q=Telecom+Community,+Wein+Town,+Monrovia,+Liberia&output=embed"
  className="h-72 w-full border-0 sm:h-80 lg:h-[480px]"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
