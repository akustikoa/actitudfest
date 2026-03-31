import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const posters = [
  { year: '2010', src: '/posters/actitud-2010.png' },
  { year: '2011', src: '/posters/actitud-2011.png' },
  { year: '2012', src: '/posters/actitud-2012.png' },
  { year: '2013', src: '/posters/actitud-2013.png' },
  { year: '2014', src: '/posters/actitud-2014.png' },
  { year: '2015', src: '/posters/actitud-2015.png' },
  { year: '2016', src: '/posters/actitud-2016.png' },
  { year: '2017', src: '/posters/actitud-2017.png' },
  { year: '2018', src: '/posters/actitud-2018.png' },
  { year: '2019', src: '/posters/actitud-2019.png' },
  { year: '2022', src: '/posters/actitud-2022.png' },
  { year: '2023', src: '/posters/actitud-2023.png' },
  { year: '2024', src: '/posters/actitud-2024.png' },
  { year: '2025', src: '/posters/actitud-2025.png' },
];

function History() {
  const { t } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(null);

  /* ================= PRELOAD IMATGES ================= */
  useMemo(() => {
    posters.forEach((p) => {
      const img = new Image();
      img.src = p.src;
    });
  }, []);

  const activePoster = activeIndex !== null ? posters[activeIndex] : null;

  /* ================= KEYBOARD ================= */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === 'Escape') setActiveIndex(null);

      if (e.key === 'ArrowRight') {
        setActiveIndex((i) => (i === posters.length - 1 ? 0 : i + 1));
      }

      if (e.key === 'ArrowLeft') {
        setActiveIndex((i) => (i === 0 ? posters.length - 1 : i - 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  /* ================= SWIPE MOBILE ================= */
  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX;

    const handleTouchEnd = (ev) => {
      const endX = ev.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50 && activeIndex !== null) {
        if (diff > 0) {
          setActiveIndex((i) => (i === posters.length - 1 ? 0 : i + 1));
        } else {
          setActiveIndex((i) => (i === 0 ? posters.length - 1 : i - 1));
        }
      }

      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <>
      <div className='bg-[#f4f1ec] text-black'>
        <section className='px-6 lg:py-16 py-10 sm:px-10 lg:px-16'>
          <div className='mx-auto w-full max-w-[1200px]'>
            {/* TEXT */}
            <div className='grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'>
              <div className='max-w-sm'>
                <h1 className='text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
                  {t('history.title')}
                </h1>
              </div>

              {/* GRID */}
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                {posters.map((poster, index) => (
                  <figure
                    key={poster.year}
                    className='cursor-pointer space-y-2'
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className='overflow-hidden rounded-lg border border-black/10 bg-black/[0.02] hover:scale-[1.03] transition'>
                      <img
                        src={poster.src}
                        alt={poster.year}
                        className='w-full object-contain'
                      />
                    </div>
                    <figcaption className='text-[11px] font-black uppercase tracking-[0.18em] text-black/60'>
                      {poster.year}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* ================= FULLSCREEN GALERIA ================= */}
      {activePoster && (
        <div
          className='fixed inset-0 z-[999] flex items-center justify-center bg-black/75'
          onClick={() => setActiveIndex(null)}
        >
          {/* LEFT ARROW */}
          <button
            className='absolute left-4 text-white text-4xl px-3'
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === 0 ? posters.length - 1 : i - 1));
            }}
          >
            ‹
          </button>

          {/* IMAGE */}
          <div
            className='flex items-center justify-center w-full h-full p-6'
            onTouchStart={handleTouchStart}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePoster.src}
              alt={activePoster.year}
              className='max-h-full max-w-full object-contain transition duration-300'
            />
          </div>

          {/* RIGHT ARROW */}
          <button
            className='absolute right-4 text-white text-4xl px-3'
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === posters.length - 1 ? 0 : i + 1));
            }}
          >
            ›
          </button>

          {/* CLOSE */}
          <button
            className='absolute top-5 right-5 text-white text-3xl font-bold'
            onClick={() => setActiveIndex(null)}
          >
            ×
          </button>

          {/* YEAR */}
          <div className='absolute bottom-6 text-white text-sm tracking-[0.2em] uppercase opacity-70'>
            {activePoster.year}
          </div>
        </div>
      )}
    </>
  );
}

export default History;
