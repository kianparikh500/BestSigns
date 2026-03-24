"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Expand } from "lucide-react"

const categories = ["All", "Channel Letters", "Monument", "Wraps", "Storefront", "Reception", "Custom"]

const portfolioItems = [
  {
    id: 1,
    title: "Fabricated Channel Letters",
    category: "Channel Letters",
    image: "/images/fabrication-letters.jpg",
    description: "Custom fabricated illuminated channel letters built in-house at our Las Vegas facility.",
  },
  {
    id: 2,
    title: "Valet Monument Sign",
    category: "Monument",
    image: "/images/monument-valet-dusk.jpg",
    description: "Illuminated monument sign for a Las Vegas valet and parking service.",
  },
  {
    id: 3,
    title: "Capella Auto Center Pylon",
    category: "Monument",
    image: "/images/pylon-capella.jpg",
    description: "Tall pylon sign for Capella Auto Center with full-color cabinet faces.",
  },
  {
    id: 4,
    title: "Warehouse & Logistics Trailer Wrap",
    category: "Wraps",
    image: "/images/vehicle-warehouse.jpg",
    description: "Full trailer wrap for a Las Vegas warehouse and logistics company.",
  },
  {
    id: 5,
    title: "All Temp A/C Van Wrap",
    category: "Wraps",
    image: "/images/vehicle-alltemp.jpg",
    description: "Full van wrap for All Temp Air Conditioning — branded and road-ready.",
  },
  {
    id: 6,
    title: "Florist Delivery Vehicle Wrap",
    category: "Wraps",
    image: "/images/vehicle-florist.jpg",
    description: "Vibrant full vehicle wrap for a local Las Vegas florist.",
  },
  {
    id: 7,
    title: "Clean & Healthy Homes Storefront",
    category: "Storefront",
    image: "/images/storefront-clean-healthy.jpg",
    description: "Modern channel letter storefront sign for Clean & Healthy Homes.",
  },
  {
    id: 8,
    title: "Cassell BPO Storefront",
    category: "Storefront",
    image: "/images/storefront-cassell.jpg",
    description: "Full storefront signage package for Cassell BPO Las Vegas.",
  },
  {
    id: 9,
    title: "Nevada Suzuki Storefront",
    category: "Storefront",
    image: "/images/storefront-nevada-suzuki.jpg",
    description: "Illuminated cabinet sign and storefront branding for Nevada Suzuki.",
  },
  {
    id: 10,
    title: "Allstate Reception Sign",
    category: "Reception",
    image: "/images/reception-allstate.jpg",
    description: "Dimensional interior wall sign for Allstate Insurance Las Vegas office.",
  },
  {
    id: 11,
    title: "All Access Insurance Reception",
    category: "Reception",
    image: "/images/reception-all-access.jpg",
    description: "Bold dimensional logo sign for All Access Insurance lobby.",
  },
  {
    id: 12,
    title: "TheCarWiz Reception Sign",
    category: "Reception",
    image: "/images/reception-carwiz.jpg",
    description: "Custom reception sign for TheCarWiz Las Vegas showroom.",
  },
  {
    id: 13,
    title: "Lark Law Reception Sign",
    category: "Reception",
    image: "/images/reception-lark-law.jpg",
    description: "Professional dimensional wall sign for Lark Law Group reception area.",
  },
  {
    id: 14,
    title: "Sakha Agencies Reception",
    category: "Reception",
    image: "/images/reception-sakha.jpg",
    description: "Elegant dimensional logo sign for Sakha Agencies office.",
  },
  {
    id: 15,
    title: "University of Phoenix Wall Graphics",
    category: "Reception",
    image: "/images/reception-univ-phoenix.jpg",
    description: "Large-format wall graphics and dimensional signage for University of Phoenix.",
  },
  {
    id: 16,
    title: "FEMZ Custom Logo Sign",
    category: "Custom",
    image: "/images/custom-femz.jpg",
    description: "One-of-a-kind dimensional logo fabrication for FEMZ Las Vegas.",
  },
  // Dimensional signs portfolio
  { id: 17, title: "Aguilas", category: "Reception", image: "/images/dimensional/Aguilas.jpg", description: "Dimensional sign for Aguilas." },
  { id: 18, title: "All Access", category: "Reception", image: "/images/dimensional/All-Access.jpg", description: "Dimensional lobby sign for All Access." },
  { id: 19, title: "Alta Wellness", category: "Reception", image: "/images/dimensional/Alta-Wellness.jpg", description: "Dimensional sign for Alta Wellness." },
  { id: 20, title: "Bendix", category: "Custom", image: "/images/dimensional/Bendix.jpg", description: "Custom dimensional sign for Bendix." },
  { id: 21, title: "CA Auto", category: "Reception", image: "/images/dimensional/CA-Auto.jpg", description: "Dimensional reception sign for CA Auto." },
  { id: 22, title: "Cafe & Terrace", category: "Reception", image: "/images/dimensional/Cafe-And-Terrace.jpg", description: "Dimensional sign for Cafe & Terrace." },
  { id: 23, title: "Clark Conference", category: "Reception", image: "/images/dimensional/Clark-Conference.jpg", description: "Conference room dimensional signage for Clark." },
  { id: 24, title: "Clark Lobby", category: "Reception", image: "/images/dimensional/Clark-Lobby.jpg", description: "Lobby dimensional sign for Clark." },
  { id: 25, title: "DFS", category: "Reception", image: "/images/dimensional/DFS.jpg", description: "Dimensional sign for DFS." },
  { id: 26, title: "Desimone", category: "Reception", image: "/images/dimensional/Desimone.jpg", description: "Custom dimensional sign for Desimone." },
  { id: 27, title: "Epic", category: "Custom", image: "/images/dimensional/Epic.jpg", description: "Dimensional sign for Epic." },
  { id: 28, title: "Euphoria", category: "Reception", image: "/images/dimensional/Euphoria.jpg", description: "Dimensional lobby sign for Euphoria." },
  { id: 29, title: "FEMZ LV", category: "Custom", image: "/images/dimensional/FEMZ-LV.jpg", description: "Custom dimensional FEMZ logo sign." },
  { id: 30, title: "Gra Eagle", category: "Custom", image: "/images/dimensional/Gra-Eagle.jpg", description: "Dimensional sign for Gra Eagle." },
  { id: 31, title: "Ideal Mechanical", category: "Reception", image: "/images/dimensional/Ideal-Mechanical.jpg", description: "Dimensional sign for Ideal Mechanical." },
  { id: 32, title: "India Oven", category: "Storefront", image: "/images/dimensional/India-Oven.jpg", description: "Dimensional storefront sign for India Oven restaurant." },
  { id: 33, title: "India Oven 2", category: "Storefront", image: "/images/dimensional/India-Oven-2.jpg", description: "Second dimensional sign installation for India Oven." },
  { id: 34, title: "Krav Maga", category: "Storefront", image: "/images/dimensional/Krav-Maga.jpg", description: "Dimensional sign for Krav Maga Las Vegas." },
  { id: 35, title: "Medici", category: "Reception", image: "/images/dimensional/Medici.jpg", description: "Elegant dimensional sign for Medici." },
  { id: 36, title: "NV PTAC", category: "Reception", image: "/images/dimensional/NV-PTAC.jpg", description: "Dimensional sign for NV PTAC." },
  { id: 37, title: "Parker Store", category: "Storefront", image: "/images/dimensional/Parker-Store.jpg", description: "Dimensional storefront sign for Parker Store." },
  { id: 38, title: "Parker Store 2", category: "Storefront", image: "/images/dimensional/Parker-Store-2.jpg", description: "Second view of Parker Store dimensional signage." },
  { id: 39, title: "Pinup Point", category: "Storefront", image: "/images/dimensional/Pinup-Point.jpg", description: "Custom dimensional sign for Pinup Point." },
  { id: 40, title: "Retro Vegas", category: "Custom", image: "/images/dimensional/Retro-Vegas.jpg", description: "Retro-style dimensional sign for Retro Vegas." },
  { id: 41, title: "Ritz Monument", category: "Monument", image: "/images/dimensional/Ritz-Monument.jpg", description: "Monument sign for The Ritz Carlton Las Vegas." },
  { id: 42, title: "The Ritz Carlton", category: "Reception", image: "/images/dimensional/The-Ritz-Carlton.jpg", description: "Dimensional lobby sign for The Ritz Carlton." },
  { id: 43, title: "The Ritz Carlton 2", category: "Reception", image: "/images/dimensional/The-Ritz-Carlton-2.jpg", description: "Second dimensional sign installation at The Ritz Carlton." },
  { id: 44, title: "The Village Golf Shop", category: "Storefront", image: "/images/dimensional/The-Village-Golf-Shop.jpg", description: "Dimensional storefront sign for The Village Golf Shop." },
  { id: 45, title: "University of Phoenix", category: "Reception", image: "/images/dimensional/University-of-Phoenix.jpg", description: "Large dimensional wall sign for University of Phoenix." },
  { id: 46, title: "Van Accessible", category: "Custom", image: "/images/dimensional/Van-Accessible.jpg", description: "Custom ADA van accessible dimensional sign." },
  { id: 47, title: "Wagner Dental", category: "Reception", image: "/images/dimensional/Wagner-Dental.jpg", description: "Dimensional sign for Wagner Dental Las Vegas." },
  { id: 48, title: "Zero", category: "Custom", image: "/images/dimensional/Zero.jpg", description: "Custom dimensional sign for Zero." },
  { id: 49, title: "Project Install", category: "Custom", image: "/images/dimensional/20140607_140132.jpg", description: "Custom dimensional sign installation." },
  { id: 50, title: "Fabrication Detail", category: "Channel Letters", image: "/images/dimensional/20180201_094816.jpg", description: "In-shop fabrication detail shot." },
  { id: 51, title: "Install Day", category: "Custom", image: "/images/dimensional/20191210_131756.jpg", description: "On-site dimensional sign installation." },
  { id: 52, title: "Project 2023 A", category: "Reception", image: "/images/dimensional/20230228_164516.jpg", description: "Dimensional reception sign project." },
  { id: 53, title: "Project 2023 B", category: "Reception", image: "/images/dimensional/20230313_162116.jpg", description: "Custom dimensional project." },
  { id: 54, title: "Project 2023 C", category: "Custom", image: "/images/dimensional/20230429_112812.jpg", description: "Custom dimensional sign project." },
  { id: 55, title: "Project 2023 D", category: "Reception", image: "/images/dimensional/20230612_125056.jpg", description: "Dimensional sign installation." },
  { id: 56, title: "Project 2023 E", category: "Custom", image: "/images/dimensional/20231128_155235.jpg", description: "Custom dimensional fabrication." },
  { id: 57, title: "Project 2023 F", category: "Reception", image: "/images/dimensional/20231211_104103.jpg", description: "Dimensional lobby sign." },
  { id: 58, title: "Project 2023 G", category: "Reception", image: "/images/dimensional/20231211_104204.jpg", description: "Dimensional sign detail." },
  { id: 59, title: "Project 2024 A", category: "Custom", image: "/images/dimensional/20240513_195026.jpg", description: "Custom dimensional sign 2024." },
  { id: 60, title: "Project 2024 B", category: "Reception", image: "/images/dimensional/20240924_143941.jpg", description: "Dimensional reception sign." },
  { id: 61, title: "Project 2024 C", category: "Reception", image: "/images/dimensional/20240924_144410.jpg", description: "Dimensional sign project." },
  { id: 62, title: "Project 2024 D", category: "Custom", image: "/images/dimensional/20240924_144808.jpg", description: "Custom dimensional install." },
  { id: 63, title: "Project 2024 E", category: "Reception", image: "/images/dimensional/20240924_144916.jpg", description: "Dimensional sign project." },
  { id: 64, title: "Vintage Install", category: "Custom", image: "/images/dimensional/CIMG0189.jpg", description: "Early dimensional sign project." },
  { id: 65, title: "Classic Project", category: "Custom", image: "/images/dimensional/DSCF0018.jpg", description: "Classic dimensional sign installation." },
  { id: 66, title: "HDR Install", category: "Reception", image: "/images/dimensional/IMG_20160617_133841421_HDR.jpg", description: "Dimensional sign installation detail." },
  { id: 67, title: "Early Project", category: "Custom", image: "/images/dimensional/P9020012.jpg", description: "Early custom dimensional project." },
]

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selected, setSelected] = useState<typeof portfolioItems[0] | null>(null)

  const filtered = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeFilter === cat
                ? "bg-[#3b82f6] text-black shadow-lg shadow-[#3b82f6]/30"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-[#111]"
              onClick={() => setSelected(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <Expand size={24} className="text-[#3b82f6] mb-2" />
                <h3 className="text-white font-oswald font-bold text-center uppercase tracking-wide">
                  {item.title}
                </h3>
                <span className="text-[#3b82f6] text-xs mt-1 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-[#3b82f6]/90 text-black text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                {item.category}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-[#111] rounded-2xl overflow-hidden border border-white/10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-oswald text-2xl font-bold uppercase tracking-wide">
                      {selected.title}
                    </h3>
                    <span className="text-[#3b82f6] text-sm uppercase tracking-widest font-semibold">
                      {selected.category}
                    </span>
                    <p className="text-gray-400 mt-2 text-sm">{selected.description}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    aria-label="Close"
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
