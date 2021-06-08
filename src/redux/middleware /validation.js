export const validationMiddleware = () => (next) => (action) => {
  if (action.type !== 'INVALID_ACTION') {
    next(action)
  } else {
    console.error('invalid action type has been dispatched', action)
  }
}

export default validationMiddleware
