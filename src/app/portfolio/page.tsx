import Link from "next/link"
import { AnimatedSection } from "@/components/AnimatedSection"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
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
              Our Work
            </span>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
              Sign <span className="text-[#3b82f6]">Portfolio</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Browse hundreds of completed sign projects across Las Vegas — from channel letters
              and monument signs to vehicle wraps and custom fabrications.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "7", label: "Sign Categories" },
                { value: "20+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-oswald text-3xl font-bold text-[#3b82f6]">{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#1a3566]/20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Ready to Add Your Project to Our Portfolio?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s design a sign that makes your business impossible to miss. Get a free
              quote today — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-10 py-4 rounded-lg uppercase tracking-wider shadow-lg shadow-[#3b82f6]/20 transition-all hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold px-10 py-4 rounded-lg uppercase tracking-wider transition-all hover:bg-white/5"
              >
                View Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
