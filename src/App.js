import { Navigation } from './components/navigation';
import { Routes } from './Routes';
import AuthProviderComponent from './providers/AuthProvider';

import './App.css';

function App() {
  return (
    <AuthProviderComponent>
      <div className="container">
        <section className="row shadow-sm p-3 bg-light mt-1">
          <Navigation />
        </section>
        <section className="row shadow-sm p-3 mt-4 bg-light">
          <Routes />
        </section>
      </div>
    </AuthProviderComponent>
  );
}

export default App;
