import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import { services, testimonials } from '../data/services.js'

export default function Home() {
  const [current, setCurrent] = useState(0)
  const featured = services.slice(0, 3)
  const t = testimonials[current]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Zuri Hair &amp; Beauty Studio</h1>
            <p className="lead">
              Welcome. Braids, silk presses, nails, skincare and makeup under one roof in Lekki, Lagos,
              done by stylists who take their time.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">Book an appointment</Link>
              <Link to="/services" className="btn btn-outline">See services</Link>
            </div>
          </div>
          <img src="/images/hero.svg" alt="Illustration of the Zuri studio" className="hero-img" />
        </div>
      </section>

      <section className="section container">
        <h2>Popular services</h2>
        <div className="grid">
          {featured.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
        <p className="center"><Link to="/services" className="text-link">View all services</Link></p>
      </section>

      <section className="section alt">
        <div className="container slider">
          <h2>What clients say</h2>
          <blockquote>
            <p>“{t.text}”</p>
            <cite>{t.name}</cite>
          </blockquote>
          <div className="slider-controls">
            <button className="btn btn-outline-dark" onClick={prev} aria-label="Previous review">‹</button>
            <span>{current + 1} / {testimonials.length}</span>
            <button className="btn btn-outline-dark" onClick={next} aria-label="Next review">›</button>
          </div>
        </div>
      </section>
    </>
  )
}
