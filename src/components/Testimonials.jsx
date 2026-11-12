import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';

const CLIENT_EXPERIENCES = [
  {
    id: 1,
    client: 'Bethlehem & Yonas',
    event: 'Grand Wedding Ballroom Reception',
    amharicEvent: 'የሰርግ አዳራሽ ዝግጅት',
    location: 'Addis Ababa',
    quote: 'Edbel Event Zone turned our ballroom reception into an ethereal celebration. The suspended wisteria ceiling cloud and crystal chandeliers left all our guests speechless. Every detail was executed with total poise.',
    tag: 'Ballroom Wedding Couple'
  },
  {
    id: 2,
    client: 'Ato Daniel M. & Family',
    event: 'Traditional Shimgilna & Kelbet Ceremony',
    amharicEvent: 'የሽምግልና እና የቀለበት ስነ-ስርዓት',
    location: 'Bole, Addis Ababa',
    quote: 'The respect for our traditional customs and the refined beauty of the emerald and gold staging exceeded our family’s highest hopes. The custom Amharic neon "ሽምግልና" sign was an absolute masterpiece.',
    tag: 'Engagement Host'
  },
  {
    id: 3,
    client: 'Selamawit T.',
    event: 'Christening Pavilion Reception',
    amharicEvent: 'የክርስትና ድንኳን ድግስ',
    location: 'Addis Ababa',
    quote: 'The marquee tent setup for our son’s christening was breathtaking. The fresh turf carpet, round banquet tables, and illuminated neon cross created the most sacred, joyful atmosphere.',
    tag: 'Christening Client'
  },
  {
    id: 4,
    client: 'Dawit & Meron',
    event: 'Twilight Skyline Proposal',
    amharicEvent: 'የመሸት ሰማይ የፍቅር ጥያቄ',
    location: 'Addis Ababa Skyline',
    quote: 'She had no idea! The team coordinated the entire twilight terrace setup with the giant rose heart, fairy lights, and candles flawlessly. When she saw the "Will You Marry Me?" neon, tears of joy flowed.',
    tag: 'Proposal Client'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#07080A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            Client Words
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            የተገልጋዮቻችን ምስክርነት
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12] mb-3">
              Words From the Celebrants We’ve Honored
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Reflections from couples and families whose defining milestones we’ve had the privilege to architect.
            </p>
          </div>

          <a
            href="https://web.facebook.com/EdbelEventZone/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-brass-400 hover:text-white transition-colors shrink-0 pb-1"
          >
            <FacebookIcon className="w-4 h-4" />
            <span>Read Facebook Reviews</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="editorial-panel p-8 sm:p-10 rounded-2xl hairline-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-brass-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brass-400" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-400">
                    {item.tag}
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-stone-200 leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-baseline justify-between">
                <div>
                  <h4 className="font-medium text-white text-base">
                    {item.client}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {item.event} • <span className="font-amharic text-brass-400/80">{item.amharicEvent}</span>
                  </p>
                </div>
                <span className="text-xs text-stone-500 font-mono">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
