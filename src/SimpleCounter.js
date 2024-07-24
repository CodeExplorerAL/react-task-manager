import React, { Component } from 'react';

class SimpleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1. 構造函數：組件初始化");
  }

  componentDidMount() {
    console.log("3. componentDidMount：組件已掛載");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate：組件已更新");
  }

  componentWillUnmount() {
    console.log("5. componentWillUnmount：組件即將卸載");
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log("2. render：組件渲染");
    return (
      <div>
        <h1>計數: {this.state.count}</h1>
        <button onClick={this.incrementCount}>增加</button>
      </div>
    );
  }
}

export default SimpleCounter;