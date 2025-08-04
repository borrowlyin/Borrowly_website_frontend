import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Index from './Pages/Index'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log("Theme toggled", isDarkMode);
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/><Index  isDarkMode={isDarkMode}/></>} />
      </Routes>
    </Router>
  )
}

export default App
