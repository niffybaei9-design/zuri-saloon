import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email, like name@example.com.'
  if (!values.subject.trim()) errors.subject = 'Enter a subject.'
  if (!values.message.trim()) errors.message = 'Write a message.'
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <div className="container section">
      <h1>Contact us</h1>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Visit or call</h3>
          <p>12 Admiralty Way, Lekki Phase 1, Lagos</p>
          <p>Phone: +234 800 000 0000 (sample)</p>
          <p>Email: hello@zurisalon.example</p>
          <p>Mon-Sat 9am - 7pm, Sunday 12pm - 5pm</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="form">
          {submitted && (
            <p className="success" role="status">
              Thanks. Your message has been sent and we will reply within one working day.
            </p>
          )}
          {[
            { name: 'name', label: 'Full name', type: 'text' },
            { name: 'email', label: 'Email address', type: 'email' },
            { name: 'subject', label: 'Subject', type: 'text' },
          ].map((f) => (
            <div className="field" key={f.name}>
              <label htmlFor={f.name}>{f.label}</label>
              <input id={f.name} name={f.name} type={f.type} value={form[f.name]} onChange={handleChange} />
              {errors[f.name] && <span className="error">{errors[f.name]}</span>}
            </div>
          ))}
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="btn btn-gold">Send message</button>
        </form>
      </div>
    </div>
  )
}
