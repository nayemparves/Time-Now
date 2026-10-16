import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Time Now - Premium Authentic Watches in Bangladesh",
  description: "Time Now is Bangladesh's trusted destination for 100% authentic watches from Casio, Fossil, Seiko, Tissot, Citizen and 30+ international brands. 1-5 year warranty, fastest delivery in Dhaka.",
  keywords: ["Time Now", "watch Bangladesh", "authentic watches", "Casio", "Fossil", "Seiko", "Tissot", "men's watch", "ladies watch", "Dhaka watches"],
  authors: [{ name: "Time Now" }],
  openGraph: {
    title: "Time Now - Premium Authentic Watches",
    description: "100% authentic watches with 1-5 year warranty. Trusted since 2016.",
    siteName: "Time Now",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Now - Premium Authentic Watches",
    description: "100% authentic watches with 1-5 year warranty. Trusted since 2016.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
