import React from 'react'
import Section_1 from '../Components/Section_1'
const Index = ({isDarkMode}) => {
  return (
    <div className={` ${isDarkMode ? 'bg-gradient-to-r from-[#111827] via-[#111827] to-[#0E3846]' : 'bg-white'}`}>
      <Section_1 isDarkMode={isDarkMode} />
    </div>
  )
}

export default Index
