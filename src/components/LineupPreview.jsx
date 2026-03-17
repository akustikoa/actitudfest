import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

function LineupPreview() {
  const [featuredArtist, ...otherArtists] = artists;
  const mobileGridArtists = artists.slice(0, 9);
  const desktopGridArtists = otherArtists.slice(0, 9);

  return (
    <section className='w-full bg-black px-6 py-16 text-whitetext sm:px-10 lg:px-16'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-10'>
        <div className='max-w-2xl'>
          <h2 className='mt-4 text-4xl font-black text-whitetext uppercase tracking-[-0.06em] sm:text-5xl'>
            Line UP
          </h2>
          <p className='mt-4 text-sm uppercase tracking-[0.18em] text-white/90 sm:text-base'>
            Grups confirmats per aquesta edició 2026
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:hidden'>
          {mobileGridArtists.map((artist) => (
            <article
              key={`${artist.id}-mobile`}
              className='group relative aspect-square overflow-hidden rounded-[0.4rem] border border-white/10 bg-white/[0.2]'
            >
              <img
                src={artist.image}
                alt={artist.name}
                className='h-full w-full object-cover'
              />
              <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2'>
                <h4 className='truncate text-[15px] font-black uppercase tracking-[-0.03em] text-whitetext'>
                  {artist.name}
                </h4>
              </div>
            </article>
          ))}
          <Link
            to='/lineup'
            className='inline-flex items-center justify-center rounded mb-4 border-2 border-transparent bg-red-700 px-3 py-1 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/70 hover:border-red-700'
          >
            Full lineup
          </Link>
        </div>

        <div className='hidden gap-8 lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(220px,0.55fr)] lg:items-stretch '>
          <article className='grid mb-6 h-[340px] overflow-hidden rounded-xl bg-white/[0.03] lg:grid-cols-2'>
            <div className='relative min-h-[220px] bg-gradient-to-br from-red-600/20 via-black to-black lg:min-h-[260px]'>
              <img
                src={featuredArtist.image}
                alt={featuredArtist.name}
                className='h-full w-full object-cover object-center'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent' />
            </div>

            <div className='flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 lg:px-8 lg:py-7'>
              <h3 className='mt-4 text-3xl font-black uppercase tracking-[-0.05em] sm:text-[2rem]'>
                {featuredArtist.name}
              </h3>
              <p className='mt-3 max-w-xl text-sm leading-relaxed text-white/70'>
                {featuredArtist.description}
              </p>
              <a
                href='/lineup'
                className='mt-6 inline-flex w-fit items-center rounded border-2 border-transparent bg-red-700 px-3 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-transparent hover:border-red-700 hover:text-red-700'
              >
                full lineup
              </a>
            </div>
          </article>

          {otherArtists.length > 0 && (
            <div className='grid h-full grid-cols-2 gap-x-3 overflow-hidden lg:grid-cols-3'>
              {desktopGridArtists.map((artist) => (
                <article
                  key={artist.id}
                  className='group relative aspect-square overflow-hidden rounded-md border border-white/10 bg-white/[0.03]'
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className='h-full w-full object-cover transition duration-100 '
                  />
                  <div className='absolute inset-0 flex items-end bg-black/0 p-2 transition duration-300 group-hover:bg-black/65'>
                    <h4 className='translate-y-2 text-[15px] font-black uppercase tracking-[-0.03em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                      {artist.name}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LineupPreview;
