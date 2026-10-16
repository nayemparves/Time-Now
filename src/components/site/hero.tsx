'use client'

import { useCart } from "@/lib/cart-store"
import { products } from "@/lib/catalog"
import {
  Timer,
  ShieldCheck,
  Droplets,
  ChevronRight,
  Sparkles,
  MessageCircle,
} from "lucide-react"

// Verified watch images (all confirmed pure white backgrounds via VLM)
const watchLeft = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/203bafc4bf5a.jpg" // blue fabric NATO strap
const watchCenter = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bef6f2d69848.jpg" // light blue dial steel bracelet (hero)
const watchRight = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b683122e9b63.jpg" // gray/silver dial leather strap

// Soft blurred greenery background (top-right corner bleed)
const bgLeaves = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/30a6abc70e09.jpg"

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
    <section className="relative bg-[#f9f9f7] overflow-hidden">
      {/* Soft blurred greenery in top-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-32 h-[500px] w-[500px] opacity-50"
        style={{
          backgroundImage: `url(${bgLeaves})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(circle at 70% 30%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 70% 30%, black 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      {/* Warm gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.40) 0%, rgba(197,160,89,0) 70%)",
        }}
      />

      {/* Yellow starburst offer badge (top-right floating widget) */}
      <button
        onClick={() =>
          document.getElementById("sale")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="View special offers"
        className="absolute top-6 right-6 z-30 h-12 w-12 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg flex items-center justify-center transition-colors"
      >
        <Sparkles className="h-6 w-6 text-black" />
      </button>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-[42%_58%] gap-4 lg:gap-6 items-center">
          {/* LEFT: Text zone */}
          <div className="order-2 lg:order-1 text-center lg:text-left z-10">
            {/* TIMEX logo */}
            <div className="mb-3 lg:mb-4">
              <h2 className="font-display font-extrabold text-black text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none flex items-start justify-center lg:justify-start">
                TIMEX
                <sup className="text-base md:text-lg text-black/70 ml-1 mt-2 font-normal">®</sup>
              </h2>
            </div>

            {/* Gold "New Arrival" script (slight upward tilt) */}
            <div className="mb-3 lg:mb-4 -rotate-2 origin-left flex justify-center lg:justify-start">
              <span
                className="text-6xl md:text-7xl lg:text-8xl leading-none"
                style={{
                  fontFamily: "var(--font-great-vibes), cursive",
                  background:
                    "linear-gradient(135deg, #E6C98C 0%, #BF9B5E 45%, #8B6B2F 75%, #C5A059 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 2px 3px rgba(191,155,94,0.25))",
                }}
              >
                New Arrival
              </span>
            </div>
            {/* Gold underline swoosh */}
            <div className="mx-auto lg:mx-0 -mt-2 mb-4 h-[2px] w-48 md:w-64 rounded-full bg-gradient-to-r from-transparent via-[#BF9B5E] to-transparent" />

            {/* Main 3-line title */}
            <h1 className="font-display text-black mb-6 md:mb-8">
              <span className="block text-base md:text-lg lg:text-xl font-medium tracking-[0.18em] text-neutral-800 uppercase">
                The Waterbury Heritage
              </span>
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold my-1 md:my-2 leading-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #E6C98C 0%, #BF9B5E 50%, #8B6B2F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.02em",
                }}
              >
                39mm Chronograph
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                <span className="hidden lg:block h-px w-10 bg-neutral-400" />
                <span className="text-sm md:text-base font-medium tracking-[0.3em] text-neutral-700 uppercase">
                  Collection
                </span>
                <span className="hidden lg:block h-px w-10 bg-neutral-400" />
              </span>
            </h1>

            {/* Selling point icons - gold line-art */}
            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-5 max-w-md mx-auto lg:mx-0">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center lg:items-start gap-2"
                >
                  <div className="h-11 w-11 md:h-12 md:w-12 rounded-full border-2 border-[#BF9B5E] flex items-center justify-center bg-white/60">
                    <f.icon
                      className="h-5 w-5 md:h-6 md:w-6 text-[#8B6B2F]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-neutral-700 text-center lg:text-left leading-tight">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>

            {/* SHOP NOW button - wide gold pill */}
            <div className="mt-7 md:mt-9 flex justify-center lg:justify-start">
              <button
                onClick={handleShopNow}
                className="group inline-flex items-center gap-3 bg-[#D4A056] hover:bg-[#C18F44] text-black font-display font-extrabold uppercase tracking-[0.15em] text-sm md:text-base px-10 md:px-14 py-4 md:py-5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Shop Now
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: Watch cluster - tight overlapping horizontal row */}
          <div className="order-1 lg:order-2 relative z-10">
            <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] flex items-center justify-center">
              {/* Left watch - blue fabric NATO (back-left, tilted) */}
              <button
                onClick={() => handleWatchClick("p1")}
                aria-label="View Timex Waterbury Blue Dial"
                className="absolute left-1/2 -translate-x-[115%] md:-translate-x-[125%] top-1/2 -translate-y-1/2 translate-y-4 md:translate-y-8 z-10 w-[44%] md:w-[42%] hover:scale-105 hover:z-30 transition-all"
              >
                <img
                  src={watchLeft}
                  alt="Timex Waterbury Heritage Chronograph Blue Dial Men's Watch"
                  className="w-full object-contain rotate-[-10deg]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </button>

              {/* Center watch - silver bracelet (front, hero, largest) */}
              <button
                onClick={() => handleWatchClick("p2")}
                aria-label="View Timex Waterbury Silver Dial"
                className="relative z-20 w-[48%] md:w-[46%] -translate-y-3 md:-translate-y-5 hover:scale-105 transition-transform"
              >
                <img
                  src={watchCenter}
                  alt="Timex Waterbury Heritage Chronograph Silver Dial Men's Watch"
                  className="w-full object-contain rotate-[2deg]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </button>

              {/* Right watch - black leather (back-right, tilted) */}
              <button
                onClick={() => handleWatchClick("p3")}
                aria-label="View Timex Waterbury Black Dial"
                className="absolute left-1/2 translate-x-[15%] md:translate-x-[25%] top-1/2 -translate-y-1/2 translate-y-4 md:translate-y-8 z-10 w-[44%] md:w-[42%] hover:scale-105 hover:z-30 transition-all"
              >
                <img
                  src={watchRight}
                  alt="Timex Waterbury Heritage Chronograph Black Dial Men's Watch"
                  className="w-full object-contain rotate-[10deg]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Green chat bubble widget (bottom-right floating) */}
      <button
        onClick={() =>
          document
            .getElementById("reviews")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Customer support chat"
        className="absolute bottom-20 right-5 z-30 h-12 w-12 md:h-14 md:w-14 rounded-full bg-teal-500 hover:bg-teal-400 shadow-lg flex items-center justify-center transition-colors"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
      </button>

      {/* Welcome strip */}
      <div className="relative bg-black text-white py-3 text-center text-xs md:text-sm tracking-wider z-10">
        <span className="text-[#DDB87A] font-bold">Welcome to Time Now</span>
        <span className="mx-2 text-white/40">|</span>
        <span className="text-white/80">Most Popular Brands</span>
      </div>
    </section>
  )
}
