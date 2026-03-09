import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TopSpots from './TopSpots'

const mockSpots = [
  { id: 1, name: 'Spot 1', description: 'Desc 1', location: [32.7, -117.1] },
  { id: 2, name: 'Spot 2', description: 'Desc 2', location: [32.8, -117.2] },
]

describe('TopSpots', () => {
  it('renders with data-testid="topspots"', () => {
    render(<TopSpots spots={mockSpots} />)
    expect(screen.getByTestId('topspots')).toBeInTheDocument()
  })

  it('renders correct number of TopSpot components', () => {
    render(<TopSpots spots={mockSpots} />)
    expect(screen.getAllByTestId('topspot')).toHaveLength(2)
  })
})
