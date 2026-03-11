import logoFall from '../assets/images/logo_fall.webp';

function Hero() {
  return (
    <section className='relative min-h-[58vh] overflow-hidden bg-black lg:min-h-[62vh]'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/video/hero.mp4' type='video/mp4' />
      </video>

      <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_35%)]' />

      <div className='relative z-10 flex min-h-[46vh] items-center px-6 py-6 sm:px-10 sm:py-8 lg:min-h-[60vh] lg:px-16 lg:py-10'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-10'>
            <div className='max-w-4xl border-l-2 rounded-2xl border-red-600 pl-5 sm:pl-8'>
              <div className='mt-6 space-y-1 uppercase leading-none text-white'>
                <p className='text-[clamp(2rem,10vw,5rem)] font-black tracking-[-0.08em]'>
                  Actitud
                </p>
                <p className='text-[clamp(2rem,10vw,5rem)] font-black tracking-[-0.08em] text-white/90'>
                  Fest
                </p>
              </div>

              <p className='mt-6 max-w-xl text-[clamp(0.75rem,2vw,1rem)] font-medium uppercase tracking-[0.22em] text-white/75'>
                Vidreres 26 / 27 Juliol 2026
              </p>

              <div className='mt-8 flex flex-wrap items-center gap-4'>
                <a
                  href='#'
                  className='inline-flex items-center justify-center rounded border-2 border-red-600 bg-red-600 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-transparent mb-4'
                >
                  Tickets
                </a>
              </div>
            </div>

            <img
              src={logoFall}
              alt='Actitud Fest logo'
              className='w-full max-w-[180px] self-start mb-2 lg:max-w-[240px] lg:self-end'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
