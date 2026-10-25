# Mehar Motors | Codex Instructions

## Project
Build a premium luxury car rental website for Mehar Motors. Create a polished, responsive experience focused on vehicle discovery, rental inquiries, and WhatsApp conversions.

Inspect the existing codebase before making changes. Preserve its framework, JavaScript conventions, dependencies, and working functionality.

## Tech Stack
- Use the existing Next.js and JavaScript setup.
- Reuse existing components, utilities, and styling conventions.
- Avoid unnecessary dependencies and TypeScript migration.

## Design Direction
- Premium automotive aesthetic with obsidian black, charcoal, champagne gold, and ivory.
- Sophisticated typography, generous spacing, refined layouts, and high-quality vehicle photography.
- Smooth, purposeful animations and subtle hover interactions.
- Fully responsive across desktop, tablet, and mobile.
- Maintain a consistent visual identity across every section.

## Vehicle Inventory
Include all ten vehicles:

1. Mercedes-Benz S-Class
2. Mercedes-Maybach S-Class
3. Land Rover Defender
4. BMW i8
5. Honda Civic
6. Hyundai Sonata
7. Range Rover
8. Toyota Prado
9. Toyota Land Cruiser
10. Toyota Fortuner

Display each vehicle with its name, premium image, daily rental price in PKR, and a clear inquiry action. Keep vehicle data centralized so prices and details can be updated easily. Use existing prices if provided; otherwise, use clearly editable sample prices and do not present them as verified quotes.

## Required Website Features

### Header and Navigation
- Premium brand logo and navigation.
- Smooth navigation to page sections.
- Responsive mobile menu.
- Prominent WhatsApp booking CTA.

### Hero Section
- Striking luxury automotive photography.
- Strong headline and concise supporting copy.
- Primary vehicle exploration CTA and WhatsApp inquiry CTA.

### Fleet Section
- Responsive vehicle cards with premium images.
- Vehicle names, daily rates in PKR, and booking actions.
- Clear spacing, consistent image ratios, and refined hover effects.
- Optional category filters only if they improve usability.

### Services Section
- Daily and long-term rentals.
- Chauffeur-driven rentals, where offered.
- Airport transfers and special-event bookings, where offered.
- Do not claim unconfirmed services as established facts.

### About Section
- Present Mehar Motors as a premium car rental brand.
- Use concise, credible brand messaging without inventing awards, customer counts, or testimonials.

### Contact and Booking
- WhatsApp floating button fixed at the bottom-right.
- Vehicle-specific WhatsApp inquiries with a prefilled message.
- Contact section with configurable phone number and other verified business details.
- Use a configurable WhatsApp number in international format. Never invent a real contact number.

### Footer
- Brand identity, section links, contact details, and copyright.
- Keep the layout clean and responsive.

## Premium Car Images
- Use high-quality, visually consistent automotive photography.
- Prefer authentic vehicle photography from reputable image sources with suitable usage rights.
- Use images matching the exact make and model whenever possible.
- Prioritize premium compositions, attractive lighting, clean backgrounds, and suitable crops.
- Use optimized Next.js Image components where appropriate, with correct sizing, responsive sources, and lazy loading below the fold.
- Configure remote image domains properly if using external image hosts.
- Provide meaningful alt text and graceful fallbacks.
- Never use broken image URLs, unrelated vehicles, or low-quality placeholders in the finished UI.
- Do not assume image URLs are valid without checking them.

## Skill Responsibilities
- Taste Skill: primary authority for visual direction, layout, typography, imagery, and design consistency.
- Emil Design Engineering: animations, easing, transitions, and interaction performance.
- Vercel Web Design Guidelines: accessibility, responsiveness, image handling, and frontend quality.
- Impeccable: optional design critique and polish.

Resolve conflicts by letting Taste control visual design, Emil control motion, and Vercel guidelines control implementation quality.

## Coding Standards
- Keep code concise, readable, and maintainable.
- Avoid unnecessary comments, verbose explanations in code, and redundant abstractions.
- Do not add comments for routine bug fixes or refactors. Comment only when the reasoning is non-obvious.
- Fix root causes rather than masking symptoms.
- Preserve existing behavior unless a change is explicitly required.
- Avoid duplicated vehicle data and repeated component markup.
- Follow accessibility best practices, semantic HTML, keyboard navigation, visible focus states, and reduced-motion preferences.
- Avoid layout shifts, excessive animations, and unnecessary client-side JavaScript.
- Never expose secrets or commit environment files containing credentials.

## Workflow
1. Inspect the relevant files and installed skills.
2. Identify the smallest coherent implementation plan.
3. Implement the requested feature or fix.
4. Test relevant functionality and responsive layouts.
5. Run the available lint, test, and production build commands.
6. Use browser screenshots at desktop, tablet, and mobile widths when browser tooling is available.
7. Fix significant visual, accessibility, and performance issues.
8. Report what changed, what was tested, and any remaining issues.

Do not claim a test, build, image check, or browser verification passed unless it was actually performed.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
