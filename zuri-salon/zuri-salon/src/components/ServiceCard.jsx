export default function ServiceCard({ service, isFavourite, onToggleFavourite }) {
  const { id, name, category, price, duration, image, description } = service

  return (
    <article className="service-card">
      <img src={image} alt={name} loading="lazy" />
      <div className="service-body">
        <span className="tag">{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="service-meta">
          <span>₦{price.toLocaleString()}</span>
          <span>{duration}</span>
        </div>
        {onToggleFavourite && (
          <button
            className={isFavourite ? 'btn btn-fav active' : 'btn btn-fav'}
            onClick={() => onToggleFavourite(id)}
            aria-pressed={isFavourite}
          >
            {isFavourite ? '♥ Saved' : '♡ Save'}
          </button>
        )}
      </div>
    </article>
  )
}
