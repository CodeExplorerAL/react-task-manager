import React from 'react'
import Welcome from './Welcome' // 引入 Welcome 組件

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  )
}

export default App