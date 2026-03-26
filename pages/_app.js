import './style.css'
import { GlobalProvider } from '../global-context'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>

      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-62BECB2LP4');
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
