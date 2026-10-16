'use client'

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
} from "lucide-react"

const quickLinks = [
  "About Us",
  "Privacy Policy",
  "FAQ",
  "Terms & Conditions",
  "Blog",
  "Contact Us",
]

const accountLinks = [
  "My Account",
  "Orders Tracking",
  "Delivery Time",
  "Return and Warranty Policy",
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Get the latest updates on new arrivals, special offers and exclusive deals.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 h-12 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              <Send className="h-4 w-4" />
              <span className="hidden md:inline">Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-2xl font-black text-white">TIME</span>
            <span className="text-2xl font-black text-red-600">NOW</span>
          </div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-white/90 mb-3">
            About Us
          </h4>
          <p className="text-sm text-white/70 leading-relaxed">
            Time Now is a trusted and reputable brand in Bangladesh, known for
            offering high-quality, 100% authentic watches. Since 2016, we have
            been selling watches from renowned international brands with trust
            and confidence. Our primary aim is to provide genuine timepieces at
            fair prices, ensuring customer satisfaction with every purchase.
          </p>
          <div className="flex gap-2 mt-5">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-white/90 mb-4">
            Contact Information
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <span>
                N.I. Tower, Level 2, House 01, Road 10, Block E, Banani,
                Dhaka-1213, Bangladesh
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <a href="mailto:info@timenowbd.com" className="hover:text-red-400 transition-colors">
                info@timenowbd.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <a href="tel:01934-764333" className="hover:text-red-400 transition-colors">
                01934-764333
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-white/90 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-white/70 hover:text-red-400 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-white/90 mb-4">
            Account
          </h4>
          <ul className="space-y-2.5 text-sm">
            {accountLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-white/70 hover:text-red-400 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs md:text-sm text-white/60">
          All Rights Reserved © 2026 Time Now.
        </div>
      </div>
    </footer>
  )
}
