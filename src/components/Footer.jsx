import ajuntamentVidreres from '../assets/images/ajuntament-vidreres.png';
import diputacioGirona from '../assets/images/Diputacio.png';
import sorollLogo from '../assets/images/soroll.png';

function InstagramIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-6 w-6 sm:h-7 sm:w-7'
      aria-hidden='true'
    >
      <rect x='3.5' y='3.5' width='17' height='17' rx='4.5' />
      <circle cx='12' cy='12' r='3.8' />
      <path d='M17.5 6.5h.01' />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-6 w-6 sm:h-7 sm:w-7'
      aria-hidden='true'
    >
      <path d='M14.5 8H16V4.8a17.4 17.4 0 0 0-2.7-.2c-2.7 0-4.5 1.6-4.5 4.7V12H6v3.6h2.8V20h3.5v-4.4H15L15.4 12h-3.1V9.7c0-1 .3-1.7 2.2-1.7Z' />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-6 w-6 sm:h-7 sm:w-7'
      aria-hidden='true'
    >
      <path d='M21 12.2c0 2.2-.2 3.7-.6 4.5-.3.7-.9 1.3-1.6 1.6-.8.4-2.9.6-6.8.6s-6-.2-6.8-.6c-.7-.3-1.3-.9-1.6-1.6C3.2 15.9 3 14.4 3 12.2S3.2 8.5 3.6 7.7c.3-.7.9-1.3 1.6-1.6.8-.4 2.9-.6 6.8-.6s6 .2 6.8.6c.7.3 1.3.9 1.6 1.6.4.8.6 2.3.6 4.5Z' />
      <path d='m10 9 5 3-5 3V9Z' fill='currentColor' stroke='none' />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-6 w-6 sm:h-7 sm:w-7'
      aria-hidden='true'
    >
      <path d='M22 5.9c-.7.3-1.5.5-2.3.7.8-.5 1.5-1.2 1.8-2.1-.8.5-1.7.8-2.6 1-1.4-1.5-3.9-1.6-5.5-.1-1 1-1.5 2.5-1.2 3.9-3.1-.2-6-1.8-7.9-4.3-1 1.7-.5 3.9 1.1 5-.6 0-1.2-.2-1.8-.5 0 1.9 1.3 3.6 3.2 4-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.3 8.3 0 0 1 2 18.7a11.7 11.7 0 0 0 6.3 1.9c7.5 0 11.9-6.5 11.5-12.3.8-.6 1.5-1.3 2.2-2.1Z' />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      className='h-6 w-6 sm:h-7 sm:w-7'
      aria-hidden='true'
    >
      <path d='M4 7.5h16v9H4z' />
      <path d='m5 8 7 5 7-5' />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/actitudfestvidreres/',
    icon: InstagramIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@actitudfestvidreres4331',
    icon: YouTubeIcon,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/Actitud_Fest',
    icon: TwitterIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/actitudfest/',
    icon: FacebookIcon,
  },
  {
    label: 'Mail',
    href: 'mailto:info@actitudfest.net',
    icon: MailIcon,
  },
];

function Footer() {
  return (
    <footer className='border-t border-white/10 bg-black px-6 py-12 text-white sm:px-10 lg:px-16'>
      <div className='mx-auto w-full max-w-[1200px]'>
        <div className='flex flex-col gap-8 pb-16 sm:pb-6 sm:pt-3'>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between gap-4 sm:gap-5 lg:hidden'>
                <img
                  src={sorollLogo}
                  alt='El Nostre Soroll'
                  className='h-15 lg:h-10 w-auto max-w-[30%] object-contain'
                />
                <img
                  src={ajuntamentVidreres}
                  alt='Ajuntament de Vidreres'
                  className='h-10 w-auto max-w-[30%] object-contain'
                />
                <img
                  src={diputacioGirona}
                  alt='Diputacio de Girona'
                  className='h-10 w-auto max-w-[30%] object-contain'
                />
              </div>

              <div className='hidden lg:flex lg:flex-nowrap lg:items-center lg:gap-8'>
                <img
                  src={sorollLogo}
                  alt='El Nostre Soroll'
                  className='h-24 w-auto object-contain'
                />

                <div className='h-16 w-px bg-white/30' />

                <div className='flex items-center gap-x-7'>
                  <img
                    src={ajuntamentVidreres}
                    alt='Ajuntament de Vidreres'
                    className='h-12 w-auto object-contain'
                  />
                  <img
                    src={diputacioGirona}
                    alt='Diputacio de Girona'
                    className='h-13 w-auto object-contain'
                  />
                </div>
              </div>
            </div>

            <nav className='flex items-center  gap-5 self-start lg:self-auto'>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className='text-white/78 transition hover:text-red-700'
                >
                  <link.icon />
                </a>
              ))}
            </nav>
          </div>

          <div className='flex flex-row justify-between pt-6'>
            <p className='w-2/3 flex flex-col text-[11px] text-white/42 lg:text-[12px]'>
              <span>
                This website does not use any cookie and does not collect any
                data.
              </span>
              <span>&copy; 2026 Actitud Fest</span>
            </p>

            <p className='w-1/3 flex flex-col items-end text-[11px] text-white/42 lg:flex-row lg:items-center lg:justify-end lg:gap-1 lg:text-[12px]'>
              <span>Designed by</span>
              <span className='font-bold text-white/50'>
                <a
                  href='https://xavierprat.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Xavier Prat
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
