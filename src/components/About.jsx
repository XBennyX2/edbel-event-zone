import React from 'react';
import { ArrowUpRight, Compass, Shield, Sparkles } from 'lucide-react';

export default function About({ onOpenBooking }) {
  const commitments = [
    {
      title: 'Architectural Floristry',
      amharic: 'የተለየ የአበባ ጥበብ',
      body: 'From ceiling-suspended wisteria clouds to full fresh rose tunnels and sculpted 3D blossoms, every botanical installation is conditioned and built by master florists.'
    },
    {
      title: 'Ethiopian Cultural Heritage',
      amharic: 'የባህላችንን ክብር ጠብቆ ማዘጋጀት',
      body: 'Revering traditional Ethiopian protocols for Shimgilna (ሽምግልና) and Kelbet (ቀለበት) ceremonies with royal thrones, woven mesob elements, and custom Ge\'ez calligraphy.'
    },
    {
      title: 'In-House Luxury Inventory',
      amharic: 'የተሟላ የቅንጦት እቃዎች ክምችት',
      body: 'Direct access to crystal chandeliers, ghost chairs, golden Chiavaris, tufted velvet couches, and all-weather marquee tent structures without third-party delays.'
    },
    {
      title: 'Timeline Discipline',
      amharic: 'ትክክለኛ የሰዓት አያያዝ እና ቁጥጥር',
      body: 'On-site technical and styling directors arrive hours in advance, ensuring structural safety, lighting balance, and complete venue readiness prior to guest arrival.'
    }
  ];

  return (
    <section id="about" className="py-28 bg-[#090A0C] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            About The Atelier
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            ስለ ኤድቤል ኢቨንት ዞን
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12]">
              Elevating Celebrations into Works of Living Art
            </h2>
          </div>
          <div className="lg:col-span-5 pt-2">
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Based in Bole, Addis Ababa, <strong className="text-white font-medium">Edbel Event Zone (ኤድቤል Event Zone)</strong> is a bespoke event architecture and floral design studio. We specialize in transforming ballrooms, outdoor pavilions, and private residences into deeply personal atmospheres.
            </p>
          </div>
        </div>

        {/* Dual-Photo Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center">
          
          {/* Main Large Photo */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/assets/images/events/event_05_weddings.jpg"
                alt="Wisteria Pergola Dining"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out brightness-95"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brass-300 font-semibold block mb-1">
                  VIP Wisteria Canopy
                </span>
                <span className="text-white text-base font-serif">
                  Banquet Suite Styling in Addis Ababa
                </span>
              </div>
              <span className="text-xs text-stone-400 font-amharic">
                የክብር እንግዶች ማዕድ
              </span>
            </div>
          </div>

          {/* Secondary Editorial Spread */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/images/events/event_20_engagements.jpg"
                  alt="Traditional Shimgilna Mesob Setup"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out brightness-95"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-brass-300 font-semibold block mb-0.5">
                    Traditional Shimgilna & Kelbet
                  </span>
                  <span className="text-white text-sm font-serif">
                    Cultural Mesob & Royal Rose Mound
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-amharic">
                  ሽምግልና እና ቀለበት
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1116] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-brass-400 font-semibold block mb-1">
                  Verified Local Atelier
                </span>
                <span className="text-sm font-medium text-white block">
                  Bole, Addis Ababa, Ethiopia
                </span>
                <span className="text-xs text-stone-400 font-amharic">
                  በቦሌ የሚገኝ ሙያዊ የዝግጅት ድርጅት
                </span>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] transition-colors"
              >
                Inquire
              </button>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence (Editorial Grid) */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((col, idx) => (
              <div key={idx} className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-brass-500/80 uppercase tracking-widest block mb-3">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-white mb-1">
                    {col.title}
                  </h3>
                  <p className="font-amharic text-xs text-brass-400/90 font-medium mb-3">
                    {col.amharic}
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {col.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
