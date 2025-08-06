import EmiCalculator from "./EmiCalculator"
const Section_4 = ({isDarkMode}) => {
  return (
    <div className="py-24 md:py-0">
        <div className="lg:container mx-auto flex flex-col items-center justify-center h-full">
            <p style={{ fontFamily: 'PovetaracSansBold' }} className='text-[#084DB3] text-[14px] bg-[#DEE8F6] text-left rounded-full w-fit px-4 py-1.5'>
                 FINANCE MADE EASY
            </p>
            <h1  style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-center mt-4 text-[28px] lg:text-[36px] xl:text-[40px] leading-[1.1] ${ isDarkMode ? 'text-white' : 'text-black'}`}>
                Know Before You Borrow – Loan EMIs Made Simple
            </h1>
             <p style={{ fontFamily: 'PovetaracSansBold' }} className={`mt-2 px-4 w-full max-w-[800px] text-[14px] text-center lg:text-[14px] xl:text-lg  ${ isDarkMode ? 'text-[#CCCCCC]' : 'text-[#696868]' }`}>
              Get real-time EMI estimates. Easily switch between Personal, Business, Home, or Education loans.
             </p>
             <div className="w-full max-w-[1200px] pt-6 md:py-10">
              <EmiCalculator isDarkMode={isDarkMode}/>
             </div>
              <div className={`${ isDarkMode ? 'text-white' : 'text-black opacity-70'} flex flex-row items-center gap-1 px-5 pt-5 md:pt-0 `}>
                <h1 style={{ fontFamily: 'PovetaracSansBold' }} className='text-left mt-0.5 text-[12px] md:text-[14px] lg:text-[16px]'>
                 Note : This EMI calculation is for reference purposes only. Final values may vary based on your bank’s terms and verification.
                </h1>
              </div>
        </div>
    </div>
  )
}

export default Section_4
