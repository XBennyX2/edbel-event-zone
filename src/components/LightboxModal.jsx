import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '../data/contact';

export default function LightboxModal({
  photo,
  position,
  total,
  onClose,
  onNext,
  onPrev,
  onAskAbout,
}) {
  const closeRef = useRef(null);

  // Keep the latest handlers in a ref so the key listener is attached once.
  const handlers = useRef({ onClose, onNext, onPrev });
  handlers.current = { onClose, onNext, onPrev };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handlers.current.onClose();
      if (e.key === 'ArrowRight') handlers.current.onNext();
      if (e.key === 'ArrowLeft') handlers.current.onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const navButton =
    'absolute top-1/2 -translate-y-1/2 rounded-full bg-paper/90 p-2.5 text-ink shadow transition-colors hover:bg-paper';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-paper lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-ink">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[52vh] w-auto max-w-full object-contain lg:max-h-[86vh]"
          />
          <button type="button" onClick={onPrev} className={`${navButton} left-3`} aria-label="Previous photo">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={onNext} className={`${navButton} right-3`} aria-label="Next photo">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex w-full shrink-0 flex-col overflow-y-auto p-6 lg:w-80 lg:p-7">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm text-muted">
              {photo.categoryLabel} · {position} of {total}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="-mr-2 -mt-2 rounded-full p-2 text-ink hover:bg-mist"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <h3 className="mt-2 text-xl leading-snug">{photo.title}</h3>
          <p lang="am" className="mt-1 font-amharic text-sm text-gold-deep">
            {photo.amharicTitle}
          </p>
          <p className="mt-3 text-base">{photo.description}</p>

          <div className="mt-6 flex flex-col gap-2.5 lg:mt-auto lg:pt-6">
            <button
              type="button"
              onClick={() => onAskAbout(photo.title)}
              className="btn btn-primary"
            >
              Ask about this look
            </button>
            <a
              href={whatsappLink(
                `Hello Edbel Event Zone, I like this setup: "${photo.title}". Could you tell me about availability and pricing?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <MessageCircle className="h-4 w-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
