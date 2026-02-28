import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CheckoutForm from './CheckoutForm';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleClose = () => {
    closeCart();
    setShowCheckout(false);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-full max-w-md flex flex-col shadow-2xl transition-transform duration-500"
        style={{ backgroundColor: 'oklch(0.98 0.005 75 / 0.97)', backdropFilter: 'blur(24px)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Top border accent */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-aura-rose/40 to-transparent" />

        <div className="flex flex-col h-full overflow-hidden p-6 lg:p-8">
          {showCheckout ? (
            <CheckoutForm onBack={() => setShowCheckout(false)} />
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={20} className="text-foreground/60" />
                  <h2 className="font-display text-2xl font-light text-foreground">
                    Your Cart
                  </h2>
                  {totalItems > 0 && (
                    <span
                      className="text-xs font-body font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'oklch(0.78 0.08 10)', color: 'white' }}
                    >
                      {totalItems}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full hover:bg-aura-rose/10 transition-colors duration-200 text-foreground/50 hover:text-foreground"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Empty state */}
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'oklch(0.95 0.025 10)' }}
                  >
                    <ShoppingBag size={32} style={{ color: 'oklch(0.68 0.12 10)' }} />
                  </div>
                  <div>
                    <p className="font-display text-xl font-light text-foreground mb-1">
                      Your cart is empty
                    </p>
                    <p className="font-body text-sm text-foreground/45">
                      Add something beautiful to get started.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-2 px-6 py-2.5 rounded-full border border-aura-rose/40 text-sm tracking-widest uppercase font-medium text-foreground/70 hover:bg-aura-rose/20 hover:border-aura-rose transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Items list */}
                  <div className="flex-1 overflow-y-auto -mx-2 px-2 space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-4 rounded-2xl transition-all duration-200"
                        style={{ backgroundColor: 'oklch(0.95 0.025 10 / 0.5)' }}
                      >
                        {/* Product image */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-base font-light text-foreground leading-snug truncate">
                            {item.product.name}
                          </p>
                          <p className="font-body text-sm text-foreground/50 mt-0.5">
                            ₹{item.product.price.toLocaleString('en-IN')} each
                          </p>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full border border-aura-rose/25 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-aura-rose/60 transition-all duration-200"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-body text-sm font-medium text-foreground w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full border border-aura-rose/25 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-aura-rose/60 transition-all duration-200"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Line total + remove */}
                        <div className="flex flex-col items-end justify-between shrink-0">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1.5 rounded-full text-foreground/30 hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                          <p className="font-body text-sm font-medium text-foreground">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-6 border-t border-aura-rose/15">
                    <div className="flex justify-between items-center mb-5">
                      <span className="font-body text-xs text-foreground/55 tracking-wide uppercase">
                        Subtotal
                      </span>
                      <span className="font-display text-2xl font-light text-foreground">
                        ₹{subtotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="font-body text-xs text-foreground/35 mb-4 text-center">
                      Shipping & taxes calculated at checkout
                    </p>
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full py-3.5 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
                      style={{ backgroundColor: 'oklch(0.68 0.12 10)', color: 'white' }}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
