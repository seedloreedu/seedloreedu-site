import React, { useState } from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { trackEvent } from '../lib/analytics'
import { submitContactForm } from '../lib/contact'

const defaultInterest = 'Interested for Robotics Free Workshop - April 26'

export default function RoboticsFreeWorkshopRegisterPage() {
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
        subjectTag: 'robotics_free_workshop',
        name: form.name,
        email: form.email,
        phone: form.phone,
        interest: form.interest,
        description: `Workshop Enquiry: ${form.interest}`,
      })

      trackEvent('robotics_free_workshop_registration_submit', {
        offer: 'robotics_free_workshop',
        form_name: 'robotics_free_workshop_register',
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
      <div className="workshop-register-page">
        <Head>
          <title>Register | Robotics Free Workshop</title>
          <meta property="og:title" content="Register | Robotics Free Workshop" />
        </Head>

        <Navigation />

        <main className="workshop-register-main">
          <section className="workshop-register-card">
            <div className="workshop-register-copy">
              <p className="workshop-register-eyebrow">Registration Form</p>
              <h1>Register for the Robotics Free Workshop</h1>
              <p>
                Share your details and we will contact you with seat availability, workshop reminders,
                and participation details for the offline event.
              </p>
            </div>

            <form className="workshop-register-form" onSubmit={onSubmit}>
              <label className="workshop-register-field">
                <span>Name</span>
                <input
                  className={`workshop-register-input ${errors.name ? 'workshop-register-input--error' : ''}`}
                  value={form.name}
                  onChange={setField('name')}
                  placeholder="Student / Parent name"
                  autoComplete="name"
                  disabled={submitting}
                />
                {errors.name ? <small>{errors.name}</small> : null}
              </label>

              <label className="workshop-register-field">
                <span>Phone</span>
                <input
                  className={`workshop-register-input ${errors.phone ? 'workshop-register-input--error' : ''}`}
                  value={form.phone}
                  onChange={setField('phone')}
                  placeholder="Phone number"
                  autoComplete="tel"
                  disabled={submitting}
                  required
                />
                <div className="workshop-register-hint">
                  Example: 6290465739, +916290465739, or +91 62904 65739
                </div>
                {errors.phone ? <small>{errors.phone}</small> : null}
              </label>

              <label className="workshop-register-field">
                <span>Email</span>
                <input
                  className={`workshop-register-input ${errors.email ? 'workshop-register-input--error' : ''}`}
                  value={form.email}
                  onChange={setField('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={submitting}
                />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>

              <label className="workshop-register-field">
                <span>Interested For</span>
                <textarea
                  className="workshop-register-textarea"
                  value={form.interest}
                  onChange={setField('interest')}
                  rows={4}
                  disabled={submitting}
                />
              </label>
              {sent ? (
                <div className="workshop-register-success">
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
        .workshop-register-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(4, 82, 75, 0.12), transparent 28%),
            radial-gradient(circle at top left, rgba(214, 75, 58, 0.12), transparent 22%),
            linear-gradient(180deg, #fbf9f6 0%, #f4ede3 100%);
        }

        .workshop-register-main {
          width: min(840px, calc(100% - 24px));
          margin: 0 auto;
          padding: 126px 0 56px;
        }

        .workshop-register-card {
          padding: 28px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(4, 82, 75, 0.12);
          box-shadow: 0 24px 60px rgba(8, 16, 24, 0.08);
        }

        .workshop-register-copy h1 {
          margin: 0;
          font-family: var(--font-family-heading);
          font-size: clamp(2rem, 5vw, 3.2rem);
          line-height: 1;
          color: #052e2b;
        }

        .workshop-register-copy p {
          color: rgba(8, 16, 24, 0.74);
          line-height: 1.7;
        }

        .workshop-register-eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b24b33;
        }

        .workshop-register-form {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }

        .workshop-register-field {
          display: grid;
          gap: 8px;
        }

        .workshop-register-field span {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(8, 16, 24, 0.72);
        }

        .workshop-register-input,
        .workshop-register-textarea {
          width: 100%;
          border: 1px solid rgba(4, 82, 75, 0.14);
          border-radius: 16px;
          padding: 14px 16px;
          outline: none;
          background: rgba(251, 249, 246, 0.96);
          font: inherit;
          color: #081018;
        }

        .workshop-register-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .workshop-register-input--error {
          border-color: rgba(180, 35, 24, 0.75);
        }

        .workshop-register-field small {
          color: #b42318;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .workshop-register-hint {
          color: rgba(8, 16, 24, 0.58);
          font-size: 0.84rem;
          line-height: 1.4;
        }

        .workshop-register-success {
          border-radius: 16px;
          padding: 14px 16px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f5132;
          background: rgba(43, 183, 126, 0.12);
          border: 1px solid rgba(43, 183, 126, 0.24);
        }

        @media (max-width: 640px) {
          .workshop-register-main {
            padding-top: 142px;
          }

          .workshop-register-card {
            padding: 20px;
            border-radius: 24px;
          }

          .workshop-register-form :global(.btn) {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
