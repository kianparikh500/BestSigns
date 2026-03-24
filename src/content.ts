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
  tagline: "Las Vegas's #1 Sign Company",
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
//  HERO SECTION  (the big banner on the homepage)
// ------------------------------------------------------------
export const hero = {
  badge: "Las Vegas's #1 Sign Company",
  heading: "Custom Signs That Make Your Business Stand Out",
  subtext:
    "From channel letters to vehicle wraps, we design and install high-impact signage that drives customers to your door. Serving Las Vegas since 2005.",
  backgroundImage: "/images/hero-bg.jpg",
  checks: [
    "Free Design Consultation",
    "Quick Turnaround",
    "Lifetime Warranty",
    "Licensed & Insured",
  ],
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ],
  primaryCta: { label: "Get a Free Quote", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
}

// ------------------------------------------------------------
//  HOMEPAGE SERVICES PREVIEW  (6 cards on the homepage)
// ------------------------------------------------------------
export const homepageServices = [
  {
    title: "Channel Letters",
    description:
      "Illuminated 3D letters that make your business name shine day and night with vibrant LED lighting.",
    image: "/images/fabrication-letters.jpg",
    href: "/services#channel-letters",
    icon: "Zap",
  },
  {
    title: "Monument Signs",
    description:
      "Freestanding monument signs that create a lasting first impression at your property entrance.",
    image: "/images/monument-valet-dusk.jpg",
    href: "/services#monument-signs",
    icon: "Shield",
  },
  {
    title: "Vehicle Wraps",
    description:
      "Turn your vehicles into mobile billboards with stunning full or partial vehicle wrap designs.",
    image: "/images/vehicle-warehouse.jpg",
    href: "/services#vehicle-wraps",
    icon: "Award",
  },
  {
    title: "Banners & Displays",
    description:
      "High-impact banners and trade show displays designed to capture attention at any event.",
    image: "/images/vehicle-florist.jpg",
    href: "/services#banners",
    icon: "Star",
  },
  {
    title: "LED Signs",
    description:
      "Dynamic LED signs and digital displays that deliver your message with maximum visual impact.",
    image: "/images/storefront-nevada-suzuki.jpg",
    href: "/services#led-signs",
    icon: "Zap",
  },
  {
    title: "Storefront Signs",
    description:
      "Complete storefront signage solutions including awnings, window graphics, and blade signs.",
    image: "/images/storefront-clean-healthy.jpg",
    href: "/services#storefront",
    icon: "Clock",
  },
]

// ------------------------------------------------------------
//  HOMEPAGE STATS BAR  (the blue bar with numbers)
// ------------------------------------------------------------
export const statsBar = [
  { value: "500+", label: "Signs Installed", icon: "Award" },
  { value: "20+", label: "Years in Las Vegas", icon: "Clock" },
  { value: "98%", label: "Client Satisfaction", icon: "Star" },
  { value: "50+", label: "Team Members", icon: "Users" },
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
    alt: "Allstate interior dimensional sign",
    caption: "Interior & Reception Signs",
  },
  {
    src: "/images/vehicle-warehouse.jpg",
    alt: "Warehouse & Logistics Las Vegas trailer wrap",
    caption: "Vehicle Wraps",
  },
  {
    src: "/images/pylon-capella.jpg",
    alt: "Capella Auto Center pylon sign",
    caption: "Monument Signs",
  },
  {
    src: "/images/storefront-clean-healthy.jpg",
    alt: "Clean & Healthy Homes storefront sign",
    caption: "Storefront Signs",
  },
  {
    src: "/images/reception-all-access.jpg",
    alt: "All Access Insurance dimensional wall sign",
    caption: "Dimensional Letters",
  },
  {
    src: "/images/reception-carwiz.jpg",
    alt: "TheCarWiz reception sign",
    caption: "Custom Signs",
  },
]

// ------------------------------------------------------------
//  HOMEPAGE PORTFOLIO PREVIEW  (image grid on homepage)
// ------------------------------------------------------------
export const portfolioPreview = [
  {
    src: "/images/reception-sakha.jpg",
    alt: "Sakha Agencies dimensional reception sign",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/storefront-cassell.jpg",
    alt: "Cassell BPO storefront sign",
    span: "",
  },
  {
    src: "/images/vehicle-alltemp.jpg",
    alt: "All Temp Air Conditioning van wrap",
    span: "",
  },
  {
    src: "/images/pylon-capella.jpg",
    alt: "Capella Auto Center pylon sign",
    span: "",
  },
  {
    src: "/images/reception-univ-phoenix.jpg",
    alt: "University of Phoenix wall graphics",
    span: "",
  },
  {
    src: "/images/vehicle-florist.jpg",
    alt: "Florist delivery vehicle wrap",
    span: "col-span-2",
  },
]

// ------------------------------------------------------------
//  WHY CHOOSE US  (4 items on the homepage)
// ------------------------------------------------------------
export const whyUs = [
  {
    title: "Expert Design Team",
    description:
      "Our award-winning designers work with you to create signage that perfectly represents your brand.",
    icon: "Star",
  },
  {
    title: "Fast Turnaround",
    description:
      "We understand deadlines. Our streamlined process delivers your signs on time, every time.",
    icon: "Clock",
  },
  {
    title: "Premium Materials",
    description:
      "We use only the highest quality materials that withstand the harsh Las Vegas sun and weather.",
    icon: "Shield",
  },
  {
    title: "Full-Service Install",
    description:
      "From permits to installation, we handle every step so you can focus on your business.",
    icon: "CheckCircle",
  },
]

export const whyUsImage = "/images/reception-sakha.jpg"

// ------------------------------------------------------------
//  TESTIMONIALS  (customer reviews on homepage)
// ------------------------------------------------------------
export const testimonials = [
  {
    name: "Mike Torres",
    business: "Torres Auto Group",
    text: "Best Signs transformed our dealership. The channel letters are stunning at night and we've seen a noticeable increase in walk-in customers.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    business: "Chen's Restaurant",
    text: "Professional from start to finish. They handled all the permits, installed everything perfectly, and the sign looks incredible. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Wilson",
    business: "Wilson Properties",
    text: "We've used Best Signs for 5 properties now. Consistently excellent quality and service. They are our go-to sign company in Las Vegas.",
    rating: 5,
  },
]

// ------------------------------------------------------------
//  SERVICES PAGE  (full service details)
// ------------------------------------------------------------
export const servicesPage = [
  {
    id: "channel-letters",
    title: "Channel Letters",
    icon: "Lightbulb",
    tagline: "Illuminated 3D lettering that commands attention day and night",
    description:
      "Channel letters are the gold standard in commercial signage. Our custom fabricated, individually formed letters can be front-lit, back-lit (halo), or combination-lit to create stunning storefront visibility that drives foot traffic 24/7.",
    features: [
      "Front-lit, back-lit, and halo-lit options",
      "Interior and exterior grade aluminum construction",
      "Energy-efficient LED illumination",
      "Custom colors, fonts, and sizes",
      "UL-listed electrical components",
      "Professional installation included",
    ],
    image: "/images/fabrication-letters.jpg",
    imageAlt: "Channel letter components being fabricated in shop",
  },
  {
    id: "monument-signs",
    title: "Monument Signs",
    icon: "Landmark",
    tagline: "Ground-level presence that establishes your brand's authority",
    description:
      "Monument signs create a lasting first impression at property entrances. Built to withstand Las Vegas's extreme weather conditions, our monument signs combine durable materials like stone, brick, aluminum, and HDU foam with precision-crafted lettering and lighting.",
    features: [
      "Multi-tenant directory capability",
      "Illuminated and non-illuminated options",
      "Stone, brick, and metal finishes",
      "Custom logo and graphic integration",
      "Low-voltage LED uplight packages",
      "HOA and commercial park approved designs",
    ],
    image: "/images/monument-valet-dusk.jpg",
    imageAlt: "Illuminated monument sign at dusk",
  },
  {
    id: "vehicle-wraps",
    title: "Vehicle Wraps",
    icon: "Car",
    tagline: "Turn your fleet into rolling billboards across Las Vegas",
    description:
      "A professionally wrapped vehicle generates 30,000–70,000 impressions daily. We use 3M and Avery Dennison premium vinyl films with precision-cut graphics that protect your paint while delivering vivid brand messaging on every drive.",
    features: [
      "Full wraps, partial wraps, and spot graphics",
      "3M and Avery premium vinyl materials",
      "Fleet pricing for 2+ vehicles",
      "Custom design included in pricing",
      "Paint-safe installation and removal",
      "Interior trim and window graphics available",
    ],
    image: "/images/vehicle-warehouse.jpg",
    imageAlt: "Warehouse & Logistics Las Vegas branded trailer wrap",
  },
  {
    id: "banners",
    title: "Banners & Displays",
    icon: "Flag",
    tagline: "High-impact graphics for events, promotions, and grand openings",
    description:
      "From grand opening banners to trade show displays and event backdrops, we produce bold, weather-resistant graphics on heavy-duty substrates. Our large-format printing delivers sharp, vivid colors that stop people in their tracks.",
    features: [
      "13oz and 18oz vinyl banner options",
      "Mesh banners for wind resistance",
      "Retractable banner stands",
      "Trade show booth graphics",
      "Grommets, pole pockets, and mounting hardware",
      "Rush production available",
    ],
    image: "/images/storefront-cassell.jpg",
    imageAlt: "Large format banner and display graphics",
  },
  {
    id: "led-signs",
    title: "LED Signs",
    icon: "Zap",
    tagline: "Dynamic digital messaging that evolves with your business",
    description:
      "LED signs give you the power to change your message in seconds. From single-color scrolling text to full-color video-capable displays, our LED solutions help restaurants, retailers, and service businesses promote specials, hours, and announcements in real time.",
    features: [
      "Full-color and single-color options",
      "Wireless and remote programming",
      "Outdoor and indoor rated enclosures",
      "Custom cabinet sizes and shapes",
      "Integrated with monument and pylon signs",
      "Lifetime LED panel warranty",
    ],
    image: "/images/storefront-nevada-suzuki.jpg",
    imageAlt: "Nevada Suzuki illuminated cabinet sign",
  },
  {
    id: "storefront-signs",
    title: "Storefront Signs",
    icon: "Store",
    tagline: "Complete storefront branding from fascia to window graphics",
    description:
      "Your storefront is your first sales rep. We handle everything from cabinet signs and fascia letters to window graphics, door decals, and awning signs — delivering a cohesive brand experience that attracts and retains customers.",
    features: [
      "Cabinet / box signs with LED face",
      "Dimensional letters (routed aluminum, acrylic)",
      "Window graphics and frosted vinyl",
      "Awning and canopy signs",
      "Door decals and hours graphics",
      "Complete brand package pricing",
    ],
    image: "/images/storefront-clean-healthy.jpg",
    imageAlt: "Clean & Healthy Homes modern storefront signage",
  },
  {
    id: "custom-signs",
    title: "Custom Signs",
    icon: "Sparkles",
    tagline: "If you can imagine it, we can build it",
    description:
      "Our in-house design and fabrication team handles one-of-a-kind projects that don't fit a standard category. Neon-style LED, architectural signage, interior wayfinding systems, 3D logos, and artistic installations — we turn creative concepts into physical reality.",
    features: [
      "In-house design and rendering",
      "Neon, blade, and projecting signs",
      "Wayfinding and directory systems",
      "3D fabricated logos and murals",
      "ADA-compliant signage systems",
      "Permit pulling and city approval assistance",
    ],
    image: "/images/custom-femz.jpg",
    imageAlt: "FEMZ Las Vegas custom dimensional logo sign",
  },
]

// ------------------------------------------------------------
//  ABOUT PAGE
// ------------------------------------------------------------
export const about = {
  stats: [
    { value: "500+", label: "Signs Installed" },
    { value: "20+", label: "Years in Las Vegas" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "1", label: "Dedicated Owner" },
  ],

  storyImage: "/images/fabrication-letters.jpg",

  storyParagraphs: [
    "Best Signs Las Vegas was founded by Jim Boone, a sign industry veteran who saw that Las Vegas businesses deserved better than cookie-cutter signage. Located at 3111 S Valley View Blvd, we deliver custom-crafted signs that make your business impossible to miss.",
    "Today, our 25,000 sq ft facility houses CNC routers, large-format UV printers, metal fabrication equipment, and a dedicated vehicle wrap installation bay. From concept to installation, everything happens under one roof — ensuring quality control and faster delivery times.",
    "We've completed over 500 sign projects for restaurants, retailers, hotels, medical offices, automotive businesses, and corporate campuses across the Las Vegas Valley. Our clients range from first-time small business owners to nationally recognized brands expanding into the Nevada market.",
  ],

  values: [
    {
      icon: "Shield",
      title: "Quality Craftsmanship",
      description:
        "Every sign we build is crafted with premium materials and rigorous quality control. We don't ship a sign we wouldn't proudly put our own name on.",
    },
    {
      icon: "Clock",
      title: "Fast Turnaround",
      description:
        "We know time is money. Our streamlined production process delivers most projects on schedule — and our rush service gets you signs when you need them most.",
    },
    {
      icon: "DollarSign",
      title: "Competitive Pricing",
      description:
        "Factory-direct pricing means you get Las Vegas's best sign quality without the markup. We offer transparent quotes with no hidden fees.",
    },
    {
      icon: "MapPin",
      title: "Local Las Vegas Expertise",
      description:
        "We know Las Vegas zoning, permit requirements, HOA rules, and climate demands. Our local knowledge saves you time and prevents costly mistakes.",
    },
  ],

  team: [
    {
      name: "Jim Boone",
      role: "Owner & Operator",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "Las Vegas sign industry veteran with deep expertise in custom fabrication, installation, and delivering results for local businesses.",
    },
  ],

  milestones: [
    { year: "2004", event: "Founded Best Signs Las Vegas in a 2,000 sq ft shop on the east side" },
    { year: "2009", event: "Expanded to 10,000 sq ft facility, added vehicle wrap division" },
    { year: "2014", event: "Completed 1,000th sign installation — recognized by the Nevada Sign Association" },
    { year: "2018", event: "Launched LED and digital signage division, grew team to 30+ members" },
    { year: "2022", event: "Opened new 25,000 sq ft production facility, largest in Southern Nevada" },
    { year: "2024", event: "Celebrated 500+ active clients and 20 years of Las Vegas sign making" },
  ],

  certifications: [
    { icon: "Shield", label: "Fully Licensed & Insured" },
    { icon: "Award", label: "Nevada Sign Association Member" },
    { icon: "Star", label: "5-Star Google Rated" },
    { icon: "Wrench", label: "In-House Fabrication" },
    { icon: "MapPin", label: "Las Vegas Local Since 2004" },
  ],
}
