import { useLanguage } from '../context/LanguageContext';

const accommodationLinks = {
  localHouses: [
    { label: 'Can Roig', href: 'https://www.canroig.cat/ca/' },
    { label: 'Can Bruno', href: 'https://www.canbruno.com/en/home/' },
    { label: 'Can Pou', href: 'https://www.canpou.net/ca/' },
    {
      label: 'Can Suria',
      href: 'https://www.google.com/maps/place/Can+S%C3%BAria+I+Turisme+Rural/@41.7594444,2.7714224,17z/data=!3m1!4b1!4m9!3m8!1s0x12bb228379f17373:0x3315d3c16734bed3!5m2!4m1!1i2!8m2!3d41.7594444!4d2.7736111!16s%2Fg%2F11fyzcsnyk',
    },
    { label: 'Can Peuet', href: 'https://can-pauet.costabrava24.com/en/' },
    { label: 'Can Tarre', href: 'https://ruralcantarre.com/' },
    {
      label: 'Laselvaturisme',
      href: 'https://www.laselvaturisme.com/directori/on-dormir/hotels/',
    },
  ],
  platforms: [
    {
      label: 'Booking',
      href: 'https://www.booking.com/searchresults.html?ss=Vidreres%2C+Catalonia%2C+Spain&ssne=Vidiago&ssne_untouched=Vidiago&label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AvfR1M0GwAIB0gIkMWQwNjdiYmMtOWM1Mi00YTNiLTk4YmQtZjU5YTUwYTgwZmI52AIB4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-407147&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=xu&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=eeac4202ebd40391&ac_meta=GhBlZWFjNDIwMmViZDQwMzkxIAAoATICeHU6CFZpZHJlcmVz&checkin=2026-03-15&checkout=2026-03-16&group_adults=2&no_rooms=1&group_children=0',
    },
    {
      label: 'TripAdvisor',
      href: 'https://www.tripadvisor.es/Search?q=Vidreres&geo=1&ssrc=a&searchNearby=false&searchSessionId=000129b4665a7758.ssid&offset=0',
    },
    {
      label: 'Airbnb',
      href: 'https://www.airbnb.es/s/Vidreres--Gerona/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&date_picker_type=calendar&query=Vidreras%2C%20Espa%C3%B1a&place_id=ChIJEa2TgwIZuxIRoHGkIeD6AAQ&source=structured_search_input_header&search_type=autocomplete_click',
    },
  ],
};

const buttonClassName =
  'inline-flex items-center justify-center rounded border-2 border-transparent bg-red-700 px-3 py-1 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] !text-white transition hover:bg-[#080808] hover:border-2 hover:border-red-700';

function InfoFestival() {
  const { t } = useLanguage();
  return (
    <section className='bg-[#f4f1ec] px-6 py-16 text-black sm:px-10 lg:px-16'>
      <div className='mx-auto max-w-6xl '>
        <div className='max-w-2xl'>
          <h2 className='mt-3 text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
            {t('infoFestival.howToArrive')}
          </h2>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start'>
          <article className='overflow-hidden rounded-xl border border-black/10 bg-black/[0.03]'>
            <div className='p-3 sm:p-4'>
              <div className='overflow-hidden rounded-lg'>
                <iframe
                  title='Mapa del festival a Vidreres'
                  src='https://www.google.com/maps?q=Actitud+Fest+41.790814,2.765210&z=14&output=embed'
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
                {t('infoFestival.minorsTitle')}
              </h3>
              <p className='mt-3 max-w-lg text-sm leading-relaxed text-black/70'>
                {t('infoFestival.minorsText')}
              </p>
              <div className='flex justify-end'>
                <a
                  href='/documents/autoritzacio-menors-actitud.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${buttonClassName} mt-5 tracking-[0.11em]`}
                >
                  {t('infoFestival.downloadAuthorization')}
                </a>
              </div>
            </article>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
              <article className='self-start rounded-xl border border-black/10 bg-transparent px-5 py-5 sm:px-6'>
                <h3 className='text-[1.45rem] font-black uppercase tracking-[-0.05em]'>
                  {t('infoFestival.campingTitle')}
                </h3>
                <p className='mt-3  text-sm leading-relaxed text-black/70'>
                  {t('infoFestival.campingText')}
                </p>
              </article>

              <article className='rounded-xl border border-black/10 bg-white/40 px-5 py-5 sm:px-6'>
                <h3 className='text-[1.45rem] font-black uppercase tracking-[-0.05em]'>
                  {t('infoFestival.nearbyAccommodation')}
                </h3>

                <div className='mt-5 grid gap-5'>
                  <div>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      {accommodationLinks.localHouses.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target='_blank'
                          rel='noreferrer'
                          className='text-sm uppercase tracking-[0.14em] text-black/80 transition hover:text-red-700'
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className='border-t border-black/10 pt-4'>
                    <p className='text-[10px] font-black uppercase tracking-[0.2em] text-black/45'>
                      {t('infoFestival.platforms')}
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
