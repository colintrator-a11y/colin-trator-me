import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, STORAGE_KEY, detectLocale, locales } from './index.js'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [code, setCode] = useState(detectLocale)

  const locale = locales[code] ?? locales[DEFAULT_LOCALE]

  useEffect(() => {
    // Keeps the document language honest for screen readers, hyphenation and
    // anything that inspects <html lang> — including search engines.
    document.documentElement.lang = locale.htmlLang
    try {
      localStorage.setItem(STORAGE_KEY, locale.code)
    } catch (e) {
      /* Private mode blocks storage; the choice lasts for this visit only. */
    }
  }, [locale])

  const value = useMemo(
    () => ({ locale, code: locale.code, setLocale: setCode }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/** Returns the active locale's strings. */
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used inside a LocaleProvider')
  return context.locale
}

/** Returns [activeCode, setLocale] for the switcher. */
export function useLocaleControl() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocaleControl must be used inside a LocaleProvider')
  const { code, setLocale } = context
  return [code, useCallback((next) => setLocale(next), [setLocale])]
}
