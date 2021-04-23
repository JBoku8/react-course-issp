import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CounterHooks({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const [bgColor, setBgColor] = useState(null);

  //   კომპონენტის გადახატვისას
  //   useEffect(() => {
  //     console.log("COMPONENT RENDERING...");
  //   });

  // კომპონტენტის ჩატვირთვისას
  //   useEffect(() => {
  //     //   Ajax call
  //     console.log("COMPONENT ONCE");
  //   }, []);

  useEffect(() => {
    console.log("შემეცვალა count ", count);
    if (count === 0) {
      setBgColor("bg-light");
    } else if (count % 2 === 0) {
      setBgColor("bg-info");
    } else {
      setBgColor("bg-warning");
    }
  }, [count]);

  useEffect(() => {
    console.log("BG COLOR UPDATE");
  }, [bgColor]);

  const onIncrement = (value) => {
    setCount((prevState) => prevState + value);
  };
  const onDecrement = (value) => {
    setCount((prevState) => prevState - value);
  };
  const onReset = () => {
    setCount(initialValue);
  };

  return (
    <div className={`row ${bgColor} mt-5 p-5`}>
      <h2>CounterHooks - {count}</h2>
      <div className="col-4 d-flex justify-content-between">
        <button
          className="btn btn-dark btn-lg"
          onClick={onIncrement.bind(null, 1)}
        >
          +1
        </button>
        <button
          className="btn btn-dark btn-lg"
          onClick={onIncrement.bind(null, 10)}
        >
          +10
        </button>
        <button className="btn btn-danger btn-lg" onClick={onReset}>
          0
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={onDecrement.bind(null, 1)}
        >
          -1
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={onDecrement.bind(null, 10)}
        >
          -10
        </button>
      </div>
    </div>
  );
}

CounterHooks.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default CounterHooks;
