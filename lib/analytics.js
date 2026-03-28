export const GA_ID = 'G-62BECB2LP4'

export function pageview(url) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

export function trackEvent(action, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', action, params)
}
