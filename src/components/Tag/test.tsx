import { render } from '@testing-library/react'
import Tag from './index'

describe('<Tag />', () => {
  it('should render tag component', () => {
    const { container } = render(<Tag color="#EE8130">teste</Tag>)
    const tag = container.firstChild
    expect(tag).toHaveStyle('background: #EE8130')
    expect(tag?.textContent).toBe('teste')
  })
})
