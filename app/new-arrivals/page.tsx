import { getNewProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function NewArrivalsPage() {
  const newProducts = getNewProducts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-14 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-3">Just Landed</p>
        <h1 className="text-3xl md:text-4xl font-serif italic text-ink">New Arrivals</h1>
        <p className="text-sm text-muted mt-4 max-w-md mx-auto leading-relaxed">
          Fresh from the studios — {newProducts.length} new pieces added this month. Be the first to discover them.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {newProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
