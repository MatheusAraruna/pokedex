import { render, screen, fireEvent } from '@testing-library/react'

import Select from './index'

const opt = [
  {
    display: 'Test 0',
    value: 'test 0',
  },
  {
    display: 'Test 1',
    value: 'test 1',
  },
  {
    display: 'Test 2',
    value: 'test 2',
  },
]

describe('<Select />', () => {
  it('should render select', () => {
    render(
      <Select name="teste" id="teste" defaultValue="teste" options={opt} />
    )

    const select = screen.getByRole('combobox') as HTMLSelectElement
    const { children, firstChild } = screen.getByRole(
      'combobox'
    ) as HTMLOptionElement

    fireEvent.change(select, { target: { value: 'test 2' } })

    expect(select.name).toBe('teste')
    expect(select.value).toBe('test 2')
    expect(children.length).toBe(4)
    expect(firstChild?.textContent).toBe('teste')
  })
})
