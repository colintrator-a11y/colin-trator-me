import { useEffect, useState } from 'react'
import { navSections, profile } from '../data/profile.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import './Navbar.css'

export default function Navbar() {
  const t = useLocale()
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
          <strong className="nav-brand-name">{profile.name}</strong>
        </a>

        <nav className="nav-links" aria-label={t.a11y.sections}>
          {navSections.map((section) => (
            <a key={section} href={`#${section}`}>
              {t.nav[section]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <a className="btn btn-primary nav-cta" href="#contact">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
