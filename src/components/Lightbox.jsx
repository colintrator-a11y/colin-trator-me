import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { projectMedia } from '../data/projectMedia.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './Lightbox.css'

/**
 * Full-size preview of a project's images.
 *
 * Rendered into document.body rather than in place: a hovered .project-row
 * carries a transform, which makes it the containing block for anything
 * position: fixed inside it, and the overlay would be trapped in the row.
 */
export default function Lightbox({ project, index, onClose, onMove }) {
  const t = useLocale()
  const closeRef = useRef(null)
  const count = project.media.length
  const item = project.media[index]

  const move = useCallback(
    (step) => onMove((index + step + count) % count),
    [count, index, onMove],
  )

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowRight' && count > 1) move(1)
      else if (event.key === 'ArrowLeft' && count > 1) move(-1)
    }
    document.addEventListener('keydown', onKey)

    // Hold the page still behind the overlay, and keep its width so the
    // disappearing scrollbar does not shift the layout underneath.
    const { overflow, paddingRight } = document.body.style
    const gap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (gap > 0) document.body.style.paddingRight = `${gap}px`

    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [count, move, onClose])

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose} aria-label={t.a11y.close}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {count > 1 ? (
        <button type="button" className="lightbox-step is-prev" onClick={() => move(-1)} aria-label={t.a11y.prevImage}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : null}

      <figure className="lightbox-figure">
        <img
          src={projectMedia[item.file]}
          alt={t.projects.mediaAlt(project.name)}
          width={item.width}
          height={item.height}
        />
        <figcaption>
          <span>{project.name}</span>
          {count > 1 ? <small>{index + 1} / {count}</small> : null}
        </figcaption>
      </figure>

      {count > 1 ? (
        <button type="button" className="lightbox-step is-next" onClick={() => move(1)} aria-label={t.a11y.nextImage}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : null}
    </div>,
    document.body,
  )
}
