import Image from "next/image"
import Link from "next/link"
import { HeroSection } from "@/components/HeroSection"
import { ServiceCard } from "@/components/ServiceCard"
import { AnimatedSection } from "@/components/AnimatedSection"
import { ArrowRight, Award, Clock, Star, Users, CheckCircle, Shield } from "lucide-react"
import {
  homepageServices,
  statsBar,
  gallerySlides,
  portfolioPreview,
  whyUs,
  whyUsImage,
  testimonials,
  business,
} from "@/content"
import { GallerySlider } from "@/components/GallerySlider"

const iconMap = { Award, Clock, Star, Users, CheckCircle, Shield }

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <span className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-3 block">
              What We Do
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              Our Sign Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From concept to installation, we deliver complete signage solutions for every type of business.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#3b82f6]/40 hover:border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/5 font-semibold px-8 py-3 rounded-lg uppercase tracking-wider text-sm transition-all duration-200 group"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a3566]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsBar.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap]
              return (
                <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {Icon && <Icon size={24} className="text-[#3b82f6]" />}
                  </div>
                  <div className="font-oswald text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm uppercase tracking-wide">{stat.label}</div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Our Work
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              Signs We&apos;ve Built
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A look at some of our favourite projects across Las Vegas.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <GallerySlider images={gallerySlides} autoPlayInterval={5000} />
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <span className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Our Work
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See how we&apos;ve helped hundreds of Las Vegas businesses stand out.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[500px] md:h-[600px]">
            {portfolioPreview.map((img, i) => (
              <AnimatedSection
                key={img.alt}
                delay={i * 0.08}
                className={`relative overflow-hidden rounded-xl group ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-oswald font-bold text-lg uppercase">{img.alt}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-[#3b82f6]/40 hover:border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/5 font-semibold px-8 py-3 rounded-lg uppercase tracking-wider text-sm transition-all duration-200 group"
            >
              View Full Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-3 block">
                Why Best Signs
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                We&apos;re Not Just{" "}
                <span className="text-[#3b82f6]">Another Sign Shop</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With over 20 years serving Las Vegas businesses, we combine artistic expertise with
                advanced manufacturing to deliver signage that drives real results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUs.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap]
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center shrink-0">
                        {Icon && <Icon size={20} className="text-[#3b82f6]" />}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-white font-semibold transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={whyUsImage}
                  alt="Sign production workshop"
                  width={700}
                  height={550}
                  className="object-cover w-full h-[450px] rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full bg-[#1a3566] border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-bold text-white"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={12} className="text-[#3b82f6] fill-[#3b82f6]" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm">
                        <span className="text-white font-semibold">500+</span> satisfied customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a3566] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <span className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Ready to Get Started?
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6">
              Let&apos;s Build Your{" "}
              <span className="text-[#3b82f6]">Perfect Sign</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free design consultation and quote. Our experts are standing by
              to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-black font-bold px-10 py-4 rounded-lg uppercase tracking-wider text-sm shadow-lg shadow-[#3b82f6]/30 transition-all duration-200 hover:-translate-y-1 group"
              >
                Get a Free Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-10 py-4 rounded-lg uppercase tracking-wider text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1"
              >
                Call {business.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
