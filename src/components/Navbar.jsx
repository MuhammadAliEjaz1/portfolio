import { useState } from 'react'

const links = [
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
  }

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3" aria-label="Main">
        <a href="#top" className="flex items-center gap-3 font-display font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm text-on-brand">AE</span>
          <span className="hidden sm:inline">Muhammad Ali Ejaz</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-sm text-muted hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full border border-line px-3 py-1.5 text-sm text-muted hover:text-ink"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
          <a href="#contact" className="hidden rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-on-brand sm:inline-block">
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-full border border-line px-3 py-1.5 text-sm text-muted md:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line px-5 py-3 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-2 font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
