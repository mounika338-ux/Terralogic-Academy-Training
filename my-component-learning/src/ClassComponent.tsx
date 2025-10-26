import React, { Component } from "react";

// Define types for props and state
interface State {
  count: number;
}

interface Props {
    
}

class ClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Increment count
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Decrement count, never below 0 using ternary
  handleDecrement = () => {
        this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });

  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassComponent;
