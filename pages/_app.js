import './style.css'
import { GlobalProvider } from '../global-context'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
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
