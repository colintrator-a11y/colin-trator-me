import { about, certifications, languages } from '../data/profile.js'
import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2>Seven years of shipping, start to finish</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-side">
            <div className="card about-panel">
              <h3>Languages</h3>
              <ul className="lang-list">
                {languages.map((language) => (
                  <li key={language.name}>
                    <div className="lang-row">
                      <span className="lang-name">{language.name}</span>
                      <span className="lang-level">{language.level}</span>
                    </div>
                    <div className="lang-track" role="presentation">
                      <div className="lang-fill" style={{ width: `${language.value}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card about-panel">
              <h3>Certification</h3>
              <ul className="cert-list">
                {certifications.map((certification) => (
                  <li key={certification.name}>
                    <span className="cert-year">{certification.year}</span>
                    <span className="cert-body">
                      <strong>{certification.name}</strong>
                      <small>{certification.detail}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
