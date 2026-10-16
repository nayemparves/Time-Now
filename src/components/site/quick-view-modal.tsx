'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useCart, formatBDT } from "@/lib/cart-store"
import { useToast } from "@/hooks/use-toast"
import { getRelatedProducts } from "@/lib/catalog"
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  Check,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

function RelatedCard({
  product,
  active,
  onSelect,
}: {
  product: import("@/lib/catalog").Product
  active: boolean
  onSelect: () => void
}) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <div
      className={`group relative bg-white rounded-xl border overflow-hidden cursor-pointer transition-all ${
        active
          ? "border-red-600 ring-2 ring-red-600/30"
          : "border-neutral-200 hover:border-red-400 hover:shadow-md"
      }`}
      onClick={onSelect}
    >
      <div className="relative aspect-square bg-neutral-50 overflow-hidden">
        {discount > 0 && (
          <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            -{discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            addItem(product)
            toast({
              title: "Added to cart",
              description: `${product.brand} - ${formatBDT(product.price)}`,
            })
          }}
          className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-black hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="p-2.5">
        <p className="text-[10px] font-bold uppercase tracking-wide text-red-600 line-clamp-1">
          {product.brand}
        </p>
        <p className="text-xs text-neutral-800 leading-snug line-clamp-2 mb-1.5 min-h-[2rem]">
          {product.name}
        </p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-black text-black">
            {formatBDT(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-[10px] text-neutral-400 line-through">
              {formatBDT(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addItem, openQuickView } = useCart()
  const { toast } = useToast()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const p = quickViewProduct
  if (!p) return null

  const discount = p.oldPrice
    ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
    : 0

  const related = getRelatedProducts(p, 4)

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(p)
    setAdded(true)
    toast({
      title: "Added to cart",
      description: `${qty} × ${p.brand} ${p.name.slice(0, 40)}...`,
    })
    setTimeout(() => {
      setAdded(false)
      setQty(1)
      closeQuickView()
    }, 1200)
  }

  const handleSelectRelated = (id: string) => {
    const next = related.find((r) => r.id === id)
    if (next) {
      setQty(1)
      setAdded(false)
      openQuickView(next)
    }
  }

  return (
    <Dialog
      open={!!p}
      onOpenChange={(open) => {
        if (!open) {
          setQty(1)
          setAdded(false)
          closeQuickView()
        }
      }}
    >
      <DialogContent
        key={p.id}
        className="max-w-4xl p-0 overflow-hidden max-h-[92vh]"
      >
        <div className="overflow-y-auto max-h-[92vh]">
          {/* Main product section */}
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square bg-neutral-50">
              {discount > 0 && (
                <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  Sale -{discount}%
                </span>
              )}
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <DialogHeader className="p-0 space-y-0">
                <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                  {p.brand}
                </p>
                <DialogTitle className="text-xl md:text-2xl font-black leading-tight">
                  {p.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-neutral-500 mt-1">
                  SKU: {p.sku}
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-1 my-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 5
                        ? "fill-red-600 text-red-600"
                        : "text-neutral-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-neutral-500 ml-2">
                  (5.0 • 124 reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-black text-black">
                  {formatBDT(p.price)}
                </span>
                {p.oldPrice && (
                  <span className="text-base text-neutral-400 line-through">
                    {formatBDT(p.oldPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-sm font-bold text-green-600">
                    Save {discount}%
                  </span>
                )}
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                Authentic {p.brand} timepiece with official warranty. Comes with
                original packaging, manuals, and certificate of authenticity.
                Free delivery inside Dhaka, nationwide cash on delivery
                available.
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Check className="h-4 w-4 text-green-600" />
                  100% Authentic with 1-5 Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Truck className="h-4 w-4 text-red-600" />
                  Free Same-Day Delivery in Dhaka
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Shield className="h-4 w-4 text-red-600" />
                  7-Day Return & Exchange Policy
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-neutral-700">
                  Quantity:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-9 w-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 text-lg"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-sm font-bold w-8 text-center">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="h-9 w-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                disabled={added}
                className={`w-full h-12 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-black hover:bg-red-600 text-white"
                }`}
              >
                <ShoppingBag className="h-4 w-4" />
                {added
                  ? "Added to Cart!"
                  : `Add to Cart - ${formatBDT(p.price * qty)}`}
              </button>
            </div>
          </div>

          {/* Related Products section */}
          {related.length > 0 && (
            <div className="border-t border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-black">
                    Related Products
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    More from {p.brand} & similar styles you may like
                  </p>
                </div>
                <span className="text-xs font-semibold text-neutral-500">
                  {related.length} items
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {related.map((r) => (
                  <RelatedCard
                    key={r.id}
                    product={r}
                    active={false}
                    onSelect={() => handleSelectRelated(r.id)}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => {
                    closeQuickView()
                    setTimeout(() => {
                      const sectionMap: Record<string, string> = {
                        men: "men",
                        ladies: "ladies",
                        couple: "couple",
                        accessories: "accessories",
                        gifts: "gifts",
                      }
                      const targetId = sectionMap[p.category] || "men"
                      document
                        .getElementById(targetId)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }, 200)
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  View all {p.category} watches
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
