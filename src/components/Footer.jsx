import { navSections, profile } from '../data/profile.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './Footer.css'

export default function Footer() {
  const t = useLocale()

  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p className="footer-brand">
          <strong>{profile.name}</strong>
          <span>{t.footer.role}</span>
        </p>

        <nav className="footer-links" aria-label={t.a11y.footer}>
          {navSections.map((section) => (
            <a key={section} href={`#${section}`}>{t.nav[section]}</a>
          ))}
        </nav>

        <p className="footer-meta">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
