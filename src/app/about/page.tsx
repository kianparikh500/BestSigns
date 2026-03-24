import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "About Us",
  description: "Best Signs Las Vegas — founded in 2004 by Jim Boone. 20+ years serving Las Vegas businesses with custom signage, in-house fabrication, and full-service installation.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Best Signs Las Vegas", description: "20+ years of custom sign fabrication in Las Vegas. In-house production, licensed & insured, Nevada Sign Association member.", url: "https://bestsignslv.com/about" },
}
import {
  Shield,
  Clock,
  DollarSign,
  MapPin,
  ArrowRight,
  Star,
  Users,
  Award,
  Wrench,
} from "lucide-react"
import { about, business } from "@/content"

const iconMap = { Shield, Clock, DollarSign, MapPin, Star, Award, Wrench, Users }

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
              About <span className="text-[#3b82f6]">Best Signs</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              For over 20 years, we&apos;ve helped Las Vegas businesses stand out with
              custom-crafted signs that are built to last and designed to perform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={about.storyImage}
                    alt="Best Signs Las Vegas production facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#3b82f6]/30 rounded-xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <Award size={20} className="text-black" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Nevada Sign Association</div>
                      <div className="text-gray-400 text-xs">Member &amp; Award Recipient</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-widest mb-3 block">
                Est. {business.yearFounded} — {business.address.city}, {business.address.state}
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
                Built in Las Vegas.<br />Built for Las Vegas.
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {about.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm shadow-lg shadow-[#3b82f6]/20 transition-all hover:-translate-y-0.5"
                >
                  View Our Work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-all hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[#1a3566]/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-oswald text-5xl font-bold text-[#3b82f6] mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm uppercase tracking-widest">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-widest mb-3 block">
              Why We&apos;re Different
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, i) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap]
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="bg-[#111] border border-white/10 hover:border-[#3b82f6]/30 rounded-2xl p-6 h-full transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#3b82f6]/10 group-hover:bg-[#3b82f6]/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      {Icon && <Icon size={22} className="text-[#3b82f6]" />}
                    </div>
                    <h3 className="font-oswald text-xl font-bold text-white uppercase mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0d0d0d] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-widest mb-3 block">
              20 Years of Growth
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase">
              Our Milestones
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <div className="space-y-8">
              {about.milestones.map((milestone, i) => (
                <AnimatedSection key={milestone.year} delay={i * 0.08}>
                  <div className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-[#111] border border-white/10 hover:border-[#3b82f6]/20 rounded-xl p-5 transition-colors inline-block w-full">
                        <span className="text-[#3b82f6] font-oswald font-bold text-xl">{milestone.year}</span>
                        <p className="text-gray-300 text-sm mt-1 leading-relaxed">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full border-4 border-[#0d0d0d] mt-5" />
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-widest mb-3 block">
              The Person Behind the Signs
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase">
              Meet the Owner
            </h2>
          </AnimatedSection>

          <div className="flex justify-center">
            {about.team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1} className="w-full max-w-sm">
                <div className="bg-[#111] border border-white/10 hover:border-[#3b82f6]/20 rounded-2xl overflow-hidden group transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Users size={14} className="text-[#3b82f6]" />
                      <span className="text-[#3b82f6] text-xs font-semibold uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-3">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#0d0d0d] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Trusted, Certified &amp; Recognized
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8">
            {about.certifications.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <AnimatedSection key={item.label} delay={i * 0.05} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                    {Icon && <Icon size={16} className="text-[#3b82f6]" />}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a3566]/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re opening a new location or refreshing your brand, we&apos;re
              ready to bring your vision to life.
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
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold px-10 py-4 rounded-lg uppercase tracking-wider transition-all hover:bg-white/5"
              >
                View Our Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
