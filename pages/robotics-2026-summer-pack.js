import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { trackEvent } from '../lib/analytics'

const courseItems = [
  {
    name: 'Introductory Robotics and Electronics',
    description:
      'An introductory module that helps students understand basic robotics concepts, simple electronics, components, and safe hands-on building before moving into project work.',
  },
  {
    name: 'Smart Doorbell',
    description:
      'A Smart Doorbell is an electronic doorbell that uses sensors or cameras to detect visitors and notify users through sound or mobile alerts. It enhances security by allowing you to see, communicate with, and monitor visitors remotely.',
  },
  {
    name: 'Smart Dustbin',
    description:
      'A Smart Dustbin is an automatic waste bin that opens its lid using sensors when someone approaches, ensuring touch-free operation. It helps maintain hygiene and can also monitor waste levels for smarter waste management.',
  },
  {
    name: 'Home Automation',
    description:
      'Home Automation is a system that allows you to control lights, appliances, and devices automatically or remotely using a smartphone or sensors. It improves convenience, energy efficiency, and security by making your home smarter and more responsive.',
  },
  {
    name: 'Rain Sensor',
    description:
      'A Rain Sensor is a device that detects the presence of rain or water droplets using conductive sensor pads. It is commonly used in smart systems to trigger actions like closing windows, activating wipers, or alerting users automatically.',
  },
  {
    name: 'Water Purity Check',
    description:
      'A Water Purity Check system uses sensors like TDS and turbidity to measure the quality and cleanliness of water. It helps ensure safe drinking water by detecting impurities and alerting when water is unsafe.',
  },
]

const kitImages = [
  { src: '/images/smart-doorbell.jpg', label: 'Smart Doorbell' },
  { src: '/images/smart_dustbin.jpg', label: 'Smart Dustbin' },
  { src: '/images/home-automation.jpg', label: 'Home Automation' },
  { src: '/images/weather-monitoring.jpg', label: 'Sensor-based project builds' },
]

const targetDate = new Date('2026-04-30T23:59:59+05:30')

function getTimeRemaining() {
  const difference = targetDate.getTime() - Date.now()

  if (difference <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0 }
  }

  return {
    expired: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
  }
}

export default function RoboticsSummerPackPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  useEffect(() => {
    trackEvent('summer_pack_visit', {
      page_title: 'Robotics 2026 Summer Pack',
      page_location: '/robotics-2026-summer-pack',
    })

    const interval = window.setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const countdownItems = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
    ],
    [timeLeft]
  )

  const handleRegisterClick = () => {
    trackEvent('summer_pack_register_click', {
      location: 'landing_page',
      offer: 'robotics_2026_summer_pack',
    })
  }

  return (
    <>
      <div className="summer-pack-page">
        <Head>
          <title>Robotics 2026 Summer Pack | Seedlore EDU</title>
          <meta
            name="description"
            content="Robotics 2026 Summer Pack for Class 7 to 10. Six courses, six months, online or offline with robotics kits included."
          />
          <meta property="og:title" content="Robotics 2026 Summer Pack | Seedlore EDU" />
          <meta
            property="og:description"
            content="Professional robotics summer program with six modules, live mentoring, hardware kits, and a limited April 2026 registration offer."
          />
        </Head>

        <Navigation />

        <main className="summer-pack-main">
          <section className="summer-hero">
            <div className="summer-hero__content">
              <div className="summer-hero__eyebrow">Limited Offer for April 2026 Registrations</div>
              <h1 className="summer-hero__title">Robotics 2026 Summer Pack for Class 6 to 10</h1>
              <p className="summer-hero__subtitle">
                A six-month guided robotics journey with 6 practical modules, live mentor support,
                online or offline learning modes, take-home kits included, and full access to Seedlore's
                own LMS system with learning support and course completion certificate access.
              </p>

              <div className="summer-price">
                <div className="summer-price__label">Offer Price</div>
                <div className="summer-price__row">
                  <span className="summer-price__old">Rs. 19,999</span>
                  <span className="summer-price__new">Rs. 13,999</span>
                </div>
                <p className="summer-price__note">
                  Valid for registrations completed on or before April 30, 2026.
                </p>
              </div>

              <div className="summer-lms-note">
                <div className="summer-lms-note__icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                      <path d="M8 20h8"></path>
                      <path d="M12 18v2"></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <strong>Seedlore LMS Access Included</strong>
                  <span>
                    Students get access to Seedlore's own LMS platform for class materials, guided learning,
                    progress support, and a course completion certificate.
                  </span>
                </div>
              </div>

              <div className="summer-countdown">
                <div className="summer-countdown__header">
                  <h2>Time Remaining</h2>
                  <span>{timeLeft.expired ? 'Offer closed' : 'Offer ends April 30, 2026, 11:59 PM IST'}</span>
                </div>
                <div className="summer-countdown__grid">
                  {countdownItems.map((item) => (
                    <div key={item.label} className="summer-countdown__card">
                      <strong>{String(item.value).padStart(2, '0')}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="summer-hero__actions">
                <Link href="/robotics-2026-summer-register">
                  <a className="btn btn-primary btn-lg summer-register-btn" onClick={handleRegisterClick}>
                    Register
                  </a>
                </Link>
                <Link href="/current-offers">
                  <a className="btn btn-outline btn-lg">Back to Current Offers</a>
                </Link>
                <a href="#summer-courses" className="btn btn-outline btn-lg">
                  View Course Details
                </a>
              </div>
            </div>

            <div className="summer-hero__visual" aria-label="Robotics project showcase">
              <div className="summer-hero__visual-card summer-hero__visual-card--large">
                <img src="/images/smart_dustbin.jpg" alt="Smart Dustbin robotics project" />
              </div>
              <div className="summer-hero__visual-grid">
                {kitImages.slice(0, 3).map((item) => (
                  <div key={item.src} className="summer-hero__visual-card">
                    <img src={item.src} alt={item.label} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="summer-info">
            <div className="summer-info__card">
              <div className="summer-info__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0"></path>
                </svg>
              </div>
              <span>Classes</span>
              <strong>Class 6 to 10</strong>
              <small>Designed for middle and secondary school learners</small>
            </div>
            <div className="summer-info__card">
              <div className="summer-info__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 3"></path>
                  </g>
                </svg>
              </div>
              <span>Program Duration</span>
              <strong>6 Months</strong>
              <small>Total 50 hrs, 25 sessions for 2 hrs, with weekend or guided weekly batches</small>
            </div>
            <div className="summer-info__card">
              <div className="summer-info__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                    <path d="M8 20h8"></path>
                    <path d="M12 18v2"></path>
                  </g>
                </svg>
              </div>
              <span>Delivery Modes</span>
              <strong>Online or Offline</strong>
              <small>Flexible learning with mentor support</small>
            </div>
            <div className="summer-info__card">
              <div className="summer-info__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"></path>
                    <path d="m3.3 7l8.7 5l8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </g>
                </svg>
              </div>
              <span>Kits Included</span>
              <strong>Robotics Kit Support</strong>
              <small>Components, builds, and guided setup</small>
            </div>
          </section>

          <section id="summer-courses" className="summer-section">
            <div className="summer-section__heading">
              <div>
                <p className="summer-section__eyebrow">What Students Learn</p>
                <h2 className="section-title">6 Structured Courses</h2>
              </div>
              <p className="section-content">
                Each module is designed to move students from core electronics into real robotic
                system building, control logic, AI-enabled interaction, and final project execution.
              </p>
            </div>

            <div className="summer-course-grid">
              {courseItems.map((item, index) => (
                <article key={item.name} className="summer-course-card">
                  <span className="summer-course-card__index">0{index + 1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="summer-section summer-section--split">
            <div className="summer-kit-panel">
              <p className="summer-section__eyebrow">Kits and Components</p>
              <h2 className="section-title">What Comes With the Pack</h2>
              <ul className="summer-kit-list">
                <li>Arduino-compatible controller board and USB programming setup</li>
                <li>Sensor bundle with IR, ultrasonic, motion, light, and buzzer modules</li>
                <li>Motor driver, wheels, chassis parts, jumper wires, and breadboard</li>
                <li>Project components for smart home, rover, and automation builds</li>
                <li>Instructor guidance for setup, assembly, troubleshooting, and demos</li>
              </ul>
            </div>

            <div className="summer-gallery">
              {kitImages.map((item) => (
                <figure key={item.src} className="summer-gallery__item">
                  <img src={item.src} alt={item.label} />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="summer-section">
            <div className="summer-section__heading">
              <div>
                <p className="summer-section__eyebrow">Program Format</p>
                <h2 className="section-title">Professional Delivery, Flexible Access</h2>
              </div>
            </div>

            <div className="summer-format-grid">
              <div className="summer-format-card">
                <h3>Online Mode</h3>
                <p>Live guided classes, mentor check-ins, project reviews, and structured home builds.</p>
              </div>
              <div className="summer-format-card">
                <h3>Offline Mode</h3>
                <p>Center-based practical sessions with direct faculty support and supervised project time.</p>
              </div>
              <div className="summer-format-card">
                <h3>Outcome Focus</h3>
                <p>Students complete real builds, improve presentation skills, and leave with portfolio-ready work.</p>
              </div>
            </div>
          </section>

          <section className="summer-cta-panel">
            <div>
              <p className="summer-section__eyebrow">Reserve the Offer</p>
              <h2>Secure the Summer Pack before April closes.</h2>
              <p>
                Seats and discounted registrations are limited. Submit your details and our team will
                contact you for the next step.
              </p>
            </div>

            <Link href="/robotics-2026-summer-register">
              <a className="btn btn-primary btn-lg summer-register-btn" onClick={handleRegisterClick}>
                Register
              </a>
            </Link>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .summer-pack-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(214, 75, 58, 0.1), transparent 30%),
            radial-gradient(circle at top right, rgba(4, 82, 75, 0.18), transparent 34%),
            linear-gradient(180deg, #fbf9f6 0%, #f6efe5 100%);
        }

        .summer-pack-main {
          width: min(1200px, calc(100% - 32px));
          margin: 0 auto;
          padding: 118px 0 56px;
        }

        .summer-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 28px;
          align-items: stretch;
        }

        .summer-hero__content,
        .summer-hero__visual {
          border-radius: 28px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(4, 82, 75, 0.12);
          box-shadow: 0 24px 64px rgba(8, 16, 24, 0.08);
        }

        .summer-hero__content {
          background:
            radial-gradient(circle at top right, rgba(255, 210, 140, 0.36), transparent 35%),
            linear-gradient(155deg, rgba(255, 251, 245, 0.98), rgba(246, 238, 227, 0.96));
        }

        .summer-hero__visual {
          background: linear-gradient(145deg, rgba(4, 82, 75, 0.96), rgba(7, 53, 60, 0.96));
          color: #fff;
          display: grid;
          gap: 16px;
        }

        .summer-hero__eyebrow,
        .summer-section__eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b24b33;
        }

        .summer-hero__title {
          margin: 0;
          font-family: var(--font-family-heading);
          font-size: clamp(2.4rem, 5vw, 4.4rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          color: #052e2b;
        }

        .summer-hero__subtitle {
          margin: 18px 0 0;
          max-width: 62ch;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(8, 16, 24, 0.78);
        }

        .summer-price {
          margin-top: 26px;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(4, 82, 75, 0.1);
        }

        .summer-price__label {
          font-size: 0.88rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #04524b;
        }

        .summer-price__row {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .summer-price__old {
          font-size: 1.2rem;
          color: rgba(8, 16, 24, 0.48);
          text-decoration: line-through;
        }

        .summer-price__new {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #d64b3a;
          line-height: 1;
        }

        .summer-price__note {
          margin: 10px 0 0;
          font-size: 0.95rem;
          color: rgba(8, 16, 24, 0.72);
        }

        .summer-countdown {
          margin-top: 24px;
          padding: 18px 20px;
          border-radius: 22px;
          color: #fff;
          background: linear-gradient(140deg, #07353c, #04524b);
        }

        .summer-lms-note {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 12px;
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 20px;
          border: 1px solid rgba(4, 82, 75, 0.12);
          background: rgba(232, 247, 241, 0.84);
          color: #05322d;
        }

        .summer-lms-note__icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #0c8d65, #04524b);
          color: #fff;
        }

        .summer-lms-note strong {
          display: block;
          font-size: 0.98rem;
        }

        .summer-lms-note span {
          display: block;
          margin-top: 4px;
          font-size: 0.92rem;
          line-height: 1.55;
          color: rgba(8, 16, 24, 0.74);
        }

        .summer-countdown__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .summer-countdown__header h2 {
          margin: 0;
          font-size: 1.1rem;
        }

        .summer-countdown__header span {
          font-size: 0.92rem;
          opacity: 0.82;
        }

        .summer-countdown__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 16px;
        }

        .summer-countdown__card {
          padding: 14px 10px;
          border-radius: 18px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .summer-countdown__card strong {
          display: block;
          font-size: clamp(1.45rem, 3vw, 2.2rem);
          line-height: 1;
        }

        .summer-countdown__card span {
          display: block;
          margin-top: 6px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.74;
        }

        .summer-hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .summer-register-btn {
          background: linear-gradient(135deg, #0c8d65, #04524b);
          border-color: #04524b;
          box-shadow: 0 16px 32px rgba(4, 82, 75, 0.22);
        }

        .summer-register-btn:hover {
          background: linear-gradient(135deg, #0f9a6e, #056259);
          border-color: #056259;
        }

        .summer-hero__visual-card {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.1);
        }

        .summer-hero__visual-card--large {
          min-height: 320px;
        }

        .summer-hero__visual-card img,
        .summer-gallery__item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .summer-hero__visual-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .summer-hero__visual-grid .summer-hero__visual-card {
          min-height: 146px;
        }

        .summer-hero__visual-card span {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          padding: 8px 10px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          text-align: center;
          background: rgba(7, 53, 60, 0.74);
          backdrop-filter: blur(6px);
        }

        .summer-info {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 22px;
          justify-content: start;
        }

        .summer-info__card,
        .summer-course-card,
        .summer-format-card,
        .summer-kit-panel,
        .summer-gallery__item,
        .summer-cta-panel {
          border-radius: 24px;
          border: 1px solid rgba(4, 82, 75, 0.12);
          box-shadow: 0 18px 44px rgba(8, 16, 24, 0.07);
        }

        .summer-info__card {
          max-width: 230px;
          padding: 18px 18px 16px;
          background: rgba(255, 255, 255, 0.78);
        }

        .summer-info__icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #04524b;
          background: rgba(4, 82, 75, 0.08);
          margin-bottom: 12px;
        }

        .summer-info__card span {
          display: block;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(8, 16, 24, 0.55);
        }

        .summer-info__card strong {
          display: block;
          margin-top: 8px;
          font-size: 1.02rem;
          color: #052e2b;
        }

        .summer-info__card small {
          display: block;
          margin-top: 6px;
          color: rgba(8, 16, 24, 0.62);
          font-size: 0.86rem;
          line-height: 1.45;
        }

        .summer-section {
          margin-top: 52px;
        }

        .summer-section__heading {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
          gap: 22px;
          align-items: end;
        }

        .summer-course-grid,
        .summer-format-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .summer-course-card,
        .summer-format-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.82);
        }

        .summer-course-card__index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.88rem;
          color: #04524b;
          background: rgba(4, 82, 75, 0.1);
        }

        .summer-course-card h3,
        .summer-format-card h3 {
          margin: 12px 0 8px;
          font-size: 1rem;
          color: #052e2b;
        }

        .summer-course-card p,
        .summer-format-card p,
        .summer-cta-panel p,
        .summer-kit-list {
          margin: 0;
          color: rgba(8, 16, 24, 0.74);
          line-height: 1.55;
        }

        .summer-course-card p {
          font-size: 0.9rem;
        }

        .summer-section--split {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 22px;
          align-items: start;
        }

        .summer-kit-panel {
          padding: 26px;
          background: linear-gradient(180deg, rgba(255, 250, 244, 0.95), rgba(249, 243, 235, 0.95));
        }

        .summer-kit-list {
          padding-left: 20px;
          margin-top: 18px;
        }

        .summer-kit-list li + li {
          margin-top: 12px;
        }

        .summer-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .summer-gallery__item {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.88);
        }

        .summer-gallery__item figcaption {
          padding: 14px 16px 16px;
          font-size: 0.94rem;
          font-weight: 700;
          color: #052e2b;
        }

        .summer-cta-panel {
          margin-top: 52px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          background:
            radial-gradient(circle at right top, rgba(255, 210, 140, 0.28), transparent 26%),
            linear-gradient(135deg, rgba(255, 252, 246, 0.98), rgba(238, 247, 243, 0.98));
        }

        .summer-cta-panel h2 {
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          color: #052e2b;
          font-family: var(--font-family-heading);
        }

        @media (max-width: 1100px) {
          .summer-hero {
            grid-template-columns: 1fr;
          }

          .summer-section__heading,
          .summer-section--split {
            grid-template-columns: 1fr;
          }

          .summer-course-grid,
          .summer-format-grid,
          .summer-info {
            grid-template-columns: 1fr 1fr;
          }

          .summer-cta-panel {
            flex-direction: column;
            align-items: stretch;
          }
        }

        @media (max-width: 700px) {
          .summer-pack-main {
            width: min(100% - 20px, 1200px);
            padding-top: 138px;
          }

          .summer-hero__content,
          .summer-hero__visual,
          .summer-kit-panel,
          .summer-course-card,
          .summer-format-card,
          .summer-cta-panel {
            padding: 20px;
          }

          .summer-countdown__grid,
          .summer-hero__visual-grid,
          .summer-info,
          .summer-course-grid,
          .summer-format-grid,
          .summer-gallery {
            grid-template-columns: 1fr 1fr;
          }

          .summer-info__card {
            max-width: none;
          }
        }

        @media (max-width: 520px) {
          .summer-countdown__grid,
          .summer-hero__visual-grid,
          .summer-info,
          .summer-course-grid,
          .summer-format-grid,
          .summer-gallery {
            grid-template-columns: 1fr;
          }

          .summer-hero__actions :global(.btn) {
            width: 100%;
          }

          .summer-price__row {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </>
  )
}
