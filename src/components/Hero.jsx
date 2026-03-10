function Hero() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-black'>
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

      <div className='relative z-10 flex min-h-screen items-center px-6 py-16 sm:px-10 lg:px-16'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='max-w-4xl border-l-4 border-red-600 pl-5 sm:pl-8'>
            <p className='inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-white sm:text-sm'>
              Live loud
            </p>

            <div className='mt-6 space-y-1 uppercase leading-none text-white'>
              <p className='text-[clamp(3.8rem,13vw,8rem)] font-black tracking-[-0.08em]'>
                Actitud
              </p>
              <p className='text-[clamp(3.4rem,12vw,7.2rem)] font-black tracking-[-0.08em] text-white/90'>
                Fest
              </p>
            </div>

            <p className='mt-6 max-w-xl text-sm font-medium uppercase tracking-[0.22em] text-white/75 sm:text-base'>
              Vidreres · 26 / 27 Juliol 2026 
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <a
                href='#'
                className='inline-flex items-center justify-center border-2 border-red-600 bg-red-600 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-transparent'
              >
                Tickets
              </a>
              <span className='text-xs font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-sm'>
                Noise. Crowd. Summer.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
