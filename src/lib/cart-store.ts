'use client'

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "./catalog"

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: CartItem[]
  isCartOpen: boolean
  isMenuOpen: boolean
  isSearchOpen: boolean
  isCheckoutOpen: boolean
  isLoginOpen: boolean
  isTrackOpen: boolean
  quickViewProduct: Product | null
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  openMenu: () => void
  closeMenu: () => void
  openSearch: () => void
  closeSearch: () => void
  openCheckout: () => void
  closeCheckout: () => void
  openLogin: () => void
  closeLogin: () => void
  openTrack: () => void
  closeTrack: () => void
  openQuickView: (product: Product) => void
  closeQuickView: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      isMenuOpen: false,
      isSearchOpen: false,
      isCheckoutOpen: false,
      isLoginOpen: false,
      isTrackOpen: false,
      quickViewProduct: null,
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id)
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              isCartOpen: true,
            }
          }
          return { items: [...state.items, { product, quantity: 1 }], isCartOpen: true }
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.product.id !== id) })),
      updateQuantity: (id, qty) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === id ? { ...i, quantity: Math.max(1, qty) } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      openMenu: () => set({ isMenuOpen: true }),
      closeMenu: () => set({ isMenuOpen: false }),
      openSearch: () => set({ isSearchOpen: true }),
      closeSearch: () => set({ isSearchOpen: false }),
      openCheckout: () => set({ isCheckoutOpen: true, isCartOpen: false }),
      closeCheckout: () => set({ isCheckoutOpen: false }),
      openLogin: () => set({ isLoginOpen: true }),
      closeLogin: () => set({ isLoginOpen: false }),
      openTrack: () => set({ isTrackOpen: true }),
      closeTrack: () => set({ isTrackOpen: false }),
      openQuickView: (product) => set({ quickViewProduct: product }),
      closeQuickView: () => set({ quickViewProduct: null }),
    }),
    {
      name: "timenow-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
)

export const formatBDT = (n: number) =>
  "\u09F3" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
