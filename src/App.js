import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Router：安裝 React Router，npm install react-router-dom
import Home from './Home';            // Router：引入 Home 組件
import About from './About';          // Router：引入 About 組件
import Contact from './Contact';      // Router：引入 Contact 組件

function App() {
  return (
    <>
    {/* Router：創建路由，Router/Link/Routes/Route */}
      <Router>
          <nav>
          <Link to="/">首頁</Link>｜
          <Link to="/about">關於我們</Link>｜
          <Link to="/contact">聯繫我們</Link>
          </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </>
  )
}

export default App