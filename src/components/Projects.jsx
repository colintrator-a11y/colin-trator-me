import { useMemo, useState } from 'react'
import { projects } from '../data/profile.js'
import './Projects.css'

const ALL = 'All work'

export default function Projects() {
  const filters = useMemo(() => {
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
          <span className="eyebrow">Work</span>
          <h2>Selected projects</h2>
          <p className="note">{projects.length} projects · web, mobile, e-commerce and AI</p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects by category">
          {filters.map(([label, count]) => (
            <button
              key={label}
              type="button"
              className={`filter${active === label ? ' is-active' : ''}`}
              onClick={() => setActive(label)}
              aria-pressed={active === label}
            >
              {label}
              <span>{count}</span>
            </button>
          ))}
        </div>

        <ul className="projects-grid">
          {shown.map((project) => (
            <li
              key={project.name}
              className={`card project-card accent-${project.accent}`}
            >
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-body">{project.body}</p>
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
