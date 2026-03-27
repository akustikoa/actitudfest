import Footer from '../components/Footer';
import { artists } from '../data/artists';
import { useLanguage } from '../context/LanguageContext';

function YouTubeIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-9 w-9'
      aria-hidden='true'
    >
      <path d='M21 12.2c0 2.2-.2 3.7-.6 4.5-.3.7-.9 1.3-1.6 1.6-.8.4-2.9.6-6.8.6s-6-.2-6.8-.6c-.7-.3-1.3-.9-1.6-1.6C3.2 15.9 3 14.4 3 12.2S3.2 8.5 3.6 7.7c.3-.7.9-1.3 1.6-1.6.8-.4 2.9-.6 6.8-.6s6 .2 6.8.6c.7.3 1.3.9 1.6 1.6.4.8.6 2.3.6 4.5Z' />
      <path d='m10 9 5 3-5 3V9Z' fill='currentColor' stroke='none' />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-8 w-8'
      aria-hidden='true'
    >
      <rect x='3.5' y='3.5' width='17' height='17' rx='4.5' />
      <circle cx='12' cy='12' r='3.8' />
      <path d='M17.5 6.5h.01' />
    </svg>
  );
}

function Lineup() {
  const { language } = useLanguage();

  return (
    <>
      <div className='bg-[#f4f1ec] text-black'>
        <section className='px-6 lg:py-16 py-8 sm:px-10 lg:px-16'>
          <div className='mx-auto max-w-6xl'>
            <div className='grid gap-6 md:grid-row-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-start'>
              <h1 className='text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
                LINEUP
              </h1>
            </div>
          </div>
        </section>

        <section className='px-6 pb-8 sm:px-10 lg:px-16'>
          <div className='mx-auto max-w-6xl'>
            {artists.map((artist, index) => {
              const reverse = index % 2 !== 0;
              const artistName = artist.name[language] || artist.name.ca;
              const artistDescription =
                artist.description[language] || artist.description.ca;

              return (
                <article
                  key={artist.id}
                  className='border-t border-neutral-200 py-16 first:border-t-0 first:pt-0'
                >
                  <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-2'>
                    <div className={reverse ? 'md:order-2' : ''}>
                      <div className='relative overflow-hidden rounded-xl'>
                        <img
                          src={artist.image}
                          alt={artistName}
                          className='h-[300px] w-full object-cover sm:h-[380px] lg:h-[340px]'
                        />
                        <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-8'>
                          <p className='absolute bottom-4 left-4 text-xl font-black uppercase tracking-tight text-white sm:text-2xl'>
                            {artistName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={reverse ? 'md:order-1' : ''}>
                      <h2 className='mb-4 text-2xl font-black tracking-tight sm:text-3xl'>
                        {artistName}
                      </h2>

                      <div className='text-sm text-neutral-700 sm:text-[15px]'>
                        {artistDescription
                          .split('\n')
                          .filter(Boolean)
                          .map((paragraph, i) => (
                            <p
                              key={i}
                              className='leading-relaxed mb-1.5 last:mb-0'
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>

                      {(artist.youtube || artist.instagram) && (
                        <div className='mt-8 flex gap-4 justify-end mr-3 lg:justify-start  text-gray-500 '>
                          {artist.instagram && (
                            <a
                              href={artist.instagram}
                              target='_blank'
                              rel='noreferrer'
                              aria-label={`${artistName} Instagram`}
                              className='text-black/65 transition hover:text-black'
                            >
                              <InstagramIcon />
                            </a>
                          )}

                          {artist.youtube && (
                            <a
                              href={artist.youtube}
                              target='_blank'
                              rel='noreferrer'
                              aria-label={`${artistName} YouTube`}
                              className='relative -top-0.5 text-black/65'
                            >
                              <YouTubeIcon />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Lineup;
