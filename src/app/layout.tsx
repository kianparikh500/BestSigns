import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Best Signs Las Vegas | Custom Signs & Graphics",
  description:
    "Las Vegas's premier sign company. Channel letters, monument signs, vehicle wraps, LED signs, banners & more. Get a free quote today!",
  keywords:
    "signs Las Vegas, custom signs, channel letters, monument signs, vehicle wraps, LED signs, banners",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
