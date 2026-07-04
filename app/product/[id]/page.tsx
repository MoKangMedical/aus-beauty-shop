import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
