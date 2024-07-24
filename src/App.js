import React from 'react'
import Cat from './Welcome' // Props：引入 Welcome 組件
import Count from './Counter' // State：引入 Counter 組件

function App() {
  return (
    <div>
      <h3>Props：傳遞 name 屬性到 Welcome 組件</h3>
      <Cat name="AL" />
      <hr />
      <h3>State：組件內部的狀態管理</h3>
      <Count />
    </div>
  )
}

export default App