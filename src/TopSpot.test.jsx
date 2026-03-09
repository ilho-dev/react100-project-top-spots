import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TopSpot from './TopSpot'

describe('TopSpot', () => {
  const props = {
    name: 'Test Place',
    description: 'A great place to visit',
    location: [32.7157, -117.1611],
  }

  it('renders with data-testid="topspot"', () => {
    render(<TopSpot {...props} />)
    expect(screen.getByTestId('topspot')).toBeInTheDocument()
  })

  it('displays name and description', () => {
    render(<TopSpot {...props} />)
    expect(screen.getByText('Test Place')).toBeInTheDocument()
    expect(screen.getByText('A great place to visit')).toBeInTheDocument()
  })

  it('renders Google Maps link with correct coordinates', () => {
    render(<TopSpot {...props} />)
    const link = screen.getByRole('link', { name: /view on map/i })
    expect(link).toHaveAttribute(
      'href',
      'https://www.google.com/maps?q=32.7157,-117.1611'
    )
    expect(link).toHaveAttribute('target', '_blank')
  })
})
