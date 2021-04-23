import React from "react";
import PropTypes from "prop-types";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: null,
      bgColor: "bg-light",
    };

    // this.onIncrement = this.onIncrement.bind(this);
    // this.onDecrement = this.onDecrement.bind(this);
    // this.onReset = this.onReset.bind(this);
  }

  componentDidMount() {
    const { initialValue } = this.props;
    //   ajax call
    this.setState((prevState) => {
      return {
        ...prevState,
        count: initialValue,
      };
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { count } = this.state;
    if (count !== prevState.count) {
      let bgColor = "bg-light";

      if (count !== 0 && count % 2 === 0) {
        bgColor = "bg-info";
      } else if (count % 2 === 1) {
        bgColor = "bg-warning";
      }

      this.setState((prevState) => {
        return {
          ...prevState,
          bgColor,
        };
      });
    }
  }

  onIncrement(value) {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + value,
      };
    });
  }

  onDecrement(value) {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - value,
      };
    });
  }

  onReset() {
    const { initialValue } = this.props;
    this.setState((prevState) => {
      return {
        ...prevState,
        count: initialValue,
      };
    });
  }

  render() {
    const { count, bgColor } = this.state;

    return (
      <div className={`row mt-5 p-5 ${bgColor}`}>
        <h2>ClassComponent - {count}</h2>

        <div className="col-4 d-flex justify-content-between">
          <button
            className="btn btn-dark btn-lg"
            onClick={this.onIncrement.bind(this, 1)}
          >
            +1
          </button>
          <button
            className="btn btn-dark btn-lg"
            onClick={this.onIncrement.bind(this, 10)}
          >
            +10
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={this.onReset.bind(this)}
          >
            0
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.onDecrement.bind(this, 1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.onDecrement.bind(this, 10)}
          >
            -10
          </button>
        </div>
      </div>
    );
  }
}

CounterClass.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default CounterClass;
