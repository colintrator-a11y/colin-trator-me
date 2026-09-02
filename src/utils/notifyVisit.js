/**
 * Pings the shared visit notifier once per browser tab.
 *
 * The service works out which portfolio was opened from the request's Origin
 * header, not from anything sent in the body, so this origin has to be on its
 * allow-list or every call comes back 403 origin_not_allowed. Nothing here
 * identifies the visitor: no IP is sent, and the server reads that from the
 * connection itself. No Telegram credentials live in this repo either — the
 * service holds them.
 */

// Hard-coded default, with the environment variable able to override it rather
// than define it. Read only from the variable, an unset variable would leave
// the value undefined, and the bundler would drop this module as dead code —
// which is a very quiet way to discover the configuration is missing.
const ENDPOINT =
  import.meta.env.VITE_NOTIFY_ENDPOINT || 'https://portfolio-notify.duckdns.org/api/notify'

const ONCE_KEY = 'portfolio:visit-notified'
const IDLE_TIMEOUT = 3000
const FALLBACK_DELAY = 1200

/**
 * Claims the one send for this tab. The flag is set before the request rather
 * than after it, so a retry cannot come from a second effect run.
 */
function claimSend() {
  try {
    if (sessionStorage.getItem(ONCE_KEY)) return false
    sessionStorage.setItem(ONCE_KEY, '1')
    return true
  } catch (e) {
    // Private mode throws on access. Fall through and send once per load,
    // which is the same thing for a visitor who never gets a second page.
    return true
  }
}

function send() {
  try {
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Survives a visitor who closes the tab or navigates away immediately.
      keepalive: true,
      body: JSON.stringify({
        path: window.location.pathname + window.location.search,
        referrer: document.referrer,
        language: navigator.language,
      }),
      // A blocked or failed ping is not the visitor's problem, and must not
      // reach the console.
    }).catch(() => {})
  } catch (e) {
    /* fetch missing, or a synchronous throw from an extension shim. */
  }
}

export default function notifyVisit() {
  if (typeof window === 'undefined') return
  if (import.meta.env.DEV) return
  if (!claimSend()) return

  // On idle, so this can never sit in front of the first paint.
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(send, { timeout: IDLE_TIMEOUT })
  } else {
    window.setTimeout(send, FALLBACK_DELAY)
  }
}
