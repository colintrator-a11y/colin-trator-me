import { useMemo, useState } from 'react'
import { projects } from '../data/profile.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './Projects.css'

const ALL = 'all'

export default function Projects() {
  const t = useLocale()

  // Filters are keyed by category id, not by label, so switching language keeps
  // whatever the visitor had selected.
  const categories = useMemo(() => {
    const counts = new Map()
    projects.forEach((project) => {
      counts.set(project.category, (counts.get(project.category) ?? 0) + 1)
    })
    return [[ALL, projects.length], ...counts.entries()]
  }, [])

  const [active, setActive] = useState(ALL)
  const shown = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2>{t.projects.heading}</h2>
          <p className="note">{t.projects.note(projects.length)}</p>
        </div>

        <div className="filters" role="group" aria-label={t.a11y.filter}>
          {categories.map(([id, count]) => (
            <button
              key={id}
              type="button"
              className={`filter${active === id ? ' is-active' : ''}`}
              onClick={() => setActive(id)}
              aria-pressed={active === id}
            >
              {id === ALL ? t.projects.all : t.projects.categories[id]}
              <span>{count}</span>
            </button>
          ))}
        </div>

        <ul className="projects-grid">
          {shown.map((project) => (
            <li key={project.id} className={`card project-card accent-${project.accent}`}>
              <p className="project-category">{t.projects.categories[project.category]}</p>
              <h3>{project.name}</h3>
              <p className="project-body">{t.projects.items[project.id]}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
