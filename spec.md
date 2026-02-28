# Specification

## Summary
**Goal:** Update the ContactSection and Footer with correct contact details, add an Instagram link, remove Facebook and Pinterest social icons, and wire the enquiry form to open a pre-filled Gmail via mailto.

**Planned changes:**
- In ContactSection, update email to `aurafloraaf@gmail.com` as a clickable `mailto:` link
- In ContactSection, replace studio/location text with "Mumbai"
- In ContactSection, replace hours/availability text with "We revert within 24–48 hours"
- In ContactSection, add a clickable Instagram handle `@aura._.flora_` linking to `https://www.instagram.com/aura._.flora_/` (opens in new tab)
- In Footer, remove Facebook and Pinterest social icons/links entirely
- In Footer, update Instagram link to `https://www.instagram.com/aura._.flora_/` (opens in new tab)
- In Footer, update email to `aurafloraaf@gmail.com` as a `mailto:` link, location to "Mumbai", and hours text to "24–48 hour response time"
- Wire the contact/enquiry form so submission opens the user's email client via a `mailto:` URI to `aurafloraaf@gmail.com`, pre-filled with the submitted name, email, and message; show success confirmation after submission

**User-visible outcome:** Visitors see updated contact details throughout the site, can click the email and Instagram links to interact directly, and submitting the enquiry form opens their email client with a pre-filled message addressed to AuraFlora's Gmail.
