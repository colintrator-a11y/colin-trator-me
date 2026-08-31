import { services } from '../data/profile.js'
import './Services.css'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2>What I build</h2>
          <p className="note">Requirements → build → deployment, in clear stages</p>
        </div>

        <ul className="services-grid">
          {services.map((service, index) => (
            <li key={service.title} className="card service-card">
              <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
