import { useState } from 'react';
import Greeting from '../../components/greeting';
import Spinner from '../../components/spinner/Spinner';
import { Button } from '../../components/ui';
import useFetch from '../../hooks/useFetch';

// newValue !== oldValue
// newObject !== oldObject

function Home() {
  const [showGreeting, setShowGreeting] = useState(false);

  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/companies?_quantity=400`
  );

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

  const renderCompanies = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <pre>{JSON.stringify(error)}</pre>
        </div>
      );
    }

    if (loading || !data) {
      return <Spinner />;
    }

    return (
      <div className="col-12">
        <h2 className="text-muted">Data.length {data.data.length}</h2>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <h2 className="text-muted">Home Page</h2>
        <div className="col-4 align-items-center d-flex">
          <Button
            className="btn btn-dark"
            onClick={onGreetingClick}
            text={`${showGreeting ? 'Hide' : 'Show'} Greeting`}
          />
        </div>
        <div className="col-8 border bg-light">{renderGreeting()}</div>
      </div>
      {renderCompanies()}
    </div>
  );
}

export default Home;
