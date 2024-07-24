import React from 'react'
import Cat from './Welcome' // Props：引入 Welcome 組件
import Count from './Counter' // State：引入 Counter 組件
import SimpleCounter from './SimpleCounter' // Lifecycle Methods：引入Timer組件

function App() {
  return (
    <div>
      <h3>Props：傳遞 name 屬性到 Welcome 組件</h3>
      <Cat name="AL" />
      <hr />
      <h3>State：組件內部的狀態管理</h3>
      <Count />
      <hr />
      <h3>生命週期方法Lifecycle Methods</h3>
      <SimpleCounter />
    </div>
  )
}

export default App