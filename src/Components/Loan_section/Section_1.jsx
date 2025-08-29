import React from 'react'
import Person_loan from '../../assets/Images/Personal_loan.avif'
import Apply_arrow from '../../assets/Icons/Apply_arrow.svg'; 
import Download_icon from '../../assets/Icons/Download_icon.svg'; 



const Section_1 = () => {
  return (
    <div className='lg:h-[65dvh] bg-gradient-to-br cursor-default flex flex-col-reverse md:flex-row from-[#003479] rounded-4xl to-[#0160DD]'>
        <div className='flex-1 flex items-center md:px-10'>
            <div className='py-10 px-5 w-full max-w-[600px] flex flex-col justify-center'>
                <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-[#000000] text-[10px] md:text-[14px] bg-white rounded-full w-fit px-4 py-1.5 flex items-center justify-center">
                 Personal Loans
                </p>             
                <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-left mt-5  text-white text-[28px] lg:text-[38px] leading-[1.1] `}>
                    Find the right personal Loan rate for you
                </h1>
                <p style={{ fontFamily: 'PovetaracSansBold' }} className={`text-left mt-2 text-[14px] md:text-[18px] text-[#ffffff] `}>
                    Need to consolidate debt or make a large purchase? We bring the lenders to you so you can shop and compare personal loan offers in minutes.
                </p>
                <div className='flex items-center gap-2 mt-6'>
                    <button style={{ fontFamily: 'PovetaracSansHeavy' }}  className='flex-1 py-3 bg-[#000000] flex items-center cursor-pointer hover:scale-102 justify-center text-white text-[16px] lg:text-[18px] '>
                        <span className='mt-1'>Apply Loan</span>
                            <img src={Apply_arrow} alt='Apply Arrow' className='inline w-[22px] ml-2' />
                    </button>
                    <button style={{ fontFamily: 'PovetaracSansHeavy' }} className={`flex-1 bg-[#ffffff]  cursor-pointer hover:scale-102  flex items-center justify-center py-3 text-black text-[16px] lg:text-[18px] `}>
                        <img src={Download_icon} alt='Download Icon' className='inline w-[22px] mr-2' />
                        <span className='mt-1'>Download</span>
                    </button>
                </div>
            </div>
        </div>
         <div className='flex flex-1 items-end justify-end'>
            <img src={Person_loan} alt='' className='h-full' />
        </div>
    </div>
  )
}

export default Section_1
