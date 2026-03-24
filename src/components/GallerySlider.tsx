"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GallerySliderProps {
  images: GalleryImage[]
  autoPlayInterval?: number // ms, default 5000
}

export function GallerySlider({ images, autoPlayInterval = 5000 }: GallerySliderProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir)
      setIndex((next + images.length) % images.length)
    },
    [images.length]
  )

  const prev = () => go(index - 1, -1)
  const next = () => go(index + 1, 1)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(index + 1, 1), autoPlayInterval)
    return () => clearInterval(id)
  }, [index, paused, go, autoPlayInterval])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-[#0a0a0a]"
      style={{ aspectRatio: "16/7" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Caption */}
          {images[index].caption && (
            <motion.div
              className="absolute bottom-8 left-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span className="font-oswald text-white text-2xl md:text-3xl font-bold uppercase tracking-wide drop-shadow-lg">
                {images[index].caption}
              </span>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 hover:border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 group"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 hover:border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 group"
        aria-label="Next image"
      >
        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 right-8 z-10 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > index ? 1 : -1)}
            aria-label={`Go to image ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-6 h-2 bg-[#3b82f6]"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
          <motion.div
            key={index}
            className="h-full bg-[#3b82f6]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
          />
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
        <span className="text-white text-xs font-medium tabular-nums">
          {index + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
