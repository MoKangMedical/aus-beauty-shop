export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">Info</p>
      <h1 className="text-3xl font-serif italic text-ink mb-8">Returns & Refunds</h1>

      <div className="space-y-10 text-sm text-muted leading-relaxed">
        <div>
          <h2 className="text-base font-medium text-ink mb-3">30-Day Return Window</h2>
          <p>
            You have 30 days from the date of delivery to initiate a return. Items must be unused,
            in original packaging, and in resellable condition.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-ink mb-3">Non-Returnable Items</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Opened press-on nail sets (hygiene reasons)</li>
            <li>Used beauty devices</li>
            <li>Items marked &quot;Final Sale&quot;</li>
            <li>Gift cards</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-ink mb-3">How to Return</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Email us at returns@ausbeauty.shop with your order number and reason for return.</li>
            <li>We&apos;ll reply with a return authorization and shipping label within 2 business days.</li>
            <li>Pack the items securely in their original packaging and drop them at your local post office.</li>
            <li>Once we receive and inspect the return, we&apos;ll process your refund within 5 business days.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-base font-medium text-ink mb-3">Refunds</h2>
          <p>
            Refunds are issued to your original payment method. For Afterpay orders, your payment plan
            will be adjusted. Return shipping is free for faulty or incorrect items; for change-of-mind
            returns, a $5.95 return label fee applies.
          </p>
        </div>
      </div>
    </div>
  );
}
