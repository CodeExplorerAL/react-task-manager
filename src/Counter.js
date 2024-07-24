import React, { Component } from 'react'         // 第1種寫法
// import React, { Component as dog } from 'react'  // 第2種寫法
// import React from 'react'                     // 第3種寫法

class Counter extends Component {           // 第1種寫法
// class Counter extends dog {              // 第2種寫法
// class Counter extends React.Component {  // 第3種寫法

  // 構造函數：初始化組件
  constructor(props){
    super(props);              // 使用js關鍵字super調用父類 Component 的構造函數，如果在構造函數中使用 this，則必須先調用 super()。這是因為在 ES6 中，子類的構造函數中必須先調用父類的構造函數，才能正確初始化 this
    this.state = { count: 0 }; // 設定初始狀態，count 從 0 開始
  }

  // 增加按鈕點擊的方法
  handleIncrement = () => {
    this.setState(prevState => ({    // 使用this.setState方法(自定義變數名稱，表示先前狀態 => ({
      count: prevState.count + 1     //  count: 是告訴 React 要更新 state 中的 count 屬性，冒號 (:) 後面的部分是要賦給 count 的新值
    }));
  }

  // 減少按鈕點擊的方法
  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1 
    }));
  }

  // 渲染方法：定義組件的 UI
  render() { 
    return (
      <div>
        {/* 顯示當前的 count 值 */}
        <h1>Count: {this.state.count}</h1>
        {/* 增加按鈕，點擊時調用 handleIncrement 方法 */}
        <button onClick={this.handleIncrement}>+</button>
        {/* 減少按鈕，點擊時調用 handleDecrement 方法 */}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;