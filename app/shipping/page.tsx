export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">Info</p>
      <h1 className="text-3xl font-serif italic text-ink mb-8">Shipping</h1>

      <div className="space-y-10 text-sm text-muted leading-relaxed">
        <div>
          <h2 className="text-base font-medium text-ink mb-3">Delivery Times</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone text-left">
                <th className="py-3 text-xs uppercase tracking-[0.12em] font-medium text-ink">Destination</th>
                <th className="py-3 text-xs uppercase tracking-[0.12em] font-medium text-ink">Standard</th>
                <th className="py-3 text-xs uppercase tracking-[0.12em] font-medium text-ink">Express</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone">
                <td className="py-3">Australia (Metro)</td>
                <td className="py-3">7–10 days</td>
                <td className="py-3">4–6 days</td>
              </tr>
              <tr className="border-b border-stone">
                <td className="py-3">Australia (Regional)</td>
                <td className="py-3">9–12 days</td>
                <td className="py-3">6–8 days</td>
              </tr>
              <tr className="border-b border-stone">
                <td className="py-3">New Zealand</td>
                <td className="py-3">10–14 days</td>
                <td className="py-3">7–9 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-base font-medium text-ink mb-3">Shipping Costs</h2>
          <ul className="space-y-2">
            <li><span className="text-ink font-medium">Free Standard Shipping</span> — all orders over $60 AUD</li>
            <li><span className="text-ink font-medium">Standard Shipping</span> — $7.95 AUD for orders under $60</li>
            <li><span className="text-ink font-medium">Express Shipping</span> — $14.95 AUD flat rate</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-ink mb-3">Tracking</h2>
          <p>
            All orders include tracking. You&apos;ll receive a tracking number by email within 48 hours
            of placing your order. Track your package on our website or via the carrier&apos;s site.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-ink mb-3">Where We Ship From</h2>
          <p>
            Our products ship directly from partner studios across Asia — mainly Guangzhou (China),
            Seoul (Korea), and Tokyo (Japan). This studio-to-door model keeps prices fair and
            eliminates unnecessary warehousing.
          </p>
        </div>
      </div>
    </div>
  );
}
