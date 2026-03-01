import { SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'auraflora');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-aura-footer text-aura-footer-fg">
      {/* Top decorative line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-aura-rose/30 to-transparent" />

      {/* Decorative blob */}
      <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-aura-lavender/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/assets/generated/auraflora-logo.dim_400x120.png"
              alt="AuraFlora"
              className="h-10 w-auto object-contain mb-6 opacity-90"
            />
            <p className="font-body text-sm text-aura-footer-fg/50 leading-relaxed max-w-xs">
              A luxury botanical atelier dedicated to the art of living beautifully. Crafted with intention, delivered with grace.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase font-medium text-aura-footer-fg/40 mb-6">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-aura-footer-fg/55 hover:text-aura-footer-fg transition-colors duration-300 font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase font-medium text-aura-footer-fg/40 mb-6">
              Connect
            </h4>

            {/* Instagram only */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/aura._.flora_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-aura-footer-fg/15 flex items-center justify-center text-aura-footer-fg/50 hover:text-aura-footer-fg hover:border-aura-rose/50 transition-all duration-300 hover:bg-aura-rose/10"
              >
                <SiInstagram size={16} />
              </a>
            </div>

            {/* Contact details */}
            <a
              href="mailto:hello.auraflora@gmail.com"
              className="text-sm text-aura-footer-fg/50 font-body hover:text-aura-rose transition-colors duration-300 block"
            >
              hello.auraflora@gmail.com
            </a>

            {/* WhatsApp numbers */}
            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <SiWhatsapp size={13} className="text-green-500/60 shrink-0" />
                <a
                  href="https://wa.me/919082777287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-aura-footer-fg/50 font-body hover:text-aura-rose transition-colors duration-300"
                >
                  +91 90827 77287
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiWhatsapp size={13} className="text-green-500/60 shrink-0" />
                <a
                  href="https://wa.me/919920965759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-aura-footer-fg/50 font-body hover:text-aura-rose transition-colors duration-300"
                >
                  +91 99209 65759
                </a>
              </div>
            </div>

            <p className="text-sm text-aura-footer-fg/50 font-body mt-2">
              Mumbai
            </p>
            <p className="text-sm text-aura-footer-fg/50 font-body mt-1">
              Reverts within 24–48 hours
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-aura-footer-fg/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-aura-footer-fg/35 font-body tracking-wide">
            © {year} AuraFlora. All rights reserved.
          </p>
          <p className="text-xs text-aura-footer-fg/35 font-body">
            Built with{' '}
            <span className="text-aura-rose/70">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aura-rose/70 hover:text-aura-rose transition-colors duration-300"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
