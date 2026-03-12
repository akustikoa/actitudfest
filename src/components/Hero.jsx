import logoFall from '../assets/images/logo_fall.webp';

function Hero() {
  return (
    <section className='relative h-screen overflow-hidden bg-black'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
      >
        <source src='/video/hero.mp4' type='video/mp4' />
      </video>

      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_35%)]' />

      <div className='relative z-10 flex h-screen items-start pl-10 pr-6 pt-10 lg:pl-[210px] lg:pt-[134px] xl:pl-[220px] 2xl:pl-[232px]'>
        <div className='flex h-full w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-4xl border-l-2 rounded-2xl border-red-600 pl-5 sm:pl-8'>
            <div className='lg:mt-1 mt-2 space-y-1 uppercase leading-none text-white'>
              <p className='text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.08em]'>
                Actitud
              </p>
              <p className='text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.08em] text-white/90'>
                Fest
              </p>
            </div>

            <p className='mt-2 max-w-xl text-[clamp(0.45rem,1vw,0.7rem)] font-medium uppercase tracking-[0.22em] text-white/75'>
              Vidreres 26 / 27 Juliol 2026
            </p>

            <div className='mt-5 flex flex-wrap items-center gap-4'>
              <a
                href='#'
                className='inline-flex items-center justify-center rounded border-2 border-red-600 bg-red-600 px-3 py-1 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-transparent mb-4'
              >
                Tickets
              </a>
            </div>
          </div>

          <img
            src={logoFall}
            alt='Actitud Fest logo'
            className='absolute right-6 bottom-[80px]
  w-[150px]
  lg:right-[250px] lg:bottom-[50px]
  lg:w-[180px]
  xl:w-[180px]
  2xl:w-[220px]
  opacity-70 lg:opacity-90'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
