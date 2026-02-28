# Specification

## Summary
**Goal:** Replace the Services section with a shoppable Products section, add a client-side shopping cart, and implement a mailto-based checkout flow.

**Planned changes:**
- Replace `ServicesSection` with a new `ProductsSection` displaying 4–6 luxury product cards in the AuraFlora pastel design system, each with a product image, name, short description, price, and an "Add to Cart" / "Buy Now" button
- Implement a client-side shopping cart (React state) with a slide-out drawer or modal showing item names, quantities, unit prices, line totals, and a subtotal; users can increment, decrement, or remove items
- Add a cart icon with item count badge to the Navbar
- Implement a checkout form (name, email, delivery address) that on submission opens a pre-filled `mailto:aurafloraaf@gmail.com` URI with order details, then shows a confirmation message
- Update the Navbar smooth-scroll link from "Services" to "Products" / "Shop" pointing to the new section anchor
- Update the Footer navigation link from "Services" to "Products" / "Shop" pointing to the new section anchor

**User-visible outcome:** Visitors can browse AuraFlora products, add them to a cart, review their cart, and place an order by filling in a simple form that opens their email client pre-filled with the order details.
