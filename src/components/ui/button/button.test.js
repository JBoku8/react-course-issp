import { render } from '@testing-library/react'
import { Button } from './button'

describe('Button component tests', () => {
  it('should render button element with defaults', () => {
    const component = render(<Button />)
    expect(component.getByRole('button')).toBeInTheDocument()
  })

  it('should render button element with disabled state', () => {
    const component = render(<Button disabled />)
    expect(component.getByRole('button')).toBeDisabled()
  })

  it('should render button element with className and text', () => {
    const mockProps = {
      className: 'mock-class',
      text: 'mock-text',
    }
    const component = render(<Button {...mockProps} />)
    expect(component.getByRole('button')).toHaveClass(mockProps.className)
    expect(component.getByRole('button')).toHaveTextContent(mockProps.text)
  })

  it('should render button element with text and onClick handler', () => {
    const handler = jest.fn()
    const mockProps = {
      text: 'mock-text',
      onClick: handler,
    }
    const component = render(<Button {...mockProps} />)
    const buttonElement = component.getByRole('button')
    expect(buttonElement).toHaveTextContent(mockProps.text)
    buttonElement.click()
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
