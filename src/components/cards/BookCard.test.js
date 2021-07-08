import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { bookCardIds } from '../../utils/testids'
import { BookCard } from './BookCard'

describe('BookCard component testing', () => {
  it('it should render book item correctly', () => {
    const mockBookItem = {
      title: 'mock-title',
      image: 'mock-url',
      description: 'mock-description',
    }
    const component = render(
      <BrowserRouter>
        <BookCard item={mockBookItem} />
      </BrowserRouter>
    )
    const titleElement = component.getByTestId(bookCardIds.title)
    const descriptionElement = component.getByTestId(bookCardIds.description)
    const imageElement = component.getByTestId(bookCardIds.image)

    expect(titleElement).toHaveTextContent(mockBookItem.title)
    expect(descriptionElement).toHaveTextContent(mockBookItem.description)
    expect(imageElement).toHaveAttribute('src', mockBookItem.image)
    expect(imageElement).toHaveAttribute('alt', mockBookItem.title)
  })
})
