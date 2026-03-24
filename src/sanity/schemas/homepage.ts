import { defineType, defineField } from "sanity"

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Banner" },
    { name: "stats", title: "Stats Bar" },
    { name: "portfolio", title: "Portfolio Preview" },
    { name: "whyUs", title: "Why Choose Us" },
    { name: "testimonials", title: "Testimonials" },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────
    defineField({
      name: "heroBadge",
      title: "Badge Text",
      type: "string",
      group: "hero",
      description: 'The small text at the top, e.g. "Las Vegas\'s #1 Sign Company"',
    }),
    defineField({
      name: "heroHeading",
      title: "Main Heading",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroSubtext",
      title: "Subtext",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      title: "Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroChecks",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      group: "hero",
      description: "Short trust-building items shown under the subtext",
    }),
    defineField({
      name: "heroStats",
      title: "Stats",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", description: 'e.g. "500+"' }),
            defineField({ name: "label", title: "Label", type: "string", description: 'e.g. "Projects Completed"' }),
          ],
        },
      ],
    }),
    defineField({
      name: "heroPrimaryCtaLabel",
      title: "Primary Button Text",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroSecondaryCtaLabel",
      title: "Secondary Button Text",
      type: "string",
      group: "hero",
    }),

    // ── Stats Bar ────────────────────────────────────
    defineField({
      name: "statsBar",
      title: "Stats Bar Items",
      type: "array",
      group: "stats",
      description: "The 4 numbers in the blue bar below the services",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ["Award", "Clock", "Star", "Users", "Shield", "CheckCircle"] },
            }),
          ],
        },
      ],
    }),

    // ── Portfolio ────────────────────────────────────
    defineField({
      name: "portfolioImages",
      title: "Portfolio Preview Images",
      type: "array",
      group: "portfolio",
      description: "The photo grid shown on the homepage (first image is the large one)",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "alt", title: "Caption / Alt Text", type: "string" }),
          ],
        },
      ],
    }),

    // ── Why Choose Us ────────────────────────────────
    defineField({
      name: "whyUsImage",
      title: "Why Choose Us — Side Image",
      type: "image",
      group: "whyUs",
      options: { hotspot: true },
    }),
    defineField({
      name: "whyUsItems",
      title: "Why Choose Us — Items",
      type: "array",
      group: "whyUs",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ["Star", "Clock", "Shield", "CheckCircle", "Award", "Users", "Zap"] },
            }),
          ],
        },
      ],
    }),

    // ── Testimonials ─────────────────────────────────
    defineField({
      name: "testimonials",
      title: "Customer Testimonials",
      type: "array",
      group: "testimonials",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Customer Name", type: "string" }),
            defineField({ name: "business", title: "Business Name", type: "string" }),
            defineField({ name: "text", title: "Review Text", type: "text", rows: 4 }),
            defineField({
              name: "rating",
              title: "Star Rating",
              type: "number",
              options: { list: [1, 2, 3, 4, 5] },
            }),
          ],
        },
      ],
    }),
  ],
})
