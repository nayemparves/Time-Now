'use client'

import { useCart } from "@/lib/cart-store"
import { products } from "@/lib/catalog"
import {
  Timer,
  ShieldCheck,
  Droplets,
  ChevronRight,
} from "lucide-react"

// Verified watch images (confirmed via image search + VLM - all pure white backgrounds)
const watchLeft = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e10bff4823ac.jpg" // blue dial chronograph on leather
const watchCenter = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bfa282b662f9.webp" // silver stainless steel bracelet
const watchRight = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/699bb4b74eab.jpg" // black leather strap chronograph

const features = [
  { icon: Timer, label: "Chronograph Function" },
  { icon: ShieldCheck, label: "Heritage Design" },
  { icon: Droplets, label: "50M Water Resistant" },
]

export function Hero() {
  const { openQuickView } = useCart()

  const handleShopNow = () => {
    document
      .getElementById("new")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleWatchClick = (id: string) => {
    const p = products.find((x) => x.id === id)
    if (p) openQuickView(p)
  }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft bokeh / atmospheric glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.30) 0%, rgba(197,160,89,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-10 h-[260px] w-[260px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(140,180,120,0.45) 0%, rgba(140,180,120,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[45%_55%] gap-6 lg:gap-10 items-center">
          {/* LEFT: Text zone */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Brand + New Arrival script */}
            <div className="mb-4 lg:mb-6">
              <p className="font-display font-extrabold text-black text-3xl md:text-4xl lg:text-5xl tracking-tight leading-none">
                TIMEX
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                <span
                  className="text-6xl md:text-7xl lg:text-8xl leading-none text-[#BF9B5E]"
                  style={{ fontFamily: "var(--font-great-vibes), cursive" }}
                >
                  New Arrival
                </span>
              </div>
              {/* Gold underline swoosh */}
              <div className="mx-auto lg:mx-0 mt-2 h-[2px] w-56 md:w-72 rounded-full bg-gradient-to-r from-transparent via-[#BF9B5E] to-transparent" />
            </div>

            {/* Main title - 3 lines */}
            <h1 className="font-display text-black">
              <span className="block text-xl md:text-2xl lg:text-[28px] font-semibold tracking-wide">
                THE WATERBURY HERITAGE
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#BF9B5E] my-1 md:my-2 leading-tight">
                39mm CHRONOGRAPH
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                <span className="hidden lg:block h-px w-12 bg-neutral-400" />
                <span className="text-base md:text-lg font-medium tracking-[0.25em] text-neutral-700">
                  COLLECTION
                </span>
                <span className="hidden lg:block h-px w-12 bg-neutral-400" />
              </span>
            </h1>

            {/* Selling point icons */}
            <div className="mt-7 md:mt-9 grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center lg:items-start gap-2"
                >
                  <div className="h-11 w-11 md:h-13 md:w-13 rounded-full bg-[#BF9B5E]/10 border border-[#BF9B5E]/30 flex items-center justify-center">
                    <f.icon
                      className="h-5 w-5 md:h-6 md:w-6 text-[#BF9B5E]"
                      strokeWidth={2.5}
                      fill="rgba(191,155,94,0.15)"
                    />
                  </div>
                  <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-neutral-700 text-center lg:text-left leading-tight">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>

            {/* SHOP NOW button */}
            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <button
                onClick={handleShopNow}
                className="group inline-flex items-center gap-2 bg-[#DDB87A] hover:bg-[#C9A461] text-black font-display font-bold uppercase tracking-wider text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Shop Now
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: Watch cluster */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] flex items-center justify-center">
              {/* Soft backdrop disc */}
              <div
                aria-hidden
                className="absolute inset-0 m-auto h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] rounded-full opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(197,160,89,0.25) 0%, rgba(197,160,89,0) 70%)",
                }}
              />

              {/* Left watch - blue NATO strap */}
              <button
                onClick={() => handleWatchClick("p1")}
                aria-label="View Timex Waterbury Blue Dial"
                className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 translate-y-8 md:translate-y-12 z-10 w-[42%] md:w-[40%] hover:scale-105 transition-transform"
              >
                <img
                  src={watchLeft}
                  alt="Timex Waterbury Heritage Chronograph Blue Dial Men's Watch"
                  className="w-full object-contain rotate-[-6deg]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </button>

              {/* Center watch - silver bracelet (hero, largest) */}
              <button
                onClick={() => handleWatchClick("p2")}
                aria-label="View Timex Waterbury Silver Dial"
                className="relative z-20 w-[50%] md:w-[48%] -translate-y-6 md:-translate-y-8 hover:scale-105 transition-transform"
              >
                <img
                  src={watchCenter}
                  alt="Timex Waterbury Heritage Chronograph Silver Dial Men's Watch"
                  className="w-full object-contain "
                  style={{ mixBlendMode: "multiply" }}
                />
              </button>

              {/* Right watch - black leather strap */}
              <button
                onClick={() => handleWatchClick("p3")}
                aria-label="View Timex Waterbury Black Dial"
                className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 translate-y-8 md:translate-y-12 z-10 w-[42%] md:w-[40%] hover:scale-105 transition-transform"
              >
                <img
                  src={watchRight}
                  alt="Timex Waterbury Heritage Chronograph Black Dial Men's Watch"
                  className="w-full object-contain rotate-[6deg]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Welcome strip */}
      <div className="bg-black text-white py-3 text-center text-xs md:text-sm tracking-wider">
        <span className="text-[#DDB87A] font-bold">Welcome to Time Now</span>
        <span className="mx-2 text-white/40">|</span>
        <span className="text-white/80">Most Popular Brands</span>
      </div>
    </section>
  )
}
