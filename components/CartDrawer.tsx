"use client";

import { useCartStore } from "@/lib/store";
import { products } from "@/lib/products";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

export default function CartDrawer() {
  const { items, isOpen, toggleOpen, removeItem, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-ink/20 z-50" onClick={toggleOpen} />}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-stone">
            <h2 className="text-sm uppercase tracking-[0.15em] font-medium">
              Cart ({items.reduce((a, b) => a + b.quantity, 0)})
            </h2>
            <button onClick={toggleOpen} className="p-1 hover:text-accent transition-colors">
              <FiX className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 text-muted">
                <p className="text-xs uppercase tracking-wider">Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => {
                const p = products.find((x) => x.id === item.productId);
                if (!p) return null;
                return (
                  <div key={item.productId} className="flex gap-4">
                    <img src={p.images[0]} alt={p.name} className="w-20 h-24 object-cover" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{p.name}</h4>
                      {item.color && <p className="text-[11px] text-muted uppercase">{item.color}</p>}
                      <p className="text-sm font-medium mt-1">${(p.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="text-muted hover:text-ink"><FiMinus className="w-3.5 h-3.5" /></button>
                        <span className="text-xs w-5 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="text-muted hover:text-ink"><FiPlus className="w-3.5 h-3.5" /></button>
                        <button onClick={() => removeItem(item.productId)} className="ml-auto text-muted hover:text-red-500"><FiTrash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-stone p-6 space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)} AUD</span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-muted text-center">Shipping calculated at checkout</p>
              <button className="w-full bg-ink text-cream py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-charcoal transition-colors">
                Checkout · ${total.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
