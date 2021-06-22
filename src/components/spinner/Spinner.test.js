import { render } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner component tests', () => {
  test('component renders correctly with default Loading label', () => {
    const component = render(<Spinner />)
    expect(component.getByText('Loading...')).toBeInTheDocument()
  })

  test('component renders correctly with specified props label', () => {
    const messageProps = 'mock message'
    const component = render(<Spinner message={messageProps} />)
    expect(component.getByText(messageProps)).toBeInTheDocument()
  })
})
