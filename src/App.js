import { createGlobalStyle } from 'styled-components'

import AuthProviderComponent from './providers/AuthProvider'
import { Header, Footer, Content } from './components/layout'

import './App.css'

const GlobalStyle = createGlobalStyle`
  h2 {
    color: red !important;
  }
`

function App() {
  return (
    <AuthProviderComponent>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </AuthProviderComponent>
  )
}

export default App
