import { useState } from 'react'
import { profile, stats } from '../data/profile.js'
import './Hero.css'

// Lives in public/ so it can be swapped without touching the build.
const AVATAR = `${import.meta.env.BASE_URL}avatar.jpg`

const facts = [
  { label: 'Location', value: profile.location },
  { label: 'Rate', value: profile.rate },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { label: 'Languages', value: 'English · Portuguese · Spanish' },
]

export default function Hero() {
  // The portrait is a drop-in file; if it is missing we fall back to the
  // monogram rather than showing a broken image.
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <section className="hero" id="top">
      <div className="shell hero-inner">
        <div className="hero-main">
          <p className="hero-status">
            <span className="dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-note">{profile.locationNote}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.phoneHref}>
              Call {profile.phone}
            </a>
            <a className="btn btn-ghost" href="#work">
              See the work
            </a>
          </div>

          <dl className="hero-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="hero-portrait">
          <div className="portrait-frame">
            {hasPhoto ? (
              <img
                src={AVATAR}
                alt={`${profile.name}, ${profile.title}`}
                width="480"
                height="600"
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <span className="portrait-mark" aria-hidden="true">DS</span>
            )}
          </div>
          <p className="portrait-caption">
            Freelance developer · <span>Since 2019</span>
          </p>
        </aside>
      </div>

      <div className="shell">
        <ul className="hero-stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
