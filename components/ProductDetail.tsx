"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useCartStore } from "@/lib/store";
import { useState } from "react";
import { FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import type { Product } from "@/lib/types";

export default function ProductDetail({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link href={`/category/${product.category}`} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors mb-10">
        <FiArrowLeft className="w-3 h-3" /> Back to {product.category.replace(/-/g, " ")}
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-[3/4] bg-warm overflow-hidden mb-3">
            <img src={product.images[img]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2">
            {product.images.map((src, i) => (
              <button key={i} onClick={() => setImg(i)} className={`w-16 h-20 overflow-hidden border ${i === img ? "border-ink" : "border-transparent"}`}>
                <img src={src} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">{product.category.replace(/-/g, " ")}</p>
          <h1 className="text-2xl md:text-3xl font-serif italic mb-1">{product.name}</h1>
          <p className="text-xs uppercase tracking-wider text-muted mb-6">{product.nameZh}</p>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="text-base text-muted line-through">${product.originalPrice.toFixed(2)}</span>}
            <span className="text-xs text-muted">AUD</span>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-muted mb-8">Afterpay — 4 × ${(product.price / 4).toFixed(2)}</p>

          {/* Options */}
          {product.colors.length > 1 && (
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.15em] text-ink mb-2">Color: {color || "Select"}</p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button key={c} onClick={() => setColor(c)} className={`px-4 py-2 text-xs border ${color === c ? "border-ink bg-ink text-cream" : "border-stone text-ink hover:border-ink/40"}`}>{c}</button>
                ))}
              </div>
            </div>
          )}
          {product.sizes.length > 1 && (
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.15em] text-ink mb-2">Size: {size || "Select"}</p>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`px-4 py-2 text-xs border ${size === s ? "border-ink bg-ink text-cream" : "border-stone"}`}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Add to cart */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center border border-stone">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2.5 hover:bg-warm"><FiMinus className="w-3.5 h-3.5" /></button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-2.5 hover:bg-warm"><FiPlus className="w-3.5 h-3.5" /></button>
            </div>
            <button
              onClick={() => addItem(product.id, qty, color || undefined, size || undefined)}
              className="flex-1 bg-ink text-cream py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-charcoal transition-colors"
            >
              Add to cart — ${(product.price * qty).toFixed(2)}
            </button>
          </div>

          {/* Description */}
          <div className="border-t border-stone pt-8 space-y-6">
            <p className="text-sm text-muted leading-relaxed">{product.description}</p>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-muted">
                {product.features.map((f, i) => <li key={i} className="flex gap-2"><span className="text-accent">—</span> {f}</li>)}
              </ul>
            </div>
            <div className="bg-warm p-4 text-xs text-muted">
              <p className="uppercase tracking-wider font-medium text-ink mb-1">Shipping</p>
              {product.shippingFrom} · {product.estimatedDelivery}
            </div>
            {/* Social */}
            <div className="flex gap-6 pt-4">
              {product.tiktokVideo && <a href={product.tiktokVideo} target="_blank" className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted hover:text-ink"><FaTiktok className="w-3 h-3" /> TikTok</a>}
              {product.instagramPost && <a href={product.instagramPost} target="_blank" className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted hover:text-ink"><FiInstagram className="w-3 h-3" /> Instagram</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
