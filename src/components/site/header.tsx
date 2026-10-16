'use client'

import { useState } from "react"
import { useCart } from "@/lib/cart-store"
import { megaMenuData } from "@/lib/catalog"
import { useToast } from "@/hooks/use-toast"
import {
  ChevronDown,
  Search,
  ShoppingBag,
  Menu,
  Phone,
  Headphones,
  Flame,
} from "lucide-react"

export function Header() {
  const { openCart, openMenu, items, openSearch, openLogin, openTrack } = useCart()
  const { toast } = useToast()
  const [hovered, setHovered] = useState<string | null>(null)
  const totalQty = items.reduce((s, i) => s + i.quantity, 0)

  const navItems = [
    { key: "brands", label: "Brands", items: ["Casio", "Fossil", "Seiko", "Tissot", "Citizen", "Timex", "Orient", "Rado", "Hamilton", "Longines", "TAG Heuer", "Omega"] },
    { key: "men", label: "Men's Watch", items: megaMenuData.men.items },
    { key: "ladies", label: "Ladies Watch", items: megaMenuData.ladies.items },
    { key: "couple", label: "Couple Watch", items: megaMenuData.couple.items },
    { key: "accessories", label: "Accessories", items: megaMenuData.accessories.items },
    { key: "gifts", label: "Gifts", items: megaMenuData.gifts.items },
  ]

  const handleBrandClick = (e: React.MouseEvent, brand: string) => {
    e.preventDefault()
    toast({
      title: `${brand} Collection`,
      description: `Showing all ${brand} watches in this category.`,
    })
    document.getElementById("men")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-40 bg-[#0b1e35] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        {/* Top row: logo + search + cart */}
        <div className="flex items-center justify-between h-16 md:h-18 gap-4 border-b border-white/10">
          <button
            onClick={openMenu}
            className="lg:hidden p-2 -ml-2 text-white"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a href="/" className="flex items-center shrink-0">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                TIME
              </span>
              <span className="text-2xl md:text-3xl font-black tracking-tight text-[#DDB87A]">
                NOW
              </span>
            </div>
            <span className="ml-2 hidden md:inline text-[10px] uppercase tracking-[0.2em] text-white/60 border-l border-white/20 pl-2">
              Premium Watches
            </span>
          </a>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for watches, brands..."
                onFocus={openSearch}
                readOnly
                className="w-full h-10 pl-4 pr-12 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder:text-white/50 focus:outline-none focus:bg-white/15 focus:border-[#DDB87A] cursor-pointer"
              />
              <button
                onClick={openSearch}
                className="absolute right-0 top-0 h-10 w-10 bg-[#DDB87A] hover:bg-[#C9A461] text-black rounded-full flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={openTrack}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs text-white/80 hover:text-[#DDB87A] transition-colors"
              aria-label="Track order"
            >
              Track Order
            </button>
            <button
              onClick={openLogin}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs text-white/80 hover:text-[#DDB87A] transition-colors"
              aria-label="Login"
            >
              Login
            </button>
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6 text-white" />
              {totalQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-[#DDB87A] text-black text-[10px] font-bold flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3 pt-2">
          <button
            onClick={openSearch}
            className="w-full h-10 pl-4 pr-10 bg-white/10 border border-white/20 rounded-full text-sm text-white/50 text-left flex items-center"
          >
            <Search className="h-4 w-4 mr-2 text-white/70" />
            Search watches, brands...
          </button>
        </div>
      </div>

      {/* Navigation menu bar */}
      <nav className="bg-[#0b1e35] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center justify-center lg:justify-start gap-1 h-11 text-[13px] font-semibold uppercase tracking-wide overflow-x-auto">
            {navItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                className="relative shrink-0"
              >
                <a
                  href={`#${item.key === "brands" ? "men" : item.key}`}
                  className="flex items-center gap-1 px-3 py-2 text-white/90 hover:text-[#DDB87A] transition-colors whitespace-nowrap"
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </a>
                {hovered === item.key && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 w-64 bg-white shadow-2xl border border-neutral-100 py-2 grid grid-cols-1">
                    {item.items.map((sub) => (
                      <a
                        key={sub}
                        href={`#${item.key === "brands" ? "men" : item.key}`}
                        onClick={(e) => handleBrandClick(e, sub)}
                        className="px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-red-600 transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <a href="#sale" className="px-3 py-2 text-[#DDB87A] hover:text-white transition-colors whitespace-nowrap">
                Sale
              </a>
            </li>
            <li>
              <a href="#new" className="px-3 py-2 font-bold text-white hover:text-[#DDB87A] transition-colors whitespace-nowrap">
                New Arrival
              </a>
            </li>
            <li>
              <a href="#hot" className="px-3 py-2 text-white hover:text-[#DDB87A] transition-colors whitespace-nowrap flex items-center gap-1">
                Hot Deals
                <Flame className="h-3.5 w-3.5 text-orange-500" />
              </a>
            </li>
            <li className="ml-auto pl-4 hidden lg:block">
              <a
                href="tel:01934-764333"
                className="flex items-center gap-2 text-white hover:text-[#DDB87A] transition-colors whitespace-nowrap"
              >
                <span className="h-7 w-7 rounded-full bg-red-600 flex items-center justify-center">
                  <Headphones className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight text-[11px]">
                  <span className="text-[9px] uppercase tracking-wider text-white/60">Call Us 24/7</span>
                  <span className="font-bold">01934-764333</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
