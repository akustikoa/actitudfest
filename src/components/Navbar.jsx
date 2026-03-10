import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/lineup', label: 'Lineup' },
  { to: '/info', label: 'Info' },
  { to: '/about', label: 'About' },
  { to: '/history', label: 'History' },
]

function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-sm font-semibold uppercase tracking-[0.3em]">
          Actitud Fest
        </NavLink>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'text-white' : 'transition hover:text-white'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
