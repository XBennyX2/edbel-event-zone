import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PHASES = [
  {
    phase: 'Phase I',
    name: 'Discovery & Spatial Conception',
    amharic: 'የመጀመሪያ ውይይት እና የቦታ ንድፍ',
    steps: [
      {
        num: '01',
        title: 'Initial Consultation',
        desc: 'Reviewing your event milestone, target date, guest volume, and venue specifications in Bole or via direct WhatsApp call.'
      },
      {
        num: '02',
        title: 'Bespoke Concept & Moodboard',
        desc: 'Developing an intentional color narrative, stage architecture draft, floral palette, and custom Amharic neon typography.'
      }
    ]
  },
  {
    phase: 'Phase II',
    name: 'Inventory Allocation & Fabrication',
    amharic: 'የእቃዎች ምደባ እና የአበባ ስራ ቅድመ-ዝግጅት',
    steps: [
      {
        num: '03',
        title: 'Inventory Reservation & Staging Plan',
        desc: 'Locking in proprietary crystal chandeliers, royal thrones, marquee tent structural components, and Chiavari seating.'
      },
      {
        num: '04',
        title: 'Artisanal Floristry & Technical Rigging',
        desc: 'Fresh rose and wisteria conditioning, neon fabrication, and pre-assembly of custom geometric arches.'
      }
    ]
  },
  {
    phase: 'Phase III',
    name: 'Execution & Unforgettable Celebration',
    amharic: 'በዝግጅቱ ቀን እንከን-የለሽ አፈጻጸም እና የማይረሳ ትውስታ',
    steps: [
      {
        num: '05',
        title: 'On-Site Build & Lighting Calibration',
        desc: 'Our technical team arrives hours in advance to install staging, adjust ambient spotlighting, and lay crisp carpet runners.'
      },
      {
        num: '06',
        title: 'A Flawless, Emotional Milestone',
        desc: 'You step into an impeccably finished venue and savor the celebration with your loved ones while our directors oversee every detail.'
      }
    ]
  }
];

export default function Process({ onOpenBooking }) {
  return (
    <section id="process" className="py-28 bg-[#090A0C] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            Methodology & Flow
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            ከመጀመሪያው ውይይት እስከ ድንቅ የደስታ ቀን
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12] mb-4">
            The Journey from Vision to Reality
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Our structured multi-phase workflow removes uncertainty and stress, giving you complete peace of mind leading up to your celebration.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PHASES.map((p, pIdx) => (
            <div 
              key={pIdx}
              className="editorial-panel p-8 rounded-2xl hairline-border flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brass-400 block mb-1">
                  {p.phase}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mb-0.5">
                  {p.name}
                </h3>
                <p className="font-amharic text-xs text-brass-300/80 font-medium mb-6">
                  {p.amharic}
                </p>

                <div className="space-y-6 pt-6 border-t border-white/5">
                  {p.steps.map((st) => (
                    <div key={st.num} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-brass-400 font-bold shrink-0 pt-0.5">
                        {st.num}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {st.title}
                        </h4>
                        <p className="text-stone-400 text-xs leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] transition-all inline-flex items-center gap-2"
          >
            <span>Start Step 01: Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
