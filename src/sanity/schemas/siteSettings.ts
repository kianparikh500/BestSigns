import { defineType, defineField } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Business Info",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Business Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Phone Number (display)", type: "string", description: 'e.g. (702) 472-4011' }),
    defineField({ name: "phoneHref", title: "Phone Number (link)", type: "string", description: 'e.g. tel:+17024724011' }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "zip", title: "ZIP Code", type: "string" }),
      ],
    }),
    defineField({ name: "hours", title: "Business Hours", type: "string", description: 'e.g. Mon–Sat 8AM–6PM' }),
    defineField({ name: "yearFounded", title: "Year Founded", type: "string" }),
    defineField({
      name: "social",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "twitter", title: "Twitter / X URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
      ],
    }),
  ],
})
