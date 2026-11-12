import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-stone-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#12151B] border border-white/10 p-1.5 flex items-center justify-center">
                <img 
                  src="/assets/images/branding/edbel-logo-mark.png" 
                  alt="Edbel Event Zone Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-wide text-white block">
                  EDBEL EVENT ZONE
                </span>
                <span className="font-amharic text-xs text-brass-400 block">
                  ኤድቤል ኢቨንት ዞን • አዲስ አበባ
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Luxury event architecture, grand ballroom staging, and bespoke floral styling atelier based in Bole, Addis Ababa, Ethiopia.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://web.facebook.com/EdbelEventZone/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#12151B] border border-white/10 hover:border-white/30 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/251913904484"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#12151B] border border-white/10 hover:border-white/30 flex items-center justify-center text-stone-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:+251913904484"
                className="w-8 h-8 rounded-full bg-[#12151B] border border-white/10 hover:border-white/30 flex items-center justify-center text-stone-300 hover:text-brass-300 transition-colors"
                aria-label="Phone Number"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brass-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio (51 Works)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Editorial Story</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Design Philosophy</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Praise</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Consultation Brief</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brass-400 mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Grand Hotel Ballrooms</li>
              <li>Traditional Shimgilna (ሽምግልና)</li>
              <li>Kelbet Ring Ceremonies (ቀለበት)</li>
              <li>Rooftop Proposals</li>
              <li>Baptism Pavilions (ክርስትና)</li>
              <li>All-Weather Marquees</li>
              <li>Milestone Birthdays</li>
              <li>Corporate Gala Dinners</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brass-400 mb-4">
              Atelier Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-stone-500 block text-[10px] uppercase">Telephone</span>
                <a href="tel:+251913904484" className="text-white hover:text-brass-300 transition-colors font-medium">
                  +251 91 390 4484
                </a>
              </div>

              <div>
                <span className="text-stone-500 block text-[10px] uppercase">WhatsApp</span>
                <a href="https://wa.me/251913904484" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Direct Messenger
                </a>
              </div>

              <div>
                <span className="text-stone-500 block text-[10px] uppercase">Location</span>
                <span className="text-stone-300">Bole, Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] transition-colors text-center"
            >
              Request Consultation
            </button>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Edbel Event Zone (ኤድቤል Event Zone). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-400 font-amharic">
              አዲስ አበባ፣ ኢትዮጵያ
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#12151B] border border-white/10 hover:border-white/30 text-stone-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
