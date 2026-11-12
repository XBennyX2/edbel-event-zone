import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Compass, Eye, Sparkles } from 'lucide-react';

const CURATED_SCENES = [
  {
    id: 'ballroom',
    name: 'Ballroom Grandeur',
    amharic: 'የሰርግ አዳራሽ ድምቀት',
    venue: '5-Star Ballroom Production',
    image: '/assets/images/events/event_01_weddings.jpg',
    heading: 'The Architecture of Unforgettable Celebrations',
    lead: 'Monumental ballroom stages, crystal rain chandeliers, and wisteria canopies engineered for Ethiopia’s most distinguished weddings.'
  },
  {
    id: 'proposals',
    name: 'Skyline Proposals',
    amharic: 'የመሸት ሰማይ የፍቅር ጥያቄ',
    venue: 'Panoramic Terrace & Penthouse',
    image: '/assets/images/events/event_12_proposals.jpg',
    heading: 'Cinematic "Will You Marry Me?" Experiences',
    lead: 'Open-air terraces overlooking Addis Ababa at dusk, enveloped in glowing floral hearts, candle pillars, and quiet romantic elegance.'
  },
  {
    id: 'cultural',
    name: 'Shimgilna & Kelbet',
    amharic: 'ባህላዊ የሽምግልና ስነ-ስርዓት',
    venue: 'Authentic Heritage Ceremony',
    image: '/assets/images/events/event_20_engagements.jpg',
    heading: 'Revering Tradition with Haute Elegance',
    lead: 'Custom Ge\'ez neon calligraphy, woven mesob artistry, and emerald velvet drapery honoring your family’s most sacred milestones.'
  },
  {
    id: 'marquees',
    name: 'Marquee Pavilions',
    amharic: 'የቅንጦት ድንኳን አዳራሽ',
    venue: 'All-Weather Outdoor Transformation',
    image: '/assets/images/events/event_43_corporate_milestones.jpg',
    heading: 'Palace-Grade Outdoor Pavilions',
    lead: 'Bespoke marquee tent structures with silk ceiling swags, chandeliers, manicured turf carpets, and ghost seating on private grounds.'
  }
];

export default function Hero({ onOpenBooking }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CURATED_SCENES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const scene = CURATED_SCENES[activeIdx];

  return (
    <section 
      id="home" 
      className="relative min-h-[94vh] flex flex-col justify-between bg-[#07080A] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images with cinematic crossfade */}
      {CURATED_SCENES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={item.image}
            alt={item.heading}
            className="w-full h-full object-cover object-center brightness-[0.4] contrast-[1.05]"
          />
          {/* Subtle multi-layer vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-[#07080A]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080A]/80 via-transparent to-[#07080A]/60" />
        </div>
      ))}

      {/* Top spacer */}
      <div className="h-8 md:h-12" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="max-w-4xl">
          
          {/* Subtle Venue Stamp */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-brass-500" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
              {scene.venue}
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-xs font-amharic text-stone-300">
              {scene.amharic}
            </span>
          </div>

          {/* Majestic Serif Headline (Clean, no tacky gradients) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-6">
            {scene.heading}
          </h1>

          {/* Amharic subtitle */}
          <p className="font-amharic text-lg sm:text-2xl text-stone-200/90 font-light mb-6 tracking-wide">
            የማይረሱ አስደሳች ድንቅ ዝግጅቶችን በውበትና በልዩ ጥበብ እንፈጥራለን
          </p>

          {/* Lead description */}
          <p className="text-stone-300 text-sm sm:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
            {scene.lead}
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Begin Your Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 hairline-border transition-all flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4 text-brass-400" />
              <span>Explore 50+ Real Works</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Curated Atmosphere Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#07080A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {CURATED_SCENES.map((item, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-3.5 rounded-xl transition-all duration-300 ${
                    isCurrent
                      ? 'bg-white/10 brass-border-subtle shadow-lg'
                      : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] tracking-wider uppercase text-brass-400 font-semibold">
                      Scene 0{idx + 1}
                    </span>
                    {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-brass-400" />}
                  </div>
                  <div className="font-serif text-sm sm:text-base text-white font-medium truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-amharic text-stone-400 truncate">
                    {item.amharic}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
