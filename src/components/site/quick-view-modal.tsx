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
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  Check,
} from "lucide-react"
import { useState } from "react"

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addItem } = useCart()
  const { toast } = useToast()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const p = quickViewProduct
  if (!p) return null

  const discount = p.oldPrice
    ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
    : 0

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
      <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[92vh] overflow-y-auto">
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
              <span className="text-xs text-neutral-500 ml-2">(5.0 • 124 reviews)</span>
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
              Authentic {p.brand} timepiece with official warranty. Comes with original
              packaging, manuals, and certificate of authenticity. Free delivery
              inside Dhaka, nationwide cash on delivery available.
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
              <span className="text-sm font-semibold text-neutral-700">Quantity:</span>
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
              {added ? "Added to Cart!" : `Add to Cart - ${formatBDT(p.price * qty)}`}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
