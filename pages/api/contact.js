import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const body = req.body || {}
    const { contactType, name, email, phone, description, subjectTag, interest } = body
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return res.status(500).json({
        ok: false,
        error: 'RESEND_API_KEY is missing. Add it to your environment variables to enable email sending.',
      })
    }

    if (!phone || !String(phone).trim()) {
      return res.status(400).json({ ok: false, error: 'Phone is required' })
    }

    const resend = new Resend(apiKey)

    const from = process.env.CONTACT_FROM || 'Seedlore EDU <mail@seedloreedu.com>'
    const to = process.env.CONTACT_TO || 'mail@seedloreedu.com'
    const effectiveType = subjectTag || contactType || 'other'
    const heading =
      effectiveType === 'robotics_summer_2026'
        ? 'New Robotics 2026 Summer Pack Registration'
        : 'New ContactUs Submission'

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Seedlore ContactUs (${effectiveType}) - ${phone}`,
      html: `
        <h2>${heading}</h2>
        <p><b>Type:</b> ${effectiveType}</p>
        <p><b>Name:</b> ${name || ''}</p>
        <p><b>Email:</b> ${email || ''}</p>
        <p><b>Phone:</b> ${phone || ''}</p>
        <p><b>Interest:</b> ${interest || ''}</p>
        <p><b>Description:</b><br/>${(description || '').replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email || undefined,
    })

    if (error) {
      return res.status(500).json({ ok: false, error: error.message || 'Email failed' })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({
      ok: false,
      error: error?.message || 'Email failed',
    })
  }
}
