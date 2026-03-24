import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./src/sanity/schemas"

export default defineConfig({
  name: "bestsigns",
  title: "Best Signs Las Vegas",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Website Content")
          .items([
            S.listItem()
              .title("🏢 Business Info")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Business Info")
              ),
            S.listItem()
              .title("🏠 Homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
                  .title("Homepage")
              ),
            S.listItem()
              .title("🛠 Services")
              .child(S.documentTypeList("service").title("Services")),
            S.listItem()
              .title("🖼 Portfolio")
              .child(S.documentTypeList("portfolioImage").title("Portfolio Images")),
            S.listItem()
              .title("⭐ Testimonials")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
            S.listItem()
              .title("📖 About Page")
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
                  .title("About Page")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
