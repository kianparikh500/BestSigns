import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { business } from "@/content"

const services = [
  { href: "/services#channel-letters", label: "Channel Letters" },
  { href: "/services#monument-signs", label: "Monument Signs" },
  { href: "/services#vehicle-wraps", label: "Vehicle Wraps" },
  { href: "/services#banners", label: "Banners & Displays" },
  { href: "/services#led-signs", label: "LED Signs" },
  { href: "/services#storefront", label: "Storefront Signs" },
]

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Get a Quote" },
]

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/[0.06] mt-0">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.svg"
                alt={business.name}
                width={150}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {business.name} — Las Vegas&apos;s premier sign company. We craft stunning custom
              signs that make your business unforgettable.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: business.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: business.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: business.social.twitter, Icon: Twitter, label: "Twitter" },
                { href: business.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.04] hover:bg-[#3b82f6]/20 border border-white/[0.06] hover:border-[#3b82f6]/30 rounded-lg flex items-center justify-center text-gray-500 hover:text-[#3b82f6] transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-oswald font-semibold text-sm tracking-[0.15em] uppercase mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-200 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-oswald font-semibold text-sm tracking-[0.15em] uppercase mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-200 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-oswald font-semibold text-sm tracking-[0.15em] uppercase mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#1a3566]/30 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{business.address.street}</p>
                  <p className="text-gray-500 text-sm">
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1a3566]/30 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={13} className="text-[#3b82f6]" />
                </div>
                <a
                  href={business.phoneHref}
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
                >
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1a3566]/30 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={13} className="text-[#3b82f6]" />
                </div>
                <a
                  href={`mailto:${business.email}`}
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
                >
                  {business.email}
                </a>
              </div>
              <div className="mt-1 p-3 bg-[#1a3566]/10 rounded-lg border border-[#1a3566]/20">
                <p className="text-xs text-gray-500">
                  <span className="text-[#3b82f6] font-semibold">Hours: </span>
                  {business.hours}
                  <br />
                  Sun Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
