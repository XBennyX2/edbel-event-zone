import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/contact';

export default function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink(
        'Hello Edbel Event Zone, I would like to ask about your event décor and planning services.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-ink/20 transition-transform hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
