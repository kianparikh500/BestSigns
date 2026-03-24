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
  title: {
    default: "Best Signs Las Vegas | Custom Signs & Graphics",
    template: "%s | Best Signs Las Vegas",
  },
  description:
    "Las Vegas's #1 sign company since 2004. Custom channel letters, monument signs, vehicle wraps, LED signs, banners & storefront graphics. Free design consultation. Call (702) 472-4011.",
  keywords: [
    "signs Las Vegas", "custom signs Las Vegas", "channel letters Las Vegas",
    "monument signs Las Vegas", "vehicle wraps Las Vegas", "LED signs Las Vegas",
    "storefront signs Las Vegas", "sign company Las Vegas", "business signs Las Vegas",
    "dimensional signs Las Vegas", "Best Signs Las Vegas",
  ],
  authors: [{ name: "Best Signs Las Vegas" }],
  creator: "Best Signs Las Vegas",
  metadataBase: new URL("https://bestsignslv.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestsignslv.com",
    siteName: "Best Signs Las Vegas",
    title: "Best Signs Las Vegas | Custom Signs & Graphics",
    description:
      "Las Vegas's #1 sign company since 2004. Channel letters, monument signs, vehicle wraps, LED signs & more. Free quote today!",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "Best Signs Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Signs Las Vegas | Custom Signs & Graphics",
    description: "Las Vegas's #1 sign company. Custom channel letters, vehicle wraps, LED signs & more. Free quote!",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Best Signs Las Vegas",
  "image": "https://bestsignslv.com/images/hero-bg.jpg",
  "url": "https://bestsignslv.com",
  "telephone": "+17024724011",
  "email": "info@bestsignslv.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3111 S Valley View Blvd #V102",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89102",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1362,
    "longitude": -115.1900,
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "08:00", "closes": "18:00" },
  ],
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
  ],
  "priceRange": "$$",
  "description": "Las Vegas's #1 sign company since 2004. Custom channel letters, monument signs, vehicle wraps, LED signs, dimensional signs, banners & storefront graphics.",
  "areaServed": { "@type": "City", "name": "Las Vegas" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
