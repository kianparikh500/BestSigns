import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Contact Best Signs Las Vegas for a free sign design consultation and quote. Call (702) 472-4011 or visit us at 3111 S Valley View Blvd, Las Vegas, NV 89102.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Get a Free Quote | Best Signs Las Vegas", description: "Free sign design consultation. Call (702) 472-4011 or visit 3111 S Valley View Blvd, Las Vegas NV.", url: "https://bestsignslv.com/contact" },
}
import { QuoteForm } from "@/components/QuoteForm"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  MessageSquare,
} from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(702) 472-4011",
    href: "tel:+17024724011",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bestsignslasvegas.com",
    href: "mailto:info@bestsignslasvegas.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "3111 S Valley View Blvd #V102, Las Vegas, NV 89102",
    href: "https://maps.google.com/?q=3111+S+Valley+View+Blvd+Las+Vegas+NV+89102",
  },
]

const hours = [
  { day: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
]

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a3566]/20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1a3566 0%, transparent 50%)",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-7xl text-center">
          <AnimatedSection>
            <span className="inline-block bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Free Quotes — No Obligation
            </span>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
              Get a <span className="text-[#3b82f6]">Free Quote</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a
              detailed, no-obligation quote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 mt-16">
            {/* Form — 3 cols */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <QuoteForm />
            </AnimatedSection>

            {/* Sidebar — 2 cols */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact Info */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wide mb-5 flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#3b82f6]" />
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={item.label === "Address" ? "_blank" : undefined}
                          rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-9 h-9 bg-[#3b82f6]/10 group-hover:bg-[#3b82f6]/20 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5">
                            <Icon size={15} className="text-[#3b82f6]" />
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs uppercase tracking-wider block mb-0.5">
                              {item.label}
                            </span>
                            <span className="text-gray-200 text-sm group-hover:text-white transition-colors">
                              {item.value}
                            </span>
                          </div>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wide mb-5 flex items-center gap-2">
                  <Clock size={18} className="text-[#3b82f6]" />
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {hours.map((item) => (
                    <li
                      key={item.day}
                      className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-400">{item.day}</span>
                      <span
                        className={`font-medium ${
                          item.time === "Closed" ? "text-red-400" : "text-white"
                        }`}
                      >
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-xs mt-4">
                  Emergency service available. Call for after-hours support.
                </p>
              </div>

              {/* Social */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wide mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-white/5 hover:bg-[#3b82f6]/20 border border-white/10 hover:border-[#3b82f6]/40 rounded-lg flex items-center justify-center transition-all group"
                      >
                        <Icon size={16} className="text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-[#1a3566]/20 border border-[#1a3566]/40 rounded-2xl p-6">
                <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-wide mb-4">
                  Helpful Links
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "View Our Services", href: "/services" },
                    { label: "Browse Our Portfolio", href: "/portfolio" },
                    { label: "Learn About Us", href: "/about" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between text-gray-300 hover:text-[#3b82f6] text-sm py-2 border-b border-white/5 last:border-0 transition-colors group"
                    >
                      {link.label}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="border-t border-white/5">
        <AnimatedSection>
          <div className="relative h-80 bg-[#111] overflow-hidden">
            {/* Styled map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center">
                <MapPin size={28} className="text-[#3b82f6]" />
              </div>
              <div className="text-center">
                <p className="text-white font-oswald font-bold text-xl uppercase">
                  3111 S Valley View Blvd #V102
                </p>
                <p className="text-gray-400 text-sm">Las Vegas, NV 89102</p>
              </div>
              <a
                href="https://maps.google.com/?q=3111+S+Valley+View+Blvd+Las+Vegas+NV+89102"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-6 py-3 rounded-lg uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
              >
                Open in Google Maps
                <ArrowRight size={14} />
              </a>
            </div>
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#1a3566]/20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase mb-3">
              Prefer to Talk to Someone?
            </h2>
            <p className="text-gray-300 mb-6">
              Call us directly and a sign specialist will help you plan your project.
            </p>
            <a
              href="tel:+17024724011"
              className="inline-flex items-center justify-center gap-3 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-10 py-4 rounded-lg uppercase tracking-wider shadow-lg shadow-[#3b82f6]/20 transition-all hover:-translate-y-0.5 text-lg"
            >
              <Phone size={20} />
              (702) 472-4011
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
