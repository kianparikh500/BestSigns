import { client } from "./client"
import {
  business as fallbackBusiness,
  hero as fallbackHero,
  homepageServices as fallbackServices,
  statsBar as fallbackStats,
  portfolioPreview as fallbackPortfolio,
  whyUs as fallbackWhyUs,
  whyUsImage as fallbackWhyUsImage,
  testimonials as fallbackTestimonials,
  servicesPage as fallbackServicesPage,
  about as fallbackAbout,
} from "@/content"

// Helper: fetch with fallback to content.ts if Sanity isn't configured yet
async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return fallback
  try {
    const result = await client.fetch(query)
    return result ?? fallback
  } catch {
    return fallback
  }
}

export async function getSiteSettings() {
  return safeFetch(
    `*[_type == "siteSettings"][0]`,
    fallbackBusiness
  )
}

export async function getHomepage() {
  const data = await safeFetch(
    `*[_type == "homepage"][0]{
      heroBadge, heroHeading, heroSubtext,
      heroImage { asset->{ url } },
      heroChecks, heroStats,
      heroPrimaryCtaLabel, heroSecondaryCtaLabel,
      statsBar,
      portfolioImages[] { image { asset->{ url } }, alt },
      whyUsImage { asset->{ url } },
      whyUsItems,
      testimonials
    }`,
    null
  )
  return data
}

export async function getHomepageServices() {
  return safeFetch(
    `*[_type == "service" && showOnHomepage == true] | order(order asc) {
      title,
      "href": "/services/" + slug.current,
      icon,
      homepageDescription,
      image { asset->{ url } }
    }`,
    fallbackServices
  )
}

export async function getServicesPage() {
  return safeFetch(
    `*[_type == "service"] | order(order asc) {
      "id": slug.current,
      title, icon, tagline, description,
      features,
      image { asset->{ url } },
      imageAlt
    }`,
    fallbackServicesPage
  )
}

export async function getAboutPage() {
  return safeFetch(
    `*[_type == "aboutPage"][0]{
      storyImage { asset->{ url } },
      storyParagraphs,
      stats,
      values,
      team[] { name, role, bio, image { asset->{ url } } },
      milestones,
      certifications
    }`,
    fallbackAbout
  )
}
