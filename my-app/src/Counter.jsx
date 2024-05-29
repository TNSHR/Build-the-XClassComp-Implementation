import { Component } from "react"


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

      handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

         handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick = {this.handleIncrement}>Increment</button>
        <button onClick = {this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
