import { profile } from '../data/profile.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './Contact.css'

export default function Contact() {
  const t = useLocale()

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="card contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.heading}</h2>
            <p>{t.contact.body}</p>
            {/* No channel is configured yet; a button pointing nowhere would be
                worse than none, so it only renders once profile.contactHref
                is filled in. */}
            {profile.contactHref ? (
              <a className="btn btn-primary contact-cta" href={profile.contactHref}>
                {t.contact.cta}
              </a>
            ) : null}
          </div>

          <dl className="contact-facts">
            {t.contact.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
