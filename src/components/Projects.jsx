import { useMemo, useState } from 'react'
import { projects } from '../data/profile.js'
import { projectMedia } from '../data/projectMedia.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import Lightbox from './Lightbox.jsx'
import './Projects.css'

const ALL = 'all'

// How a row is laid out follows from its media. Three or more images cannot be
// read side by side in half a row, so those projects put the media above the
// text at full width; otherwise the media sits beside it, in a column whose
// width follows the orientation of the first image. `layout: 'stacked'` forces
// the full-width form for media that needs it whatever the count — a flow
// diagram, say, whose labels vanish at half a row.
const rowLayout = (project) => {
  if (project.layout === 'stacked' || project.media.length > 2) return ' is-stacked'
  const [first] = project.media
  return first && first.width > first.height ? ' is-wide' : ''
}

const mediaLayout = (project) => {
  if (project.layout === 'stacked' || project.media.length > 2) return ' is-stacked'
  return project.media.length > 1 ? ' has-gallery' : ''
}

export default function Projects() {
  const t = useLocale()

  // Filters are keyed by category id and by the tag text itself, neither of
  // which is translated, so switching language keeps the current selection.
  const categories = useMemo(() => {
    const counts = new Map()
    projects.forEach((project) => {
      counts.set(project.category, (counts.get(project.category) ?? 0) + 1)
    })
    return [[ALL, projects.length], ...counts.entries()]
  }, [])

  const skills = useMemo(() => {
    const counts = new Map()
    projects.forEach((project) => {
      project.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1))
    })
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]))
  }, [])

  const [category, setCategory] = useState(ALL)
  const [skill, setSkill] = useState(ALL)
  const [preview, setPreview] = useState(null)

  const shown = projects.filter(
    (project) =>
      (category === ALL || project.category === category) &&
      (skill === ALL || project.tags.includes(skill)),
  )

  const filtered = category !== ALL || skill !== ALL
  const previewProject = preview && projects.find((project) => project.id === preview.id)

  const openPreview = (project, index) => setPreview({ id: project.id, index })

  const shot = (project, index, className) => {
    const item = project.media[index]
    return (
      <img
        key={item.file}
        className={className}
        src={projectMedia[item.file]}
        alt={t.projects.mediaAlt(project.name)}
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
        role="button"
        tabIndex={0}
        title={t.a11y.openPreview}
        onClick={() => openPreview(project, index)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openPreview(project, index)
          }
        }}
      />
    )
  }

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2>{t.projects.heading}</h2>
          <p className="note">{t.projects.note(projects.length)}</p>
        </div>

        <div className="filters">
          <div className="filter-chips" role="group" aria-label={t.a11y.filter}>
            {categories.map(([id, count]) => (
              <button
                key={id}
                type="button"
                className={`filter${category === id ? ' is-active' : ''}`}
                onClick={() => setCategory(id)}
                aria-pressed={category === id}
              >
                {id === ALL ? t.projects.all : t.projects.categories[id]}
                <span>{count}</span>
              </button>
            ))}
          </div>

          <div className="filter-skill">
            <label htmlFor="skill-filter">{t.projects.bySkill}</label>
            <select
              id="skill-filter"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
            >
              <option value={ALL}>{t.projects.allSkills}</option>
              {skills.map(([tag, count]) => (
                <option key={tag} value={tag}>
                  {tag} ({count})
                </option>
              ))}
            </select>
            {filtered ? (
              <button
                type="button"
                className="filter-reset"
                onClick={() => {
                  setCategory(ALL)
                  setSkill(ALL)
                }}
              >
                {t.projects.reset}
              </button>
            ) : null}
          </div>
        </div>

        {shown.length ? (
          <ol className="projects-list">
            {shown.map((project) => (
              <li key={project.id} className={`card project-row accent-${project.accent}${rowLayout(project)}`}>
                <div className={`project-media${mediaLayout(project)}`}>
                  {shot(project, 0, 'media-lead')}
                  {project.media.length > 1 ? (
                    <div className="media-rest">
                      {project.media.slice(1).map((item, offset) => shot(project, offset + 1))}
                    </div>
                  ) : null}
                </div>

                <div className="project-content">
                  <p className="project-category">{t.projects.categories[project.category]}</p>
                  <h3>{project.name}</h3>
                  {t.projects.items[project.id].map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="project-body">{paragraph}</p>
                  ))}

                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <button
                          type="button"
                          className={`tag-button${skill === tag ? ' is-active' : ''}`}
                          onClick={() => setSkill(skill === tag ? ALL : tag)}
                          aria-pressed={skill === tag}
                        >
                          {tag}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {project.links?.length ? (
                    <p className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.kind}
                          className="project-link"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.projects.links[link.kind]}
                          <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                            <path
                              d="M7 17 17 7M9 7h8v8"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      ))}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="projects-empty">{t.projects.empty}</p>
        )}
      </div>

      {previewProject ? (
        <Lightbox
          project={previewProject}
          index={preview.index}
          onClose={() => setPreview(null)}
          onMove={(index) => setPreview((current) => ({ ...current, index }))}
        />
      ) : null}
    </section>
  )
}
