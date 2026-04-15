import { useLanguage } from '../context/LanguageContext';

function Presentacio() {
  const { t } = useLanguage();

  return (
    <section className='bg-[#f8f7f4] px-6 py-16 text-black sm:px-10 lg:px-16'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-10'>
        <div className='max-w-2xl'>
          <h2 className='mt-3 text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
            {t('presentation.title')}
          </h2>
        </div>

        <div className='mt-1 grid grid-cols-1 gap-18 lg:grid-cols-2'>
          {/* Concert */}
          <article>
            <div className='relative overflow-hidden rounded-xl'>
              <img
                src='/presentation/lauracrehuet.png'
                alt='Concert presentació'
                className='w-full aspect-[16/9] object-cover'
              />

              <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4'>
                <p className='text-[13px] font-black uppercase tracking-[0.08em] text-white drop-shadow'>
                  {t('presentation.concertTitleImg')}
                </p>
              </div>
            </div>

            <h3 className='mt-4 text-[1.65rem] font-black uppercase tracking-[-0.05em]'>
              {t('presentation.concertTitle')}
            </h3>

            <p className='mt-3 max-w-lg text-sm leading-relaxed text-black/70'>
              {t('presentation.concertText')}
            </p>
          </article>

          {/* Llibre */}
          <article>
            <div className='relative overflow-hidden rounded-xl'>
              <img
                src='/presentation/actitud-vida-en-los-minifestivales.png'
                alt='Presentació llibre'
                className='w-full aspect-[16/9] object-cover'
              />

              <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4'>
                <p className='text-[13px] font-black uppercase tracking-[0.08em] text-white drop-shadow'>
                  {t('presentation.bookTitleImg')}
                </p>
              </div>
            </div>

            <h3 className='mt-4 text-[1.65rem] font-black uppercase tracking-[-0.05em]'>
              {t('presentation.bookTitle')}
            </h3>

            <p className='mt-3 max-w-lg text-sm leading-relaxed text-black/70'>
              {t('presentation.bookText')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Presentacio;
