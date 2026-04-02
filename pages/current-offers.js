import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { trackEvent } from '../lib/analytics'
import { currentOffers } from '../lib/current-offers'

export default function CurrentOffersPage() {
  useEffect(() => {
    trackEvent('current_offers_visit', {
      page_title: 'Current Offers',
      page_location: '/current-offers',
    })
  }, [])

  const handleCardClick = (offer) => {
    trackEvent('current_offer_card_click', {
      offer_id: offer.id,
      destination: offer.href,
    })
  }

  return (
    <>
      <div className="offers-page">
        <Head>
          <title>Current Offers | Seedlore EDU</title>
          <meta
            name="description"
            content="Explore current Seedlore EDU offers and ongoing robotics events, including the Robotics 2026 Summer Pack and the upcoming free robotics workshop."
          />
          <meta property="og:title" content="Current Offers | Seedlore EDU" />
          <meta
            property="og:description"
            content="See the latest Seedlore EDU robotics offers, limited events, and workshop opportunities in one place."
          />
        </Head>

        <Navigation />

        <main className="offers-main">
          <section className="offers-hero">
            <div className="offers-hero__copy">
              <p className="offers-eyebrow">Current Offer</p>
              <h1>Discover what students can join right now.</h1>
              <p className="offers-intro">
                Explore ongoing Seedlore EDU events and programs designed to help students learn,
                build, and participate in guided robotics experiences.
              </p>
            </div>
            <div className="offers-hero__panel">
              <span>Live Opportunities</span>
              <strong>{currentOffers.length}</strong>
              <small>Offers and events</small>
            </div>
          </section>

          <div className="offers-scroll-cue" aria-hidden="true">
            <span>Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6 9l6 6l6-6"
              ></path>
            </svg>
          </div>

          <section className="offers-grid" aria-label="Current offers">
            {currentOffers.map((offer) => (
              <Link key={offer.id} href={offer.href}>
                <a
                  className={`offer-card offer-card--${offer.accent}`}
                  onClick={() => handleCardClick(offer)}
                  aria-label={offer.title}
                >
                  <div className="offer-card__top">
                    <span className="offer-card__eyebrow">{offer.eyebrow}</span>
                    <span className="offer-card__arrow" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M7 17L17 7m0 0H9m8 0v8"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="offer-card__content">
                    <h2>{offer.title}</h2>
                    <p>{offer.summary}</p>
                  </div>

                  <div className="offer-card__meta">
                    <span>{offer.format}</span>
                    <span>{offer.audience}</span>
                  </div>

                  {offer.schedule || offer.location ? (
                    <div className="offer-card__event">
                      {offer.schedule ? <strong>{offer.schedule}</strong> : null}
                      {offer.location ? <span>{offer.location}</span> : null}
                    </div>
                  ) : null}

                  <ul className="offer-card__benefits">
                    {offer.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>

                  <div className="offer-card__cta">{offer.ctaLabel}</div>
                </a>
              </Link>
            ))}
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .offers-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(255, 191, 118, 0.16), transparent 28%),
            radial-gradient(circle at top right, rgba(5, 82, 75, 0.16), transparent 32%),
            linear-gradient(180deg, #f8f4ec 0%, #f2ebe2 100%);
        }

        .offers-main {
          width: min(1200px, calc(100% - 32px));
          margin: 0 auto;
          padding: 118px 0 56px;
        }

        .offers-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
          gap: 20px;
          align-items: stretch;
        }

        .offers-hero__copy,
        .offers-hero__panel {
          border-radius: 30px;
          padding: 28px;
          border: 1px solid rgba(5, 82, 75, 0.12);
          box-shadow: 0 24px 60px rgba(8, 16, 24, 0.08);
        }

        .offers-hero__copy {
          background:
            radial-gradient(circle at top right, rgba(255, 220, 172, 0.4), transparent 34%),
            linear-gradient(145deg, rgba(255, 252, 247, 0.96), rgba(248, 241, 232, 0.94));
        }

        .offers-hero__panel {
          display: grid;
          align-content: center;
          gap: 8px;
          background: linear-gradient(150deg, #0a5f57, #073b3f);
          color: #fff;
        }

        .offers-eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b24b33;
        }

        .offers-hero h1 {
          margin: 0;
          font-family: var(--font-family-heading);
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          line-height: 0.98;
          color: #052e2b;
        }

        .offers-intro {
          margin: 18px 0 0;
          max-width: 62ch;
          font-size: 1.02rem;
          line-height: 1.7;
          color: rgba(8, 16, 24, 0.74);
        }

        .offers-hero__panel span,
        .offers-hero__panel small {
          opacity: 0.8;
        }

        .offers-hero__panel strong {
          font-size: clamp(2.4rem, 4vw, 4rem);
          line-height: 1;
          font-weight: 900;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .offers-scroll-cue {
          display: grid;
          justify-items: center;
          gap: 6px;
          margin-top: 18px;
          color: rgba(4, 82, 75, 0.78);
        }

        .offers-scroll-cue span {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .offers-scroll-cue svg {
          animation: offersScrollBlink 1.2s ease-in-out infinite;
        }

        .offer-card {
          position: relative;
          display: grid;
          gap: 15px;
          min-height: 100%;
          padding: 20px;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          border: 1px solid rgba(5, 82, 75, 0.12);
          box-shadow: 0 18px 42px rgba(8, 16, 24, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .offer-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 58px rgba(8, 16, 24, 0.12);
        }

        .offer-card--teal {
          background:
            radial-gradient(circle at top right, rgba(178, 242, 223, 0.52), transparent 34%),
            linear-gradient(155deg, rgba(255, 255, 255, 0.96), rgba(232, 244, 240, 0.96));
        }

        .offer-card--coral {
          background:
            radial-gradient(circle at top right, rgba(255, 203, 168, 0.48), transparent 34%),
            linear-gradient(155deg, rgba(255, 255, 255, 0.96), rgba(250, 238, 232, 0.96));
        }

        .offer-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .offer-card__eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #04524b;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(4, 82, 75, 0.1);
        }

        .offer-card__arrow {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: linear-gradient(135deg, #0c8d65, #04524b);
          box-shadow: 0 14px 26px rgba(4, 82, 75, 0.24);
        }

        .offer-card__content h2 {
          margin: 0;
          font-family: var(--font-family-heading);
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          line-height: 1.05;
          color: #052e2b;
        }

        .offer-card__content p,
        .offer-card__benefits li,
        .offer-card__event span {
          margin: 0;
          color: rgba(8, 16, 24, 0.75);
          line-height: 1.65;
        }

        .offer-card__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .offer-card__meta span {
          display: inline-flex;
          align-items: center;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #07353c;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(4, 82, 75, 0.1);
        }

        .offer-card__event {
          display: grid;
          gap: 4px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(4, 82, 75, 0.08);
        }

        .offer-card__event strong {
          color: #052e2b;
          font-size: 1rem;
        }

        .offer-card__benefits {
          display: grid;
          gap: 10px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .offer-card__benefits li {
          position: relative;
          padding-left: 18px;
        }

        .offer-card__benefits li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0c8d65;
        }

        .offer-card__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 220px;
          min-height: 46px;
          padding: 11px 16px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #fff;
          background: linear-gradient(135deg, #0c8d65, #04524b);
          box-shadow: 0 16px 28px rgba(4, 82, 75, 0.18);
        }

        @keyframes offersScrollBlink {
          0%, 100% {
            opacity: 0.45;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(6px);
          }
        }

        @media (max-width: 980px) {
          .offers-hero,
          .offers-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .offers-main {
            width: min(100% - 20px, 1200px);
            padding-top: 138px;
          }

          .offers-hero__copy,
          .offers-hero__panel,
          .offer-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}
