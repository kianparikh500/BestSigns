// ============================================================
//  BESTSIGNS WEBSITE CONTENT
//  Edit this file to update text, images, and info site-wide.
//  No coding knowledge required — just change the values below.
// ============================================================

// ------------------------------------------------------------
//  BUSINESS INFO
//  Used in the navbar, footer, contact page, and CTA sections.
// ------------------------------------------------------------
export const business = {
  name: "Best Signs Las Vegas",
  tagline: "Custom Sign Design for Las Vegas Businesses",
  phone: "(702) 472-4011",
  phoneHref: "tel:+17024724011",
  email: "info@bestsignslv.com",
  address: {
    street: "3111 S Valley View Blvd #V102",
    city: "Las Vegas",
    state: "NV",
    zip: "89102",
  },
  hours: "Mon–Sat 8AM–6PM",
  yearFounded: "2004",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
}

// ------------------------------------------------------------
//  SCOPE OF SERVICES — READ BEFORE EDITING
//  Best Signs Las Vegas does NOT hold a Nevada contractor (C-6) license.
//  The site may only advertise sign DESIGN and design consultation.
//  Do NOT add copy offering or implying: installation, fabrication,
//  production/printing, repair, refurbishing, maintenance, electrical or
//  LED wiring, structural work, permit pulling, "licensed", "insured",
//  warranties on physical signs, or "full-service"/"turnkey" packages.
//  See docs/C6_COMPLIANCE_PLAN.md.
// ------------------------------------------------------------
export const scopeDisclosure =
  "Best Signs Las Vegas provides sign design and design-consultation services only. We do not fabricate, produce, install, repair, or perform electrical or structural work on signs. Physical sign work must be performed by a contractor licensed by the Nevada State Contractors Board."

// ------------------------------------------------------------
//  HERO SECTION  (the big banner on the homepage)
// ------------------------------------------------------------
export const hero = {
  badge: "Las Vegas Sign Design Studio",
  heading: "Sign Designs That Make Your Business Stand Out",
  subtext:
    "From storefront signs to vehicle wraps, we design high-impact signage and hand you ready-to-build artwork files for the licensed sign contractor of your choice. Serving Las Vegas since 2004.",
  backgroundImage: "/images/hero-bg.jpg",
  checks: [
    "Free Design Consultation",
    "Photo-Realistic Mockups",
    "Revisions Until It's Right",
    "Print-Ready Files",
  ],
  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "100%", label: "Custom Designs" },
    { value: "Free", label: "Consultation" },
    { value: "1-on-1", label: "Owner-Led Service" },
  ],
  primaryCta: { label: "Free Design Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Designs", href: "/portfolio" },
}

// ------------------------------------------------------------
//  HOMEPAGE SERVICES PREVIEW  (6 cards on the homepage)
// ------------------------------------------------------------
export const homepageServices = [
  {
    title: "Custom Sign Design",
    description:
      "Original sign concepts and 3D renderings built around your brand, shown day and night before anything is made.",
    image: "/images/custom-femz.jpg",
    href: "/services#custom-sign-design",
    icon: "Sparkles",
  },
  {
    title: "Storefront Sign Design",
    description:
      "A coordinated look for your fascia, windows, and doors, mocked up on a photo of your actual storefront.",
    image: "/images/storefront-clean-healthy.jpg",
    href: "/services#storefront-sign-design",
    icon: "Store",
  },
  {
    title: "Vehicle Wrap Design",
    description:
      "Eye-catching full and partial wrap layouts on accurate vehicle templates, delivered as print-ready files.",
    image: "/images/vehicle-warehouse.jpg",
    href: "/services#vehicle-wrap-design",
    icon: "Car",
  },
  {
    title: "Banner & Display Design",
    description:
      "Bold artwork for banners, trade show booths, and event backdrops, sized and set up for any printer.",
    image: "/images/banner-grandcanyon.jpg",
    href: "/services#banner-display-design",
    icon: "Flag",
  },
  {
    title: "Monument & Pylon Sign Design",
    description:
      "Concept designs for property-entrance and multi-tenant signs that fit your brand and your site's sign criteria.",
    image: "/images/monument-valet-dusk.jpg",
    href: "/services#monument-sign-design",
    icon: "Landmark",
  },
  {
    title: "Sign Design Consultation",
    description:
      "Expert advice on visibility, readability, color, and HOA or landlord sign criteria before you commit.",
    image: "/images/reception-allstate.jpg",
    href: "/services#design-consultation",
    icon: "Lightbulb",
  },
]

// ------------------------------------------------------------
//  HOMEPAGE STATS BAR  (the blue bar with numbers)
//  Only use numbers you can document.
// ------------------------------------------------------------
export const statsBar = [
  { value: "20+", label: "Years in Las Vegas", icon: "Clock" },
  { value: "100%", label: "Custom Designs", icon: "Star" },
  { value: "Free", label: "Design Consultation", icon: "CheckCircle" },
  { value: "1-on-1", label: "Owner-Led Service", icon: "Users" },
]

// ------------------------------------------------------------
//  HOMEPAGE GALLERY SLIDER
//  These images cycle automatically on the homepage.
//  Add, remove, or reorder items freely.
//  "caption" is optional — remove it to show no text on that slide.
// ------------------------------------------------------------
export const gallerySlides = [
  {
    src: "/images/reception-allstate.jpg",
    alt: "Allstate interior dimensional sign design",
    caption: "Interior & Reception Sign Design",
  },
  {
    src: "/images/vehicle-warehouse.jpg",
    alt: "Warehouse & Logistics Las Vegas trailer wrap design",
    caption: "Vehicle Wrap Design",
  },
  {
    src: "/images/pylon-capella.jpg",
    alt: "Capella Auto Center pylon sign design",
    caption: "Monument & Pylon Sign Design",
  },
  {
    src: "/images/storefront-clean-healthy.jpg",
    alt: "Clean & Healthy Homes storefront sign design",
    caption: "Storefront Sign Design",
  },
  {
    src: "/images/reception-all-access.jpg",
    alt: "All Access Insurance dimensional wall sign design",
    caption: "Dimensional Lettering Design",
  },
  {
    src: "/images/reception-carwiz.jpg",
    alt: "TheCarWiz reception sign design",
    caption: "Custom Sign Design",
  },
]

// ------------------------------------------------------------
//  HOMEPAGE PORTFOLIO PREVIEW  (image grid on homepage)
// ------------------------------------------------------------
export const portfolioPreview = [
  {
    src: "/images/reception-sakha.jpg",
    alt: "Sakha Agencies dimensional reception sign design",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/storefront-cassell.jpg",
    alt: "Cassell BPO storefront sign design",
    span: "",
  },
  {
    src: "/images/vehicle-alltemp.jpg",
    alt: "All Temp Air Conditioning van wrap design",
    span: "",
  },
  {
    src: "/images/pylon-capella.jpg",
    alt: "Capella Auto Center pylon sign design",
    span: "",
  },
  {
    src: "/images/reception-univ-phoenix.jpg",
    alt: "University of Phoenix wall graphics design",
    span: "",
  },
  {
    src: "/images/vehicle-florist.jpg",
    alt: "Florist delivery vehicle wrap design",
    span: "col-span-2",
  },
]

// ------------------------------------------------------------
//  WHY CHOOSE US  (4 items on the homepage)
// ------------------------------------------------------------
export const whyUs = [
  {
    title: "Experienced Designer",
    description:
      "20+ years designing signs for Las Vegas businesses means designs that look great and are practical to build.",
    icon: "Star",
  },
  {
    title: "Fast Turnaround",
    description:
      "We understand deadlines. Our streamlined design process delivers concepts and final files on schedule.",
    icon: "Clock",
  },
  {
    title: "Contractor-Ready Files",
    description:
      "You receive clean vector artwork, color specs, and dimensioned design drawings any licensed sign contractor can work from.",
    icon: "Shield",
  },
  {
    title: "Local Design Know-How",
    description:
      "We design with Las Vegas HOA and landlord sign criteria in mind, so your concept is ready for the next step.",
    icon: "CheckCircle",
  },
]

export const whyUsImage = "/images/reception-sakha.jpg"

// ------------------------------------------------------------
//  TESTIMONIALS
//  Only add REAL reviews from design clients, with their permission.
//  Reviews must describe design work, not installation or fabrication.
// ------------------------------------------------------------
export const testimonials: { name: string; business: string; text: string; rating: number }[] = []

// ------------------------------------------------------------
//  SERVICES PAGE  (full service details)
// ------------------------------------------------------------
export const servicesPage = [
  {
    id: "custom-sign-design",
    title: "Custom Sign Design",
    icon: "Sparkles",
    tagline: "Original concepts built around your brand",
    description:
      "Every business is different, so every design starts from scratch. We turn your logo, colors, and goals into sign concepts, then show you photo-realistic renderings, including day and night views, so you know exactly what you are getting before you hire anyone to build it.",
    features: [
      "Original concepts, not templates",
      "3D renderings and day/night previews",
      "Logo cleanup and vectorization",
      "Dimensional, lobby, and interior sign designs",
      "Multiple rounds of revisions",
      "Final vector files and color specs",
    ],
    image: "/images/custom-femz.jpg",
    imageAlt: "FEMZ Las Vegas custom dimensional logo sign design",
  },
  {
    id: "storefront-sign-design",
    title: "Storefront Sign Design",
    icon: "Store",
    tagline: "A cohesive look from fascia to front door",
    description:
      "Your storefront is your first sales rep. We design a coordinated package of fascia sign, window graphics, door decals, and hours graphics, mocked up on a photo of your actual building, so your brand looks consistent from the street to the counter.",
    features: [
      "Mockups on a photo of your storefront",
      "Fascia and dimensional letter designs",
      "Window and frosted-glass graphic designs",
      "Door decal and hours graphic layouts",
      "Readability review for street visibility",
      "Complete brand package pricing",
    ],
    image: "/images/storefront-clean-healthy.jpg",
    imageAlt: "Clean & Healthy Homes storefront sign design",
  },
  {
    id: "vehicle-wrap-design",
    title: "Vehicle Wrap Design",
    icon: "Car",
    tagline: "Turn your fleet into rolling billboards",
    description:
      "We design full wraps, partial wraps, and spot graphics on accurate templates for your exact vehicle make and model. You get print-ready files and a 360° preview, ready to hand to the wrap shop of your choice.",
    features: [
      "Full, partial, and spot graphic layouts",
      "Templates matched to your vehicle model",
      "360° design previews",
      "Consistent fleet branding",
      "Fleet pricing for 2+ vehicle designs",
      "Print-ready files for any wrap shop",
    ],
    image: "/images/vehicle-warehouse.jpg",
    imageAlt: "Warehouse & Logistics Las Vegas trailer wrap design",
  },
  {
    id: "banner-display-design",
    title: "Banner & Display Design",
    icon: "Flag",
    tagline: "Bold graphics for events, promotions, and grand openings",
    description:
      "Grand openings, trade shows, and promotions need graphics that stop people in their tracks. We design banners, retractable stands, booth backdrops, and event graphics, correctly sized and set up so any printer can produce them without surprises.",
    features: [
      "Grand opening and promotional banner designs",
      "Retractable banner stand artwork",
      "Trade show booth graphic layouts",
      "Event backdrop and step-and-repeat designs",
      "Correct bleeds, sizes, and color profiles",
      "Rush design available",
    ],
    image: "/images/banner-grandcanyon.jpg",
    imageAlt: "Large format banner graphic design",
  },
  {
    id: "monument-sign-design",
    title: "Monument & Pylon Sign Design",
    icon: "Landmark",
    tagline: "Concept designs for a strong first impression",
    description:
      "Monument and pylon signs set the tone at your property entrance. We create concept designs, including finish selections, tenant panel layouts, and day/night renderings, shaped around your brand and your property's sign criteria. Engineering, fabrication, permits, and installation are handled by the licensed contractor you hire.",
    features: [
      "Concept renderings on a photo of your site",
      "Multi-tenant panel layouts",
      "Finish and color selections",
      "Day and night design previews",
      "Designed to HOA / landlord sign criteria",
      "Design files to share with your contractor",
    ],
    image: "/images/monument-valet-dusk.jpg",
    imageAlt: "Monument sign design shown at dusk",
  },
  {
    id: "wayfinding-design",
    title: "Wayfinding & Interior Sign Design",
    icon: "Lightbulb",
    tagline: "Help people find their way, on brand",
    description:
      "Offices, clinics, and campuses need clear signage inside. We plan and design directories, room ID signs, directional signs, and lobby graphics, with a sign schedule that lists every sign, its message, and where it goes.",
    features: [
      "Lobby and reception sign designs",
      "Directory and directional sign layouts",
      "Room ID sign designs",
      "Sign schedule and location plan",
      "ADA-oriented layout guidance",
      "Consistent family of designs",
    ],
    image: "/images/reception-univ-phoenix.jpg",
    imageAlt: "University of Phoenix interior graphics design",
  },
  {
    id: "design-consultation",
    title: "Sign Design Consultation",
    icon: "Zap",
    tagline: "Expert advice before you spend a dollar on building",
    description:
      "Not sure what you need? Book a consultation. We review your brand, your building, and your goals, then advise on sign type, size, color, readability, and HOA or landlord sign criteria, so you go into contractor bids knowing exactly what to ask for.",
    features: [
      "Brand and visibility review",
      "Sign type and size recommendations",
      "Color and readability guidance",
      "HOA / landlord sign criteria review",
      "Design brief to share with contractors",
      "Free initial consultation",
    ],
    image: "/images/reception-allstate.jpg",
    imageAlt: "Allstate interior sign design",
  },
]

// ------------------------------------------------------------
//  ABOUT PAGE
// ------------------------------------------------------------
export const about = {
  stats: [
    { value: "20+", label: "Years in Las Vegas" },
    { value: "100%", label: "Custom Designs" },
    { value: "Free", label: "Design Consultation" },
    { value: "1", label: "Dedicated Owner" },
  ],

  storyImage: "/images/reception-sakha.jpg",

  storyParagraphs: [
    "Best Signs Las Vegas was founded by Jim Boone, a sign industry veteran who saw that Las Vegas businesses deserved better than cookie-cutter signage. Located at 3111 S Valley View Blvd, we design custom signs that make your business impossible to miss.",
    "Today we are a focused sign design studio. We work with you one-on-one, from a free consultation through concepts, renderings, and revisions, and deliver clean, ready-to-build artwork files. You then hire the licensed sign contractor of your choice to fabricate and install your sign.",
    "Our designs serve restaurants, retailers, hotels, medical offices, automotive businesses, and corporate offices across the Las Vegas Valley, from first-time small business owners to nationally recognized brands.",
  ],

  values: [
    {
      icon: "Shield",
      title: "Quality Design",
      description:
        "Every design we deliver is carefully crafted and checked. We don't send a file we wouldn't proudly put our own name on.",
    },
    {
      icon: "Clock",
      title: "Fast Turnaround",
      description:
        "We know time is money. Our streamlined design process delivers most projects on schedule, and rush design is available when you need it.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing",
      description:
        "Clear design quotes with no hidden fees. You own your final files and can take them to any licensed contractor.",
    },
    {
      icon: "MapPin",
      title: "Local Las Vegas Expertise",
      description:
        "We design with Las Vegas sign codes, HOA rules, and the desert climate in mind, so your design is ready for the next step.",
    },
  ],

  team: [
    {
      name: "Jim Boone",
      role: "Owner & Lead Designer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "Las Vegas sign industry veteran with deep expertise in sign design and branding for local businesses.",
    },
  ],

  // Only list milestones you can document.
  milestones: [
    { year: "2004", event: "Founded Best Signs Las Vegas" },
    { year: "2024", event: "Celebrated 20 years serving Las Vegas businesses" },
    { year: "2026", event: "Refocused as a dedicated sign design studio" },
  ],

  // Do NOT add "Licensed", "Insured", or "In-House Fabrication" here.
  certifications: [
    { icon: "Star", label: "Custom Sign Design" },
    { icon: "Award", label: "Free Design Consultation" },
    { icon: "Users", label: "Owner-Led Service" },
    { icon: "MapPin", label: "Las Vegas Local Since 2004" },
  ],
}
