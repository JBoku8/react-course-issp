import axios from 'axios'
import { getBooks, getProducts, login } from './'

jest.mock('axios')

const traceMock = jest.fn()
const groupMock = jest.fn()
const groupEndMock = jest.fn()
const errorMock = jest.fn()

global.console.trace = traceMock
global.console.error = errorMock
global.console.group = groupMock
global.console.groupEnd = groupEndMock

describe('Service tests - books.js', () => {
  it('should return success response, getBooks', async () => {
    const mockedResponse = {
      data: {
        data: [{ name: 'mocked-name' }],
      },
    }
    axios.get = jest.fn().mockResolvedValue(mockedResponse)

    const response = await getBooks()

    expect(response).toStrictEqual(mockedResponse.data.data)
  })

  it('should return error response, getBooks', async () => {
    const mockedResponse = []
    const error = new Error('Error')
    axios.get = jest.fn().mockRejectedValue(error)

    const response = await getBooks()

    expect(response).toStrictEqual(mockedResponse)
    expect(traceMock).toBeCalledWith(error)
  })
})

describe('Service tests - products.js', () => {
  it('should return success response, getProducts', async () => {
    const mockedResponse = {
      data: {
        data: [{ name: 'mocked-name' }],
      },
    }
    axios.get = jest.fn().mockResolvedValue(mockedResponse)

    const response = await getProducts()

    expect(response).toStrictEqual(mockedResponse.data.data)
  })

  it('should return error response, getProducts', async () => {
    const mockedResponse = []
    const error = new Error('Error')
    axios.get = jest.fn().mockRejectedValue(error)

    const response = await getProducts()

    expect(response).toStrictEqual(mockedResponse)
    expect(traceMock).toBeCalledWith(error)
  })
})

describe('Service tests - auth.js', () => {
  it('should return success response, login', async () => {
    const mockedResponse = [{ name: 'Mocked name' }]
    global.fetch = jest.fn().mockResolvedValue(() => ({
      json: jest.fn().mockResolvedValue(mockedResponse),
    }))
    const response = await login()

    expect(response).toStrictEqual(response)
  })

  it('should return error response, login', async () => {
    const mockError = new Error('Error')
    global.fetch = jest.fn().mockRejectedValue(mockError)
    await login()
    expect(groupMock).toHaveBeenCalledWith('LOGIN')
    expect(groupEndMock).toHaveBeenCalledTimes(1)
    expect(errorMock).toHaveBeenCalledWith('[login] error')
    expect(traceMock).toHaveBeenCalledWith(mockError)
  })
})
