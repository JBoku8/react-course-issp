import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '../../paths'
class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props
    if (errorInfo) {
      return (
        <div className="container">
          <h2 className="text-danger">Something went wrong. :(</h2>
          <h4 className="text-muted">
            <Link to={HOME_PATH}>Home</Link>
          </h4>
          <details
            style={{
              whiteSpace: 'pre-wrap',
            }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
