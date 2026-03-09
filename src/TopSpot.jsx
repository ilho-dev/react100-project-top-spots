import { useState } from 'react'

function TopSpot({ name, description, location, index, distance }) {
  const [imgError, setImgError] = useState(false)
  const imgUrl = `https://source.unsplash.com/400x250/?san+diego,${encodeURIComponent(name)}`

  return (
    <div data-testid="topspot" className="card spot-card">
      <div className="spot-card-img-wrapper">
        {index && <span className="spot-badge">{index}</span>}
        {!imgError ? (
          <img
            src={imgUrl}
            alt={name}
            className="spot-card-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="spot-card-img-fallback">&#127965;</div>
        )}
        <div className="spot-overlay">
          <p>Click to explore this spot</p>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        {distance != null && (
          <div className="distance-badge">
            &#128205; {distance.toFixed(1)} miles away
          </div>
        )}
        <a
          href={`https://www.google.com/maps?q=${location[0]},${location[1]}`}
          target="_blank"
          className="btn-map"
        >
          &#128506; View on Map
        </a>
      </div>
    </div>
  )
}

export default TopSpot
