import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'navbar-scrolled shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <img
              src="/assets/generated/logo-main.dim_320x80.png"
              alt="AuraFlora"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm tracking-widest uppercase font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aura-rose after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Cart + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full text-foreground/60 hover:text-foreground hover:bg-aura-rose/10 transition-all duration-300"
              aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-xs font-medium font-body flex items-center justify-center"
                  style={{ backgroundColor: 'oklch(0.68 0.12 10)', color: 'white' }}
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-aura-rose/40 text-sm tracking-widest uppercase font-medium text-foreground/80 hover:bg-aura-rose/20 hover:border-aura-rose transition-all duration-300"
            >
              Enquire
            </a>
          </div>

          {/* Mobile: Cart + Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-xs font-medium font-body flex items-center justify-center"
                  style={{ backgroundColor: 'oklch(0.68 0.12 10)', color: 'white', fontSize: '10px' }}
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>
            <button
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="navbar-scrolled px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm tracking-widest uppercase font-medium text-foreground/70 hover:text-foreground transition-colors py-2 border-b border-aura-rose/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-aura-rose/40 text-sm tracking-widest uppercase font-medium text-foreground/80 hover:bg-aura-rose/20 transition-all duration-300"
          >
            Enquire
          </a>
        </div>
      </div>
    </header>
  );
}
