import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import App from './App'

vi.mock('axios')

const mockSpots = [
  {
    id: 1,
    name: 'Test Spot',
    description: 'A test description',
    location: [32.7157, -117.1611],
  },
]

describe('App', () => {
  it('renders heading and description', async () => {
    axios.get.mockResolvedValue({ data: { data: mockSpots } })
    render(<App />)
    expect(screen.getByText('San Diego Top Spots')).toBeInTheDocument()
    expect(
      screen.getByText('A list of the top 30 places to see in San Diego, California.')
    ).toBeInTheDocument()
  })

  it('fetches and displays spots', async () => {
    axios.get.mockResolvedValue({ data: { data: mockSpots } })
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('Test Spot')).toBeInTheDocument()
    })
  })
})
