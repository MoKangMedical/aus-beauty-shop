import Link from "next/link";
import { products, getNewProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopAllPage() {
  const newProducts = getNewProducts();
  const categories = [
    { slug: "press-on-nails", label: "Press-On Nails", zh: "穿戴甲" },
    { slug: "beauty-toys", label: "Beauty Toys", zh: "美妆玩具" },
    { slug: "bag-charms", label: "Bag Charms", zh: "包挂件" },
    { slug: "accessories", label: "Accessories", zh: "饰品配件" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">The Edit</p>
        <h1 className="text-3xl md:text-4xl font-serif italic text-ink">All Products</h1>
        <p className="text-sm text-muted mt-4 max-w-md mx-auto leading-relaxed">
          {products.length} curated pieces — from nails to accessories. Every item hand-selected from independent studios across Asia.
        </p>
      </div>

      {/* Quick-filter categories */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="px-6 py-2.5 border border-stone text-xs uppercase tracking-[0.12em] text-muted hover:text-ink hover:border-ink transition-all"
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* All products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
