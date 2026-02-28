import ProductCard from './ProductCard';
import type { Product } from '../contexts/CartContext';

const products: (Product & { bgClass: string; accentClass: string })[] = [
  {
    id: 'bespoke-bouquet',
    name: 'Bespoke Bloom Bouquet',
    description: 'Hand-crafted seasonal bouquet with the finest blooms, wrapped in our signature silk ribbon and botanical tissue.',
    price: 3500,
    image: '/assets/generated/product-placeholder-1.dim_600x600.png',
    bgClass: 'bg-aura-rose-card',
    accentClass: 'bg-aura-rose',
  },
  {
    id: 'botanical-perfume',
    name: 'Botanical Eau de Parfum',
    description: 'A rare blend of rose absolute, white jasmine, and sandalwood. 50ml hand-poured in our Mumbai atelier.',
    price: 6800,
    image: '/assets/generated/product-placeholder-2.dim_600x600.png',
    bgClass: 'bg-aura-lavender-card',
    accentClass: 'bg-aura-lavender',
  },
  {
    id: 'luxury-gift-box',
    name: 'Luxury Botanical Gift Box',
    description: 'A curated collection of dried botanicals, artisan candle, and hand-pressed floral stationery — the perfect gesture.',
    price: 4200,
    image: '/assets/generated/product-placeholder-3.dim_600x600.png',
    bgClass: 'bg-aura-sage-card',
    accentClass: 'bg-aura-sage',
  },
  {
    id: 'floral-candle',
    name: 'Floral Soy Candle',
    description: 'Hand-poured soy wax candle infused with real dried petals and a signature AuraFlora botanical fragrance blend.',
    price: 1800,
    image: '/assets/generated/product-placeholder-4.dim_600x600.png',
    bgClass: 'bg-aura-champagne-card',
    accentClass: 'bg-aura-champagne',
  },
  {
    id: 'pressed-flower-frame',
    name: 'Pressed Flower Art Frame',
    description: 'Artisan-pressed seasonal florals set in a gilded frame. Each piece is unique — a living memory preserved in bloom.',
    price: 2900,
    image: '/assets/generated/product-placeholder-1.dim_600x600.png',
    bgClass: 'bg-aura-lavender-card',
    accentClass: 'bg-aura-lavender',
  },
  {
    id: 'dried-wreath',
    name: 'Dried Botanical Wreath',
    description: 'Handwoven wreath of dried pampas, eucalyptus, and seasonal blooms. A timeless statement for any space.',
    price: 3200,
    image: '/assets/generated/product-placeholder-2.dim_600x600.png',
    bgClass: 'bg-aura-rose-card',
    accentClass: 'bg-aura-rose',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-aura-lavender/5 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-medium text-aura-sage mb-4">
              Our Collection
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground leading-tight">
              Shop
              <br />
              <span className="italic text-aura-lavender-deep">Botanicals</span>
            </h2>
          </div>
          <p className="font-body text-base text-foreground/50 max-w-xs leading-relaxed md:text-right">
            Each piece is crafted with intention — a little luxury for your everyday life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const { bgClass, accentClass, ...productData } = product;
            return (
              <ProductCard
                key={product.id}
                product={productData}
                bgClass={bgClass}
                accentClass={accentClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
