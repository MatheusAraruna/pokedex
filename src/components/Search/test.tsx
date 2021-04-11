import { render, screen, fireEvent } from '@testing-library/react'
import Search from 'components/Search'

describe('<Search />', () => {
  it('should render search component', () => {
    render(<Search />)

    const input = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'some text' } })

    expect(input.value).toBe('some text')
    expect(input.placeholder).toBe('Name or ID')
    expect(input.alt).toBe(
      'Text field to search for the name or id of the pokemon'
    )
    expect(screen.getByRole('button') as HTMLButtonElement).toBeInTheDocument()
  })
})
