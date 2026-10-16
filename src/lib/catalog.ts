export type Product = {
  id: string
  brand: string
  name: string
  sku: string
  price: number
  oldPrice?: number
  category: "men" | "ladies" | "couple" | "accessories" | "gifts"
  image: string
  badge?: "new" | "hot"
}

export type Brand = {
  name: string
  logoText: string
}

export const brands: Brand[] = [
  { name: "Casio", logoText: "CASIO" },
  { name: "Casio Edifice", logoText: "EDIFICE" },
  { name: "Casio G-Shock", logoText: "G-SHOCK" },
  { name: "Casio Pro Trek", logoText: "PRO TREK" },
  { name: "Certina", logoText: "CERTINA" },
  { name: "Citizen", logoText: "CITIZEN" },
  { name: "Daniel Klein", logoText: "DK" },
  { name: "Emporio Armani", logoText: "EA" },
  { name: "FasTrack", logoText: "Fastrack" },
  { name: "Fossil", logoText: "FOSSIL" },
  { name: "Frederique Constant", logoText: "FC" },
  { name: "Guess", logoText: "GUESS" },
  { name: "Hamilton", logoText: "HAMILTON" },
  { name: "Hugo Boss", logoText: "BOSS" },
  { name: "Invicta", logoText: "INVICTA" },
  { name: "Longines", logoText: "LONGINES" },
  { name: "Michael Kors", logoText: "MK" },
  { name: "Mido", logoText: "MIDO" },
  { name: "Omega", logoText: "OMEGA" },
  { name: "Orient", logoText: "ORIENT" },
  { name: "Oris", logoText: "ORIS" },
  { name: "Pagani Design", logoText: "PAGANI" },
  { name: "Rado", logoText: "RADO" },
  { name: "Seiko", logoText: "SEIKO" },
  { name: "Swatch", logoText: "SWATCH" },
  { name: "TAG Heuer", logoText: "TAG" },
  { name: "Timex", logoText: "TIMEX" },
  { name: "Tissot", logoText: "TISSOT" },
  { name: "Titan", logoText: "TITAN" },
  { name: "Tommy Hilfiger", logoText: "TOMMY" },
  { name: "Tudor", logoText: "TUDOR" },
  { name: "Victorinox", logoText: "VICTORINOX" },
  { name: "West End Watch", logoText: "WEST END" },
]

// Watch product images (gender-neutral product photography) - all URLs verified working
const watchImages = {
  blue: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
  silver: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80",
  black: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
  gold: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80",
  brown: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&q=80",
  green: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=600&q=80",
  red: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&q=80",
  white: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
  chrono: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80",
  skeleton: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&q=80",
}

export const products: Product[] = [
  // Men's Watches (Featured)
  { id: "p1", brand: "Timex", name: "Timex Waterbury Heritage Chronograph Ice Blue Dial Men's Watch", sku: "TW2Y950", price: 36500, oldPrice: 42500, category: "men", image: watchImages.blue },
  { id: "p2", brand: "Timex", name: "Timex Waterbury Heritage Chronograph Blue Dial Men's Watch", sku: "TW2Y951", price: 31500, oldPrice: 37000, category: "men", image: watchImages.chrono },
  { id: "p3", brand: "Timex", name: "Timex Waterbury Heritage Chronograph Silver Dial Men's Watch", sku: "TW2Y952", price: 31000, oldPrice: 36500, category: "men", image: watchImages.silver },
  { id: "p4", brand: "Casio G-Shock", name: "Casio G-Shock Vibrant Red Digital Dial Men's Watch", sku: "DW-5600BBR-1", price: 18500, oldPrice: 24500, category: "men", image: watchImages.red, badge: "hot" },
  { id: "p5", brand: "Citizen", name: "Citizen Eco-Drive Weekender Chronograph Black Dial Men's Watch", sku: "AW1410-03E", price: 39000, oldPrice: 46500, category: "men", image: watchImages.black },
  { id: "p6", brand: "Citizen", name: "Citizen Eco-Drive Marine Turquoise Blue Dial Men's Watch", sku: "AW1816-01L", price: 34500, oldPrice: 41500, category: "men", image: watchImages.blue },
  { id: "p7", brand: "Fossil", name: "Fossil Campbell Day-Date Blue Dial Men's Watch", sku: "FS6140", price: 12500, oldPrice: 14500, category: "men", image: watchImages.blue },
  { id: "p8", brand: "Timex", name: "Timex 1983 E Line Reissue TV Dial Automatic Men's Watch", sku: "TW2W701", price: 30500, oldPrice: 36500, category: "men", image: watchImages.brown },
  { id: "p9", brand: "Fossil", name: "Fossil Carraway Silver Dial Black Croco Leather Men's Watch", sku: "FS6024", price: 12500, oldPrice: 16500, category: "men", image: watchImages.silver },
  { id: "p10", brand: "Fossil", name: "Fossil Carraway Silver Dial Brown Croco Leather Men's Watch", sku: "FS6025", price: 13500, oldPrice: 16500, category: "men", image: watchImages.gold },
  { id: "p11", brand: "Casio Edifice", name: "Casio Edifice Automatic Electroformed Textured Blue Dial Men's Watch", sku: "EFR-S108D-2AV", price: 40500, oldPrice: 52000, category: "men", image: watchImages.blue },
  { id: "p12", brand: "Casio Edifice", name: "Casio Edifice Automatic Forged Carbon Black Dial Men's Watch", sku: "EFR-S108D-1AV", price: 40500, oldPrice: 52000, category: "men", image: watchImages.black },
  { id: "p13", brand: "Casio G-Shock", name: "Casio G-Shock Carbon Core Guard Luxe Black Men's Watch", sku: "GA-2100LU-1A", price: 22500, oldPrice: 26500, category: "men", image: watchImages.black, badge: "hot" },
  { id: "p14", brand: "Fossil", name: "Fossil Neutra Chronograph Blue Dial Men's Watch", sku: "FS5698", price: 12500, oldPrice: 14500, category: "men", image: watchImages.chrono },
  { id: "p15", brand: "Fossil", name: "Fossil Townsman Automatic Skeleton Dial Men's Watch", sku: "ME3269", price: 18000, oldPrice: 21500, category: "men", image: watchImages.skeleton },
  { id: "p16", brand: "Casio Edifice", name: "Casio Edifice Chronograph Blue Dial Men's Watch", sku: "EFR-574D-2AV", price: 22500, oldPrice: 26500, category: "men", image: watchImages.blue },
  { id: "p17", brand: "Casio Edifice", name: "Casio Edifice Chronograph Blue Dial Men's Watch", sku: "EFB-680D-2BVUDF", price: 24500, oldPrice: 29500, category: "men", image: watchImages.chrono },
  { id: "p18", brand: "Casio G-Shock", name: "Casio G-Shock Carbon Core Guard Volt Yellow Men's Watch", sku: "GA-2100TL-9A", price: 18500, oldPrice: 22000, category: "men", image: watchImages.gold },
  { id: "p19", brand: "Citizen", name: "Citizen Tsuyosa Shore Automatic Red Dial Men's Watch", sku: "NJ0234-58X", price: 49000, oldPrice: 62000, category: "men", image: watchImages.red },
  { id: "p20", brand: "Fossil", name: "Fossil Townsman Automatic Skeleton Dial Men's Watch", sku: "ME3267", price: 16500, oldPrice: 18500, category: "men", image: watchImages.skeleton },
  { id: "p21", brand: "Seiko", name: "Seiko 5 Sports Field Automatic Blue Dial Men's Watch", sku: "SRPG39K1", price: 35500, oldPrice: 42500, category: "men", image: watchImages.blue, badge: "new" },
  { id: "p22", brand: "Orient", name: "Orient Mako JDM Solar Chronograph Green Dial Men's Watch", sku: "RN-TX0203E", price: 52500, oldPrice: 60000, category: "men", image: watchImages.green },
  { id: "p23", brand: "Seiko", name: "Seiko 5 Sports SKX Special Edition 'New Regatta Timer' Men's Watch", sku: "SRPG63K1", price: 42000, oldPrice: 48000, category: "men", image: watchImages.black },
  { id: "p24", brand: "Seiko", name: "Seiko 5 Sports Automatic Black Dial Men's Watch", sku: "SRPD65K1", price: 39500, oldPrice: 44500, category: "men", image: watchImages.black },

  // Ladies Watches (watch products only - no female models)
  { id: "p25", brand: "Fossil", name: "Fossil Blue Dive Black Dial Two-Tone Ladies Watch", sku: "ES5349", price: 12500, oldPrice: 14500, category: "ladies", image: watchImages.gold },
  { id: "p26", brand: "Fossil", name: "Fossil Blue Dive Grey Dial Two-Tone Ladies Watch", sku: "ES5348", price: 13500, oldPrice: 14500, category: "ladies", image: watchImages.silver },
  { id: "p27", brand: "Fossil", name: "Fossil Jacqueline Sun Moon Rose Gold-Tone Ladies Watch", sku: "ES5165", price: 12500, oldPrice: 14500, category: "ladies", image: watchImages.gold },
  { id: "p28", brand: "Tory Burch", name: "Tory Burch The Oval Black Dial Ladies Watch", sku: "TBW6035", price: 19000, oldPrice: 22500, category: "ladies", image: watchImages.black },
  { id: "p29", brand: "Michael Kors", name: "Michael Kors Melissa Pavé Tri-Tone Ladies Watch", sku: "MKO1117", price: 13500, oldPrice: 16500, category: "ladies", image: watchImages.silver },
  { id: "p30", brand: "Tory Burch", name: "Tory Burch The Tory Chronograph Ivory Dial Ladies Watch", sku: "TBW1035", price: 22500, oldPrice: 26500, category: "ladies", image: watchImages.white },
  { id: "p31", brand: "Tory Burch", name: "Tory Burch Reva 36mm Gold Dial Black Ladies Watch", sku: "TBW4039", price: 20500, oldPrice: 24500, category: "ladies", image: watchImages.gold },
  { id: "p32", brand: "Emporio Armani", name: "Emporio Armani Gianni T-Bar Green Dial Ladies Watch", sku: "AR2467", price: 13500, oldPrice: 16500, category: "ladies", image: watchImages.green },
  { id: "p33", brand: "Tory Burch", name: "Tory Burch Robinson Two-Tone White Dial Ladies Watch", sku: "TBW1509", price: 19500, oldPrice: 24500, category: "ladies", image: watchImages.silver },
  { id: "p34", brand: "Tory Burch", name: "Tory Burch Robinson Maroon Dial Leather Ladies Watch", sku: "TBW1505", price: 18500, oldPrice: 22500, category: "ladies", image: watchImages.brown },
  { id: "p35", brand: "Tory Burch", name: "Tory Burch Robinson White Dial Rose Gold-Tone Ladies Watch", sku: "TBW1510", price: 19500, oldPrice: 22500, category: "ladies", image: watchImages.white },
  { id: "p36", brand: "Fossil", name: "Fossil Riley Multifunction Blue Dial Ladies Watch", sku: "ES4294", price: 13500, oldPrice: 16500, category: "ladies", image: watchImages.blue },

  // Couple Watches
  { id: "p37", brand: "Fossil", name: "Fossil Couple Watch Set - His & Hers Silver Dial Twin Pack", sku: "FS-COU-01", price: 24500, oldPrice: 29000, category: "couple", image: watchImages.silver },
  { id: "p38", brand: "Casio", name: "Casio Couple Set Stainless Steel His & Hers Watch Pair", sku: "CS-COU-02", price: 18500, oldPrice: 22500, category: "couple", image: watchImages.chrono },
  { id: "p39", brand: "Titan", name: "Titan Couple Watch Set - Black Dial Matching Pair", sku: "TN-COU-03", price: 16500, oldPrice: 19500, category: "couple", image: watchImages.black },
  { id: "p40", brand: "Daniel Klein", name: "Daniel Klein Couple Watch Set - Brown Leather Pair", sku: "DK-COU-04", price: 11500, oldPrice: 14500, category: "couple", image: watchImages.brown },

  // Accessories
  { id: "p41", brand: "Time Now", name: "Premium Wooden Watch Organizer Box - 12 Slots", sku: "ACC-ORG-01", price: 4500, category: "accessories", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80" },
  { id: "p42", brand: "Fossil", name: "Fossil Genuine Leather Watch Strap - Brown 22mm", sku: "ACC-STR-01", price: 1800, category: "accessories", image: watchImages.brown },
  { id: "p43", brand: "Time Now", name: "Automatic Watch Winder - Single Slot Black", sku: "ACC-WND-01", price: 6500, category: "accessories", image: watchImages.black },
  { id: "p44", brand: "Time Now", name: "Premium Stainless Steel Watch Strap - Silver 20mm", sku: "ACC-STR-02", price: 1500, category: "accessories", image: watchImages.silver },

  // Gifts
  { id: "p45", brand: "Daniel Klein", name: "Daniel Klein Gift Set - Watch + Wallet Combo", sku: "GFT-DK-01", price: 8500, oldPrice: 10500, category: "gifts", image: watchImages.brown },
  { id: "p46", brand: "Santa Barbara PRC", name: "Santa Barbara PRC Polo Alliance Gift Set", sku: "GFT-SB-01", price: 12500, oldPrice: 15500, category: "gifts", image: watchImages.gold },
]

export type Reviewer = {
  name: string
  location: string
  rating: number
  comment: string
  avatar: string
}

/**
 * Returns up to `limit` related products for a given product.
 * Strategy: prefer same brand (excluding current), then fill up with
 * same category (excluding current and already-included), then any other
 * products on sale. Always excludes the current product by id.
 */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  if (!product) return []
  const sameBrand = products.filter(
    (p) => p.id !== product.id && p.brand === product.brand
  )
  const sameCategory = products.filter(
    (p) =>
      p.id !== product.id &&
      p.brand !== product.brand &&
      p.category === product.category
  )
  const others = products.filter(
    (p) =>
      p.id !== product.id &&
      p.brand !== product.brand &&
      p.category !== product.category
  )
  // Prioritize items with discounts to surface deals first within each bucket
  const sortByDeal = (a: Product, b: Product) => {
    const ad = a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0
    const bd = b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0
    return bd - ad
  }
  const bucket = [
    ...sameBrand.sort(sortByDeal),
    ...sameCategory.sort(sortByDeal),
    ...others.sort(sortByDeal),
  ]
  return bucket.slice(0, limit)
}

// Male reviewer avatars only (per user requirement)
export const reviews: Reviewer[] = [
  {
    name: "Rahim Ahmed",
    location: "Dhaka, Bangladesh",
    rating: 5,
    comment: "Bought a Casio Edifice from Time Now last month. The watch is 100% authentic and the delivery was lightning fast. Highly recommended store for watch lovers in Bangladesh.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Tanvir Hasan",
    location: "Chattogram, Bangladesh",
    rating: 5,
    comment: "Excellent service! Got my Seiko 5 Sports within 2 days. The packaging was premium and the warranty card was included. Will definitely buy again from Time Now.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Imran Khan",
    location: "Sylhet, Bangladesh",
    rating: 5,
    comment: "Time Now has the best collection of authentic watches in Bangladesh. My Fossil Townsman looks amazing and the price was very fair. Trustworthy brand since 2016.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    name: "Sakib Mahmud",
    location: "Khulna, Bangladesh",
    rating: 5,
    comment: "I was looking for a Casio G-Shock for months. Time Now had the exact model I wanted. Genuine product with proper warranty. Customer service was top-notch.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
]

export const megaMenuData = {
  men: {
    title: "Men's Watch",
    items: ["Fossil", "Michael Kors", "Tommy Hilfiger", "Emporio Armani", "Tissot", "Casio", "Titan", "Seiko", "Orient", "Hugo Boss", "Guess", "Citizen", "Pagani Design", "Casio G-Shock", "Casio Edifice", "Rado", "Hamilton", "Mido", "Victorinox", "Swatch", "Longines", "Invicta", "Timex", "Casio Pro Trek"],
  },
  ladies: {
    title: "Ladies Watch",
    items: ["Fossil", "Michael Kors", "Emporio Armani", "Tissot", "Casio", "Titan", "Guess", "Casio G-Shock", "Timex", "Tory Burch", "Coach"],
  },
  couple: {
    title: "Couple Watch",
    items: ["Fossil", "Michael Kors", "Emporio Armani", "Tissot", "Casio", "Titan", "Daniel Klein", "Timex"],
  },
  accessories: {
    title: "Accessories",
    items: ["Watch Organizer", "Fossil Watch Strap", "Watch Winder", "Watch Straps"],
  },
  gifts: {
    title: "Gifts",
    items: ["Daniel Klein", "Santa Barbara PRC"],
  },
}

export const categories = [
  { title: "Men's Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", href: "#men" },
  { title: "Ladies Watch", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80", href: "#ladies" },
  { title: "Couple Watch", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&q=80", href: "#couple" },
  { title: "Accessories", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&q=80", href: "#accessories" },
  { title: "Gifts", image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=400&q=80", href: "#gifts" },
  { title: "Sale", image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80", href: "#sale" },
]

export const services = [
  { title: "Physical Store", desc: "Visit our Banani showroom", icon: "store" },
  { title: "Fastest Delivery", desc: "Same-day delivery in Dhaka", icon: "truck" },
  { title: "Sale Service", desc: "After-sales & warranty support", icon: "wrench" },
  { title: "Customer Reviews", desc: "Trusted by 10,000+ customers", icon: "star" },
]
