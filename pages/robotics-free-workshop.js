import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { trackEvent } from '../lib/analytics'

const workshopHighlights = [
  'Introduction to robotics and how systems interact in the real world',
  'Key concepts explained through guided examples and instructor discussion',
  'Hands-on exploration with a live IoT experiment in an offline setting',
]

export default function RoboticsFreeWorkshopPage() {
  useEffect(() => {
    trackEvent('robotics_free_workshop_visit', {
      page_title: 'Robotics Free Workshop',
      page_location: '/robotics-free-workshop',
    })
  }, [])

  const handleReserveClick = () => {
    trackEvent('robotics_free_workshop_reserve_click', {
      destination: '/robotics-free-workshop-register',
    })
  }

  return (
    <>
      <div className="workshop-page">
        <Head>
          <title>Robotics Free Workshop | Seedlore EDU</title>
          <meta
            name="description"
            content="Join Seedlore EDU's offline robotics free workshop on 31st May from 11:00 AM to 2:00 PM at Hindmotor, Hooghly. Limited seats available."
          />
          <meta property="og:title" content="Robotics Free Workshop | Seedlore EDU" />
          <meta
            property="og:description"
            content="An offline robotics workshop covering introduction to robotics, key concepts, and hands-on IoT exploration."
          />
        </Head>

        <Navigation />

        <main className="workshop-main">
          <section className="workshop-hero">
            <div className="workshop-hero__copy">
              <p className="workshop-eyebrow">Offline Event</p>
              <h1>Robotics Free Workshop</h1>
              <p className="workshop-lead">
                A focused offline session designed to introduce students to robotics through concept-led
                teaching, practical explanation, and a guided hands-on IoT experience.
              </p>

              <div className="workshop-details">
                <div className="workshop-detail-card">
                  <span>Date and Time</span>
                  <strong>31st May, 11:00 AM to 2:00 PM</strong>
                </div>
                <div className="workshop-detail-card">
                  <span>Location</span>
                  <strong>Hindmotor, Hooghly</strong>
                </div>
                <div className="workshop-detail-card">
                  <span>Availability</span>
                  <strong>Limited Seats</strong>
                </div>
              </div>

              <div className="workshop-actions">
                <Link href="/robotics-free-workshop-register">
                  <a className="btn btn-primary btn-lg workshop-btn" onClick={handleReserveClick}>
                    Reserve Your Seat
                  </a>
                </Link>
                <Link href="/current-offers">
                  <a className="btn btn-outline btn-lg">Back to Current Offers</a>
                </Link>
              </div>
            </div>

            <div className="workshop-hero__panel">
              <p className="workshop-panel__eyebrow">What We Will Cover</p>
              <ul className="workshop-topics">
                <li>Introduction to Robotics</li>
                <li>Key Concepts in Robotics</li>
                <li>Hands-On IoT Experiment Exploration</li>
              </ul>
            </div>
          </section>

          <section className="workshop-section">
            <div className="workshop-section__heading">
              <div>
                <p className="workshop-eyebrow">Workshop Experience</p>
                <h2>Built to be practical, accessible, and exciting.</h2>
              </div>
              <p>
                This session is meant to help students experience robotics in a direct and memorable way,
                with guided teaching, physical interaction, and live demonstration instead of only theory.
              </p>
            </div>

            <div className="workshop-highlights">
              {workshopHighlights.map((highlight, index) => (
                <article key={highlight} className="workshop-highlight-card">
                  <span className="workshop-highlight-card__index">0{index + 1}</span>
                  <p>{highlight}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .workshop-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(255, 178, 120, 0.14), transparent 28%),
            radial-gradient(circle at top right, rgba(4, 82, 75, 0.14), transparent 30%),
            linear-gradient(180deg, #fbf7f1 0%, #f3ece2 100%);
        }

        .workshop-main {
          width: min(1160px, calc(100% - 32px));
          margin: 0 auto;
          padding: 118px 0 56px;
        }

        .workshop-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
          gap: 24px;
        }

        .workshop-hero__copy,
        .workshop-hero__panel,
        .workshop-highlight-card {
          border-radius: 28px;
          border: 1px solid rgba(4, 82, 75, 0.12);
          box-shadow: 0 22px 54px rgba(8, 16, 24, 0.08);
        }

        .workshop-hero__copy {
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(255, 219, 184, 0.4), transparent 34%),
            linear-gradient(145deg, rgba(255, 252, 247, 0.96), rgba(248, 241, 232, 0.95));
        }

        .workshop-hero__panel {
          padding: 28px;
          background: linear-gradient(150deg, #0b5f58, #093b40);
          color: #fff;
        }

        .workshop-eyebrow,
        .workshop-panel__eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .workshop-eyebrow {
          color: #b24b33;
        }

        .workshop-panel__eyebrow {
          color: rgba(255, 255, 255, 0.72);
        }

        .workshop-hero h1,
        .workshop-section h2 {
          margin: 0;
          font-family: var(--font-family-heading);
          color: #052e2b;
        }

        .workshop-hero h1 {
          font-size: clamp(2.3rem, 5vw, 4.2rem);
          line-height: 0.98;
        }

        .workshop-lead,
        .workshop-section__heading p,
        .workshop-highlight-card p,
        .workshop-topics li {
          margin: 0;
          line-height: 1.7;
        }

        .workshop-lead,
        .workshop-section__heading p,
        .workshop-highlight-card p {
          color: rgba(8, 16, 24, 0.74);
        }

        .workshop-details {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .workshop-detail-card {
          padding: 16px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(4, 82, 75, 0.1);
        }

        .workshop-detail-card span {
          display: block;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(8, 16, 24, 0.56);
        }

        .workshop-detail-card strong {
          display: block;
          margin-top: 8px;
          color: #052e2b;
          line-height: 1.45;
        }

        .workshop-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .workshop-btn {
          background: linear-gradient(135deg, #0c8d65, #04524b);
          border-color: #04524b;
          box-shadow: 0 16px 32px rgba(4, 82, 75, 0.2);
        }

        .workshop-topics {
          display: grid;
          gap: 14px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .workshop-topics li {
          position: relative;
          padding: 16px 16px 16px 44px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.92);
        }

        .workshop-topics li::before {
          content: '';
          position: absolute;
          left: 18px;
          top: 22px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ffd27d;
          box-shadow: 0 0 0 5px rgba(255, 210, 125, 0.18);
        }

        .workshop-section {
          margin-top: 46px;
        }

        .workshop-section__heading {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
          gap: 22px;
          align-items: end;
        }

        .workshop-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .workshop-highlight-card {
          padding: 22px;
          background: rgba(255, 255, 255, 0.82);
        }

        .workshop-highlight-card__index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 800;
          color: #04524b;
          background: rgba(4, 82, 75, 0.08);
        }

        @media (max-width: 960px) {
          .workshop-hero,
          .workshop-section__heading,
          .workshop-highlights,
          .workshop-details {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .workshop-main {
            width: min(100% - 20px, 1160px);
            padding-top: 138px;
          }

          .workshop-hero__copy,
          .workshop-hero__panel,
          .workshop-highlight-card {
            padding: 20px;
          }

          .workshop-actions :global(.btn) {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
