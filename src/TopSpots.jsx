import TopSpot from './TopSpot'

function TopSpots({ spots }) {
  return (
    <div data-testid="topspots" className="row">
      {spots.map((spot, index) => (
        <div className="col-12 col-md-6 col-lg-4 spot-col" key={spot.id}>
          <TopSpot
            name={spot.name}
            description={spot.description}
            location={spot.location}
            index={index + 1}
            distance={spot.distance}
          />
        </div>
      ))}
    </div>
  )
}

export default TopSpots
