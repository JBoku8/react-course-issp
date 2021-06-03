import AuthProviderComponent from './providers/AuthProvider'
import { Header, Footer, Content } from './components/layout'

import './App.css'

function App() {
  return (
    <AuthProviderComponent>
      <Header />
      <Content />
      <Footer />
    </AuthProviderComponent>
  )
}

export default App
