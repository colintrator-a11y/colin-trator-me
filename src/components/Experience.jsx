import { experience } from '../data/profile.js'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Work history</h2>
        </div>

        <ol className="timeline">
          {experience.map((entry) => (
            <li key={entry.role} className="timeline-item">
              <div className="timeline-period">{entry.period}</div>
              <div className="card timeline-card">
                <h3>{entry.role}</h3>
                <p className="timeline-company">{entry.company}</p>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point.slice(0, 24)}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
