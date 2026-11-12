import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'weddings',
    title: 'Grand Wedding Ballrooms & Stage Productions',
    amharic: 'የቅንጦት ሰርግ እና የአዳራሽ መድረክ ዝግጅት',
    image: '/assets/images/events/event_01_weddings.jpg',
    excerpt: 'Monumental 5-star hotel ballroom productions featuring triple arched floral domes, cascading crystal rain, and mirrored dance floors.',
    deliverables: [
      'Monumental floral arch stage & backdrop engineering',
      'Cascading wisteria ceiling clouds & crystal rain chandelier rigging',
      'Mirrored acrylic dance floors with custom aisle runners',
      'VIP sweetheart table styling & gold Chiavari guest dining'
    ]
  },
  {
    id: 'engagements',
    title: 'Traditional Engagements (ሽምግልና & ቀለበት)',
    amharic: 'ባህላዊ የሽምግልና እና የቀለበት ስነ-ስርዓት',
    image: '/assets/images/events/event_20_engagements.jpg',
    excerpt: 'Reverent Ethiopian cultural ceremonies honoring elders and family heritage with bespoke Ge\'ez neon calligraphy and woven mesob art.',
    deliverables: [
      'Illuminated neon "ሽምግልና" & "ቀለበት" custom signage',
      'Traditional woven Ethiopian mesob plates & ceremonial styling',
      'Regal gold peacock thrones & tufted leather seating',
      'Rich emerald green, ivory silk, and ruby velvet drapery'
    ]
  },
  {
    id: 'proposals',
    title: 'Romantic Proposals ("Will You Marry Me?")',
    amharic: 'የፍቅር ቃል ኪዳን ጥያቄ ዝግጅት',
    image: '/assets/images/events/event_12_proposals.jpg',
    excerpt: 'Private skyline penthouses, sunset terraces, and candlelit sanctuaries styled to inspire an unforgettable, tearful "Yes!".',
    deliverables: [
      'Giant 3D white floral & red rose heart archways',
      'Glowing "Will You Marry Me?" neon script lettering',
      'Hundreds of pillar candles, fairy light swags & rose petal carpets',
      'Discreet arrival coordination and champagne celebration staging'
    ]
  },
  {
    id: 'christenings',
    title: 'Christenings & Religious Celebrations (ክርስትና)',
    amharic: 'የክርስትና እና የመንፈሳዊ በዓላት ድምቀት',
    image: '/assets/images/events/event_27_christenings.jpg',
    excerpt: 'Sacred family baptisms hosted in pristine white marquee pavilions with custom illuminated crosses and welcoming banquet tables.',
    deliverables: [
      'Glowing neon cross emblems & "ክርስትና" insignia',
      'Pristine white marquee pavilions with fresh turf flooring',
      'Sculpted 3D giant white floral backdrops & altars',
      'Personalized child welcome boards & floral centerpieces'
    ]
  },
  {
    id: 'birthdays',
    title: 'Milestone Birthdays & Themed Celebrations',
    amharic: 'የልደት እና ልዩ ጭብጥ ያላቸው ድግሶች',
    image: '/assets/images/events/event_35_birthdays.jpg',
    excerpt: 'From sophisticated black & gold adult galas to whimsical 1st birthday wonderlands (Bumblebee Michael, Hello Kitty, Pastel Rainbow).',
    deliverables: [
      'Organic metallic chrome and pastel balloon architecture',
      'Custom ribbed display plinths & 3D illuminated age numbers',
      'Themed welcome signage & dessert table styling',
      'Luxury villa porch, garden lawn, and indoor setups'
    ]
  },
  {
    id: 'marquees',
    title: 'Luxury Marquee Pavilions & Venue Transformations',
    amharic: 'የቅንጦት ድንኳን አዳራሽ ሙሉ ዝግጅት',
    image: '/assets/images/events/event_43_corporate_milestones.jpg',
    excerpt: 'Converting outdoor private lawns into enclosed, climate-ready luxury pavilions with chandeliers, turf carpets, and ghost seating.',
    deliverables: [
      'All-weather high-peak marquee pavilion structures',
      'Satin & silk ceiling draping in ivory, gold, or emerald',
      'Manicured artificial turf flooring & stage platforms',
      'Clear ghost chairs & round banquet table appointments'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Galas & Diplomatic Banquets',
    amharic: 'የድርጅት ግብዣ እና የክብር ጋላ እራት',
    image: '/assets/images/events/event_40_corporate_milestones.jpg',
    excerpt: 'Authoritative styling for annual awards, institutional anniversaries, and corporate dinners in premier Addis Ababa hotels.',
    deliverables: [
      'Long royal banquet table styling with sequin runners',
      'Polished gold charger plates & linen place settings',
      'Shimmering sequin backdrop arches & stage podium framing',
      'Executive audio-visual coordination & vendor synchronization'
    ]
  },
  {
    id: 'graduations',
    title: 'Academic Graduations & Milestone Honoring',
    amharic: 'የምረቃ እና የስኬት ክብር መድረኮች',
    image: '/assets/images/events/event_41_corporate_milestones.jpg',
    excerpt: 'Dignified celebration staging featuring illuminated mortarboard insignias, pleated velvet seating, and floral columns.',
    deliverables: [
      'Custom "Congratulations" neon with mortarboard motif',
      'Tufted velvet thrones & elevated photo opportunity podiums',
      'Floral obelisks & family reception table appointments',
      'Indoor reception hall and private residence staging'
    ]
  }
];

export default function Services({ onSelectService }) {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-28 bg-[#07080A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            Disciplines & Services
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            የምንሰጣቸው ሙያዊ አገልግሎቶች
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12] mb-4">
            Curated Services for Life’s Most Significant Milestones
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Every service is managed directly by our senior creative directors and supported by in-house floral artisans and technical staging teams.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Service Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SERVICES_DATA.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveService(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#12151C] brass-border shadow-xl'
                      : 'bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/5 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brass-400">
                      Service 0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] uppercase tracking-wider text-brass-300 font-semibold">
                        Active View
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-0.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-amharic text-stone-400">
                    {srv.amharic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Visual & Scope Card (7 cols) */}
          <div className="lg:col-span-7 sticky top-28">
            {(() => {
              const cur = SERVICES_DATA[activeService];
              return (
                <div className="editorial-panel rounded-2xl overflow-hidden shadow-2xl brass-border-subtle">
                  
                  {/* High-Resolution Showcase Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={cur.image}
                      alt={cur.title}
                      className="w-full h-full object-cover brightness-95 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-brass-300 font-semibold block mb-1">
                          Verified Edbel Production
                        </span>
                        <h4 className="text-white text-xl font-serif font-medium">
                          {cur.title}
                        </h4>
                      </div>
                      <span className="text-xs text-stone-300 font-amharic hidden sm:inline">
                        {cur.amharic}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables & Brief */}
                  <div className="p-6 sm:p-8">
                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                      {cur.excerpt}
                    </p>

                    <div className="mb-8">
                      <span className="text-xs uppercase tracking-[0.15em] text-brass-400 font-semibold block mb-3">
                        Included in this discipline:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cur.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-stone-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass-400 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        onClick={() => onSelectService(cur.title)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] transition-all flex items-center justify-center gap-2"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`https://wa.me/251913904484?text=Hello%20Edbel%20Event%20Zone,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(cur.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-stone-400 hover:text-white transition-colors"
                      >
                        Direct WhatsApp Inquiry →
                      </a>
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
