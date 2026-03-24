import { defineType, defineField } from "sanity"

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Customer Name", type: "string" }),
    defineField({ name: "business", title: "Business Name", type: "string" }),
    defineField({ name: "text", title: "Review Text", type: "text", rows: 4 }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "business" },
  },
})
