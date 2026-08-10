import { useState } from "react";
import Reveal from "./Reveal";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const presetAmounts = [25, 50, 100, 250, 500];

// Replace with your actual publishable key from the Stripe dashboard
const stripePromise = loadStripe("pk_live_51U1ouRJ5nJvphFMGSOeDIOuCdnLITvPdBpwIVQmmwXrT2yY6ZS31ibPsSPc2M7DfTW61VzU0wxUX1c7lVNR04G2C00q5X8PqX9");

function CheckoutForm({ selectedAmount, fund }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
    });

    if (error) {
      setMessage(error.message);
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={isProcessing || !stripe}
        className="w-full rounded-md bg-gold-500 py-3 font-semibold text-navy-900 disabled:opacity-50"
      >
        {isProcessing ? "Processing..." : `Give $${selectedAmount}`}
      </button>
      {message && <p className="text-sm text-red-400">{message}</p>}
    </form>
  );
}

export default function Donate() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");
  const [custom, setCustom] = useState("");
  const [fund, setFund] = useState("General Fund");
  const [clientSecret, setClientSecret] = useState(null);

  const selectedAmount = custom ? Number(custom) : amount;

  const startCheckout = async () => {
      const res = await fetch("/.netlify/functions/create-payment-intent", { 
        method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: selectedAmount, fund }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
  };

  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
                Online Giving
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Give Generously, Live Joyfully
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                Your generosity fuels ministry — from local outreach and
                worship to caring for those in need. Every gift makes an
                eternal impact.
              </p>
            </div>
          </Reveal>

          {/* Right side: donation card */}
          <div className="rounded-xl bg-white p-6 shadow-xl">
            <h3 className="font-serif text-xl font-bold">Make a Donation</h3>
            <p className="text-sm text-gray-500">
              Choose an amount and giving frequency below.
            </p>

            <div className="mt-4 flex gap-2">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={`rounded-md border px-3 py-2 text-sm ${
                    amount === a && !custom
                      ? "border-gold-500 bg-gold-50"
                      : "border-gray-200"
                  }`}
                >
                  ${a}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom amount ($)"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="mt-3 w-full rounded-md border border-gray-200 px-3 py-2"
            />

            <select
              value={fund}
              onChange={(e) => setFund(e.target.value)}
              className="mt-3 w-full rounded-md border border-gray-200 px-3 py-2"
            >
              <option>General Fund</option>
              <option>Missions</option>
              <option>Building Fund</option>
            </select>

            {!clientSecret ? (
              <button
                onClick={startCheckout}
                className="mt-4 w-full rounded-md bg-gold-500 py-3 font-semibold text-navy-900"
              >
                Give ${selectedAmount}
              </button>
            ) : (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm selectedAmount={selectedAmount} fund={fund} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}