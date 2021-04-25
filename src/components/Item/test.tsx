import { render, screen } from '@testing-library/react'

import Item from './index'

const obj = {
  id: 0,
  name: 'bulbasaur',
  img: 'https://picsum.photos/200',
}

describe('<Item />', () => {
  it('should render Item component', () => {
    render(<Item item={obj} active={true} />)

    const img = screen.getByRole('img') as HTMLImageElement
    const id = screen.getByText(/Nº/i) as HTMLSpanElement
    const name = screen.getByRole('heading') as HTMLHeadingElement

    expect(img).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
    )
    expect(img.alt).toBe(`Pokemon bulbasaur photo`)
    expect(id.textContent).toBe('Nº 0')
    expect(name.textContent).toBe('bulbasaur')
  })
})
