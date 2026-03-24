import { defineType, defineField } from "sanity"

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "story", title: "Our Story" },
    { name: "stats", title: "Stats" },
    { name: "values", title: "Core Values" },
    { name: "team", title: "Team" },
    { name: "milestones", title: "Milestones" },
    { name: "certifications", title: "Certifications" },
  ],
  fields: [
    // Story
    defineField({
      name: "storyImage",
      title: "Story Image",
      type: "image",
      group: "story",
      options: { hotspot: true },
    }),
    defineField({
      name: "storyParagraphs",
      title: "Story Paragraphs",
      type: "array",
      group: "story",
      of: [{ type: "text" }],
      description: "Each item is one paragraph of the company story",
    }),

    // Stats
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "stats",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", description: 'e.g. "500+"' }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        },
      ],
    }),

    // Values
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      group: "values",
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
              options: { list: ["Shield", "Clock", "DollarSign", "MapPin", "Star", "Award", "CheckCircle"] },
            }),
          ],
        },
      ],
    }),

    // Team
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      group: "team",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Full Name", type: "string" }),
            defineField({ name: "role", title: "Role / Title", type: "string" }),
            defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
            defineField({ name: "bio", title: "Bio", type: "text", rows: 3 }),
          ],
        },
      ],
    }),

    // Milestones
    defineField({
      name: "milestones",
      title: "Milestones / Timeline",
      type: "array",
      group: "milestones",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "event", title: "What happened", type: "text", rows: 2 }),
          ],
        },
      ],
    }),

    // Certifications
    defineField({
      name: "certifications",
      title: "Certifications / Trust Badges",
      type: "array",
      group: "certifications",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ["Shield", "Award", "Star", "Wrench", "MapPin", "CheckCircle"] },
            }),
          ],
        },
      ],
    }),
  ],
})
