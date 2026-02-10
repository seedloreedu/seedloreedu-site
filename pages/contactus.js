import React, { useMemo, useState } from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ContactUs = () => {
  const options = useMemo(
    () => [
      { id: 'student_parent', label: 'Student/Parent' },
      { id: 'instructor', label: 'Instructor' },
      { id: 'franchise', label: 'Franchise Partner' },
      { id: 'school', label: 'School (Robotics / AI-ML)' },
      { id: 'other', label: 'Other' },
    ],
    []
  )

  const placeholderByType = useMemo(
    () => ({
      student_parent: 'Write your message...',
      instructor:
        'Briefly describe your qualifications, skillset, and any specific query you have.',
      franchise:
        'Mention your location, whether you have ~300 sq ft available, and if you have any existing student base.',
      school:
        'Mention the school name, board (CBSE/ICSE/ISC), and the course(s) you are interested in.',
      other: 'Write your message...',
    }),
    []
  )

  const [contactType, setContactType] = useState('student_parent')
  const [form, setForm] = useState({ name: '', email: '', phone: '', description: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const setField = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: '' }))
    setSent(false)
  }

  const validate = () => {
    const next = {}

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email'
    }

    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[0-9+\-\s()]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number'

    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return

    setSubmitting(true)
    setSent(false)

    try {
      const resp = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactType,
          name: form.name,
          email: form.email,
          phone: form.phone,
          description: form.description,
        }),
      })

      const data = await resp.json().catch(() => ({}))
      if (!resp.ok) throw new Error(data?.error || 'Failed to submit')

      setSent(true)
      setForm({ name: '', email: '', phone: '', description: '' })
      setContactType('student_parent')
    } catch (err) {
      const msg = err?.message || 'Something went wrong'
      setErrors((p) => ({ ...p, phone: msg }))
    } finally {
      setSubmitting(false)
    }
  }

  const descriptionPlaceholder =
    placeholderByType[contactType] || 'Write your message...'

  return (
    <>
      <div className="contactus-page">
        <Head>
          <title>Contact Us | Seedlore EDU</title>
          <meta property="og:title" content="Contact Us | Seedlore EDU" />
        </Head>

        <Navigation />

        <main className="contactus-main">
          <div className="contactus-card">
            <h1 className="contactus-title">Contact Us</h1>

            <form onSubmit={onSubmit}>
              <div className="contactus-radios" role="radiogroup" aria-label="Contact type">
                {options.map((o) => (
                  <label
                    key={o.id}
                    className={`contactus-radio ${contactType === o.id ? 'isActive' : ''}`}
                  >
                    <input
                      type="radio"
                      name="contactType"
                      value={o.id}
                      checked={contactType === o.id}
                      onChange={() => setContactType(o.id)}
                      disabled={submitting}
                    />
                    <span>{o.label}</span>
                  </label>
                ))}
              </div>

              <div className="contactus-divider" />

              <div className="contactus-grid">
                <div className="field">
                  <label className="label">Name</label>
                  <input
                    className="input"
                    value={form.name}
                    onChange={setField('name')}
                    placeholder="Your name"
                    autoComplete="name"
                    disabled={submitting}
                  />
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <input
                    className={`input ${errors.email ? 'errorInput' : ''}`}
                    value={form.email}
                    onChange={setField('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                    disabled={submitting}
                  />
                  {errors.email ? <div className="errorText">{errors.email}</div> : null}
                </div>

                <div className="field">
                  <label className="label">
                    Phone <span className="req">*</span>
                  </label>
                  <input
                    className={`input ${errors.phone ? 'errorInput' : ''}`}
                    value={form.phone}
                    onChange={setField('phone')}
                    placeholder="Phone number"
                    autoComplete="tel"
                    disabled={submitting}
                    required
                  />
                  {errors.phone ? <div className="errorText">{errors.phone}</div> : null}
                </div>

                <div className="field full">
                  <label className="label">Description</label>
                  <textarea
                    className="textarea"
                    value={form.description}
                    onChange={setField('description')}
                    placeholder={descriptionPlaceholder}
                    rows={4}
                    disabled={submitting}
                  />
                </div>
              </div>

              <div className="contactus-actions">
                <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {sent ? (
                <div className="success">Query Submitted and we will contact you soon</div>
              ) : null}
            </form>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .contactus-page {
          width: 100%;
          min-height: 100vh;
        }

        .contactus-main {
          width: 100%;
          padding: 18px 14px 36px;
          display: flex;
          justify-content: center;
        }

        .contactus-card {
          width: min(880px, 100%);
          border-radius: 16px;
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .contactus-title {
          margin: 0 0 10px;
          font-size: 20px;
          font-weight: 800;
        }

        .contactus-radios {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .contactus-radio {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          cursor: pointer;
          user-select: none;
          font-size: 13px;
          font-weight: 650;
        }

        .contactus-radio.isActive {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .contactus-radio input {
          margin: 0;
        }

        .contactus-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin: 12px 0;
        }

        .contactus-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        @media (min-width: 760px) {
          .contactus-grid {
            grid-template-columns: 1fr 1fr;
          }
          .full {
            grid-column: 1 / -1;
          }
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .label {
          font-size: 12px;
          font-weight: 800;
          opacity: 0.9;
        }

        .req {
          color: rgba(255, 92, 92, 0.95);
        }

        .input,
        .textarea {
          width: 100%;
          border-radius: 12px;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.12);
          color: inherit;
          outline: none;
          font-size: 13px;
        }

        .input:disabled,
        .textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .textarea {
          resize: vertical;
          min-height: 96px;
        }

        .errorInput {
          border-color: rgba(255, 92, 92, 0.75);
        }

        .errorText {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 92, 92, 0.95);
        }

        .contactus-actions {
          margin-top: 12px;
          display: flex;
          justify-content: flex-end;
        }

        .success {
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(80, 255, 160, 0.28);
          background: rgba(80, 255, 160, 0.08);
          font-size: 13px;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default ContactUs
