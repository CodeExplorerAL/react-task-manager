import React, { useState, useEffect } from 'react';

function HookCounter() {
  // 使用 useState Hook 來管理狀態
  const [count, setCount] = useState(0);
  // 這行創建了一個狀態變量 count，初始值為 0。
  // setCount 是用來更新 count 的函數。


// 使用 useEffect Hook 來處理副作用
// 用來處理副作用，類似於 componentDidMount、componentDidUpdate 和 componentWillUnmount 的組合。
// 第一個參數是一個函數，包含要執行的副作用代碼。
// 第二個參數是一個依賴數組，指定何時重新運行這個 effect。
  useEffect(() => {
    console.log('組件已掛載或更新');
    
    // 返回一個清理函數
    return () => {
      console.log('組件即將卸載或更新前的清理');
    };
  }, [count]); // 依賴數組：當 count 改變時，這個 effect 會重新運行

  // 增加
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };


  // 不再需要 render 方法，整個函數的返回值就是要渲染的內容。
  console.log('渲染組件');
  return (
    <div>
      <h1>計數: {count}</h1>
      <button onClick={incrementCount}>增加</button>
    </div>
  );
}

export default HookCounter;