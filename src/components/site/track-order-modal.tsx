'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useCart } from "@/lib/cart-store"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { Search, Truck, CheckCircle2 } from "lucide-react"

const stages = [
  { label: "Order Placed", desc: "We've received your order" },
  { label: "Order Confirmed", desc: "Payment verified, preparing to ship" },
  { label: "Out for Delivery", desc: "On the way to your address" },
  { label: "Delivered", desc: "Order has been delivered" },
]

export function TrackOrderModal() {
  const { isTrackOpen, closeTrack } = useCart()
  const { toast } = useToast()
  const [trackingNo, setTrackingNo] = useState("")
  const [result, setResult] = useState<{ id: string; stage: number } | null>(null)

  const handleTrack = () => {
    if (!trackingNo.trim()) return
    // Demo tracking - always returns a result at stage 2
    setResult({ id: trackingNo.toUpperCase(), stage: 2 })
    toast({
      title: "Order found",
      description: `Tracking order ${trackingNo.toUpperCase()}`,
    })
  }

  const handleClose = () => {
    setTrackingNo("")
    setResult(null)
    closeTrack()
  }

  return (
    <Dialog open={isTrackOpen} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-black">Track Your Order</DialogTitle>
          <DialogDescription>
            Enter your order number to see the latest status
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              required
              value={trackingNo}
              onChange={(e) => setTrackingNo(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              placeholder="e.g. TN123456"
              className="w-full h-11 pl-10 pr-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black"
            />
          </div>
          <button
            type="button"
            onClick={handleTrack}
            className="w-full h-11 bg-black hover:bg-red-600 text-white rounded-full text-sm font-bold transition-colors"
          >
            Track Now
          </button>
        </div>

        {result && (
          <div className="mt-4 border-t border-neutral-200 pt-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-neutral-500">Order ID</p>
                <p className="font-black text-black">{result.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500">Estimated Delivery</p>
                <p className="text-sm font-semibold">Tomorrow by 6 PM</p>
              </div>
            </div>
            <div className="space-y-3">
              {stages.map((s, idx) => {
                const done = idx <= result.stage
                const current = idx === result.stage
                return (
                  <div key={s.label} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-7 w-7 rounded-full flex items-center justify-center ${
                          done
                            ? "bg-green-600 text-white"
                            : "bg-neutral-100 text-neutral-400"
                        } ${current ? "ring-4 ring-green-100" : ""}`}
                      >
                        {done ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Truck className="h-3.5 w-3.5" />
                        )}
                      </div>
                      {idx < stages.length - 1 && (
                        <div
                          className={`w-0.5 h-6 ${
                            done ? "bg-green-600" : "bg-neutral-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <p
                        className={`text-sm font-bold ${
                          done ? "text-black" : "text-neutral-400"
                        }`}
                      >
                        {s.label}
                      </p>
                      <p
                        className={`text-xs ${
                          done ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
