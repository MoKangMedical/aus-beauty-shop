"use client";

import { create } from "zustand";
import { CartItem } from "@/lib/types";
import { products } from "@/lib/products";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (productId: string, quantity?: number, color?: string, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleOpen: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (productId, quantity = 1, color?, size?) => {
    const items = [...get().items];
    const existing = items.find(
      (i) => i.productId === productId && i.color === color && i.size === size
    );
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ productId, quantity, color, size });
    }
    set({ items, isOpen: true });
  },

  removeItem: (productId) => {
    set({ items: get().items.filter((i) => i.productId !== productId) });
  },

  updateQuantity: (productId, quantity) => {
    set({
      items: get().items.map((i) =>
        i.productId === productId ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    });
  },

  clearCart: () => set({ items: [] }),
  toggleOpen: () => set({ isOpen: !get().isOpen }),
  getTotal: () => {
    return get().items.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  },
  getItemCount: () => get().items.reduce((a, b) => a + b.quantity, 0),
}));
