import React, { useState, useMemo } from 'react';
import eventsData from '../data/eventsData.json';
import LightboxModal from './LightboxModal';
import { Search, Eye, Grid, LayoutTemplate, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Works', amharic: 'ሁሉም ስራዎች' },
  { id: 'weddings', label: 'Weddings & Receptions', amharic: 'የሰርግ ዝግጅቶች' },
  { id: 'proposals', label: 'Proposals ("Will You Marry Me?")', amharic: 'የፍቅር ጥያቄ' },
  { id: 'engagements', label: 'Traditional Engagements', amharic: 'ሽምግልና እና ቀለበት' },
  { id: 'christenings', label: 'Christenings & Baptisms', amharic: 'ክርስትና' },
  { id: 'birthdays', label: 'Birthdays & Parties', amharic: 'የልደት ድግሶች' },
  { id: 'corporate_milestones', label: 'Marquees & Galas', amharic: 'ድንኳን እና ምረቃ' },
];

export default function Portfolio({ onBookStyle }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'lookbook'
  const [visibleCount, setVisibleCount] = useState(16);

  const filteredEvents = useMemo(() => {
    return eventsData.filter((item) => {
      const matchesCategory = 
        selectedCategory === 'all' || item.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.amharicTitle.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentIndex = selectedEvent 
    ? filteredEvents.findIndex(e => e.id === selectedEvent.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredEvents.length - 1) {
      setSelectedEvent(filteredEvents[currentIndex + 1]);
    } else {
      setSelectedEvent(filteredEvents[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedEvent(filteredEvents[currentIndex - 1]);
    } else {
      setSelectedEvent(filteredEvents[filteredEvents.length - 1]);
    }
  };

  return (
    <section id="portfolio" className="py-28 bg-[#090A0C] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            Selected Works Archive
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            የተሰሩ እውነተኛ ውብ ዝግጅቶች
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12] mb-3">
              A Living Portfolio of Authentic Celebrations
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Every photograph is from an actual celebration planned, styled, and produced by Edbel Event Zone in Addis Ababa.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-[#12151B] border border-white/10 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-[#C29B38] text-black font-semibold' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('lookbook')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                viewMode === 'lookbook' 
                  ? 'bg-[#C29B38] text-black font-semibold' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>Editorial Lookbook</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'all' 
                ? eventsData.length 
                : eventsData.filter(e => e.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setVisibleCount(16);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-white text-black font-semibold'
                      : 'bg-[#12151B] text-stone-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/20 text-black font-bold' : 'text-stone-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords..."
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#12151B] border border-white/10 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-brass-500 transition-colors"
            />
          </div>

        </div>

        {/* Lookbook Mode */}
        {viewMode === 'lookbook' ? (
          <div className="space-y-16">
            {filteredEvents.slice(0, 8).map((evt, idx) => (
              <div 
                key={evt.id}
                onClick={() => setSelectedEvent(evt)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group"
              >
                <div className={`lg:col-span-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out brightness-95"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brass-400 block mb-2">
                    {evt.categoryLabel}
                  </span>
                  <p className="font-amharic text-xs text-brass-300 font-medium mb-1">
                    {evt.amharicTitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-4 leading-snug group-hover:text-brass-300 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {evt.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brass-400 group-hover:text-white transition-colors">
                    <span>Inspect Details & Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredEvents.slice(0, visibleCount).map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative rounded-xl overflow-hidden bg-[#0F1116] border border-white/10 hover:border-brass-500/50 cursor-pointer shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={event.thumb || event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] tracking-wider uppercase font-medium text-stone-200 bg-black/75 px-2 py-0.5 rounded border border-white/10">
                      {event.categoryLabel.split(' ')[0]}
                    </span>
                  </div>

                  {/* Bottom Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-amharic text-[11px] text-brass-300/90 font-medium mb-0.5 truncate">
                      {event.amharicTitle}
                    </p>
                    <h3 className="font-serif text-base font-medium text-white group-hover:text-brass-300 transition-colors line-clamp-2 leading-snug">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredEvents.length && viewMode === 'grid' && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white bg-[#12151B] hover:bg-[#181C24] border border-white/10 transition-colors"
            >
              Load More Works ({filteredEvents.length - visibleCount} Remaining)
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <LightboxModal
          event={selectedEvent}
          currentIndex={currentIndex}
          totalCount={filteredEvents.length}
          onClose={() => setSelectedEvent(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onBookStyle={(styleTitle) => {
            setSelectedEvent(null);
            onBookStyle(styleTitle);
          }}
        />
      )}
    </section>
  );
}
