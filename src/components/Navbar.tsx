"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl shadow-2xl shadow-black/60 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 h-[72px] flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.svg"
            alt="Best Signs Las Vegas"
            width={160}
            height={50}
            className="h-11 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-lg ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#3b82f6]"
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA + Phone */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+17024724011"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <Phone size={14} className="text-[#3b82f6]" />
            <span>(702) 472-4011</span>
          </a>
          <Link
            href="/contact"
            className="relative overflow-hidden bg-[#3b82f6] hover:bg-[#2563eb] text-black font-bold px-5 py-2.5 rounded-lg uppercase tracking-wider text-xs shadow-lg shadow-[#3b82f6]/25 transition-all duration-200 hover:shadow-[#3b82f6]/40 hover:-translate-y-px group"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#050505]/98 backdrop-blur-xl border-t border-white/[0.08]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
              {links.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 font-medium tracking-wide text-sm uppercase ${
                        isActive
                          ? "bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={14} className="opacity-40" />
                    </Link>
                  </motion.div>
                )
              })}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/[0.08]">
                <a
                  href="tel:+17024724011"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#3b82f6] transition-colors px-4 py-2 text-sm"
                >
                  <Phone size={14} className="text-[#3b82f6]" />
                  <span>(702) 472-4011</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-black font-bold py-3.5 rounded-xl uppercase tracking-wider text-center text-sm transition-colors shadow-lg shadow-[#3b82f6]/20"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
