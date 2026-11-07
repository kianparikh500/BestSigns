# Best Signs Las Vegas — Website Repositioning Plan (Design & Service Only)

**Goal:** Reposition the site so Best Signs advertises **sign design and design services only**: no
installation, fabrication, production, or repair. A business without a Nevada C-6 license must not
advertise or offer contracting work (NRS ch. 624).

> Not legal advice. Before launch, confirm the final copy with the Nevada State Contractors Board
> (NSCB) or a Nevada attorney. Statute references here are pointers, so verify them.

---

## Status (Nov 2026)

- **D1 answered:** no license is held. The site was rewritten as design-only (§2.1–2.9 implemented).
- **Portfolio answered:** Best Signs made all the pictured signs. They are kept and recaptioned as designs. The only shop-fabrication photo (`fabrication-letters.jpg`) was removed from the site.
- **D5 still open:** the code keeps `bestsignslv.com`, which matches the business email.
- **Still to do:** the off-site cleanup (§2.11), the legal review (§3 step 8), any real testimonials, and adding back stats only if they can be documented.

## 0. Decisions to make before editing anything

| # | Decision | Why it matters |
|---|----------|----------------|
| D1 | **Does any Best Signs entity hold an NSCB license, of any class?** | If yes, display its name and number and keep only the work in its scope. This plan assumes **no license**. |
| D2 | **Define "service."** In the sign industry, "sign service" means maintenance and repair, which is excluded. Use "design services" or "design consultation" everywhere. | Otherwise the word itself reads as an offer to repair signs. |
| D3 | **Do not act as a middleman for construction.** Best Signs must not take payment for fabrication or installation, mark up a contractor's price, subcontract the work, or run it as "project management." | NRS 624.020 defines "contractor" to include anyone who does the work "by or through others" and construction managers. So "we coordinate install through licensed partners" is **not** a safe workaround. Treat referral fees as a question for the NSCB. |
| D4 | **Dropping printing (banners, wraps, decals) is stricter than the law likely requires.** It is a business choice that gives up revenue. | Confirm with the owner. This plan follows the instruction "no production." |
| D5 | **Which domain is live?** The code uses `bestsignslv.com`, but the discussion references `bestsignlasvegas.com`. | Metadata, schema and sitemap URLs must match. |

---

## 1. New positioning

**One-liner:** *"Custom sign design for Las Vegas businesses. You get print- and fabrication-ready
artwork, and you hire any licensed sign contractor to build and install it."*

**What Best Signs sells (all deliverables are digital files or advice):**

1. **Custom Sign Design**: concepts, 3D renderings, and day/night mockups placed on a photo of the client's storefront.
2. **Storefront & Brand Signage Design**: a coordinated design package covering the fascia, window and door graphics.
3. **Vehicle Wrap Design**: wrap layouts on vehicle templates, delivered as print-ready files.
4. **Banner, Display & Trade-Show Graphic Design**: print-ready artwork only.
5. **Wayfinding & Interior Signage Design**: layout plans, sign schedules and ADA-oriented design layouts.
6. **Sign Design Consultation**: brand review, visibility and readability review, and design guidance against HOA or landlord sign criteria.

**What the client receives:** vector artwork, color specs (PMS/vinyl codes), dimensioned design
drawings (non-engineered) and a sign schedule. The client takes these to a **licensed C-6 contractor
they hire directly**.

**Never offer:** installation, fabrication, production or printing, repair, refurbishing,
maintenance, electrical or LED wiring, structural or engineering drawings, permit pulling, site
surveys for installation, warranties on physical signs, or "turnkey" or "full-service" packages.

---

## 2. File-by-file changes

Line numbers refer to the current branch head.

### 2.1 `src/content.ts` (most of the copy lives here)

| Line(s) | Current | Action / Replacement |
|---|---|---|
| 13 | `tagline: "Las Vegas's #1 Sign Company"` | → `"Custom Sign Design for Las Vegas Businesses"`. The "#1" claim is unsubstantiated. |
| 37 | hero badge `"Las Vegas's #1 Sign Company"` | → `"Las Vegas Sign Design Studio"` |
| 38 | `"Custom Signs That Make Your Business Stand Out"` | → `"Sign Designs That Make Your Business Stand Out"` |
| 40 | `"…we design and install high-impact signage… Serving Las Vegas since 2005."` | → `"From storefront signs to vehicle wraps, we design high-impact signage and hand you ready-to-build artwork for any licensed sign contractor."` Also fix the year conflict: 2005 vs. `yearFounded: "2004"`. |
| 44–46 | `"Quick Turnaround"`, `"Lifetime Warranty"`, `"Licensed & Insured"` | Keep "Free Design Consultation". **Remove** "Lifetime Warranty" and "Licensed & Insured". Add `"Unlimited Revisions"` (or a real policy) and `"Print-Ready Files"`. |
| 49–52 | hero stats | Keep only stats that are true and verifiable. **Remove** "24/7 Support Available" unless it is real. |
| 61–110 | `homepageServices` (Channel Letters, Monument, Wraps, Banners, LED, Storefront) | Replace with the 6 design services in §1. Remove "LED lighting", "illuminated", and "complete storefront signage solutions including awnings". |
| 115–120 | `statsBar`: "500+ Signs Installed", "50+ Team Members" | → "500+ Designs Delivered" (only if true). **Remove** "50+ Team Members": it contradicts "1 Dedicated Owner" at line 393. |
| 200–225 | `whyUs` | "Premium Materials" → **"Contractor-Ready Files"** (any licensed shop can build from them). "Full-Service Install / From permits to installation…" → **"Local Design Know-How"** (designs drawn up with Las Vegas HOA and landlord sign criteria in mind). "Fast Turnaround: delivers your signs" → "delivers your design files". |
| 232–251 | `testimonials` | **Remove all three.** They praise channel letters, permits and installation, and the names appear to be placeholders. Fake reviews are a deceptive-trade-practice risk (FTC rule on fake reviews; NRS 598). Replace them later with real design-client reviews. |
| 256–383 | `servicesPage` (7 entries) | Rewrite to the 6 design services in §1. Remove these features: "Professional installation included", "UL-listed electrical components", "aluminum construction", "Low-voltage LED uplight packages", "Paint-safe installation and removal", "Grommets… mounting hardware", "Rush production", "Custom cabinet sizes", "Lifetime LED panel warranty", "In-house design and fabrication team", "3D fabricated logos", "Permit pulling and city approval assistance", "If you can imagine it, we can build it". |
| 389–394 | about stats "500+ Signs Installed" | → "Designs Delivered" (if true). |
| 396 | `storyImage: fabrication-letters.jpg` | Replace with a design-studio or rendering image. |
| 398–402 | story paragraphs | Rewrite. Remove the "25,000 sq ft facility… CNC routers… metal fabrication… wrap installation bay… From concept to installation, everything happens under one roof" paragraph and "completed 500 sign projects". New focus: the design process and the files delivered. |
| 405–428 | `values` | "Every sign we build" → "Every design we deliver". "Streamlined production process" → "streamlined design process". "Factory-direct pricing" → remove. "We know Las Vegas zoning, permit requirements" → "We design with Las Vegas sign codes and HOA criteria in mind" (do **not** imply that Best Signs obtains permits). |
| 436 | Jim Boone bio "expertise in custom fabrication, installation" | → "expertise in sign design and branding for local businesses". |
| 440–447 | `milestones` | Remove "1,000th sign installation", "LED and digital signage division", "production facility, largest in Southern Nevada", and "vehicle wrap division". These conflict with the new model and appear unverifiable. Keep only true design milestones. |
| 449–455 | `certifications` | **Remove** "Fully Licensed & Insured" and "In-House Fabrication". Keep "Nevada Sign Association Member" only if current. Keep "5-Star Google Rated" only if true. Add "Design-Only Studio" (icon `PenTool`). |

### 2.2 `src/app/page.tsx`
- **Line 38:** "From concept to installation, we deliver complete signage solutions" → "From first sketch to final artwork, we design signage for every type of business."
- **Line 156:** "Another Sign Shop" → "Another Design Shop".
- **Line 160:** "artistic expertise with advanced manufacturing" → "artistic expertise with practical sign-design knowledge".
- **Line 193:** alt text "Sign production workshop" → "Sign design studio".
- **Line 240:** "Let's Build Your…" → "Let's Design Your…".

### 2.3 `src/app/services/page.tsx`
- **Lines 8 and 10 (metadata):** remove "channel letters, monument signs, LED signs" as offered services and use "sign design, storefront sign design, vehicle wrap design…".
- **Line 42:** "we deliver complete sign solutions" → "we design signs for…".
- **Add a "How It Works" strip:** (1) Consultation → (2) Concepts & mockups → (3) Revisions → (4) Final print- or fabrication-ready files → (5) **You hire a licensed contractor of your choice.** No contractor names or referral links.

### 2.4 `src/app/about/page.tsx`
- **Lines 8 and 10 (metadata):** remove "in-house fabrication", "full-service installation", "In-house production" and "licensed & insured".
- **Line 65:** alt text "production facility" → "design studio".
- **Line 273:** "Let's Build Something Great" → "Let's Design Something Great".

### 2.5 `src/app/portfolio/page.tsx` and `src/components/PortfolioGrid.tsx`
- **Portfolio lines 7, 9, 36–37:** "500+ completed sign projects… custom fabrications" → "sign design portfolio".
- **PortfolioGrid:** rename categories to design types, for example `["All", "Storefront", "Dimensional & Lobby", "Vehicle Wraps", "Monument & Pylon", "Interior & Wayfinding"]`. These are design categories, so a monument *design* is acceptable.
- Rewrite **every** caption that says fabricated, installation, install, in-shop or built in-house (lines 13–16, 58, 121, 140, 150, 156–173). Use the format "Sign design for {client}."
- **Remove these photos:** `fabrication-letters.jpg` (shop fabrication), "Fabrication Detail" `20180201_094816.jpg`, "Install Day" `20191210_131756.jpg`, and "Project Install" `20140607_140132.jpg`. They show construction work.
- **Owner check:** keep a photo only if Best Signs actually **designed** that sign. Photos of signs built and installed under another company's license, presented as Best Signs work, are misleading.

### 2.6 `src/components/QuoteForm.tsx` and `src/app/contact/page.tsx`
- **QuoteForm lines 10–18 (`signTypes`):** → `["Storefront Sign Design", "Dimensional / Lobby Sign Design", "Monument / Pylon Sign Design", "Vehicle Wrap Design", "Banner & Display Design", "Wayfinding / Interior Design", "Design Consultation", "Other"]`.
- **QuoteForm lines 76–79** and **contact lines 74–81:** "Get a Free Quote" → "Request a Design Consultation". "detailed quote" → "design proposal".
- **Remove any form field** about installation address or install date, if one exists.

### 2.7 `src/components/Footer.tsx`
- **Lines 6–13:** replace the service links with the 6 design services.
- **Add a scope disclosure** near the copyright line:
  > *Best Signs Las Vegas provides sign design and design-consultation services only. We do not
  > fabricate, produce, install, repair, or perform electrical or structural work on signs. Physical
  > sign work must be performed by a contractor licensed by the Nevada State Contractors Board.*

  A disclaimer does not cure an offer to do contracting work elsewhere on the site. It only
  clarifies scope, so the rest of the copy must still be fixed.

### 2.8 `src/components/Navbar.tsx` and `src/components/HeroSection.tsx`
- Change the CTA from "Get a Free Quote" to "Free Design Consultation". Check for any hard-coded copy not taken from `content.ts`.

### 2.9 SEO: `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`
- **Lines 25, 27–28, 43, 49, 88:** rewrite the title, description and keywords. Drop "channel letters Las Vegas", "monument signs Las Vegas" and "LED signs Las Vegas". Use "sign design Las Vegas", "storefront sign design", "vehicle wrap design Las Vegas", "logo sign design".
- **JSON-LD:** change the `@type` from a sign-company type to `ProfessionalService` (or `GraphicDesigner`-style). Remove "#1" and "since 2004" unless verified. Replace the placeholder `sameAs` links (`facebook.com`, `instagram.com`) with real profiles or remove them.
- **Keep the URLs** (`/services#…`), but update the anchor IDs to match the new service IDs and keep a redirect or alias for old anchors where practical.

### 2.10 Sanity CMS (`src/sanity/schemas/*`)
- The pages currently read from `content.ts`, not Sanity. If the Sanity dataset holds copies of the old copy, purge or update it so the old claims cannot be republished later. Schema `description` hints are fine as they are.

### 2.11 Off-site (not in this repo, but the same rules apply)
- Google Business Profile category and description, Yelp, Facebook and Instagram bios, vehicle lettering, business cards and quotes or invoices. The NSCB treats any advertising medium the same as the website.

---

## 3. Execution order

1. **Owner sign-off** on D1–D5 and on which portfolio photos Best Signs actually designed.
2. **Copy rewrite** in `content.ts` (§2.1). Do this first because one file changes about 70% of the site.
3. **Page and component edits** (§2.2–2.8).
4. **SEO and schema** (§2.9).
5. **Portfolio cleanup** (§2.5): remove or recaption the photos.
6. **Automated check:** run `npm run lint && npm run build`, then the banned-term scan below. It should return nothing except the footer disclosure.
   ```bash
   grep -rniE "install|fabricat|production|produc(e|ed)|repair|refurb|maintenan|licensed|insured|permit|wiring|electrical|UL-listed|weld|erect|build|built|warranty|full-service|turnkey|#1" src --include=*.ts --include=*.tsx | grep -v "src/components/ui/"
   ```
7. **Manual review** of each page on desktop and mobile.
8. **Legal check:** send the staging URL to the NSCB or an attorney before going live.
9. **Off-site cleanup** (§2.11).

## 4. Acceptance criteria
- No page offers, implies or shows Best Signs doing installation, fabrication, production or printing, repair, electrical, structural or permit work.
- No "Licensed", "Insured", "Lifetime Warranty" or "#1" claim appears anywhere.
- Every stat, milestone, certification and testimonial is true and documentable.
- The footer scope disclosure appears on every page.
- The CTA and form ask for a **design consultation**, not a sign quote.
- The banned-term scan is clean, and the build and lint pass.
