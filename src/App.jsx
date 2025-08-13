import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Index from './Pages/Index'
import Login from './Pages/Login'
import Registration from './Pages/Registeration'


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
        <Route path="/login" element={<><Login  isDarkMode={isDarkMode}/></>} />
        <Route path="/Registration" element={<><Registration  isDarkMode={isDarkMode}/></>} />
      </Routes>
    </Router>
  )
}

export default App
