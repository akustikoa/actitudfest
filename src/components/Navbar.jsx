import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function HomeIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className='h-5 w-5'>
      <path d='M3 10.5 12 3l9 7.5' />
      <path d='M5.5 9.5V21h13V9.5' />
    </svg>
  )
}

function LineupIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className='h-5 w-5'>
      <path d='M4 6h16' />
      <path d='M4 12h16' />
      <path d='M4 18h10' />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className='h-5 w-5'>
      <circle cx='12' cy='12' r='9' />
      <path d='M12 10v6' />
      <path d='M12 7.5h.01' />
    </svg>
  )
}

function AboutIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className='h-5 w-5'>
      <path d='M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' />
      <path d='M5 20a7 7 0 0 1 14 0' />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className='h-5 w-5'>
      <path d='M3 12a9 9 0 1 0 3-6.7' />
      <path d='M3 4v5h5' />
      <path d='M12 7v5l3 2' />
    </svg>
  )
}

const links = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/lineup', label: 'Lineup', icon: LineupIcon },
  { to: '/info', label: 'Info', icon: InfoIcon },
  { to: '/about', label: 'About', icon: AboutIcon },
  { to: '/history', label: 'History', icon: HistoryIcon },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='hidden lg:flex fixed left-0 top-1/2 z-40 -translate-y-1/2'>
        <nav className='flex flex-col items-center gap-4 bg-transparent py-6'>
          <NavLink to='/' className='mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45'>
            Actitud Fest
          </NavLink>
          {links.map((link) => {
            const Icon = link.icon

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex w-20 flex-col items-center justify-center gap-2 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] ${
                    isActive ? 'text-white' : 'text-white/70 transition hover:text-white'
                  }`
                }
              >
                <Icon />
                <span>{link.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </header>

      <header className='lg:hidden'>
        <div className='fixed bottom-0 left-0 z-50 flex w-full items-center justify-between bg-black px-6 py-4'>
          <NavLink to='/' className='text-sm font-semibold uppercase tracking-[0.3em]'>
            ACTITUD FEST
          </NavLink>
          <button
            type='button'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className='flex h-10 w-10 items-center justify-center text-white'
          >
            <div className='flex flex-col gap-1.5'>
              <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        <div
          className={`fixed bottom-0 left-0 z-40 w-full bg-black px-6 pb-24 pt-6 transition duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <nav className='grid grid-cols-3 gap-3'>
            {links.map((link) => {
              const Icon = link.icon

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-24 flex-col items-center justify-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      isActive ? 'text-white' : 'text-white/70 transition hover:text-white'
                    }`
                  }
                >
                  <Icon />
                  <span>{link.label}</span>
                </NavLink>
              )
            })}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
