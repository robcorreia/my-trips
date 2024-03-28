import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('LinkWrapper Component', () => {
  it('should render a link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(screen.getByRole('link', { name: /anything/i })).toBeInTheDocument()
    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
