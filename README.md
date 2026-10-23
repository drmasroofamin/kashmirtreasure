# Sunrise Ecotrade

A mobile-first, wholesale-only catalogue for Kashmiri walnuts, almonds and honey, built with React, TypeScript and Vite. All nine product variants have their own URL-encoded WhatsApp enquiry message. There is no cart, checkout, payment, login or backend to configure.

## Develop

Use Node.js **22.12 or newer**.

```sh
npm ci
npm run dev -- --port 5173 --strictPort
```

Create and inspect a production build:

```sh
npm run build
npm run preview -- --port 4173 --strictPort
```

The build checks TypeScript and produces the static site in `dist/`. Deploy that directory with any static hosting provider.

## Customize

- Edit the brand name, WhatsApp number, email, address and hours in `src/config.ts`. The number uses international digits without `+` or spaces. The brand name also updates HTML metadata through `vite.config.ts`.
- Edit product names, descriptions, pack sizes, minimum order quantities and image paths in `src/products.ts`. Enquiry links automatically include each product and variant.
- Replace the illustrative generated images in `public/images/` with actual product and sourcing photographs. Update relevant image alt text when replacing imagery.
- Adjust visual styles in `src/styles.css` and page sections in `src/App.tsx` and `src/components/`.

## Before public launch

Confirm actual stock, grades, pack sizes and MOQs; the catalogue currently uses indicative information. Verify the WhatsApp number, business hours, address and email, and add real contact details where needed. Replace or remove certification placeholders and sample reviews, and supply supporting documents or permissions for any claims you publish. The placeholders do not establish real certifications or customer endorsements.

No credentials or environment variables are required for local development. WhatsApp opens externally when a buyer chooses to enquire.
