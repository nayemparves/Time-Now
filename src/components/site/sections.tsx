'use client'

import { brands, categories, services } from "@/lib/catalog"
import {
  Store,
  Truck,
  Wrench,
  Star,
} from "lucide-react"

const iconMap = {
  store: Store,
  truck: Truck,
  wrench: Wrench,
  star: Star,
} as const

export function BrandStrip() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {brands.map((b) => (
            <a
              key={b.name}
              href="#brands"
              className="shrink-0 px-5 py-2 border border-neutral-200 rounded-full text-sm font-bold text-neutral-700 hover:border-red-600 hover:text-red-600 transition-colors"
            >
              {b.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Categories() {
  return (
    <section className="bg-neutral-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-2">
            Shop By Category
          </h2>
          <p className="text-neutral-600 text-sm md:text-base">
            Authenticity Guaranteed and 1-5 Year Warranty On All Watches
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-black"
            >
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                  {c.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="bg-white py-10 md:py-12 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap]
            return (
              <div
                key={s.title}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-neutral-200"
              >
                <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base text-black">
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 leading-tight mt-0.5">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
