import { Link } from 'react-router-dom';
import { artists } from '../data/artists';
import { homeTeasers } from '../data/homeTeasers';
import { useLanguage } from '../context/LanguageContext';

function LineupPreview() {
  const { language, t } = useLanguage();

  const announcedArtists = artists.filter((artist) => artist.isAnnounced);

  const featuredArtist = announcedArtists[0];
  const otherAnnouncedArtists = [...announcedArtists].reverse().slice(0);

  const DESKTOP_TILE_COUNT = 9;

  const desktopArtistTiles = otherAnnouncedArtists.slice(0, DESKTOP_TILE_COUNT);
  const missingTiles = Math.max(
    0,
    DESKTOP_TILE_COUNT - desktopArtistTiles.length,
  );
  const desktopTeaserTiles = Array.from({ length: missingTiles }, (_, i) => ({
    ...homeTeasers[i % homeTeasers.length],
    id: `${homeTeasers[i % homeTeasers.length].id}-${i}`,
  }));

  const desktopGridItems = [
    ...desktopArtistTiles.map((artist) => ({ type: 'artist', ...artist })),
    ...desktopTeaserTiles.map((item) => ({ type: 'teaser', ...item })),
  ];

  const mobileGridItems = announcedArtists.slice(0, 9);

  if (!featuredArtist) return null;

  return (
    <section className='w-full bg-black px-6 py-16 text-whitetext sm:px-10 lg:px-16'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-10'>
        <div className='max-w-2xl'>
          <h2 className='mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-whitetext sm:text-5xl'>
            Line UP
          </h2>
          <p className='mt-4 text-sm uppercase tracking-[0.18em] text-white/90 sm:text-base'>
            {t('lineupPreview.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:hidden'>
          {mobileGridItems.map((artist) => (
            <article
              key={`${artist.id}-mobile`}
              className='group relative aspect-square overflow-hidden rounded-[0.4rem] border border-white/10 bg-white/[0.2]'
            >
              <img
                src={artist.image}
                alt={artist.name[language]}
                className='h-full w-full object-cover'
              />
              <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2'>
                <h4 className='truncate text-[15px] font-black uppercase tracking-[-0.03em] text-whitetext'>
                  {artist.name[language]}
                </h4>
              </div>
            </article>
          ))}

          <Link
            to='/lineup'
            className='mb-4 inline-flex items-center justify-center rounded border-2 border-transparent bg-red-700 px-3 py-1 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] text-white transition hover:border-red-700 hover:bg-black/70 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2'
          >
            {t('lineupPreview.fullLineup')}
          </Link>
        </div>

        <div className='hidden gap-8 lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(220px,0.55fr)] lg:items-stretch'>
          <article className='mb-6 grid h-[340px] overflow-hidden rounded-xl bg-white/[0.03] lg:grid-cols-2'>
            <div className='relative min-h-[220px] lg:min-h-[260px]'>
              <img
                src={featuredArtist.image}
                alt={featuredArtist.name[language]}
                className='w-full object-cover object-center'
              />
            </div>

            <div className='flex h-full flex-col px-6 py-7 sm:px-8 sm:py-8 lg:px-8 lg:py-7'>
              <h3 className='mt-4 text-3xl font-black uppercase tracking-[-0.05em] sm:text-[2rem]'>
                {featuredArtist.name[language]}
              </h3>

              <p className='mt-3 line-clamp-8 max-w-xl text-sm leading-relaxed text-white/70'>
                {featuredArtist.description[language]}
              </p>

              <Link
                to='/lineup'
                className='mt-5 inline-flex w-fit items-center rounded border-2 border-transparent bg-red-700 px-3 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:border-red-700 hover:bg-transparent hover:text-red-700'
              >
                {t('lineupPreview.fullLineup')}
              </Link>
            </div>
          </article>

          <div className='grid h-full grid-cols-2 gap-x-3 gap-y-3 overflow-hidden lg:grid-cols-3'>
            {desktopGridItems.map((item) => (
              <article
                key={item.id}
                className='group relative aspect-square overflow-hidden rounded-md border border-white/10 bg-white/[0.03]'
              >
                <img
                  src={item.image}
                  alt={item.type === 'artist' ? item.name[language] : item.alt}
                  className='h-full w-full object-cover'
                />

                <div className='absolute inset-0 flex items-end bg-black/0 p-2 transition duration-300 group-hover:bg-black/65'>
                  <h4 className='translate-y-2 text-[13px] font-black uppercase tracking-[0.08em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                    {item.type === 'artist' ? item.name[language] : item.label}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LineupPreview;
