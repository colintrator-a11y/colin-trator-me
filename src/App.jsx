import { useState } from 'react'
import { LocaleProvider, useLocale } from './i18n/LocaleContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

function Site() {
  const t = useLocale()

  // Which broad area the work list is narrowed to, set by the About list and
  // read by the project rows. It lives here because the two are siblings.
  const [focus, setFocus] = useState(null)

  return (
    <>
      <a className="skip-link" href="#about">{t.a11y.skip}</a>
      <Navbar />
      <main>
        <Hero />
        <About onFocus={setFocus} />
        <Services />
        <Skills />
        <Projects focus={focus} onFocusChange={setFocus} />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <Site />
    </LocaleProvider>
  )
}
