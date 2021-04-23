// import Home from "./pages/home";
// import Users from "./pages/users";
// import CounterHooks from "./pages/counter-hooks";

import CounterClass from "./pages/counter-class";
import "./App.css";

// class = className
// for = htmlFor

function App() {
  return (
    <div className="container">
      {/* <Home /> */}
      {/* <Users /> */}
      {/* <CounterHooks initialValue={0} /> */}
      <CounterClass initialValue={0} />
    </div>
  );
}

export default App;
