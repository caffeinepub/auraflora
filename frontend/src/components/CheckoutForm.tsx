import { useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CheckoutFormProps {
  onBack: () => void;
}

interface FormData {
  name: string;
  email: string;
  street: string;
  city: string;
  postal: string;
  country: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  street: '',
  city: '',
  postal: '',
  country: 'India',
};

const ORDER_EMAIL = 'hello.auraflora@gmail.com';

export default function CheckoutForm({ onBack }: CheckoutFormProps) {
  const { items, subtotal, clearCart, closeCart } = useCart();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email';
    if (!form.street.trim()) newErrors.street = 'Street address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.postal.trim()) newErrors.postal = 'Postal code is required';
    if (!form.country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const orderLines = items
      .map(
        (item) =>
          `• ${item.product.name} × ${item.quantity} — ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
      )
      .join('\n');

    const body = [
      `Hello AuraFlora,`,
      ``,
      `I would like to place the following order:`,
      ``,
      orderLines,
      ``,
      `Order Subtotal: ₹${subtotal.toLocaleString('en-IN')}`,
      ``,
      `--- Customer Details ---`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      ``,
      `Delivery Address:`,
      `${form.street}`,
      `${form.city} — ${form.postal}`,
      `${form.country}`,
      ``,
      `Please confirm availability and payment details.`,
      ``,
      `Thank you!`,
    ].join('\n');

    const subject = encodeURIComponent('AuraFlora Order');
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${encodedBody}`;

    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'oklch(0.95 0.020 155)' }}>
          <CheckCircle size={32} style={{ color: 'oklch(0.60 0.10 155)' }} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-light text-foreground mb-2">
            Order Sent!
          </h3>
          <p className="font-body text-sm text-foreground/55 leading-relaxed max-w-xs">
            Your email client has opened with your order details. We'll get back to you within 24–48 hours.
          </p>
        </div>
        <button
          onClick={closeCart}
          className="mt-2 px-6 py-2.5 rounded-full border border-aura-rose/40 text-sm tracking-widest uppercase font-medium text-foreground/70 hover:bg-aura-rose/20 hover:border-aura-rose transition-all duration-300"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-aura-rose/10 transition-colors duration-200 text-foreground/50 hover:text-foreground"
          aria-label="Back to cart"
        >
          <ArrowLeft size={18} />
        </button>
        <h3 className="font-display text-2xl font-light text-foreground">
          Checkout
        </h3>
      </div>

      {/* Order summary */}
      <div className="mb-6 p-4 rounded-2xl" style={{ backgroundColor: 'oklch(0.95 0.025 10 / 0.5)' }}>
        <p className="text-xs tracking-widest uppercase font-medium text-foreground/40 mb-3">
          Order Summary
        </p>
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between text-sm font-body text-foreground/70 mb-1">
            <span>{item.product.name} × {item.quantity}</span>
            <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-aura-rose/15 flex justify-between font-body text-sm font-medium text-foreground">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1 overflow-y-auto pr-1">
        <p className="text-xs tracking-widest uppercase font-medium text-foreground/40">
          Your Details
        </p>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="checkout-input"
          />
          {errors.name && <p className="text-xs text-destructive mt-1 font-body">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="checkout-input"
          />
          {errors.email && <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>}
        </div>

        <p className="text-xs tracking-widest uppercase font-medium text-foreground/40 mt-2">
          Delivery Address
        </p>

        <div>
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={form.street}
            onChange={handleChange}
            className="checkout-input"
          />
          {errors.street && <p className="text-xs text-destructive mt-1 font-body">{errors.street}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="checkout-input"
            />
            {errors.city && <p className="text-xs text-destructive mt-1 font-body">{errors.city}</p>}
          </div>
          <div>
            <input
              type="text"
              name="postal"
              placeholder="Postal Code"
              value={form.postal}
              onChange={handleChange}
              className="checkout-input"
            />
            {errors.postal && <p className="text-xs text-destructive mt-1 font-body">{errors.postal}</p>}
          </div>
        </div>

        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="checkout-input"
          />
          {errors.country && <p className="text-xs text-destructive mt-1 font-body">{errors.country}</p>}
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-3.5 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
          style={{ backgroundColor: 'oklch(0.68 0.12 10)', color: 'white' }}
        >
          Place Order via Email
        </button>
      </form>
    </div>
  );
}
