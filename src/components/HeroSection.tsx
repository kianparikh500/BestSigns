"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, CheckCircle, Play } from "lucide-react"
import { hero } from "@/content"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt="Las Vegas skyline"
          fill
          className="object-cover scale-105"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#050505]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated glow blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#3b82f6]/[0.08] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-[#1a3566]/[0.15] rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 bg-[#3b82f6]/10 border border-[#3b82f6]/25 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="text-[#3b82f6] fill-[#3b82f6]" />
              ))}
            </div>
            <span className="text-[#3b82f6] text-xs font-semibold tracking-[0.15em] uppercase">
              {hero.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-oswald text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.0] tracking-tight mb-6 uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {hero.heading}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {hero.subtext}
          </motion.p>

          {/* Checks */}
          <motion.div
            className="flex flex-wrap gap-x-5 gap-y-2.5 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {hero.checks.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#3b82f6]/15 border border-[#3b82f6]/40 flex items-center justify-center shrink-0">
                  <CheckCircle size={10} className="text-[#3b82f6]" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-black font-bold px-8 py-4 rounded-xl uppercase tracking-wider text-sm shadow-2xl shadow-[#3b82f6]/30 transition-all duration-200 hover:shadow-[#3b82f6]/50 hover:-translate-y-0.5 group"
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-xl uppercase tracking-wider text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <Play size={14} className="fill-white" />
              {hero.secondaryCta.label}
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
          >
            {hero.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
              >
                <span className="text-[#3b82f6] font-oswald text-3xl font-bold leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 bg-[#3b82f6] rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
