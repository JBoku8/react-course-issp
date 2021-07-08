import { render } from '@testing-library/react'
import { greeting } from '../../utils/testids'
import Greeting from './Greeting'

describe('Greeting Component', () => {
  test('successful render', () => {
    const Component = render(<Greeting text="Demo" />)
    expect(Component.getByTestId(greeting.text)).toBeInTheDocument()
    expect(Component.getByTestId(greeting.text)).toHaveTextContent('Demo')
  })
})

describe('Greeting Snapshots', () => {
  test('successful render snap 1', () => {
    const Component = render(<Greeting text="Demo" />)
    expect(Component).toMatchSnapshot()
  })
})
