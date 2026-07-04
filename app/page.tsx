import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
import { FiInstagram, FiArrowRight } from "react-icons/fi";
import { getHotProducts, getNewProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const hot = getHotProducts();
  const newArrivals = getNewProducts().slice(0, 4);

  return (
    <>
      {/* ====== HERO — Editorial Full-Width ====== */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-5">Curated Beauty · Est. 2025</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.08] mb-6 text-ink">
              Objects of<br />
              <span className="text-accent">desire.</span>
            </h1>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-lg mb-10">
              Independent studios. Hand-finished nails. Smart beauty tools. Accessories with personality. 
              Discovered across Asia, delivered to your door in Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary text-xs uppercase tracking-[0.15em]">
                Shop the Edit
              </Link>
              <Link href="/new-arrivals" className="btn-outline text-xs uppercase tracking-[0.15em]">
                New Arrivals
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-warm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800"
                alt="Editorial beauty"
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cream p-3 hidden md:block">
              <p className="text-[9px] uppercase tracking-[0.2em] text-muted">Sourced from independent studios</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CATEGORY GRID — Visual Gallery ====== */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { href: "/category/press-on-nails", label: "Nails", zh: "穿戴甲", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600" },
            { href: "/category/beauty-toys", label: "Beauty", zh: "美妆玩具", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" },
            { href: "/category/bag-charms", label: "Charms", zh: "包挂件", img: "https://images.unsplash.com/photo-1611080626919-7cf3a48dd71b?w=600" },
            { href: "/category/accessories", label: "Accessories", zh: "饰品", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group relative overflow-hidden">
              <div className="aspect-[3/4] bg-warm overflow-hidden">
                <img src={c.img} alt={c.label} className="w-full h-full object-cover img-hover group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white text-lg font-serif italic">{c.label}</h3>
                <p className="text-white/70 text-[10px] uppercase tracking-[0.15em]">{c.zh}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== FEATURED STORY — Editorial Block ====== */}
      <section className="bg-white border-y border-stone">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-4">The Story</p>
              <h2 className="text-2xl md:text-3xl font-serif italic text-ink mb-6 leading-snug">
                From the studio<br />to your hands.
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-8 max-w-md">
                We don&apos;t do warehouses or drop-shipping. Every product on this site has been held, 
                tested, and approved by someone on our team. We travel to independent studios in Guangzhou, 
                Seoul, and Tokyo — meeting the makers, understanding their craft.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink font-medium hover:text-accent transition-colors">
                Read our story <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] bg-warm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800"
                  alt="Studio process"
                  className="w-full h-full object-cover img-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NEW ARRIVALS ====== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-2">Just Landed</p>
            <h2 className="text-2xl font-serif italic text-ink">New arrivals</h2>
          </div>
          <Link href="/new-arrivals" className="text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5">
            View all <FiArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ====== HOT PRODUCTS ====== */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-2">Trending Now</p>
            <h2 className="text-2xl font-serif italic text-ink">Most wanted</h2>
          </div>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5">
            Shop all <FiArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {hot.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ====== INSTAGRAM / SOCIAL ====== */}
      <section className="border-t border-stone bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-2">Follow Along</p>
          <h2 className="text-2xl font-serif italic text-ink mb-6">@ausbeautyshop</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
              "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
              "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
              "https://images.unsplash.com/photo-1611080626919-7cf3a48dd71b?w=400",
            ].map((src, i) => (
              <a key={i} href="https://instagram.com/ausbeautyshop" target="_blank" className="aspect-square bg-warm overflow-hidden block group">
                <img src={src} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </a>
            ))}
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://tiktok.com/@ausbeautyshop" target="_blank" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors">
              <FaTiktok className="w-3.5 h-3.5" /> TikTok
            </a>
            <a href="https://instagram.com/ausbeautyshop" target="_blank" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors">
              <FiInstagram className="w-3.5 h-3.5" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ====== TRUST BAR ====== */}
      <section className="border-t border-stone bg-warm/50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Free Shipping", desc: "Orders over $60 AUD" },
              { title: "Studio-to-Door", desc: "Direct from makers" },
              { title: "30-Day Returns", desc: "Hassle-free policy" },
              { title: "Afterpay", desc: "4 interest-free payments" },
            ].map((v, i) => (
              <div key={i}>
                <h4 className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink mb-1">{v.title}</h4>
                <p className="text-[11px] text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
