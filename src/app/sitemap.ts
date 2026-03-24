import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bestsignslv.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://bestsignslv.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://bestsignslv.com/portfolio", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://bestsignslv.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://bestsignslv.com/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ]
}
