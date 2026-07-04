import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">About</p>
      <h1 className="text-3xl font-serif italic text-ink mb-8">Our Story</h1>

      <div className="prose-custom space-y-6 text-sm text-muted leading-relaxed">
        <p>
          AUS Beauty was born from a simple observation: the coolest, most innovative beauty and
          accessory brands are made in Asia, yet finding them from Australia was a maze of
          unreliable marketplaces, inflated reseller prices, and weeks of uncertainty.
        </p>
        <p>
          We decided to cut through the noise. We travel regularly to independent studios in
          Guangzhou, Seoul, and Tokyo — not trade shows, but the actual workshops where artisans
          hand-paint nails, prototype beauty devices, and string beads one by one. We meet the
          makers, test the product, and bring back only what we&apos;d gift to our best friend.
        </p>
        <p>
          Every item on this site has been held, tried, and approved by someone on our team.
          Nothing dropshipped. Nothing generic. Just thoughtfully sourced pieces that feel
          discovered, not mass-produced.
        </p>

        <div className="border-t border-stone pt-8 mt-8">
          <h2 className="text-lg font-serif italic text-ink mb-4">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Quality First", desc: "We reject more than we accept. Every product passes a 10-point quality check before listing." },
              { title: "Fair Pricing", desc: "Direct from studio — no middlemen. You pay the maker's intended price, plus shipping." },
              { title: "Real Connection", desc: "We tell each product's story: who made it, where, and why it earned its place here." },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-ink mb-1">{v.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-stone pt-8 mt-8">
          <h2 className="text-lg font-serif italic text-ink mb-4">Where We Ship</h2>
          <p>
            Based in Sydney, shipping from our partner studios across Asia. We deliver to Australia
            and New Zealand with standard 7–12 business day delivery. International shipping coming soon.
          </p>
        </div>

        <div className="pt-8">
          <Link href="/shop" className="btn-primary text-sm">
            Browse the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
