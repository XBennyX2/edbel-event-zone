import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '../data/contact';

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Our work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'How it works', href: '#process' },
  { name: 'Reviews', href: '#testimonials' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <nav className="page flex h-16 items-center justify-between gap-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/images/branding/edbel-logo-ink.png"
            alt=""
            width="560"
            height="416"
            className="h-10 w-auto"
          />
          <span className="text-lg font-medium text-ink">Edbel Event Zone</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-body transition-colors hover:text-ink"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Get a quote
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-ink lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="page flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-3 text-lg text-ink"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary"
              >
                Get a quote
              </a>
              <a href={PHONE_HREF} className="btn btn-secondary">
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
