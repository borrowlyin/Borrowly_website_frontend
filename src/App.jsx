import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Index from './Pages/Index'
import Login from './Pages/Login'
import Registration from './Pages/Registeration'
import Contact_us from './Pages/Contact_us'
import About_us from './Pages/About_us'
import Re_contactus from './Pages/Re_contactus'
import Carriers from './Pages/Carriers'

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
        <Route path="/Support" element={<><Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/><Contact_us  isDarkMode={isDarkMode}/></>} />
        <Route path="/About_us" element={<><Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/><About_us  isDarkMode={isDarkMode}/></>} />
        <Route path="/Contact_us" element={<><Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/><Re_contactus isDarkMode={isDarkMode}/></>} />
        <Route path="/Carriers" element={<><Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/><Carriers isDarkMode={isDarkMode}/></>} />
      </Routes>
    </Router>
  )
}

export default App
