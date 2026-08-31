import { localeList } from '../i18n/index.js'
import { useLocale, useLocaleControl } from '../i18n/LocaleContext.jsx'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const t = useLocale()
  const [active, setLocale] = useLocaleControl()

  return (
    <div className="lang-switch" role="group" aria-label={t.a11y.language}>
      {localeList.map((locale) => (
        <button
          key={locale.code}
          type="button"
          className={`lang-option${locale.code === active ? ' is-active' : ''}`}
          onClick={() => setLocale(locale.code)}
          aria-pressed={locale.code === active}
          lang={locale.htmlLang}
          title={locale.name}
        >
          {locale.short}
        </button>
      ))}
    </div>
  )
}
