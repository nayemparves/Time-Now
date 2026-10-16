'use client'

import { useState } from "react"
import { products, reviews, type Product } from "@/lib/catalog"
import { useCart, formatBDT } from "@/lib/cart-store"
import { useToast } from "@/hooks/use-toast"
import { ShoppingBag, Eye, Star } from "lucide-react"

function ProductCard({ p }: { p: Product }) {
  const { addItem, openQuickView } = useCart()
  const { toast } = useToast()
  const [added, setAdded] = useState(false)

  const discount = p.oldPrice
    ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
    : 0

  const handleAdd = () => {
    addItem(p)
    setAdded(true)
    toast({
      title: "Added to cart",
      description: `${p.brand} - ${formatBDT(p.price)}`,
    })
    setTimeout(() => setAdded(false), 1500)
  }

  const handleQuickView = () => openQuickView(p)

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        {discount > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
            Sale -{discount}%
          </span>
        )}
        {p.badge === "new" && (
          <span className="absolute top-3 right-3 z-10 bg-black text-white text-xs font-bold px-2.5 py-1 rounded-md">
            NEW
          </span>
        )}
        {p.badge === "hot" && !discount && (
          <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">
            HOT
          </span>
        )}
        <button onClick={handleQuickView} className="block w-full h-full" aria-label={`View ${p.name}`}>
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </button>
        <button
          onClick={handleQuickView}
          className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white/90 hover:bg-red-600 hover:text-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md"
          aria-label="Quick view"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
          {p.brand}
        </p>
        <h3 className="text-sm text-neutral-800 leading-snug mb-3 line-clamp-2 flex-1">
          <button
            onClick={handleQuickView}
            className="hover:text-red-600 transition-colors text-left"
          >
            {p.name}
          </button>
        </h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-black text-black">
            {formatBDT(p.price)}
          </span>
          {p.oldPrice && (
            <span className="text-sm text-neutral-400 line-through">
              {formatBDT(p.oldPrice)}
            </span>
          )}
        </div>
        <button
          onClick={handleAdd}
          className={`w-full h-10 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
            added
              ? "bg-green-600 text-white"
              : "bg-black hover:bg-red-600 text-white"
          }`}
        >
          <ShoppingBag className="h-4 w-4" />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}

export function ProductSection({
  id,
  title,
  subtitle,
  products: list,
}: {
  id: string
  title: string
  subtitle?: string
  products: Product[]
}) {
  const { toast } = useToast()
  return (
    <section id={id} className="bg-white py-12 md:py-16 scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-black mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-neutral-600 text-sm md:text-base">{subtitle}</p>
            )}
          </div>
          <button
            onClick={() =>
              toast({
                title: `Browsing all ${title}`,
                description: `Showing all available ${title.toLowerCase()} products below.`,
              })
            }
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-neutral-900 py-12 md:py-16 scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            What Our Customers Say
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Trusted by 10,000+ happy customers across Bangladesh
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 md:p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < r.rating
                        ? "fill-red-600 text-red-600"
                        : "text-neutral-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4 flex-1">
                &ldquo;{r.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-sm text-black">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
