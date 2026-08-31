import { navLinks, profile } from '../data/profile.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p className="footer-brand">
          <strong>{profile.name}</strong>
          <span>{profile.title} · {profile.location}</span>
        </p>

        <nav className="footer-links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <p className="footer-meta">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
