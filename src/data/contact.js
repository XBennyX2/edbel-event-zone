export const PHONE_DISPLAY = '+251 91 390 4484';
export const PHONE_HREF = 'tel:+251913904484';
export const PHONE_ALT_DISPLAY = '+251 98 034 8026';
export const FACEBOOK_URL = 'https://web.facebook.com/EdbelEventZone/';

const WHATSAPP_NUMBER = '251913904484';

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// The six kinds of event Edbel does. The ids match `category` in eventsData.json,
// so the services section and the gallery filter share one list.
export const EVENT_CATEGORIES = [
  {
    id: 'weddings',
    name: 'Weddings',
    amharic: 'የሰርግ ዝግጅቶች',
    image: '/assets/images/events/event_01_weddings.jpg',
    summary: 'Ballroom stages, floral arches, ceiling flowers, chandeliers and guest tables for the reception.',
  },
  {
    id: 'engagements',
    name: 'Shimgilna & Kelbet',
    amharic: 'ሽምግልና እና ቀለበት',
    image: '/assets/images/events/event_26_engagements.jpg',
    summary: 'Traditional engagement setups with seating for the elders, mesob styling and custom Amharic neon signs.',
  },
  {
    id: 'proposals',
    name: 'Proposals',
    amharic: 'የፍቅር ጥያቄ',
    image: '/assets/images/events/event_12_proposals.jpg',
    summary: 'Surprise setups on rooftops, terraces and at home, with flower hearts, candles and a “Will you marry me?” sign.',
  },
  {
    id: 'christenings',
    name: 'Christenings',
    amharic: 'ክርስትና',
    image: '/assets/images/events/event_27_christenings.jpg',
    summary: 'White tents, flower backdrops, a neon cross and family tables for your child’s baptism day.',
  },
  {
    id: 'birthdays',
    name: 'Birthdays',
    amharic: 'የልደት ድግሶች',
    image: '/assets/images/events/event_37_birthdays.jpg',
    summary: 'Balloon arches, themed backdrops and dessert tables for first birthdays through milestone parties.',
  },
  {
    id: 'corporate_milestones',
    name: 'Tents, graduations & company events',
    amharic: 'ድንኳን እና ምረቃ',
    image: '/assets/images/events/event_47_corporate_milestones.jpg',
    summary: 'All-weather tents with draped ceilings and turf flooring, graduation stages and banquet tables for gala dinners.',
  },
];
