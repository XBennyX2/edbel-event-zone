import React, { useEffect, useMemo, useState } from 'react';
import eventsData from '../data/eventsData.json';
import { EVENT_CATEGORIES } from '../data/contact';
import LightboxModal from './LightboxModal';

const PAGE_SIZE = 12;

// Matches Tailwind's md and lg breakpoints: 2 columns on phones, then 3, then 4.
function getColumnCount() {
  if (window.matchMedia('(min-width: 1024px)').matches) return 4;
  if (window.matchMedia('(min-width: 768px)').matches) return 3;
  return 2;
}

function useColumnCount() {
  const [count, setCount] = useState(getColumnCount);
  useEffect(() => {
    const handleResize = () => setCount(getColumnCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return count;
}

// Masonry layout: each photo goes into whichever column is currently shortest,
// so photos keep their real shape and the columns end at about the same height.
function splitIntoColumns(photos, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);
  for (const photo of photos) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(photo);
    heights[shortest] += photo.height / photo.width;
  }
  return columns;
}

const FILTERS = [
  { id: 'all', name: 'All' },
  ...EVENT_CATEGORIES.map(({ id, name }) => ({
    id,
    name: id === 'corporate_milestones' ? 'Tents & company events' : name,
  })),
];

export default function Portfolio({ category, onCategoryChange, onAskAbout }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [openId, setOpenId] = useState(null);

  const photos = useMemo(
    () =>
      category === 'all'
        ? eventsData
        : eventsData.filter((item) => item.category === category),
    [category]
  );

  const columnCount = useColumnCount();
  const columns = useMemo(
    () => splitIntoColumns(photos.slice(0, visibleCount), columnCount),
    [photos, visibleCount, columnCount]
  );

  // Start each filter from the first page again.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [category]);

  const openIndex = photos.findIndex((item) => item.id === openId);
  const openPhoto = openIndex >= 0 ? photos[openIndex] : null;
  const step = (delta) => {
    const next = (openIndex + delta + photos.length) % photos.length;
    setOpenId(photos[next].id);
  };

  return (
    <section id="work" className="section bg-mist">
      <div className="page">
        <h2 className="section-title">Our work</h2>
        <p className="section-lead">
          Every photo here is from an event we set up in Addis Ababa. Tap a
          photo to see it larger or ask about that look.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter photos by event type">
          {FILTERS.map((filter) => {
            const isActive = category === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => onCategoryChange(filter.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-base transition-colors ${
                  isActive
                    ? 'border-leaf bg-leaf text-white'
                    : 'border-line bg-paper text-body hover:border-ink hover:text-ink'
                }`}
              >
                {filter.name}
              </button>
            );
          })}
        </div>

        <div data-gallery className="mt-8 flex gap-3 sm:gap-4">
          {columns.map((column, index) => (
            <div key={index} className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
              {column.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setOpenId(photo.id)}
                  className="group block w-full overflow-hidden rounded-lg bg-line"
                >
                  <img
                    src={photo.thumb || photo.image}
                    alt={photo.title}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    className="h-auto w-full transition-opacity duration-300 group-hover:opacity-90"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>

        {visibleCount < photos.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="btn btn-secondary"
            >
              Show more photos
            </button>
          </div>
        )}
      </div>

      {openPhoto && (
        <LightboxModal
          photo={openPhoto}
          position={openIndex + 1}
          total={photos.length}
          onClose={() => setOpenId(null)}
          onNext={() => step(1)}
          onPrev={() => step(-1)}
          onAskAbout={(title) => {
            setOpenId(null);
            onAskAbout(title);
          }}
        />
      )}
    </section>
  );
}
