import React from 'react'
import Elgibility_check from '../../assets/Icons/Egibility_Check.svg'
import Elgibility_check_1 from '../../assets/Icons/Egibility_Check_2.svg'

const Section_2 = () => {
  return (
     <div className=" py-5">
            <h1 style={{ fontFamily: 'PovetaracSansBold' }} className={`text-left mt-2 text-[14px] md:text-[16px] text-[#000000] `}>Now get a personal loan online at your fingertips with a competitive interest rate. It gets better as there are flexible loan tenures. You can now benefit the most from pre-approved personal loans online with more than 30+ banks and NBFCs as lending options <br/><br/>
                Buddy Loan provides better financial solutions to fund your marriage, medical, and travel expenses. There is more to it; you can now avail of an online personal loan for home renovation, education, and car purchases. Read on to know more about personal loan lenders, offers, interest rates and EMI options.</h1>

            <div className="py-5 mt-6 flex items-center gap-3 flex-col md:flex-row justify-center">
                <div className="bg-[#00C2CC] py-3 w-full max-w-[350px] px-5 flex items-center gap-3  rounded-2xl">
                    <img src={Elgibility_check} alt="" className="w-12"/>
                    <div className="flex flex-col text-white">
                        <h1 style={{ fontFamily: 'PovetaracSansBold' }} className="text-[22px]">Check your Eligibility</h1>
                        <h1  style={{ fontFamily: 'PovetaracSansBold' }} className="text-[14px] -mt-0.5">Get Your Loan Eligibility Now!</h1>
                    </div>
                </div>
                 <div className="bg-[#00C2CC] py-3 w-full max-w-[350px] px-5 flex items-center gap-3  rounded-2xl">
                    <img src={Elgibility_check_1} alt="" className="w-12"/>
                    <div className="flex flex-col text-white">
                        <h1 style={{ fontFamily: 'PovetaracSansBold' }} className="text-[22px]">Check your CIBIL Score</h1>
                        <h1  style={{ fontFamily: 'PovetaracSansBold' }} className="text-[14px] -mt-0.5">Get Your Free CIBIL Report Now!</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Section_2
