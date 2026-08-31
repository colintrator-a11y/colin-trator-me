import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile.js'
import ThemeToggle from './ThemeToggle.jsx'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell nav-inner">
        <a className="nav-brand" href="#top">
          <span className="nav-mark" aria-hidden="true">DS</span>
          <span className="nav-brand-text">
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-primary nav-cta" href={profile.phoneHref}>
            Hire me
          </a>
        </div>
      </div>
    </header>
  )
}
