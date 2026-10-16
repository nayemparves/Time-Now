'use client'

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react"

const slides = [
  {
    eyebrow: "Authenticity Guaranteed",
    title: "Premium Timepieces for Modern Gentlemen",
    subtitle: "1-5 Year Warranty On All Watches",
    cta: "Shop Men's Watch",
    href: "#men",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=80",
  },
  {
    eyebrow: "Most Popular Brands",
    title: "Discover the Latest Watch Collection",
    subtitle: "Casio, Fossil, Seiko, Tissot & 30+ Brands",
    cta: "Explore New Arrivals",
    href: "#new",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1400&q=80",
  },
  {
    eyebrow: "Hot Deals",
    title: "Up to 30% Off on Premium Watches",
    subtitle: "Limited Time Offer - Shop Now",
    cta: "View Hot Deals",
    href: "#hot",
    image: "https://images.unsplash.com/photo-1495856458527-329ab0ef2d1f?w=1400&q=80",
  },
]

export function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length)
  const next = () => setI((p) => (p + 1) % slides.length)

  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      <div className="relative h-[460px] md:h-[560px] lg:h-[620px]">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="relative h-full mx-auto max-w-7xl px-4 md:px-8 flex items-center">
              <div className="max-w-xl text-white">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-red-500 mb-3">
                  {s.eyebrow}
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                  {s.title}
                </h1>
                <p className="text-base md:text-lg text-white/80 mb-8">
                  {s.subtitle}
                </p>
                <a
                  href={s.href}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm md:text-base transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {s.cta}
                </a>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-8 bg-red-600" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-black text-white py-3 text-center text-xs md:text-sm tracking-wider">
        <span className="text-red-500 font-bold">Welcome to Time Now</span>
        <span className="mx-2 text-white/40">|</span>
        <span className="text-white/80">Most Popular Brands</span>
      </div>
    </section>
  )
}
