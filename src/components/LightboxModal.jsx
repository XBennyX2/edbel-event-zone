import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Tag, ArrowRight, Share2, ZoomIn, ZoomOut } from 'lucide-react';

export default function LightboxModal({ 
  event, 
  onClose, 
  onNext, 
  onPrev, 
  onBookStyle,
  currentIndex,
  totalCount 
}) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/95 backdrop-blur-xl animate-fade-in p-2 sm:p-4 md:p-6">
      
      {/* Top Bar with counter & close button */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900/90 border border-white/10 text-xs text-stone-300 backdrop-blur-md">
          <span className="text-brand-300 font-bold">{currentIndex + 1}</span>
          <span className="text-stone-500">/</span>
          <span>{totalCount}</span>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="text-stone-400 hidden sm:inline capitalize">{event.categoryLabel}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-noir-900/90 border border-white/10 text-stone-300 hover:text-white hover:border-brand-500/50 backdrop-blur-md transition-all hidden sm:flex items-center justify-center"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-noir-900/90 border border-white/10 text-stone-300 hover:text-white hover:border-brand-500/50 hover:bg-noir-850 backdrop-blur-md transition-all flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons (Left / Right) */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-noir-900/80 border border-white/10 text-stone-200 hover:text-brand-300 hover:border-brand-400 hover:bg-noir-900 backdrop-blur-md transition-all"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-noir-900/80 border border-white/10 text-stone-200 hover:text-brand-300 hover:border-brand-400 hover:bg-noir-900 backdrop-blur-md transition-all"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Container: Image + Info Drawer */}
      <div className="w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-noir-900 border border-white/10 shadow-2xl z-30">
        
        {/* Left Side: Image Display */}
        <div 
          className="flex-1 relative flex items-center justify-center bg-noir-950 p-2 sm:p-6 overflow-hidden min-h-[350px] lg:min-h-[580px] cursor-pointer"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={event.image}
            alt={event.title}
            className={`max-h-[55vh] lg:max-h-[82vh] w-auto max-w-full object-contain rounded-xl transition-transform duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
          />
        </div>

        {/* Right Side: Detailed Event Information */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-noir-900/95 overflow-y-auto max-h-[40vh] lg:max-h-[82vh]">
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>{event.categoryLabel}</span>
            </div>

            {/* Event Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
              {event.title}
            </h3>

            {/* Amharic Title */}
            <p className="font-amharic text-sm sm:text-base text-brand-300/90 font-medium mb-4">
              {event.amharicTitle}
            </p>

            {/* Verified Description */}
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
              {event.description}
            </p>

            {/* Tags */}
            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-brand-400" />
                <span>Design Elements</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {event.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-noir-800 text-stone-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Authenticity Hallmark */}
            <div className="p-3 rounded-xl bg-noir-850 border border-white/5 text-[11px] text-stone-400 mb-6">
              <span className="text-brand-300 font-semibold block mb-0.5">Verified Authentic Work</span>
              Executed by Edbel Event Zone in Addis Ababa, Ethiopia.
            </div>
          </div>

          {/* Action CTA: Inquire About This Style */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => onBookStyle(event.title)}
              className="w-full py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 hover:brightness-110 shadow-lg shadow-brand-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Inquire This Exact Look</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`https://wa.me/251913904484?text=Hello%20Edbel%20Event%20Zone,%20I%20love%20the%20setup:%20"${encodeURIComponent(event.title)}"%20and%20would%20like%20to%20know%20availability%20and%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-stone-300 hover:text-white bg-noir-850 hover:bg-noir-800 border border-white/10 transition-colors"
            >
              WhatsApp About This Decor
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
