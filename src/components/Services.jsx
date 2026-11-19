import React from 'react';
import { EVENT_CATEGORIES } from '../data/contact';

export default function Services({ onViewCategory }) {
  return (
    <section id="services" className="section">
      <div className="page">
        <h2 className="section-title">What we do</h2>
        <p className="section-lead">
          Pick the kind of event you are planning to see photos of setups we
          have done.
        </p>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_CATEGORIES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onViewCategory(service.id)}
              className="group flex flex-col items-start rounded-xl text-left"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-mist">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-xl">{service.name}</h3>
              <p lang="am" className="mt-0.5 font-amharic text-sm text-gold-deep">
                {service.amharic}
              </p>
              <p className="mt-2">{service.summary}</p>
              <span className="mt-3 inline-block font-medium text-leaf underline-offset-4 group-hover:underline">
                See photos
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
