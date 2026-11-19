import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import {
  FACEBOOK_URL,
  PHONE_ALT_DISPLAY,
  PHONE_DISPLAY,
  PHONE_HREF,
  whatsappLink,
} from '../data/contact';

const EVENT_TYPES = [
  'Wedding',
  'Engagement (ሽምግልና & ቀለበት)',
  'Proposal',
  'Christening (ክርስትና)',
  'Birthday',
  'Tent or outdoor event',
  'Graduation',
  'Company event or gala dinner',
  'Something else',
];

const EMPTY_FORM = {
  name: '',
  phone: '',
  eventType: EVENT_TYPES[0],
  eventDate: '',
  location: '',
  notes: '',
};

function buildMessage(form, selectedStyle) {
  const lines = [
    'Hello Edbel Event Zone, I would like a quote for an event.',
    '',
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Event: ${form.eventType}`,
  ];
  if (form.eventDate) lines.push(`Date: ${form.eventDate}`);
  if (form.location.trim()) lines.push(`Venue or area: ${form.location.trim()}`);
  if (selectedStyle) lines.push(`Look I like: ${selectedStyle}`);
  if (form.notes.trim()) lines.push(`Details: ${form.notes.trim()}`);
  return lines.join('\n');
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
      <div>
        <dt className="text-sm text-muted">{label}</dt>
        <dd className="text-ink">{children}</dd>
      </div>
    </div>
  );
}

export default function BookingSection({ selectedStyle, onClearStyle }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sentLink, setSentLink] = useState('');

  // A newly chosen look means a new request, so show the form again.
  useEffect(() => {
    if (selectedStyle) setSentLink('');
  }, [selectedStyle]);

  const update = (field) => (e) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = {};
    if (!form.name.trim()) found.name = 'Please enter your name.';
    if (!form.phone.trim()) {
      found.phone = 'Please enter your phone number.';
    } else if (form.phone.replace(/\D/g, '').length < 9) {
      found.phone = 'That number looks too short. Please check it.';
    }
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // The site has no server, so the request is sent as a WhatsApp message.
    const link = whatsappLink(buildMessage(form, selectedStyle));
    window.open(link, '_blank', 'noopener,noreferrer');
    setSentLink(link);
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="contact" className="section bg-mist">
      <div className="page grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div>
          <h2 className="section-title">Get a quote</h2>
          <p className="section-lead">
            Tell us about your event and we will reply with ideas and a price.
            For weddings and holiday weekends, try to contact us 4 to 8 weeks
            ahead.
          </p>

          <dl className="mt-10 space-y-6">
            <ContactRow icon={Phone} label="Phone">
              <a href={PHONE_HREF} className="font-medium hover:text-leaf">
                {PHONE_DISPLAY}
              </a>
              <span className="block text-base text-body">or {PHONE_ALT_DISPLAY}</span>
            </ContactRow>

            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-leaf"
              >
                Chat with us on WhatsApp
              </a>
            </ContactRow>

            <ContactRow icon={MapPin} label="Location">
              Bole, Addis Ababa
              <span className="block text-base text-body">
                We set up across Addis Ababa and nearby areas.
              </span>
            </ContactRow>

            <ContactRow icon={Clock} label="Hours">
              Every day, 8:30 AM to 8:00 PM
            </ContactRow>

            <ContactRow icon={FacebookIcon} label="Facebook">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-leaf"
              >
                facebook.com/EdbelEventZone
              </a>
            </ContactRow>
          </dl>
        </div>

        <div className="rounded-xl border border-line bg-paper p-6 sm:p-9">
          {sentLink ? (
            <div className="py-6 text-center" role="status">
              <CheckCircle2 className="mx-auto h-11 w-11 text-leaf" aria-hidden="true" />
              <h3 className="mt-4 text-2xl">Your message is ready in WhatsApp</h3>
              <p className="mx-auto mt-2 max-w-sm">
                Press send in WhatsApp to deliver it. We will reply there or
                call you back.
              </p>
              <div className="mt-7 flex flex-col items-center gap-4">
                <a
                  href={sentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle className="h-5 w-5" />
                  Open WhatsApp again
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setSentLink('');
                    onClearStyle();
                  }}
                  className="text-base text-body underline underline-offset-4 hover:text-ink"
                >
                  Start a new request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {selectedStyle && (
                <div className="flex items-start justify-between gap-4 rounded-lg bg-leaf-soft px-4 py-3 text-base text-ink">
                  <span>
                    Asking about: <span className="font-medium">{selectedStyle}</span>
                  </span>
                  <button
                    type="button"
                    onClick={onClearStyle}
                    className="shrink-0 underline underline-offset-4 hover:text-leaf"
                  >
                    Remove
                  </button>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-name" className="field-label">Your name</label>
                  <input
                    id="quote-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'quote-name-error' : undefined}
                    className={`field ${errors.name ? 'border-red-600' : ''}`}
                  />
                  {errors.name && (
                    <p id="quote-name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-phone" className="field-label">Phone number</label>
                  <input
                    id="quote-phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="09..."
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
                    className={`field ${errors.phone ? 'border-red-600' : ''}`}
                  />
                  {errors.phone && (
                    <p id="quote-phone-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-type" className="field-label">Type of event</label>
                  <select
                    id="quote-type"
                    value={form.eventType}
                    onChange={update('eventType')}
                    className="field"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-date" className="field-label">
                    Event date <span className="font-normal text-muted">(if you know it)</span>
                  </label>
                  <input
                    id="quote-date"
                    type="date"
                    min={today}
                    value={form.eventDate}
                    onChange={update('eventDate')}
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-location" className="field-label">
                  Venue or area <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  id="quote-location"
                  type="text"
                  value={form.location}
                  onChange={update('location')}
                  placeholder="For example: Skylight Hotel, or our home in Bole"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="quote-notes" className="field-label">
                  Anything else we should know? <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id="quote-notes"
                  rows={4}
                  value={form.notes}
                  onChange={update('notes')}
                  placeholder="Number of guests, colors you like, a sign you want..."
                  className="field"
                />
              </div>

              <button type="submit" className="btn btn-whatsapp w-full">
                <MessageCircle className="h-5 w-5" />
                Send on WhatsApp
              </button>
              <p className="text-center text-sm text-muted">
                This opens WhatsApp with your details filled in. Nothing is sent until you press send there.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
