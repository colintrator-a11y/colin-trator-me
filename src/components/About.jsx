import { certifications, spokenLanguages } from '../data/profile.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './About.css'

export default function About() {
  const t = useLocale()

  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.heading}</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-side">
            <div className="card about-panel">
              <h3>{t.about.languagesTitle}</h3>
              <ul className="lang-list">
                {spokenLanguages.map((language) => {
                  const copy = t.about.languages[language.id]
                  return (
                    <li key={language.id}>
                      <div className="lang-row">
                        <span className="lang-name">{copy.name}</span>
                        <span className="lang-level">{copy.level}</span>
                      </div>
                      <div className="lang-track" role="presentation">
                        <div className="lang-fill" style={{ width: `${language.value}%` }} />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="card about-panel">
              <h3>{t.about.certTitle}</h3>
              <ul className="cert-list">
                {certifications.map((certification) => {
                  const copy = t.about.certifications[certification.id]
                  return (
                    <li key={certification.id}>
                      <span className="cert-year">{certification.year}</span>
                      <span className="cert-body">
                        <strong>{copy.name}</strong>
                        <small>{copy.detail}</small>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
