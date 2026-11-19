import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '../data/contact';

// Three arch-topped photos, the middle one tallest, like the triple-arch
// stages Edbel builds. This is the one decorative shape on the page.
const ARCHES = [
  {
    src: '/assets/images/events/event_05_weddings.jpg',
    alt: 'Wedding dining table under hanging white flowers',
    ratio: 'aspect-[9/17]',
  },
  {
    src: '/assets/images/events/event_26_engagements.jpg',
    alt: 'Flower arch with a gold chair and an Amharic neon sign for a Shimgilna ceremony',
    ratio: 'aspect-[9/20]',
  },
  {
    src: '/assets/images/events/event_48_corporate_milestones.jpg',
    alt: 'Tent with green draped ceiling, chandelier and clear chairs',
    ratio: 'aspect-[9/17]',
  },
];

export default function Hero() {
  return (
    <section id="home" className="bg-mist">
      <div className="page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.06]">
            Event décor and planning in Addis Ababa
          </h1>

          <p lang="am" className="mt-5 font-amharic text-lg text-leaf sm:text-xl">
            የማይረሱ አስደሳች ድንቅ ዝግጅቶችን በውበትና በልዩ ጥበብ እንፈጥራለን
          </p>

          <p className="mt-5 max-w-xl text-lg">
            Weddings, engagements, proposals, christenings and birthdays.
            One team in Bole designs the look, brings the flowers, furniture
            and tents, and sets everything up before your guests arrive.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              Get a quote
            </a>
            <a href="#work" className="btn btn-secondary">
              See our work
            </a>
          </div>

          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex items-center gap-2 text-base text-body hover:text-ink"
          >
            <Phone className="h-4 w-4 text-leaf" />
            <span>
              Or call <span className="font-medium text-ink">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>

        <div className="mx-auto grid w-full max-w-lg grid-cols-3 items-end gap-3 sm:gap-4">
          {ARCHES.map((arch) => (
            <div
              key={arch.src}
              className={`${arch.ratio} overflow-hidden rounded-t-full bg-line`}
            >
              <img src={arch.src} alt={arch.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
