'use client'

import { useCart, formatBDT } from "@/lib/cart-store"
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
} from "lucide-react"

export function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
  } = useCart()

  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0)

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-bold text-lg">Shopping Cart</h2>
            <span className="text-sm text-neutral-500">({items.length})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-neutral-100 rounded-full"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="h-20 w-20 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
              <ShoppingBag className="h-10 w-10 text-neutral-400" />
            </div>
            <h3 className="font-bold text-lg mb-1">Your cart is empty</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Browse our collection and add your favorite watches.
            </p>
            <button
              onClick={closeCart}
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 border border-neutral-200 rounded-xl"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-lg object-cover bg-neutral-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-red-600 uppercase">
                      {item.product.brand}
                    </p>
                    <h4 className="text-sm text-neutral-800 line-clamp-2 mb-1">
                      {item.product.name}
                    </h4>
                    <p className="text-sm font-bold text-black">
                      {formatBDT(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="h-7 w-7 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="h-7 w-7 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-neutral-400 hover:text-red-600 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-700">Subtotal:</span>
                <span className="text-xl font-black text-black">
                  {formatBDT(subtotal)}
                </span>
              </div>
              <p className="text-xs text-neutral-500">
                Shipping & taxes calculated at checkout.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={closeCart}
                  className="h-11 rounded-full border border-neutral-300 font-semibold text-sm hover:bg-neutral-50"
                >
                  View Cart
                </button>
                <button className="h-11 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
