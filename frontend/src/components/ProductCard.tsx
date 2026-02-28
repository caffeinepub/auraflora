import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  bgClass: string;
  accentClass: string;
}

export default function ProductCard({ product, bgClass, accentClass }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-card ${bgClass}`}
    >
      {/* Decorative blob */}
      <div
        className={`absolute -bottom-10 -right-10 w-44 h-44 rounded-full opacity-25 blur-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-110 ${accentClass}`}
      />

      {/* Product image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-8">
        <h3 className="font-display text-2xl font-light text-foreground mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="font-body text-sm text-foreground/55 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Price + CTA row */}
        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-2xl font-light text-foreground">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
              added
                ? 'bg-aura-sage text-white scale-95'
                : 'bg-foreground/8 border border-aura-rose/30 text-foreground/70 hover:bg-aura-rose/20 hover:border-aura-rose hover:text-foreground'
            }`}
            style={added ? { backgroundColor: 'oklch(0.60 0.10 155)', color: 'white' } : {}}
          >
            {added ? (
              <>
                <Check size={13} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={13} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
