import { useMemo, useState } from 'react'
import { projects } from '../data/profile.js'
import { projectMedia } from '../data/projectMedia.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './Projects.css'

const ALL = 'all'

// How a row is laid out follows from its media. Three or more images cannot be
// read side by side in half a row, so those projects put the media above the
// text at full width; otherwise the media sits beside it, in a column whose
// width follows the orientation of the first image.
const rowLayout = (project) => {
  if (project.media.length > 2) return ' is-stacked'
  const [first] = project.media
  return first && first.width > first.height ? ' is-wide' : ''
}

const mediaLayout = (project) => {
  if (project.media.length > 2) return ' is-stacked'
  return project.media.length > 1 ? ' has-gallery' : ''
}

// The lead image and the rest are separate elements rather than one flat list:
// the two layouts want the lead on its own line or shrinking beside a sibling,
// and a wrapper says which is which without relying on :first-child.
function Shot({ project, item, className, alt }) {
  return (
    <img
      className={className}
      src={projectMedia[item.file]}
      alt={alt.projects.mediaAlt(project.name)}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
    />
  )
}

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

  // With a single category there is nothing to filter, and a row of one live
  // button plus "All" is just noise.
  const showFilters = categories.length > 2

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2>{t.projects.heading}</h2>
          <p className="note">{t.projects.note(projects.length)}</p>
        </div>

        {showFilters ? (
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
        ) : null}

        <ol className="projects-list">
          {shown.map((project) => (
            <li
              key={project.id}
              className={`card project-row accent-${project.accent}${rowLayout(project)}`}
            >
              <div className={`project-media${mediaLayout(project)}`}>
                <Shot project={project} item={project.media[0]} className="media-lead" alt={t} />
                {project.media.length > 1 ? (
                  <div className="media-rest">
                    {project.media.slice(1).map((item) => (
                      <Shot key={item.file} project={project} item={item} alt={t} />
                    ))}
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
                    <li key={tag}>{tag}</li>
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
      </div>
    </section>
  )
}
