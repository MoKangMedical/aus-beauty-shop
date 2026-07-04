"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">Contact</p>
      <h1 className="text-3xl font-serif italic text-ink mb-8">Get in Touch</h1>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-ink mb-2">Email</h3>
          <p className="text-sm text-muted">hello@ausbeauty.shop</p>
          <p className="text-xs text-muted mt-1">We reply within 24 hours</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-ink mb-2">Location</h3>
          <p className="text-sm text-muted">Sydney, NSW</p>
          <p className="text-xs text-muted mt-1">Australia</p>
        </div>
      </div>

      <div className="border-t border-stone pt-8">
        <h2 className="text-lg font-serif italic text-ink mb-6">Send a Message</h2>
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink block mb-2">Name</label>
              <input type="text" className="w-full border border-stone bg-transparent px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink block mb-2">Email</label>
              <input type="email" className="w-full border border-stone bg-transparent px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors" placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink block mb-2">Subject</label>
            <input type="text" className="w-full border border-stone bg-transparent px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors" placeholder="Order inquiry / Collaboration / Other" />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink block mb-2">Message</label>
            <textarea rows={5} className="w-full border border-stone bg-transparent px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors resize-none" placeholder="Tell us what's on your mind..." />
          </div>
          <button type="submit" className="btn-primary text-sm">
            {submitted ? "Message Sent ✓" : "Send Message"}
          </button>
          {submitted && (
            <p className="text-sm text-accent">Thank you! We&apos;ll get back to you within 24 hours.</p>
          )}
        </form>
      </div>

      <div className="border-t border-stone pt-8 mt-12">
        <h2 className="text-lg font-serif italic text-ink mb-4">Collaborations</h2>
        <p className="text-sm text-muted leading-relaxed">
          Creators, stylists, and brands — we&apos;d love to work with you. Reach out at{" "}
          <span className="text-ink">collab@ausbeauty.shop</span> with your portfolio or pitch.
        </p>
      </div>
    </div>
  );
}
