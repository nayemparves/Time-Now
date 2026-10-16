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
import { Check, Truck, ShieldCheck } from "lucide-react"
import { useState } from "react"

export function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, items, clearCart } = useCart()
  const { toast } = useToast()
  const [placed, setPlaced] = useState(false)
  const [orderId, setOrderId] = useState("")

  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0)
  const shipping = subtotal >= 15000 ? 0 : 100
  const total = subtotal + shipping

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const id = "TN" + Math.floor(100000 + Math.random() * 900000)
    setOrderId(id)
    setPlaced(true)
    toast({
      title: "Order placed successfully!",
      description: `Your order ID is ${id}`,
    })
  }

  const handleClose = () => {
    if (placed) {
      clearCart()
      setPlaced(false)
      setOrderId("")
    }
    closeCheckout()
  }

  return (
    <Dialog open={isCheckoutOpen} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-black">
            {placed ? "Order Confirmed" : "Checkout"}
          </DialogTitle>
          <DialogDescription>
            {placed
              ? "Thank you for your order!"
              : "Complete your order details below"}
          </DialogDescription>
        </DialogHeader>

        {placed ? (
          <div className="py-6 text-center">
            <div className="h-16 w-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-black mb-1">Thank You!</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Your order has been placed successfully.
            </p>
            <div className="bg-neutral-50 rounded-xl p-4 mb-4 inline-block">
              <p className="text-xs text-neutral-500">Order ID</p>
              <p className="text-lg font-black text-black">{orderId}</p>
            </div>
            <p className="text-xs text-neutral-500 mb-6 max-w-md mx-auto">
              We&apos;ve received your order and will call you shortly to confirm
              delivery details. You can track your order using the Order ID above.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-sm text-neutral-500 mb-4">
              Your cart is empty. Add some products first.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-red-600"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            {/* Order summary */}
            <div className="bg-neutral-50 rounded-xl p-4">
              <p className="text-xs font-bold uppercase text-neutral-500 mb-2">
                Order Summary ({items.length} items)
              </p>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-neutral-700 line-clamp-1 pr-2">
                      {item.quantity}× {item.product.brand}{" "}
                      {item.product.name.slice(0, 30)}...
                    </span>
                    <span className="font-semibold shrink-0">
                      {formatBDT(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-200 mt-3 pt-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-semibold">{formatBDT(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "FREE" : formatBDT(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black pt-1">
                  <span>Total</span>
                  <span>{formatBDT(total)}</span>
                </div>
              </div>
            </div>

            {/* Customer info */}
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="Full Name *"
                className="h-11 px-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black col-span-2"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number *"
                className="h-11 px-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                className="h-11 px-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black"
              />
              <textarea
                required
                placeholder="Full Delivery Address *"
                rows={3}
                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black col-span-2 resize-none"
              />
              <select
                required
                defaultValue=""
                className="h-11 px-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black col-span-2"
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="card">Card Payment</option>
              </select>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-500 pt-1">
              <span className="flex items-center gap-1">
                <Truck className="h-3.5 w-3.5" /> Free delivery over ৳15,000
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Secure checkout
              </span>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-bold transition-colors"
            >
              Place Order - {formatBDT(total)}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
