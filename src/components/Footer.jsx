import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import {
  EVENT_CATEGORIES,
  FACEBOOK_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  whatsappLink,
} from '../data/contact';

const LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Our work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'How it works', href: '#process' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Get a quote', href: '#contact' },
];

export default function Footer() {
  const linkClass = 'text-white/75 transition-colors hover:text-white';

  return (
    <footer className="bg-ink text-base text-white/75">
      <div className="page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1.2fr]">
        <div>
          <img
            src="/assets/images/branding/edbel-logo-light.png"
            alt="Edbel Event Zone"
            width="560"
            height="416"
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-xs">
            Event décor and planning in Bole, Addis Ababa.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-white">Pages</h2>
          <ul className="mt-4 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-medium text-white">Events we do</h2>
          <ul className="mt-4 space-y-2">
            {EVENT_CATEGORIES.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-medium text-white">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={PHONE_HREF} className={`inline-flex items-center gap-2.5 ${linkClass}`}>
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 ${linkClass}`}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 ${linkClass}`}
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="page flex flex-col justify-between gap-2 py-6 text-sm text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Edbel Event Zone. All rights reserved.</span>
          <span lang="am" className="font-amharic">አዲስ አበባ፣ ኢትዮጵያ</span>
        </div>
      </div>
    </footer>
  );
}
