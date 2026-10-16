'use client'

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCart, formatBDT } from "@/lib/cart-store"
import { products, brands } from "@/lib/catalog"
import { Search, X, ShoppingBag } from "lucide-react"
import { useMemo, useState, useEffect, useRef } from "react"

export function SearchModal() {
  const { isSearchOpen, closeSearch, openQuickView, addItem } = useCart()
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 100)
      return () => clearTimeout(t)
    }
  }, [isSearchOpen])

  // Clear query when modal closes
  useEffect(() => {
    if (!isSearchOpen) {
      const t = setTimeout(() => setQuery(""), 200)
      return () => clearTimeout(t)
    }
  }, [isSearchOpen])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
      )
      .slice(0, 8)
  }, [query])

  const matchedBrands = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return brands.filter((b) => b.name.toLowerCase().includes(q)).slice(0, 5)
  }, [query])

  return (
    <Dialog open={isSearchOpen} onOpenChange={(o) => !o && closeSearch()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0 top-[15%] translate-y-0">
        <DialogTitle className="sr-only">Search products</DialogTitle>
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200">
          <Search className="h-5 w-5 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search watches, brands, SKUs..."
            className="flex-1 text-base outline-none bg-transparent"
          />
          <button
            onClick={closeSearch}
            className="p-1.5 hover:bg-neutral-100 rounded-full"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div className="p-6">
              <p className="text-xs font-bold uppercase text-neutral-400 mb-3">
                Popular Brands
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.slice(0, 12).map((b) => (
                  <button
                    key={b.name}
                    onClick={() => setQuery(b.name)}
                    className="px-3 py-1.5 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-700 hover:border-red-600 hover:text-red-600"
                  >
                    {b.name}
                  </button>
                ))}
              </div>
              <p className="text-xs font-bold uppercase text-neutral-400 mt-6 mb-3">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {["Casio", "G-Shock", "Fossil", "Seiko 5", "Tissot", "Chronograph"].map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => setQuery(t)}
                      className="px-3 py-1.5 bg-neutral-100 rounded-full text-xs text-neutral-700 hover:bg-neutral-200"
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 && matchedBrands.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-sm text-neutral-500">
                No products found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-neutral-400 mt-2">
                Try a different keyword or browse our brands.
              </p>
            </div>
          ) : (
            <div className="p-2">
              {matchedBrands.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs font-bold uppercase text-neutral-400 px-3 py-2">
                    Brands
                  </p>
                  {matchedBrands.map((b) => (
                    <button
                      key={b.name}
                      onClick={() => setQuery(b.name)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-50 text-sm font-semibold text-neutral-800"
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              )}
              {results.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase text-neutral-400 px-3 py-2">
                    Products ({results.length})
                  </p>
                  {results.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-50 cursor-pointer"
                      onClick={() => {
                        closeSearch()
                        setTimeout(() => openQuickView(p), 200)
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-14 w-14 rounded-lg object-cover bg-neutral-50 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-red-600 uppercase">
                          {p.brand}
                        </p>
                        <p className="text-sm text-neutral-800 line-clamp-1">
                          {p.name}
                        </p>
                        <p className="text-sm font-bold text-black">
                          {formatBDT(p.price)}
                          {p.oldPrice && (
                            <span className="ml-2 text-xs text-neutral-400 line-through">
                              {formatBDT(p.oldPrice)}
                            </span>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          addItem(p)
                          closeSearch()
                        }}
                        className="h-9 w-9 rounded-full bg-black hover:bg-red-600 text-white flex items-center justify-center shrink-0"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
