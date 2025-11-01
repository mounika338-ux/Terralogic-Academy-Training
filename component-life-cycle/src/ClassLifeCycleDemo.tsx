import React, { Component } from 'react';
type IState={
    count: number
}
type IProps={};
class ClassLifecycleDemo extends Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { count: 0 };
    console.log(' Constructor - Component is being created');
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log(' getDerivedStateFromProps - Syncing state with props (if needed)');
    return null; // no  change to state
  }

  componentDidMount() {
    console.log(' componentDidMount - Component inserted into the DOM');
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(' shouldComponentUpdate - Should the component re-render?');
    return true; // returning true allows re-render
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log(' getSnapshotBeforeUpdate - Capturing some info before DOM changes');
    return null;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log('componentDidUpdate - Component just updated');
  }

  componentWillUnmount() {
    console.log(' componentWillUnmount - Component is being removed');
  }

  render() {
    console.log(' render - Rendering the component UI');
    return (
      <div>
        <h1>React Class Lifecycle Demo</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassLifecycleDemo;
