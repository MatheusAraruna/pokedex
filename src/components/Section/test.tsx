import { render, screen } from '@testing-library/react'
import Section from './index'

describe('<Section />', () => {
  it('should render section component', () => {
    render(
      <Section title="teste">
        <div>childrens</div>
      </Section>
    )

    expect(screen.getByRole('heading').textContent).toBe('teste')
    expect(screen.getByText(/childrens/i)).toBeInTheDocument()
  })
})
