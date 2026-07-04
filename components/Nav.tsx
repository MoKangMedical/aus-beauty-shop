"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/lib/store";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const mainLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/new-arrivals", label: "New" },
  { href: "/category/press-on-nails", label: "Nails" },
  { href: "/category/beauty-toys", label: "Beauty" },
  { href: "/category/bag-charms", label: "Charms" },
  { href: "/category/accessories", label: "Acc." },
];

const subLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const cartCount = useCartStore((s) => s.items.reduce((a, b) => a + b.quantity, 0));
  const toggleCart = useCartStore((s) => s.toggleOpen);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1 shrink-0" onClick={() => setMenuOpen(false)}>
            <span className="text-lg font-serif italic tracking-tight text-ink">aus</span>
            <span className="text-lg font-serif italic font-bold tracking-tight text-accent">beauty</span>
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  pathname.startsWith(l.href) ? "text-ink font-medium" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4">
              {subLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <button onClick={toggleCart} className="relative p-1 text-ink/70 hover:text-ink transition-colors">
              <FiShoppingBag className="w-[18px] h-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="lg:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX className="w-[18px] h-[18px]" /> : <FiMenu className="w-[18px] h-[18px]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-stone bg-cream pb-4">
          {[...mainLinks, ...subLinks].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-xs uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
