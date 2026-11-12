import React from 'react';
import { ArrowUpRight, Check, Shield } from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking }) {
  const standards = [
    {
      title: 'Original Architectural Concept',
      amharic: 'የተለየ የንድፍ እና የቦታ እቅድ',
      desc: 'We do not replicate off-the-shelf templates. Every stage layout, floral dome, and lighting plot is customized around your venue’s ceiling height, floor geometry, and personal narrative.'
    },
    {
      title: 'Proprietary Inventory Control',
      amharic: 'የራሳችን የሆኑ የቅንጦት እቃዎች',
      desc: 'From royal golden thrones and crystal chandeliers to clear ghost chairs and all-weather marquee tents, we own and maintain our inventory to guarantee pristine presentation.'
    },
    {
      title: 'Ethiopian Cultural Sensitivity',
      amharic: 'የባህላችንን ስነ-ስርዓት ጠንቅቆ መረዳት',
      desc: 'Deep familiarity with the sacred nuances of traditional Shimgilna (ሽምግልና) elder negotiations, Kelbet (ቀለበት) ring exchanges, and baptismal protocols.'
    },
    {
      title: 'Technical Staging & Safety',
      amharic: 'ደህንነቱ የተጠበቀ የመድረክ ዝግጅት',
      desc: 'Rigid standards for suspended floral beams, chandelier load capacities, concealed electrical cabling, and weatherproof outdoor marquee engineering.'
    }
  ];

  return (
    <section id="why-us" className="py-28 bg-[#07080A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            Design Philosophy
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            የስራ ፍልስፍናችን እና መርሆቻችን
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12]">
              Why Discerning Hosts Entrust Their Milestones to Edbel
            </h2>
          </div>
          <div className="lg:col-span-5 pt-2">
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              True event design is an orchestration of emotion, spatial balance, and logistical calm. We replace anxiety with beauty.
            </p>
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {standards.map((std, idx) => (
            <div 
              key={idx}
              className="editorial-panel p-8 rounded-2xl hairline-border editorial-panel-hover flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brass-400 block mb-2">
                  Standard 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mb-1">
                  {std.title}
                </h3>
                <p className="font-amharic text-xs text-brass-300/80 font-medium mb-4">
                  {std.amharic}
                </p>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {std.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5 text-stone-300">
                  <Check className="w-3.5 h-3.5 text-brass-400" />
                  <span>Guaranteed Edbel Standard</span>
                </span>
                <span className="text-stone-500">Bole Atelier</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1015] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
              Have an Upcoming Celebration in Addis Ababa?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Schedule an in-person or WhatsApp consultation with our lead event designer to review your date and venue possibilities.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] transition-all flex items-center gap-1.5"
            >
              <span>Consult Lead Designer</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
