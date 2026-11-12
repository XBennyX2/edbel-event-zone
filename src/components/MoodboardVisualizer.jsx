import React, { useState } from 'react';
import { 
  Sparkles, 
  Crown, 
  Heart, 
  Baby, 
  PartyPopper, 
  ArrowRight, 
  CheckCircle2, 
  Palette, 
  MapPin, 
  Eye 
} from 'lucide-react';

const MOODBOARDS = [
  {
    id: 'wedding',
    tabName: 'Royal Ballroom Wedding',
    amharicTab: 'የቅንጦት ሰርግ አዳራሽ',
    icon: Crown,
    title: '5-Star Grand Ballroom Symphony',
    subtitle: 'Triple Arch Floral Domes · Suspended Wisteria Clouds · Mirrored Dance Floor',
    amharicTitle: 'ባለ ሶስት ቅስት የአበባ መድረክ እና የቻንደሊየር ድምቀት',
    description: 'Transforming premier Addis Ababa ballrooms into timeless royal palaces with cascading crystal rain fixtures, wisteria ceiling waterfalls, and golden Chiavari appointments.',
    palette: [
      { name: 'Chandelier Gold', hex: '#D5B56A' },
      { name: 'Ivory Blossom', hex: '#FAF9F5' },
      { name: 'Champagne Silk', hex: '#DECFC0' },
      { name: 'Obsidian Velvet', hex: '#11141A' }
    ],
    venues: 'Ethiopian Skylight, Sheraton Addis, Hyatt Regency, Millennium Hall',
    features: [
      'Triple arched dome floral architecture with 5,000+ blossoms',
      'Ceiling-rigged rain crystal chandeliers & moving heads',
      'High-gloss mirrored dance floor with monogrammed runner',
      'VIP sweetheart throne lounge & gold Chiavari guest seating',
      'Dedicated day-of stage director & lighting technician'
    ],
    photos: [
      { url: '/assets/images/events/event_01_weddings.jpg', caption: 'Monumental Ballroom Stage' },
      { url: '/assets/images/events/event_04_weddings.jpg', caption: 'Royal Golden Thrones' },
      { url: '/assets/images/events/event_05_weddings.jpg', caption: 'VIP Wisteria Pergola Table' },
      { url: '/assets/images/events/event_07_weddings.jpg', caption: 'Red Rose Floral Tunnel Dining' }
    ]
  },
  {
    id: 'proposal',
    tabName: 'Twilight Skyline Proposal',
    amharicTab: 'የመሸት የፍቅር ጥያቄ',
    icon: Heart,
    title: 'Cinematic "Will You Marry Me?" Experience',
    subtitle: 'Rooftop City Lights · Giant Floral Heart · Candlelit Petal Path',
    amharicTitle: 'የመሸት ሰማይ የፍቅር ቃል ኪዳን ጥያቄ ዝግጅት',
    description: 'An intimate, heart-stopping moment crafted high above Addis Ababa. Twilight skies meet glowing script neon, hundreds of pillar candles, and red rose petal carpets.',
    palette: [
      { name: 'Crimson Rose', hex: '#B81D24' },
      { name: 'Warm Amber Glow', hex: '#F0BA53' },
      { name: 'Dusk Cobalt', hex: '#161F30' },
      { name: 'Pure White Silk', hex: '#FFFFFF' }
    ],
    venues: 'Luxury Penthouse Suites, Private Panoramic Terraces, Boutique Hotel Rooftops',
    features: [
      'Giant 3D red rose or white floral heart archway',
      'Illuminated neon "Will You Marry Me?" script sign',
      'Aisle of glowing pillar candles & scattered fresh rose petals',
      'Chilled champagne bucket, crystal flutes & dessert pedestal',
      'Secret advance arrival coordination for a flawless surprise'
    ],
    photos: [
      { url: '/assets/images/events/event_12_proposals.jpg', caption: 'Twilight Skyline Floral Heart' },
      { url: '/assets/images/events/event_14_proposals.jpg', caption: 'The Authentic "Yes!" Moment' },
      { url: '/assets/images/events/event_15_proposals.jpg', caption: '3D MARRY ME & Petal Heart' },
      { url: '/assets/images/events/event_17_proposals.jpg', caption: 'Bohemian Candlelit Sanctuary' }
    ]
  },
  {
    id: 'shimgilna',
    tabName: 'Cultural Shimgilna & Kelbet',
    amharicTab: 'ሽምግልና እና ቀለበት',
    icon: Sparkles,
    title: 'Noble Heritage Ceremony (ሽምግልና እና ቀለበት)',
    subtitle: 'Bespoke Ge\'ez Neon · Traditional Mesob Artistry · Emerald Velvet Thrones',
    amharicTitle: 'ባህላዊ የሽምግልና ክብር መድረክ ከመሶብ ጥበብ ጋር',
    description: 'Honoring sacred Ethiopian family customs. We harmonize traditional woven mesob elements and elder seating with couture drapery and modern illuminated calligraphy.',
    palette: [
      { name: 'Imperial Emerald', hex: '#0B4738' },
      { name: 'Antique Gold', hex: '#C59C3E' },
      { name: 'Heritage Ochre', hex: '#E59B32' },
      { name: 'Silk Ivory', hex: '#F5F2EB' }
    ],
    venues: 'Private Family Estates, Luxury Villa Gardens, VIP Hotel Banquet Halls',
    features: [
      'Custom neon calligraphy: "ሽምግልና" and "ቀለበት" illuminated emblems',
      'Handcrafted Ethiopian mesob centerpieces & cultural accessories',
      'Regal high-back gold peacock thrones & tufted leather couches',
      'Emerald green velvet swags & ivory scalloped backdrops',
      'Elders negotiation seating & ceremonial coffee/refreshment station'
    ],
    photos: [
      { url: '/assets/images/events/event_20_engagements.jpg', caption: 'Cultural Mesob & Rose Mound' },
      { url: '/assets/images/events/event_21_engagements.jpg', caption: 'Noble Elder Throne Setup' },
      { url: '/assets/images/events/event_25_engagements.jpg', caption: 'Double Floral Arch & Kelbet Sign' },
      { url: '/assets/images/events/event_26_engagements.jpg', caption: 'Golden Peacock Throne Arch' }
    ]
  },
  {
    id: 'christening',
    tabName: 'Holy Christening (ክርስትና)',
    amharicTab: 'የክርስትና ድንኳን ድግስ',
    icon: Baby,
    title: 'Pure White Marquee Christening (ክርስትና)',
    subtitle: 'Custom Neon Cross · Manicured Green Turf · Giant Sculptured Blooms',
    amharicTitle: 'የክርስትና እና የመንፈሳዊ በዓላት ድንኳን ድግስ',
    description: 'A heavenly sanctuary for your child’s sacred milestone. High-peak white marquee tents, glowing neon crosses, crystal chandeliers, and round banquet family tables.',
    palette: [
      { name: 'Purity White', hex: '#FFFFFF' },
      { name: 'Lawn Green', hex: '#2A7A4C' },
      { name: 'Gold Halo', hex: '#DDB662' },
      { name: 'Soft Sky Blue', hex: '#8FBAD9' }
    ],
    venues: 'Private Residence Lawns, Outdoor Church Grounds, Luxury Marquee Compounds',
    features: [
      'Custom glowing neon cross insignia & "ክርስትና" neon sign',
      'Full white all-weather marquee tent with artificial turf flooring',
      'Sculpted 3D giant white floral altar & stage backdrops',
      'Personalized child welcome sign with floral garlands',
      'Round banquet dining with tiered crystal chandeliers'
    ],
    photos: [
      { url: '/assets/images/events/event_27_christenings.jpg', caption: 'Romel\'s Christening Marquee' },
      { url: '/assets/images/events/event_28_christenings.jpg', caption: 'Giant Flower & Cross Altar' },
      { url: '/assets/images/events/event_29_christenings.jpg', caption: 'Fuchsia & Cream Tent Altar' },
      { url: '/assets/images/events/event_31_christenings.jpg', caption: 'Burgundy & Royal Blue Stage' }
    ]
  },
  {
    id: 'birthday',
    tabName: 'Themed Birthdays & Galas',
    amharicTab: 'የልደት እና ልዩ ድግሶች',
    icon: PartyPopper,
    title: 'Bespoke Celebration Artistry',
    subtitle: 'Organic Chrome Balloon Arches · Custom Character Themes · Luxury Plinths',
    amharicTitle: 'ልዩ ጭብጥ ያላቸው የልደት እና የክብር ድግሶች',
    description: 'From chic onyx & metallic gold adult galas to whimsical 1st birthday wonderlands. Organic balloon garlands, custom arched panels, and gourmet dessert styling.',
    palette: [
      { name: 'Metallic Chrome', hex: '#C2C8D0' },
      { name: 'Molten Gold', hex: '#E4CF9A' },
      { name: 'Pastel Lilac', hex: '#C4A8D8' },
      { name: 'Velvet Onyx', hex: '#111216' }
    ],
    venues: 'Villa Compounds, Outdoor Verandas, Modern Lounge Venues',
    features: [
      'Multi-tier organic balloon garlands with metallic chrome accents',
      'Custom arched backdrops with 3D illuminated numbers & names',
      'Child character sets: Hello Kitty, Bumblebee Honey, Pastel Rainbow',
      'Ribbed display plinths & dessert table centerpieces',
      'Outdoor porch styling on polished marble platforms'
    ],
    photos: [
      { url: '/assets/images/events/event_33_birthdays.jpg', caption: 'Lavender & Chrome Villa Arch' },
      { url: '/assets/images/events/event_35_birthdays.jpg', caption: 'Chic Black & Gold Milestone' },
      { url: '/assets/images/events/event_36_birthdays.jpg', caption: 'Hello Kitty Garden Wonderland' },
      { url: '/assets/images/events/event_37_birthdays.jpg', caption: 'Bumblebee 1st Birthday Setup' }
    ]
  }
];

export default function MoodboardVisualizer({ onSelectConcept }) {
  const [activeBoard, setActiveBoard] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const cur = MOODBOARDS[activeBoard];

  return (
    <section id="concepts" className="py-28 bg-[#090B0F] relative overflow-hidden border-t border-amber-500/15">
      {/* Warm candlelight background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Interactive Experience Visualizer</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-3 leading-[1.1]">
            Explore Your <span className="text-gold-gradient">Dream Celebration</span>
          </h2>

          <p className="font-amharic text-lg sm:text-xl text-amber-200/90 font-medium mb-3">
            የሚፈልጉትን የዝግጅት አይነት ይምረጡ • የዲዛይን እና የጭብጥ ምስላዊ እይታ
          </p>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            Select a celebration style below to inspect its bespoke color palette, included architectural elements, verified venues, and real photography from our Addis Ababa portfolio.
          </p>
        </div>

        {/* Milestone Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {MOODBOARDS.map((mb, idx) => {
            const Icon = mb.icon;
            const isSelected = activeBoard === idx;
            return (
              <button
                key={mb.id}
                onClick={() => setActiveBoard(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-black font-bold shadow-xl shadow-amber-500/25 scale-105'
                    : 'bg-[#13161F] text-stone-300 hover:text-white hover:bg-[#1A1E2B] border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                <span>{mb.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Moodboard Showcase Grid */}
        <div className="luminous-glass rounded-3xl p-6 sm:p-10 lg:p-12 gold-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Visual Collage (7 cols) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {cur.photos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/10 hover:border-amber-400/60 cursor-pointer shadow-lg transition-all duration-300"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    {/* Hover Zoom Icon */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5 text-amber-300" />
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="text-white text-xs font-serif font-medium line-clamp-1">
                        {photo.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Palette Strip */}
              <div className="mt-5 p-4 rounded-2xl bg-[#0D0F15] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-200">
                    Signature Color Palette:
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {cur.palette.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5" title={c.name}>
                      <span 
                        className="w-5 h-5 rounded-full border border-white/20 shadow-md"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-[11px] text-stone-400 hidden sm:inline">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Booking (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Curated Concept
                </span>
                
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-1 leading-tight">
                  {cur.title}
                </h3>

                <p className="font-amharic text-sm text-amber-300/90 font-medium mb-3">
                  {cur.amharicTitle}
                </p>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {cur.description}
                </p>

                {/* Venue Compatibility */}
                <div className="mb-6 p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">
                      Ideal Addis Ababa Venues:
                    </span>
                    <span className="text-xs text-stone-200 font-medium">
                      {cur.venues}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                    Architectural Inclusions:
                  </span>
                  {cur.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectConcept(cur.title)}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire This Theme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/251913904484?text=Hello%20Edbel%20Event%20Zone,%20I%20am%20interested%20in%20the%20${encodeURIComponent(cur.title)}%20concept.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-full text-xs font-semibold text-center text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  WhatsApp Quote
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Quick Image Preview Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl">
            <img 
              src={selectedPhoto.url} 
              alt={selectedPhoto.caption}
              className="max-h-[80vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-center">
              <span className="text-white text-base font-serif font-medium">{selectedPhoto.caption}</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
