export default function FAQPage() {
  const faqs = [
    {
      q: "How long does shipping take?",
      a: "Standard delivery to Australia takes 7–12 business days from dispatch. We ship from our partner studios in China, Korea, and Japan. You'll receive a tracking number within 48 hours of your order.",
    },
    {
      q: "Where do you ship to?",
      a: "Currently we ship to Australia and New Zealand. International shipping to other regions is coming soon. Join our newsletter for updates.",
    },
    {
      q: "What is your return policy?",
      a: "We accept returns within 30 days of delivery for unused, unopened items. Press-on nails must be unopened for hygiene reasons. See our Returns page for the full policy.",
    },
    {
      q: "Are press-on nails reusable?",
      a: "Yes! Our premium gel nails can be reused up to 14 days per application, and you can reapply them 2–3 times with proper care. Each set comes with 24 nails in 12 sizes plus application tools.",
    },
    {
      q: "Do you offer Afterpay?",
      a: "Yes, Afterpay is available on all orders. Split your payment into 4 interest-free instalments. Look for the Afterpay option at checkout.",
    },
    {
      q: "How do I find the right nail size?",
      a: "Every nail set includes 24 nails in 12 sizes (XS to L) so you can find your perfect fit for each finger. We also include a sizing guide in every order.",
    },
    {
      q: "Are beauty devices safe to use?",
      a: "Absolutely. All our beauty devices pass CE, FCC, and RoHS certifications. Each comes with a detailed instruction manual and usage guide. If you have specific skin concerns, we recommend a patch test.",
    },
    {
      q: "Do you do wholesale or bulk orders?",
      a: "We do! For wholesale inquiries, event gifting, or salon partnerships, email us at wholesale@ausbeauty.shop with your requirements.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">Help</p>
      <h1 className="text-3xl font-serif italic text-ink mb-2">FAQ</h1>
      <p className="text-sm text-muted mb-12">Everything you need to know about shopping with AUS Beauty.</p>

      <div className="space-y-0 border-t border-stone">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-stone py-6">
            <h3 className="text-sm font-medium text-ink mb-2">{f.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-warm text-center">
        <p className="text-sm text-ink mb-2">Didn&apos;t find your answer?</p>
        <a href="/contact" className="text-xs uppercase tracking-[0.12em] text-accent hover:text-ink transition-colors underline underline-offset-4">
          Contact us →
        </a>
      </div>
    </div>
  );
}
