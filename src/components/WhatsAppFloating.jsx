import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1116] border border-white/10 text-xs text-stone-300 shadow-2xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Connect via WhatsApp (+251 91 390 4484)</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-stone-500 hover:text-stone-300 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/251913904484?text=Hello%20Edbel%20Event%20Zone,%20I%20would%20like%20to%20inquire%20about%20event%20planning%20and%20decoration%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-6 h-6 text-black fill-black" />
      </a>
    </div>
  );
}
