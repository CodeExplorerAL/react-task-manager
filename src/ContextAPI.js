// 1. 創建 Context
import React, { createContext, useState, useContext } from 'react';

// 1. 創建 CountContext
const CountContext = createContext();

// 2. 提供 Context
function ContextAPI() {
  // 使用 useState 鉤子來管理主題狀態：定義一個狀態變數 theme，其初始值為 '0'，並且提供一個函數 setCount 來更新這個狀態變數的值
  const [count, setCount] = useState(0);

  return (
     // 通過 Provider 將 theme 和 setTheme 提供給子組件
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
    </CountContext.Provider>
  );
}

// 3-1. 消費 Context
function Counter() {
  // 使用 useContext 鉤子從 CountContext 中提取 count 和 setCount
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>計數器值：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}


// 3-2. 消費 Context 使用 Context.Consumer 組件
// function Counter() {
//   return (
//     <CountContext.Consumer>
//       {({ count, setCount }) => (
//         <div>
//           <p>計數器值：{count}</p>
//           <button onClick={() => setCount(count + 1)}>增加</button>
//         </div>
//       )}
//     </CountContext.Consumer>
//   );
// }

export default ContextAPI;
