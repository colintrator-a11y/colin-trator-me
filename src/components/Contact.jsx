import { useState } from 'react'
import { profile } from '../data/profile.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import './Contact.css'

export default function Contact() {
  const t = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // This is a static build with no server to post to, so the form hands the
  // finished message to the visitor's own mail client rather than pretending to
  // send it. The address is printed beside the form as well, because a browser
  // with no mail handler registered will do nothing at all with a mailto:.
  const submit = (event) => {
    event.preventDefault()
    const subject = `${t.contact.form.subject} — ${name}`
    const body = `${message}\n\n— ${name}\n${email}`
    window.location.href = `mailto:${profile.contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="card contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.heading}</h2>
            <p>{t.contact.body}</p>
            <p className="contact-direct">
              {t.contact.form.direct}{' '}
              <a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a>
            </p>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <label className="field">
              <span>{t.contact.form.name}</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
              />
            </label>

            <label className="field">
              <span>{t.contact.form.email}</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </label>

            <label className="field">
              <span>{t.contact.form.message}</span>
              <textarea
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary contact-send">
              {t.contact.form.send}
            </button>
            <p className="contact-note">{t.contact.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
