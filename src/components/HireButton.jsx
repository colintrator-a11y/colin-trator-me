import { profile } from '../data/profile.js'

/**
 * Every "Hire me" button on the page. It opens profile.contactHref in a new tab
 * — the destination is off-site — and renders nothing at all while that is
 * empty, so clearing the link can never leave a dead button behind.
 */
export default function HireButton({ label, className = 'btn btn-primary' }) {
  if (!profile.contactHref) return null

  return (
    <a className={className} href={profile.contactHref} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
