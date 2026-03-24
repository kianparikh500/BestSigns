import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Sign Services",
  description: "Custom channel letters, monument signs, vehicle wraps, LED signs, storefront graphics & more. Las Vegas sign company serving businesses since 2004. Free quote — call (702) 472-4011.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Sign Services | Best Signs Las Vegas", description: "Channel letters, monument signs, vehicle wraps, LED signs & storefront graphics for Las Vegas businesses.", url: "https://bestsignslv.com/services" },
}
import {
  Lightbulb, Landmark, Car, Flag, Zap, Store, Sparkles,
  CheckCircle2, ArrowRight,
} from "lucide-react"
import { servicesPage, business } from "@/content"

const iconMap = { Lightbulb, Landmark, Car, Flag, Zap, Store, Sparkles }

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
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
              What We Do
            </span>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
              Our <span className="text-[#3b82f6]">Services</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From channel letters to vehicle wraps, we deliver complete sign solutions for every
              Las Vegas business — designed to attract, built to last.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Sections */}
      {servicesPage.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap]
        const isEven = index % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 lg:py-28 border-t border-white/5 ${index % 2 === 1 ? "bg-[#0d0d0d]" : ""}`}
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Image */}
                <AnimatedSection direction={isEven ? "left" : "right"} className={isEven ? "" : "lg:col-start-2"}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg">
                      {Icon && <Icon size={22} className="text-black" />}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  direction={isEven ? "right" : "left"}
                  delay={0.1}
                  className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
                >
                  <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-widest mb-3 block">
                    {service.tagline}
                  </span>
                  <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 size={16} className="text-[#3b82f6] mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm shadow-lg shadow-[#3b82f6]/20 transition-all duration-200 hover:shadow-[#3b82f6]/40 hover:-translate-y-0.5"
                  >
                    Get a Quote
                    <ArrowRight size={16} />
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1a3566]/20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Don&apos;t See What You Need?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              We handle custom projects of all sizes. Contact us and we&apos;ll design a sign
              solution specifically for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-10 py-4 rounded-lg uppercase tracking-wider shadow-lg shadow-[#3b82f6]/20 transition-all hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold px-10 py-4 rounded-lg uppercase tracking-wider transition-all hover:bg-white/5"
              >
                Call {business.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
