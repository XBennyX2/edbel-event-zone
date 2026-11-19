import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import { FACEBOOK_URL } from '../data/contact';

const REVIEWS = [
  {
    client: 'Bethlehem & Yonas',
    event: 'Wedding reception',
    quote: 'Edbel Event Zone turned our ballroom reception into an ethereal celebration. The suspended wisteria ceiling cloud and crystal chandeliers left all our guests speechless. Every detail was executed with total poise.',
  },
  {
    client: 'Ato Daniel M. & Family',
    event: 'Shimgilna & Kelbet ceremony',
    quote: 'The respect for our traditional customs and the refined beauty of the emerald and gold staging exceeded our family’s highest hopes. The custom Amharic neon “ሽምግልና” sign was an absolute masterpiece.',
  },
  {
    client: 'Selamawit T.',
    event: 'Christening',
    quote: 'The marquee tent setup for our son’s christening was breathtaking. The fresh turf carpet, round banquet tables, and illuminated neon cross created the most sacred, joyful atmosphere.',
  },
  {
    client: 'Dawit & Meron',
    event: 'Proposal',
    quote: 'She had no idea! The team coordinated the entire twilight terrace setup with the giant rose heart, fairy lights, and candles flawlessly. When she saw the “Will You Marry Me?” neon, tears of joy flowed.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="page">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="section-title">What our clients say</h2>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-leaf underline-offset-4 hover:underline"
          >
            <FacebookIcon className="h-4 w-4" />
            More on our Facebook page
          </a>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <figure key={review.client} className="border-l-2 border-gold pl-6">
              <blockquote className="text-lg text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-4 text-base">
                <span className="font-medium text-ink">{review.client}</span>
                <span className="text-muted"> · {review.event}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
