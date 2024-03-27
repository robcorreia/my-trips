import { render, screen } from '@testing-library/react'

import Map from '.'

describe('Map Component', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: { latitude: 0, longitude: 0 }
    }

    const place2 = {
      id: '2',
      name: 'Florianópolis',
      slug: 'florianopolis',
      location: { latitude: 129, longitude: -50 }
    }
    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/florianópolis/i)).toBeInTheDocument()
  })
})
