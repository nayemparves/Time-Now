'use client'

import { useState } from "react"
import { useCart } from "@/lib/cart-store"
import { megaMenuData } from "@/lib/catalog"
import {
  ChevronDown,
  Search,
  ShoppingBag,
  User,
  Menu,
  Phone,
  Mail,
  Truck,
} from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-black text-white text-xs">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:text-red-400 transition-colors">
            <Truck className="h-3.5 w-3.5" />
            <span>Track My Order</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <a href="mailto:info@timenowbd.com" className="flex items-center gap-1 hover:text-red-400 transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span>info@timenowbd.com</span>
          </a>
          <a href="tel:01934-764333" className="flex items-center gap-1 hover:text-red-400 transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>01934-764333</span>
          </a>
        </div>
        <a href="#" className="flex items-center gap-1 hover:text-red-400 transition-colors">
          <User className="h-3.5 w-3.5" />
          <span>Login / SignUp</span>
        </a>
      </div>
    </div>
  )
}

export function Header() {
  const { openCart, openMenu, items } = useCart()
  const [hovered, setHovered] = useState<string | null>(null)
  const totalQty = items.reduce((s, i) => s + i.quantity, 0)

  const navItems = [
    { key: "men", label: "Men's Watch", items: megaMenuData.men.items },
    { key: "ladies", label: "Ladies Watch", items: megaMenuData.ladies.items },
    { key: "couple", label: "Couple Watch", items: megaMenuData.couple.items },
    { key: "accessories", label: "Accessories", items: megaMenuData.accessories.items },
    { key: "gifts", label: "Gifts", items: megaMenuData.gifts.items },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <TopBar />
      <div className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16 md:h-20 gap-4">
          <button
            onClick={openMenu}
            className="lg:hidden p-2 -ml-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a href="/" className="flex items-center shrink-0">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-black">
                TIME
              </span>
              <span className="text-2xl md:text-3xl font-black tracking-tight text-red-600">
                NOW
              </span>
            </div>
            <span className="ml-2 hidden md:inline text-[10px] uppercase tracking-[0.2em] text-neutral-500 border-l border-neutral-300 pl-2">
              Premium Watches
            </span>
          </a>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for watches, brands..."
                className="w-full h-11 pl-4 pr-12 border border-neutral-300 rounded-full text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <button className="absolute right-0 top-0 h-11 w-11 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for watches, brands..."
              className="w-full h-10 pl-4 pr-10 border border-neutral-300 rounded-full text-sm focus:outline-none focus:border-black"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          </div>
        </div>
      </div>

      <nav className="hidden lg:block bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center justify-center gap-1 h-12">
            {navItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                <a
                  href={`#${item.key}`}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-red-600 transition-colors"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </a>
                {hovered === item.key && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 w-64 bg-white shadow-2xl border border-neutral-100 py-2 grid grid-cols-1">
                    {item.items.map((sub) => (
                      <a
                        key={sub}
                        href={`#${item.key}`}
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
              <a href="#sale" className="px-3 py-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                Sale
              </a>
            </li>
            <li>
              <a href="#new" className="px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-red-600 transition-colors">
                New Arrival
              </a>
            </li>
            <li>
              <a href="#hot" className="px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-red-600 transition-colors">
                Hot Deals
              </a>
            </li>
            <li className="ml-2">
              <a
                href="tel:01934-764333"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Us 24/7
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
