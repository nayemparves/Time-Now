'use client'

import { useCart } from "@/lib/cart-store"
import { megaMenuData, brands } from "@/lib/catalog"
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  Truck,
  User,
} from "lucide-react"
import { useState } from "react"

export function MobileMenu() {
  const { isMenuOpen, closeMenu } = useCart()
  const [openSection, setOpenSection] = useState<string | null>("men")

  const sections = [
    { key: "men", label: "Men's Watch", items: megaMenuData.men.items },
    { key: "ladies", label: "Ladies Watch", items: megaMenuData.ladies.items },
    { key: "couple", label: "Couple Watch", items: megaMenuData.couple.items },
    { key: "accessories", label: "Accessories", items: megaMenuData.accessories.items },
    { key: "gifts", label: "Gifts", items: megaMenuData.gifts.items },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-black">TIME</span>
            <span className="text-xl font-black text-red-600">NOW</span>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-neutral-100 rounded-full"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {sections.map((s) => (
            <div key={s.key} className="border-b border-neutral-100">
              <button
                onClick={() =>
                  setOpenSection(openSection === s.key ? null : s.key)
                }
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-neutral-800"
              >
                {s.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openSection === s.key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === s.key && (
                <div className="pb-3 pl-3 grid grid-cols-1 gap-1">
                  {s.items.map((i) => (
                    <a
                      key={i}
                      href={`#${s.key}`}
                      onClick={closeMenu}
                      className="py-1.5 text-sm text-neutral-600 hover:text-red-600"
                    >
                      {i}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#sale" onClick={closeMenu} className="block py-3 text-sm font-bold text-red-600">
            Sale
          </a>
          <a href="#new" onClick={closeMenu} className="block py-3 text-sm font-bold text-neutral-800">
            New Arrival
          </a>
          <a href="#hot" onClick={closeMenu} className="block py-3 text-sm font-bold text-neutral-800">
            Hot Deals
          </a>

          <div className="pt-4 mt-2 border-t border-neutral-200">
            <p className="text-xs font-bold uppercase text-neutral-400 mb-2">
              All Brands
            </p>
            <div className="grid grid-cols-2 gap-1">
              {brands.slice(0, 12).map((b) => (
                <a
                  key={b.name}
                  href="#brands"
                  onClick={closeMenu}
                  className="py-1 text-xs text-neutral-600 hover:text-red-600"
                >
                  {b.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 p-4 space-y-2 text-sm">
          <a href="#" className="flex items-center gap-2 py-1.5 text-neutral-700">
            <Truck className="h-4 w-4 text-red-600" />
            Track My Order
          </a>
          <a href="#" className="flex items-center gap-2 py-1.5 text-neutral-700">
            <User className="h-4 w-4 text-red-600" />
            Login / SignUp
          </a>
          <a href="tel:01934-764333" className="flex items-center gap-2 py-1.5 text-neutral-700">
            <Phone className="h-4 w-4 text-red-600" />
            01934-764333
          </a>
          <a href="mailto:info@timenowbd.com" className="flex items-center gap-2 py-1.5 text-neutral-700">
            <Mail className="h-4 w-4 text-red-600" />
            info@timenowbd.com
          </a>
        </div>
      </aside>
    </>
  )
}
