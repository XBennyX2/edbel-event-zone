import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Editorial Story', href: '#about' },
    { name: 'Philosophy', href: '#why-us' },
    { name: 'Client Words', href: '#testimonials' },
    { name: 'Inquiries', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top subtle status ticker */}
      <div className="bg-[#07080A] border-b border-white/5 text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-stone-400">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-stone-300 font-medium tracking-wide">
              Edbel Event Zone — Bole, Addis Ababa, Ethiopia
            </span>
            <span className="text-stone-600 font-amharic">| ኤድቤል ኢቨንት ዞን</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+251913904484" 
              className="hover:text-white transition-colors"
            >
              +251 91 390 4484
            </a>
            <a 
              href="https://wa.me/251913904484" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'editorial-glass py-3.5 shadow-2xl border-b border-white/10' 
            : 'bg-[#07080A]/90 backdrop-blur-md py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Editorial Wordmark */}
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#12151B] border border-white/15 flex items-center justify-center p-1.5 group-hover:border-brass-500/50 transition-colors">
                <img 
                  src="/assets/images/branding/edbel-logo-mark.png" 
                  alt="Edbel Event Zone Mark" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-semibold tracking-wide text-white group-hover:text-brass-300 transition-colors">
                    EDBEL
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 font-medium">
                    EVENT ZONE
                  </span>
                </div>
                <span className="text-[10px] font-amharic text-brass-400/80 tracking-normal">
                  ኤድቤል • የሰርግ እና የክብር ዝግጅት ዲዛይን
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-stone-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Direct CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>Reserve Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C0E12] border-b border-white/10 px-6 py-8 mt-2">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-stone-200 hover:text-brass-300 py-1 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+251913904484"
                  className="py-3 text-center rounded-xl bg-[#12151B] border border-white/10 text-xs font-medium text-stone-200"
                >
                  Call +251 91 390 4484
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="py-3 text-center rounded-xl bg-[#C29B38] text-black text-xs font-bold uppercase tracking-wider"
                >
                  Reserve Event Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
