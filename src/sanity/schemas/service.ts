import { defineType, defineField } from "sanity"

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Service Name", type: "string" }),
    defineField({
      name: "slug",
      title: "URL ID",
      type: "slug",
      description: "Used for the link on the services page, e.g. channel-letters",
      options: { source: "title" },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["Lightbulb", "Landmark", "Car", "Flag", "Zap", "Store", "Sparkles", "Shield", "Award", "Star", "Clock"],
      },
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string", description: "Short line shown in blue above the title" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({
      name: "features",
      title: "Features / Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "Image Description", type: "string" }),
    defineField({
      name: "homepageDescription",
      title: "Short Description (Homepage Card)",
      type: "text",
      rows: 2,
      description: "Shorter version shown on the homepage service cards",
    }),
    defineField({
      name: "showOnHomepage",
      title: "Show on Homepage?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (1, 2, 3...)",
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
})
