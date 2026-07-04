import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return [
    { slug: "press-on-nails" },
    { slug: "beauty-toys" },
    { slug: "bag-charms" },
    { slug: "accessories" },
  ];
}

const info: Record<string, { title: string; zh: string }> = {
  "press-on-nails": { title: "Press-On Nails", zh: "穿戴甲" },
  "beauty-toys": { title: "Beauty Toys", zh: "美妆玩具" },
  "bag-charms": { title: "Bag Charms", zh: "包挂件" },
  accessories: { title: "Accessories", zh: "饰品配件" },
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = info[slug];
  if (!data) notFound();
  const items = getProductsByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12">
        <Link href="/" className="text-[11px] uppercase tracking-widest text-muted hover:text-ink transition-colors">← Home</Link>
        <h1 className="text-3xl font-serif italic mt-4 mb-1">{data.title}</h1>
        <p className="text-xs uppercase tracking-[0.15em] text-muted">{data.zh} · {items.length} products</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
