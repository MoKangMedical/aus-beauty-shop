import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 mb-4">
              <span className="text-lg font-serif italic text-ink">aus</span>
              <span className="text-lg font-serif italic font-bold text-accent">beauty</span>
            </Link>
            <p className="text-xs text-muted leading-relaxed max-w-[220px] mb-6">
              Curated beauty and accessories — sourced from independent studios across Asia, delivered to Australia and New Zealand.
            </p>
            <div className="flex gap-4">
              <a href="https://tiktok.com/@ausbeautyshop" target="_blank" className="text-muted hover:text-ink transition-colors"><FaTiktok className="w-4 h-4" /></a>
              <a href="https://instagram.com/ausbeautyshop" target="_blank" className="text-muted hover:text-ink transition-colors"><FiInstagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.18em] font-medium text-ink mb-4">Shop</h4>
            <div className="space-y-2.5">
              {[
                { href: "/shop", label: "All Products" },
                { href: "/new-arrivals", label: "New Arrivals" },
                { href: "/category/press-on-nails", label: "Press-On Nails" },
                { href: "/category/beauty-toys", label: "Beauty Toys" },
                { href: "/category/bag-charms", label: "Bag Charms" },
                { href: "/category/accessories", label: "Accessories" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-xs text-muted hover:text-ink transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.18em] font-medium text-ink mb-4">Info</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-xs text-muted hover:text-ink transition-colors">About</Link>
              <Link href="/shipping" className="block text-xs text-muted hover:text-ink transition-colors">Shipping</Link>
              <Link href="/returns" className="block text-xs text-muted hover:text-ink transition-colors">Returns</Link>
              <Link href="/faq" className="block text-xs text-muted hover:text-ink transition-colors">FAQ</Link>
              <Link href="/contact" className="block text-xs text-muted hover:text-ink transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.18em] font-medium text-ink mb-4">Contact</h4>
            <div className="space-y-2.5 text-xs text-muted">
              <p>hello@ausbeauty.shop</p>
              <p>collab@ausbeauty.shop</p>
              <p className="mt-2">Sydney, Australia</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-stone flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-wider text-muted gap-2">
          <span>© 2025 AUS Beauty. All rights reserved.</span>
          <div className="flex gap-4">
            <span>Afterpay</span>
            <span>Free shipping over $60</span>
            <span>30-day returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
