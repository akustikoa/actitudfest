import Footer from '../components/Footer';

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
];

function History() {
  return (
    <>
      <div className='bg-[#f4f1ec] text-black'>
        <section className='bg-[#f4f1ec] px-6 py-16 text-black sm:px-10 lg:px-16'>
          <div className='mx-auto w-full max-w-[1200px]'>
            <div className='grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'>
              <div className='max-w-sm'>
                <h1 className='text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
                  Historia
                </h1>
                <p className='mt-4 text-sm leading-relaxed text-black/65'>
                  Cartells de les diferents edicions de l&apos;Actitud Fest al
                  llarg dels anys dissenyats per{' '}
                  <a
                    href='https://www.instagram.com/alexalegre22/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='font-bold text-black/50'>Alex Alegre</span>
                  </a>
                </p>
              </div>

              <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3'>
                {posters.map((poster) => (
                  <figure key={poster.year} className='space-y-3'>
                    <div className='overflow-hidden rounded-lg border border-black/10 bg-black/[0.02]'>
                      <img
                        src={poster.src}
                        alt={`Cartell Actitud Fest ${poster.year}`}
                        className='h-full w-full object-contain'
                      />
                    </div>
                    <figcaption className='text-[11px] font-black uppercase tracking-[0.18em] text-black/55'>
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
    </>
  );
}

export default History;
