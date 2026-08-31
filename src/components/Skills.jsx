import { skillGroups } from '../data/profile.js'
import './Skills.css'

const total = skillGroups.reduce((sum, group) => sum + group.items.length, 0)

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>The stack I work in</h2>
          <p className="note">{total} technologies across {skillGroups.length} areas</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.group} className="skill-group">
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
