import React from 'react';

const STEPS = [
  {
    title: 'Tell us about your event',
    body: 'Call, message us on WhatsApp or visit us in Bole. Share your date, venue and number of guests.',
  },
  {
    title: 'We design the look',
    body: 'We propose colors, the stage layout, flowers and any custom neon sign, and adjust until you are happy.',
  },
  {
    title: 'We prepare everything',
    body: 'We reserve the furniture, tents and lighting for your date and prepare the flowers and backdrops.',
  },
  {
    title: 'We set up, you celebrate',
    body: 'Our team builds the venue hours ahead and stays on hand, so you can enjoy the day with your guests.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-mist">
      <div className="page">
        <h2 className="section-title">How it works</h2>
        <p className="section-lead">
          Four steps from your first message to the day itself.
        </p>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t-2 border-leaf pt-5">
              <span className="text-3xl font-medium text-leaf" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-1.5 text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
