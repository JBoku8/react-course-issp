import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import CounterHooks from './pages/counter-hooks';
import CounterClass from './pages/counter-class';
import Books from './pages/books';
import Expanses from './pages/expanses';
import Theme from './components/theme/theme';
import Navigation from './components/navigation/navigation';
import BookProvider from './providers/BookProvider';
import ExpanseProvider from './providers/ExpanseProvider';

import './App.css';

// class = className
// for = htmlFor

function App() {
  return (
    <div className="container">
      <Navigation />
      <hr />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/counter-hooks">
          <CounterHooks initialValue={0} />
        </Route>

        <Route path="/counter-class">
          <CounterClass initialValue={0} />
        </Route>

        <Route path="/expanses">
          <Theme>
            <ExpanseProvider>
              <Expanses />
            </ExpanseProvider>
          </Theme>
        </Route>

        <Route path="/books">
          <BookProvider>
            <Books />
          </BookProvider>
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
