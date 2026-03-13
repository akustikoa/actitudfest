const accommodationLinks = {
  localHouses: [
    { label: 'Can Roig', href: '#' },
    { label: 'Can Bruno', href: '#' },
    { label: 'Can Pou', href: '#' },
    { label: 'Can Suria', href: '#' },
    { label: 'Can Peuet', href: '#' },
    { label: 'Can Tarre', href: '#' },
  ],
  platforms: [
    { label: 'Booking', href: 'https://www.booking.com/' },
    { label: 'TripAdvisor', href: 'https://www.tripadvisor.com/' },
    { label: 'Airbnb', href: 'https://www.airbnb.com/' },
  ],
};

const buttonClassName =
  'inline-flex items-center justify-center rounded border-2 border-transparent bg-red-700 px-3 py-1 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] !text-white transition hover:bg-black/70 hover:border-2 hover:border-red-700';

function InfoFestival() {
  return (
    <section className='bg-[#f4f1ec] px-6 py-16 text-black sm:px-10 lg:px-16'>
      <div className='mx-auto max-w-6xl '>
        <div className='max-w-2xl'>
          <h2 className='mt-3 text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
            Com arribar
          </h2>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start'>
          <article className='overflow-hidden rounded-xl border border-black/10 bg-black/[0.03]'>
            <div className='p-3 sm:p-4'>
              <div className='overflow-hidden rounded-lg '>
                <iframe
                  title='Mapa del festival a Vidreres'
                  src='https://www.google.com/maps?q=Vidreres,+Girona&z=14&output=embed'
                  loading='lazy'
                  allowFullScreen
                  referrerPolicy='no-referrer-when-downgrade'
                  className='h-[320px] w-full sm:h-[360px] lg:h-[440px]'
                />
              </div>
            </div>
          </article>

          <div className='grid gap-4'>
            <article className='rounded-xl border border-black/10 bg-black/[0.035] px-5 py-5 sm:px-6'>
              <h3 className=' text-[1.65rem] font-black uppercase tracking-[-0.05em]'>
                Menors i acces
              </h3>
              <p className='mt-3 max-w-lg text-sm leading-relaxed text-black/70'>
                Els menors de 16 anys poden accedir al festival si van
                acompanyats del seu tutor legal. Les persones adultes han de
                disposar d&apos;entrada valida i, en el cas dels menors, cal
                portar l&apos;autoritzacio signada per accedir al recinte.
              </p>
              <div className='flex justify-end'>
                <a
                  href='/docs/autoritzacio-menors.pdf'
                  className={`${buttonClassName} mt-5 tracking-[0.11em]`}
                >
                  Descarregar autorització
                </a>
              </div>
            </article>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
              <article className='rounded-xl border border-black/10 bg-transparent px-5 py-5 sm:px-6'>
                <h3 className='text-[1.45rem] font-black uppercase tracking-[-0.05em]'>
                  Zona d'acampada
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-black/70'>
                  La zona d&apos;acampada esta reservada a les persones amb
                  abonament de 3 dies. La piscina estara disponible amb
                  abonament o amb suplement addicional segons aforament.
                </p>
              </article>

              <article className='rounded-xl border border-black/10 bg-white/40 px-5 py-5 sm:px-6'>
                <h3 className='text-[1.45rem] font-black uppercase tracking-[-0.05em]'>
                  Allotjament proper
                </h3>

                <div className='mt-5 grid gap-5'>
                  <div>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      {accommodationLinks.localHouses.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className='text-sm uppercase tracking-[0.14em] text-black/80 transition hover:text-red-700'
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className='border-t border-black/10 pt-4'>
                    <p className='text-[10px] font-black uppercase tracking-[0.2em] text-black/45'>
                      Plataformes
                    </p>

                    <div className='mt-3 flex flex-col gap-2'>
                      {accommodationLinks.platforms.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target='_blank'
                          rel='noreferrer'
                          className='text-sm uppercase tracking-[0.08em] text-black/80 transition hover:text-red-700'
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoFestival;
