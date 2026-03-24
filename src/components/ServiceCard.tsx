"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Clock, Award, Star, Users, CheckCircle, Lightbulb, Landmark, Car, Flag, Store, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Zap, Shield, Clock, Award, Star, Users, CheckCircle, Lightbulb, Landmark, Car, Flag, Store, Sparkles,
}

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  icon?: LucideIcon | string
  index?: number
}

export function ServiceCard({ title, description, image, href, icon, index = 0 }: ServiceCardProps) {
  const Icon = typeof icon === "string" ? iconMap[icon] : icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-[#0f0f0f] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#3b82f6]/40 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#3b82f6]/[0.08]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
        {/* Hover color tint */}
        <div className="absolute inset-0 bg-[#3b82f6]/0 group-hover:bg-[#3b82f6]/10 transition-colors duration-500" />

        {Icon && (
          <div className="absolute top-4 left-4 w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg shadow-[#3b82f6]/40 group-hover:scale-110 transition-transform duration-300">
            <Icon size={18} className="text-black" />
          </div>
        )}

        {/* Top-right arrow hint */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/0 group-hover:bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowRight size={14} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-oswald text-lg font-bold text-white mb-2 tracking-wide uppercase group-hover:text-[#3b82f6] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 group-hover:text-gray-400 transition-colors duration-300">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[#3b82f6]/70 group-hover:text-[#3b82f6] text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 group/link"
        >
          Learn More
          <ArrowRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}
