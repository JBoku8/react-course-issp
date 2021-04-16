import { useState } from "react";
import Greeting from "../../components/greeting";
import { Button } from "../../components/ui";

// newValue !== oldValue
// newObject !== oldObject

function Home(props) {
  const [showGreeting, setShowGreeting] = useState(false);

  const onGreetingClick = () => {
    setShowGreeting(!showGreeting);
  };

  const renderGreeting = () => {
    if (!showGreeting) return null;

    return (
      <>
        <Greeting text="Introduction" />
        <Greeting text="ReactJS Rocks." />
      </>
    );
  };

  return (
    <div className="row">
      <h2 className="text-muted">Home Page</h2>
      <div className="col-4 align-items-center d-flex">
        <Button
          className="btn btn-dark"
          onClick={onGreetingClick}
          text={`${showGreeting ? "Hide" : "Show"} Greeting`}
        />
      </div>
      <div className="col-8 border bg-light">{renderGreeting()}</div>
    </div>
  );
}

export default Home;
