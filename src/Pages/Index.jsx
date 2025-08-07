import React from 'react'
import Section_1 from '../Components/Section_1'
import Section_2 from '../Components/Section_2'
import Section_3 from '../Components/Section_3'
import EmiCalculator from '../Components/Section_4'
import Section_5 from '../Components/Section_5'
import Section_6 from '../Components/Section_6'
import Section_7 from '../Components/Section_7' 


const Index = ({isDarkMode}) => {
  return (
    <div className={` ${isDarkMode ? 'bg-gradient-to-r from-[#111827] via-[#111827] to-[#0E3846]' : 'bg-white'}`}>
      <Section_1 isDarkMode={isDarkMode} />
      <Section_2 isDarkMode={isDarkMode} />
      <Section_3 isDarkMode={isDarkMode} />
      <EmiCalculator isDarkMode={isDarkMode}/>
      <Section_5 isDarkMode={isDarkMode}/>
      <Section_6 isDarkMode={isDarkMode}/>
      <Section_7 isDarkMode={isDarkMode}/>
    </div>
  )
}

export default Index
