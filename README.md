# Mehar Motors 🚘

Mehar Motors makes it easy to explore a collection of ten vehicles for your next trip. Browse the fleet, review sample daily rates, and contact the team on WhatsApp to ask about availability and booking details.

## ✨ What You Can Do

- Explore sedans, SUVs, and a sports coupe.
- View sample daily rental rates.
- Ask about a vehicle and your travel dates through WhatsApp.

## 🧰 Stack

- Next.js
- React
- JavaScript

## 📄 License

© 2026 Mehar Motors. All rights reserved. This project is not licensed for redistribution or reuse without permission from Mehar Motors.

## Vehicle imagery

The ten images in `public/images/ivory/` are AI-generated concept renders made for the light showroom design. They illustrate vehicle models, not verified photos of rental stock. Image paths and editable sample prices live in `src/data/vehicles.js`. Confirm actual model year, specification, availability and rental quote before booking.

Typography pairs self-hosted Bodoni Moda for headings with Manrope for body text and controls. Both include their SIL Open Font Licenses in `src/app/fonts/`.

## Development

- `npm run dev` starts the development server.
- `npm run lint` checks JavaScript and accessibility rules.
- `npm run build` creates the production build; `npm run start` serves it.

## Performance and maintenance

Bodoni Moda and Manrope are served as local variable WOFF2 fonts. Display text uses regular weight with a fixed optical size to keep fine strokes visible; multiline headings use a line height of 1.08. The hero image has no hover tilt, while its entrance and vehicle selector remain active. Fleet cards accept image sizes matching each parent grid. Navigation uses one shared link renderer, and scroll reveals observe newly added subtrees instead of rescanning the entire page on each mutation.

The optimization pass preserved computed layouts at 390, 768 and 1440 pixels on all three pages. Browser checks covered the vehicle selector, all ten image paths, inquiry validation/message generation, navigation, mobile-menu controls, reduced motion and the dynamic copyright year. No dedicated test script is currently defined.

Local Lighthouse 13.6.0 confirmation: mobile performance 95 for Home, 95 for Fleet and 98 for Before you book; desktop performance 100 on each page. A separate Slow 4G / 4x CPU Chrome trace recorded homepage LCP 2.02s and CLS 0.00, compared with the earlier 4.02s trace. Lab scores vary: an earlier homepage run in this pass scored 76 before the isolated confirmation. Raw reports remain under ignored `artifacts/lighthouse/2026-11-09/optimized/`.
