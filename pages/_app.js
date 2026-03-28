import './style.css'
import { useEffect } from 'react'
import { GlobalProvider } from '../global-context'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GA_ID, pageview } from '../lib/analytics'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <GlobalProvider>

      {/* ✅ Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>

      <Component {...pageProps} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916290465739?text=Hi%20Seedlore%20Educare,%20I%20am%20interested%20in%20Robotics%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="/images/whatsapp.png"
          alt="Chat on WhatsApp"
        />
      </a>

    </GlobalProvider>
  )
}
