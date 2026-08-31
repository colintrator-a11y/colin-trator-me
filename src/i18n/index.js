import en from './en.js'
import pt from './pt.js'
import es from './es.js'
import pl from './pl.js'

export const DEFAULT_LOCALE = 'en'

// Order here is the order of the buttons in the switcher.
export const localeList = [en, pt, es, pl]

export const locales = Object.fromEntries(localeList.map((locale) => [locale.code, locale]))

export const STORAGE_KEY = 'locale'

/**
 * A stored choice always wins. Otherwise the browser's preferred languages are
 * tried in order, matching on the primary subtag so that pt-BR, pt-PT and es-AR
 * all resolve. English is the fallback because every string exists there.
 */
export function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && locales[saved]) return saved
  } catch (e) {
    /* Private mode blocks storage; fall through to the browser preference. */
  }

  const preferred = typeof navigator === 'undefined' ? [] : navigator.languages ?? [navigator.language]
  for (const tag of preferred) {
    const primary = String(tag).toLowerCase().split('-')[0]
    if (locales[primary]) return primary
  }

  return DEFAULT_LOCALE
}
