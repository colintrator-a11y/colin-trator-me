import { profile } from '../data/profile.js'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="card contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Have a project in mind?</h2>
            <p>
              Tell me what you need and I will come back with questions, a plan and a
              realistic timeline — before any code is written.
            </p>
            <a className="btn btn-primary contact-cta" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </div>

          <dl className="contact-facts">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Working with</dt>
              <dd>Latin America · Brazil · United States</dd>
            </div>
            <div>
              <dt>Rate</dt>
              <dd>{profile.rate}</dd>
            </div>
            <div>
              <dt>Speaking</dt>
              <dd>English · Portuguese · Spanish</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
