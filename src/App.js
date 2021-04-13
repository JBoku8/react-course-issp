import Greeting from "./Greeting";

import "./App.css";

// class = className
// for = htmlFor

function App() {
  return (
    <div className="container">
      <Greeting text="Introduction" />
      <Greeting text="ReactJS Rocks." />
      <h2>Hello React.JS</h2>
    </div>
  );
}

export default App;
