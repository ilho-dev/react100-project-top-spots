import { useState, useEffect } from 'react'
import axios from 'axios'
import TopSpots from './TopSpots'
import './App.css'

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 3958.8
  const toRad = (deg) => (deg * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

function App() {
  const [topspots, setTopspots] = useState([])
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    axios.get('https://ccc.helloworldbox.com/items/top_spots')
      .then((response) => {
        const data = response.data
        setTopspots(Array.isArray(data) ? data : data.data)
      })
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {}
      )
    }
  }, [])

  const spotsWithDistance = topspots.map((spot) => {
    if (!userLocation || !spot.location) return spot
    const dist = haversineDistance(
      userLocation.lat, userLocation.lng,
      spot.location[0], spot.location[1]
    )
    return { ...spot, distance: dist }
  })

  return (
    <div>
      <div className="hero">
        <div className="container">
          <span className="hero-icon">&#9728;&#65039;</span>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </div>
      </div>
      <div className="container spots-grid">
        <TopSpots spots={spotsWithDistance} />
      </div>
    </div>
  )
}

export default App
