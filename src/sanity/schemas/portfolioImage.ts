import { defineType, defineField } from "sanity"

export const portfolioImage = defineType({
  name: "portfolioImage",
  title: "Portfolio Image",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "alt", title: "Caption / Alt Text", type: "string" }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first. The #1 image will be the large one.",
    }),
  ],
  preview: {
    select: { title: "alt", media: "image" },
  },
})
