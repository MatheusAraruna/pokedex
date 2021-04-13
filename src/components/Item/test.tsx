import { render, screen } from '@testing-library/react'

import Item from './index'

const obj = {
  id: 0,
  name: 'pokemon',
  img: 'https://picsum.photos/200',
}

describe('<Item />', () => {
  it('should render Item component', () => {
    render(<Item item={obj} />)

    const img = screen.getByRole('img') as HTMLImageElement
    const id = screen.getByText(/Nº/i) as HTMLSpanElement
    const name = screen.getByRole('heading') as HTMLHeadingElement

    expect(img).toHaveAttribute('src', 'https://picsum.photos/200')
    expect(img.alt).toBe('Image of a pokemon')
    expect(id.textContent).toBe('Nº 0')
    expect(name.textContent).toBe('pokemon')
  })
})
