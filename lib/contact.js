export async function submitContactForm(payload) {
  const endpoints = ['/.netlify/functions/contact', '/api/contact']
  let lastError = null

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to submit')
      }

      return data
    } catch (error) {
      lastError = error
    }
  }

  throw lastError || new Error('Failed to submit')
}
