import { useState, useEffect } from 'react'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

const categories = ['All', ...new Set(services.map((s) => s.category))]

export default function Services() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('zuri-favourites')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('zuri-favourites', JSON.stringify(favourites))
  }, [favourites])

  const toggleFavourite = (id) =>
    setFavourites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))

  const visible = services.filter(
    (s) =>
      (category === 'All' || s.category === category) &&
      s.name.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <div className="container section">
      <h1>Our services</h1>
      <p className="lead-dark">Prices are starting prices and may change with length, size or add-ons.</p>

      <div className="toolbar">
        <input
          type="search"
          placeholder="Search services"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search services"
        />
        <div className="filters">
          {categories.map((c) => (
            <button key={c} className={c === category ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="count">{favourites.length} saved</p>

      {visible.length === 0 ? (
        <p className="empty">No services match your search. Try a different word or choose All.</p>
      ) : (
        <div className="grid">
          {visible.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              isFavourite={favourites.includes(s.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  )
}
