import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/* ================= ICONS ================= */

function IconBase({ children, className = '' }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className={`h-5 w-5 ${className}`}
    >
      {children}
    </svg>
  );
}

const HomeIcon = (props) => (
  <IconBase {...props}>
    <path d='M3 10.5 12 3l9 7.5' />
    <path d='M5.5 9.5V21h13V9.5' />
  </IconBase>
);

const LineupIcon = (props) => (
  <IconBase {...props}>
    <path d='M4 6h16' />
    <path d='M4 12h16' />
    <path d='M4 18h10' />
  </IconBase>
);

const AboutIcon = (props) => (
  <IconBase {...props}>
    <path d='M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' />
    <path d='M5 20a7 7 0 0 1 14 0' />
  </IconBase>
);

const HistoryIcon = (props) => (
  <IconBase {...props}>
    <path d='M3 12a9 9 0 1 0 3-6.7' />
    <path d='M3 4v5h5' />
    <path d='M12 7v5l3 2' />
  </IconBase>
);

/* ================= CONFIG ================= */

const linkConfig = [
  { to: '/', labelKey: 'navbar.home', icon: HomeIcon },
  { to: '/lineup', labelKey: 'navbar.lineup', icon: LineupIcon },
  { to: '/about', labelKey: 'navbar.about', icon: AboutIcon },
  { to: '/history', labelKey: 'navbar.history', icon: HistoryIcon },
];

/* ================= HOOKS ================= */

function useScrollThreshold(threshold = 100) {
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsPassed(window.scrollY >= threshold);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isPassed;
}

/* ================= COMPONENTS ================= */

function LanguageSelector({ language, setLanguage, variant = 'desktop' }) {
  const languages = ['ca', 'es', 'en', 'fr'];

  return (
    <div
      className={`flex items-center justify-center ${
        variant === 'mobile'
          ? 'gap-2 text-[15px]'
          : 'grid grid-cols-2 gap-2 text-[11px]'
      } font-bold uppercase tracking-[0.16em]`}
    >
      {languages.map((lang, index) => (
        <div key={lang} className='flex items-center gap-2'>
          <button
            onClick={() => setLanguage(lang)}
            className={
              language === lang
                ? 'text-red-700'
                : 'text-white/70 hover:text-red-700'
            }
          >
            {lang}
          </button>

          {variant === 'mobile' && index < languages.length - 1 && (
            <span className='text-white/30'>|</span>
          )}
        </div>
      ))}
    </div>
  );
}

function NavItem({ to, label, icon: Icon, onClick, variant = 'desktop' }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        variant === 'desktop'
          ? `flex lg:w-[4.5rem] 2xl:w-[5.5rem] flex-col items-center justify-center gap-2 px-3 py-3 text-center lg:text-[9px] 2xl:text-[11px] font-semibold uppercase tracking-[0.16em]`
          : `flex min-h-24 flex-col items-center justify-center gap-2 rounded-md bg-primary text-[11px] uppercase tracking-[0.2em] ${
              isActive ? 'text-white' : 'text-white/70 hover:text-white'
            }`
      }
    >
      {({ isActive }) => (
        <>
          {Icon && (
            <Icon
              className={
                variant === 'desktop'
                  ? isActive
                    ? 'text-red-500'
                    : 'text-white'
                  : ''
              }
            />
          )}
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
}

function TicketsButton() {
  return (
    <a
      href='https://entradium.com/events/actitud-fest-vidreres-2026'
      target='_blank'
      rel='noopener noreferrer'
      className='rounded bg-red-700 px-3 py-1 text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/70'
    >
      Tickets
    </a>
  );
}

/* ================= MAIN ================= */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCompactBar, setShowCompactBar] = useState(false);

  const showMobileBar = useScrollThreshold(100);
  const { language, setLanguage, t } = useLanguage();

  const links = useMemo(
    () =>
      linkConfig.map((link) => ({
        ...link,
        label: t(link.labelKey),
      })),
    [t],
  );

  useEffect(() => {
    let timeout;

    if (isOpen) {
      timeout = setTimeout(() => setShowCompactBar(false), 0);
    } else {
      timeout = setTimeout(() => setShowCompactBar(true), 170);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <>
      {/* DESKTOP */}
      <header className='fixed left-10 top-1/2 z-40 hidden -translate-y-1/2 lg:flex'>
        <nav className='flex flex-col items-center gap-4 rounded-2xl bg-surface/85 py-6'>
          {links.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}

          <div className='border-t border-white/10 pt-6'>
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </div>
        </nav>
      </header>

      {/* MOBILE */}
      <header className='lg:hidden'>
        {/* BOTTOM BAR */}
        <div
          style={{
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
          }}
          className={`fixed bottom-0 left-0 z-50 w-full items-center justify-between bg-surface px-6 pt-4 ${
            !showCompactBar || !showMobileBar ? 'hidden' : 'flex'
          }`}
        >
          <TicketsButton />

          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
            variant='mobile'
          />

          <button
            onClick={() => setIsOpen((o) => !o)}
            className='flex h-10 w-10 items-center justify-center text-white'
          >
            <div className='flex flex-col gap-1.5'>
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* MENU */}
        <div
          style={{
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.5rem)',
          }}
          className={`fixed bottom-0 left-0 z-40 w-full bg-surface px-6 pt-6 transition-transform duration-400 ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className='mx-auto flex max-w-sm justify-between pb-2'>
            <TicketsButton />

            <button
              onClick={() => setIsOpen(false)}
              className='h-10 w-10 text-white text-2xl'
            >
              &times;
            </button>
          </div>

          <nav className='mx-auto grid max-w-sm grid-cols-3 gap-6 py-4'>
            {links.map((link) => (
              <NavItem
                key={link.to}
                {...link}
                variant='mobile'
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
