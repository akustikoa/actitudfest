import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function HomeIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-5 w-5'
    >
      <path d='M3 10.5 12 3l9 7.5' />
      <path d='M5.5 9.5V21h13V9.5' />
    </svg>
  );
}

function LineupIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-5 w-5'
    >
      <path d='M4 6h16' />
      <path d='M4 12h16' />
      <path d='M4 18h10' />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-5 w-5'
    >
      <circle cx='12' cy='12' r='9' />
      <path d='M12 10v6' />
      <path d='M12 7.5h.01' />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-5 w-5'
    >
      <path d='M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' />
      <path d='M5 20a7 7 0 0 1 14 0' />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-5 w-5'
    >
      <path d='M3 12a9 9 0 1 0 3-6.7' />
      <path d='M3 4v5h5' />
      <path d='M12 7v5l3 2' />
    </svg>
  );
}

const links = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/lineup', label: 'Lineup', icon: LineupIcon },
  { to: '/info', label: 'Info', icon: InfoIcon },
  { to: '/about', label: 'About', icon: AboutIcon },
  { to: '/history', label: 'History', icon: HistoryIcon },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [showCompactBar, setShowCompactBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileBar(window.scrollY >= 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeout;

    if (isOpen) {
      setShowCompactBar(false);
    } else {
      timeout = setTimeout(() => {
        setShowCompactBar(true);
      }, 170);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <>
      <header className='fixed left-10 top-1/2 z-40 hidden -translate-y-1/2 lg:flex'>
        <nav className='flex flex-col items-center gap-4 rounded-2xl bg-surface py-6'>
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex lg:w-16 2xl:w-20 flex-col items-center justify-center gap-2 px-3 py-3 text-center lg:text-[9px] 2xl:text-[11px] font-semibold uppercase tracking-[0.2em] ${
                    isActive
                      ? 'text-white'
                      : 'text-white/70 transition hover:text-white'
                  }`
                }
              >
                <Icon />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </header>

      <header className='lg:hidden'>
        <div
          style={{
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
          }}
          className={`fixed bottom-0 left-0 z-50 w-full items-center justify-between bg-surface px-6 pt-4 ${
            !showCompactBar || !showMobileBar ? 'hidden' : 'flex'
          }`}
        >
          <a
            href='https://entradium.com/events/actitud-fest-vidreres-2026'
            target='_blank'
            rel='noopener noreferrer'
            className='items-center justify-center rounded border-2 border-transparent bg-red-700 px-3 py-1 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] text-white transition hover:border-2 hover:border-red-700 hover:bg-black/70 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2'
          >
            Tickets
          </a>

          <button
            type='button'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className='flex h-10 w-10 items-center justify-center text-white'
          >
            <div className='flex flex-col gap-1.5'>
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        <div
          style={{
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.5rem)',
          }}
          className={`fixed bottom-0 left-0 z-40 w-full bg-surface px-6 pt-6 transition-transform duration-400 ease-out ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className='mx-auto flex w-full max-w-sm items-center justify-between pb-2'>
            <a
              href='https://entradium.com/events/actitud-fest-vidreres-2026'
              target='_blank'
              rel='noopener noreferrer'
              className='items-center justify-center rounded border-2 border-transparent bg-red-700 px-3 py-1 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] text-white transition hover:border-2 hover:border-red-700 hover:bg-black/70 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2'
            >
              Tickets
            </a>

            <button
              type='button'
              aria-label='Close menu'
              onClick={() => setIsOpen(false)}
              className='flex h-10 w-10 items-center justify-center text-white'
            >
              <span className='text-2xl leading-none'>&times;</span>
            </button>
          </div>

          <nav
            className={`mx-auto grid w-full max-w-sm grid-cols-3 gap-x-6 gap-y-8 px-2 py-4 transition-transform duration-300 ${
              isOpen ? 'translate-y-0' : 'translate-y-2'
            }`}
          >
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-24 flex-col items-center justify-center gap-2 rounded-md bg-primary text-center text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-500 ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  <Icon />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
