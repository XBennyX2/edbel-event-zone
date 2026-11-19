import React from 'react';

const REASONS = [
  {
    title: 'Designed around your venue',
    body: 'We plan the stage, flowers and lighting around your room, its ceiling height and floor space, and the look you want.',
  },
  {
    title: 'Our own equipment',
    body: 'Chandeliers, thrones, Chiavari and ghost chairs, couches and all-weather tents come from our own stock, so nothing depends on a third party.',
  },
  {
    title: 'At home with tradition',
    body: 'We know how Shimgilna (ሽምግልና), Kelbet (ቀለበት) and christening (ክርስትና) ceremonies run, and set them up with the respect they call for.',
  },
  {
    title: 'Ready before your guests',
    body: 'Our team arrives hours early to build, check the lighting and safety, and finish the room before the first guest walks in.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="overflow-hidden rounded-xl bg-mist">
          <img
            src="/assets/images/events/event_03_weddings.jpg"
            alt="Wedding stage with hanging flowers in a two-storey hall"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-[4/5]"
          />
        </div>

        <div>
          <h2 className="section-title">About Edbel Event Zone</h2>
          <p className="section-lead">
            We are an event décor and planning team based in Bole, Addis
            Ababa. We turn hotel ballrooms, gardens, tents and homes into the
            setting for your celebration, and we handle the work from the
            first sketch to the last chair.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <div key={reason.title} className="border-t border-line pt-5">
                <dt className="text-lg font-medium text-ink">{reason.title}</dt>
                <dd className="mt-1.5 text-base">{reason.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
