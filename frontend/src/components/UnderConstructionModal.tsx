import { useEffect } from 'react';
import { X, Mail, MessageCircle } from 'lucide-react';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';

interface UnderConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnderConstructionModal({ isOpen, onClose }: UnderConstructionModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="uc-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: 'oklch(0.99 0.008 10)' }}
      >
        {/* Decorative top band */}
        <div
          className="h-1.5 w-full"
          style={{ background: 'linear-gradient(90deg, oklch(0.78 0.10 10), oklch(0.82 0.08 320), oklch(0.78 0.07 155))' }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 text-foreground/40 hover:text-foreground hover:bg-aura-rose/10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="px-8 pt-10 pb-10 text-center">
          {/* Botanical emoji cluster */}
          <div className="flex items-center justify-center gap-1 text-3xl mb-5 select-none">
            <span>🌸</span>
            <span className="text-2xl">🌿</span>
            <span>🌸</span>
          </div>

          {/* Heading */}
          <h2
            id="uc-modal-title"
            className="font-display text-3xl md:text-4xl font-light text-foreground mb-3 leading-tight"
          >
            Oops! We're Still Blooming
          </h2>

          {/* Subheading */}
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium mb-6"
            style={{ color: 'oklch(0.68 0.12 10)' }}
          >
            Checkout Under Construction
          </p>

          {/* Body */}
          <p className="font-body text-sm text-foreground/60 leading-relaxed mb-8 max-w-sm mx-auto">
            We're putting the finishing touches on our checkout experience — it'll be ready very soon!
            In the meantime, we'd love to take your order personally. Reach out to us through any of
            the channels below and we'll make sure your blooms arrive beautifully.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-7">
            <div className="flex-1 h-px" style={{ backgroundColor: 'oklch(0.90 0.015 10)' }} />
            <span className="text-xs tracking-widest uppercase text-foreground/30 font-medium">
              Contact Us
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'oklch(0.90 0.015 10)' }} />
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Gmail */}
            <a
              href="mailto:hello.auraflora@gmail.com"
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
              style={{
                backgroundColor: 'oklch(0.95 0.020 10)',
                color: 'oklch(0.45 0.12 10)',
                border: '1px solid oklch(0.88 0.030 10)',
              }}
            >
              <Mail size={15} />
              <span className="font-body">Gmail</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919082777287"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
              style={{
                backgroundColor: 'oklch(0.95 0.025 155)',
                color: 'oklch(0.40 0.10 155)',
                border: '1px solid oklch(0.87 0.040 155)',
              }}
            >
              <SiWhatsapp size={15} />
              <span className="font-body">WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aura._.flora_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
              style={{
                backgroundColor: 'oklch(0.95 0.020 320)',
                color: 'oklch(0.45 0.10 320)',
                border: '1px solid oklch(0.87 0.035 320)',
              }}
            >
              <SiInstagram size={15} />
              <span className="font-body">Instagram</span>
            </a>
          </div>

          {/* Footer note */}
          <p className="mt-8 text-xs text-foreground/35 font-body">
            We respond within 24–48 hours · Mumbai Studio
          </p>
        </div>
      </div>
    </div>
  );
}
