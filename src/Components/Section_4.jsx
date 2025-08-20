import EmiCalculator from "./EmiCalculator"


import section_2_Dark from '../assets/Icons/Section_2_LightBG.svg';
import section_3_light from '../assets/Icons/Section_2_DarkBG.svg';

const Section_4 = ({isDarkMode}) => {
    const bgImage = isDarkMode ? '' : section_2_Dark;
  return (
    <div className={`md:py-0 relative overflow-hidden ${isDarkMode?'bg-white':'bg-[#001C40]'}`}>
        <img src={bgImage} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-20"/>
        <div className="max-w-screen-xl py-24 mx-auto flex flex-col items-center justify-center h-full">
            <p style={{ fontFamily: 'PovetaracSansBold' }} className='text-[#084DB3] text-[14px] bg-[#DEE8F6] text-left rounded-full w-fit px-4 py-1.5'>
                 FINANCE MADE EASY
            </p>
            <h1  style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-center mt-4 text-[28px] lg:text-[36px] xl:text-[40px] leading-[1.1] ${ isDarkMode ? ' text-black' : 'text-white '}`}>
                Know Before You Borrow – Loan EMIs Made Simple
            </h1>
             <p style={{ fontFamily: 'PovetaracSansBold' }} className={`mt-2 px-4 w-full max-w-[800px] text-[14px] text-center lg:text-[14px] xl:text-lg  ${ isDarkMode ? ' text-[#696868]' : 'text-[#CCCCCC]' }`}>
              Get real-time EMI estimates. Easily switch between Personal, Business, Home, or Education loans.
             </p>
             <div className="w-full max-w-screen-xl pt-6 md:py-10">
              <EmiCalculator isDarkMode={isDarkMode}/>
             </div>
              <div className={`${ isDarkMode ? 'text-white' : 'text-black opacity-70'} flex flex-row items-center gap-1 px-5 pt-5 md:pt-0 `}>
                <h1 style={{ fontFamily: 'PovetaracSansBold' }} className={`text-left mt-0.5 text-[12px] md:text-[14px] lg:text-[16px]  ${ isDarkMode ? ' text-[#696868]' : 'text-[#CCCCCC]' }`}>
                 Note : This EMI calculation is for reference purposes only. Final values may vary based on your bank’s terms and verification.
                </h1>
              </div>
        </div>
    </div>
  )
}

export default Section_4
