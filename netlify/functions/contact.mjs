import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { contactType, name, email, phone, description } = body

    // Phone mandatory
    if (!phone || !String(phone).trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: 'Phone is required' }),
      }
    }

    const from = process.env.CONTACT_FROM || 'Seedlore EDU <mail@seedloreedu.com>'
    const to = process.env.CONTACT_TO || 'mail@seedloreedu.com'

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Seedlore ContactUs (${contactType || 'other'}) - ${phone}`,
      html: `
        <h2>New ContactUs Submission</h2>
        <p><b>Type:</b> ${contactType || ''}</p>
        <p><b>Name:</b> ${name || ''}</p>
        <p><b>Email:</b> ${email || ''}</p>
        <p><b>Phone:</b> ${phone || ''}</p>
        <p><b>Description:</b><br/>${(description || '').replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email || undefined,
    }) // Resend Node SDK pattern :contentReference[oaicite:2]{index=2}

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ ok: false, error: error.message || 'Email failed' }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('Resend error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: 'Email failed' }),
    }
  }
}
