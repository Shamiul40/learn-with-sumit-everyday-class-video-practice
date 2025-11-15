import { useState } from 'react'

export default function ControlledForm() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [submissions, setSubmissions] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    setSubmissions(prev => [form, ...prev])
    setForm({ name: '', email: '' })
  }

  function handleClear() {
    setSubmissions([])
  }

  return (
    <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 6, maxWidth: 480 }}>
      <h3>Controlled Form</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            style={{ display: 'block', width: '100%', padding: 6 }}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={{ display: 'block', width: '100%', padding: 6 }}
          />
        </label>

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setForm({ name: '', email: '' })}>Reset</button>
          <button type="button" onClick={handleClear}>Clear Submissions</button>
        </div>
      </form>

      <div style={{ marginTop: 12 }}>
        <strong>Submissions ({submissions.length})</strong>
        <ul style={{ marginTop: 8 }}>
          {submissions.map((s, i) => (
            <li key={i}>{s.name} — {s.email}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
