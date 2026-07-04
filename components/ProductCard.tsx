"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { useCartStore } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-warm mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover img-hover"
          />

          {/* Tags — subtle, minimal */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.isNew && (
              <span className="bg-ink text-cream text-[9px] uppercase tracking-wider px-2 py-0.5">New</span>
            )}
          </div>

          {/* Quick add on hover */}
          <button
            onClick={(e) => { e.preventDefault(); addItem(product.id); }}
            className="absolute bottom-0 left-0 right-0 bg-ink/90 text-cream text-xs uppercase tracking-wider py-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            Quick add
          </button>
        </div>
      </Link>

      <Link href={`/product/${product.id}`}>
        <h3 className="text-sm font-medium text-ink leading-snug">{product.name}</h3>
        <p className="text-[11px] text-muted mt-0.5 uppercase tracking-wider">{product.nameZh}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm font-medium text-ink">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
