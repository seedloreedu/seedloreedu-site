import React, { useState } from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { trackEvent } from '../lib/analytics'
import { submitContactForm } from '../lib/contact'

const defaultInterest = 'Interested for Robotics - 2026 Summer Course'

export default function RoboticsSummerRegisterPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const setField = (key) => (event) => {
    const value = event.target.value
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
    setSent(false)
  }

  const validate = () => {
    const next = {}

    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[0-9+\-\s()]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number'

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email'
    }

    return next
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return

    setSubmitting(true)
    setSent(false)

    try {
      await submitContactForm({
        contactType: 'student_parent',
        subjectTag: 'robotics_summer_2026',
        name: form.name,
        email: form.email,
        phone: form.phone,
        interest: form.interest,
        description: `Course Enquiry: ${form.interest}`,
      })

      trackEvent('summer_pack_registration_submit', {
        offer: 'robotics_2026_summer_pack',
        form_name: 'robotics_2026_summer_register',
      })

      setSent(true)
      setForm({
        name: '',
        phone: '',
        email: '',
        interest: defaultInterest,
      })
    } catch (error) {
      const msg = error?.message || 'Something went wrong'
      setErrors((current) => ({ ...current, phone: msg }))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="summer-register-page">
        <Head>
          <title>Register | Robotics 2026 Summer Pack</title>
          <meta property="og:title" content="Register | Robotics 2026 Summer Pack" />
        </Head>

        <Navigation />

        <main className="summer-register-main">
          <section className="summer-register-card">
            <div className="summer-register-copy">
              <p className="summer-register-eyebrow">Registration Form</p>
              <h1>Register for Robotics 2026 Summer Course</h1>
              <p>
                Share your details and we will contact you with batch availability, mode selection,
                and onboarding steps for the Summer Pack offer.
              </p>
            </div>

            <form className="summer-register-form" onSubmit={onSubmit}>
              <label className="summer-register-field">
                <span>Name</span>
                <input
                  className={`summer-register-input ${errors.name ? 'summer-register-input--error' : ''}`}
                  value={form.name}
                  onChange={setField('name')}
                  placeholder="Student / Parent name"
                  autoComplete="name"
                  disabled={submitting}
                />
                {errors.name ? <small>{errors.name}</small> : null}
              </label>

              <label className="summer-register-field">
                <span>Phone</span>
                <input
                  className={`summer-register-input ${errors.phone ? 'summer-register-input--error' : ''}`}
                  value={form.phone}
                  onChange={setField('phone')}
                  placeholder="Phone number"
                  autoComplete="tel"
                  disabled={submitting}
                  required
                />
                <div className="summer-register-hint">
                  Example: 6290465739, +916290465739, or +91 62904 65739
                </div>
                {errors.phone ? <small>{errors.phone}</small> : null}
              </label>

              <label className="summer-register-field">
                <span>Email</span>
                <input
                  className={`summer-register-input ${errors.email ? 'summer-register-input--error' : ''}`}
                  value={form.email}
                  onChange={setField('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={submitting}
                />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>

              <label className="summer-register-field">
                <span>Interested For</span>
                <textarea
                  className="summer-register-textarea"
                  value={form.interest}
                  onChange={setField('interest')}
                  rows={4}
                  disabled={submitting}
                />
              </label>
              {sent ? (
                <div className="summer-register-success">
                  Registration submitted. Seedlore EDU will contact you soon.
                </div>
              ) : null}

              <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .summer-register-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(4, 82, 75, 0.12), transparent 28%),
            radial-gradient(circle at top left, rgba(214, 75, 58, 0.12), transparent 22%),
            linear-gradient(180deg, #fbf9f6 0%, #f4ede3 100%);
        }

        .summer-register-main {
          width: min(840px, calc(100% - 24px));
          margin: 0 auto;
          padding: 126px 0 56px;
        }

        .summer-register-card {
          padding: 28px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(4, 82, 75, 0.12);
          box-shadow: 0 24px 60px rgba(8, 16, 24, 0.08);
        }

        .summer-register-copy h1 {
          margin: 0;
          font-family: var(--font-family-heading);
          font-size: clamp(2rem, 5vw, 3.2rem);
          line-height: 1;
          color: #052e2b;
        }

        .summer-register-copy p {
          color: rgba(8, 16, 24, 0.74);
          line-height: 1.7;
        }

        .summer-register-eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b24b33;
        }

        .summer-register-form {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }

        .summer-register-field {
          display: grid;
          gap: 8px;
        }

        .summer-register-field span {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(8, 16, 24, 0.72);
        }

        .summer-register-input,
        .summer-register-textarea {
          width: 100%;
          border: 1px solid rgba(4, 82, 75, 0.14);
          border-radius: 16px;
          padding: 14px 16px;
          outline: none;
          background: rgba(251, 249, 246, 0.96);
          font: inherit;
          color: #081018;
        }

        .summer-register-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .summer-register-input--error {
          border-color: rgba(180, 35, 24, 0.75);
        }

        .summer-register-field small {
          color: #b42318;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .summer-register-hint {
          color: rgba(8, 16, 24, 0.58);
          font-size: 0.84rem;
          line-height: 1.4;
        }

        .summer-register-success {
          border-radius: 16px;
          padding: 14px 16px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f5132;
          background: rgba(43, 183, 126, 0.12);
          border: 1px solid rgba(43, 183, 126, 0.24);
        }

        @media (max-width: 640px) {
          .summer-register-main {
            padding-top: 142px;
          }

          .summer-register-card {
            padding: 20px;
            border-radius: 24px;
          }

          .summer-register-form :global(.btn) {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
