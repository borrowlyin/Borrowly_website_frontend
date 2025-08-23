import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const loanOptions = [
  {
    id: 'personal',
    loanName: 'Personal Loan',
    startRate: 10.5,
    finalRate: 16.0,
    basedOn: 'CIBIL score, income, job profile',
  },
  {
    id: 'business',
    loanName: 'Business Loan',
    startRate: 11.0,
    finalRate: 18.0,
    basedOn: 'Business vintage, turnover',
  },
  {
    id: 'home',
    loanName: 'Home Loan',
    startRate: 7.35,
    finalRate: 9.5,
    basedOn: 'CIBIL score, income, tenure',
  },
  {
    id: 'car-new',
    loanName: 'Car Loan (New)',
    startRate: 9.9,
    finalRate: 11.5,
    basedOn: 'Vehicle type, credit, bank',
  },
  {
    id: 'car-used',
    loanName: 'Car Loan (Used)',
    startRate: 14.5,
    finalRate: 17.0,
    basedOn: 'Older car = higher risk',
  },
  {
    id: 'education',
    loanName: 'Education Loan',
    startRate: 7.0,
    finalRate: 11.25,
    basedOn: 'Collateral, institution, program',
  },
];

const Slider = ({ min, max, step = 1, value, setValue, unit }) => {
  const barRef = useRef(null);
  const thumbRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const fill = fillRef.current;
    const thumb = thumbRef.current;

    const updateFromX = (x) => {
      const rect = bar.getBoundingClientRect();
      const relX = Math.min(Math.max(x - rect.left, 0), rect.width);
      const percent = relX / rect.width;
 const newValue = Math.round((min + percent * (max - min)) / step) * step;

      setValue(newValue);
      gsap.to(fill, { width: `${percent * 100}%`, duration: 0.2 });
      gsap.to(thumb, { duration: 0.2 });
    };

    Draggable.create(thumb, {
      type: 'x',
      bounds: bar,
      onDrag() {
        updateFromX(this.pointerX);
      },
      onPress(e) {
        updateFromX(e.clientX);
      },
    });

    const handleBarClick = (e) => {
      updateFromX(e.clientX);
    };

    bar.addEventListener('click', handleBarClick);
    return () => bar.removeEventListener('click', handleBarClick);
  }, [min, max, setValue, step]);

  return (
    <div className='py-5'>
      <div ref={barRef} className='w-full h-3 bg-gray-200 rounded-full relative cursor-pointer'>
        <div ref={fillRef} className='h-3 bg-blue-600 rounded-full' style={{ width: `${((value - min) / (max - min)) * 100}%` }}></div>
        <div ref={thumbRef} className="w-7 h-7 bg-white border-6 border-blue-600 rounded-full absolute top-1/2 -translate-y-1/2" style={{ transform: 'translateX(0%)' }}></div>
      </div>
    </div>
  );
};

const EmiCalculator = ({isDarkMode,options}) => {
  const [selectedLoan, setSelectedLoan] = useState(loanOptions[0]);
  const [loanAmount, setLoanAmount] = useState(8000);
  const [interestRate, setInterestRate] = useState(12);
  const [emiMonths, setEmiMonths] = useState(6);
  const principal = loanAmount;
  const annualInterestRate = interestRate;
  const months = emiMonths;
  

  const monthlyRate = annualInterestRate / 12 / 100;
const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);

// choose ONE rounding rule and use it everywhere:
const roundRupee = (x) => Math.round(x);   // or Math.ceil(x) to be conservative
const monthlyEMI = roundRupee(emi);
const totalPayable = roundRupee(emi * months); // <-- use emiRaw, not monthlyEMI
const totalInterest = totalPayable - principal;

  
  return (
    <div className='px-5'>
      <div className='w-full overflow-x-auto hide-scrollbar'>
        <div className='flex pb-8 w-max gap-1 whitespace-nowrap'>
          {
            options !=false &&  loanOptions.map((loan) => (
            <button key={loan.id} onClick={() => setSelectedLoan(loan)} style={{ fontFamily: 'PovetaracSansBold' }} className={`py-3 md:py-3 px-4 md:px-8 text-[14px] md:text-sm lg:text-[16px] rounded-full transition-all duration-200 ${
                selectedLoan.id === loan.id ? 'bg-[#0162D9] border border-[#0162D9]  text-white' : `border border-[#C4C4C4] bg-white cursor-pointer text-black` }`}>
              {loan.loanName}
            </button>
          ))
          }
         
        </div>
      </div>
      {/* Mobile Veriosn */}
       <div className={`border border-[#C4C4C4] block lg:hidden gap-5 rounded-2xl  overflow-hidden bg-white `}>
          <div className='bg-[#E0EEFF] py-8 flex flex-col items-center gap-1.5 justify-center'>
            <h1 className={` text-[14px] font-semibold`}>Your monthly instalment</h1>
            <h1 className='text-4xl font-bold'>₹{monthlyEMI.toLocaleString()}</h1>
          </div>
            <div className='flex-1 flex flex-col gap-6 py-4 px-3 md:px-5'>
          {/* Loan Amount */}
          <div>
            <div className='flex items-center'>
              <h1 className='text-[16px] md:text-xl font-bold'>Loan amount</h1>
              <div  style={{ fontFamily: 'PovetaracSansBold' }}  className='border ml-auto border-[#e6e6e6] py-1 md:py-2 px-4 md:px-8 text-[16px] rounded-full'>
                ₹{loanAmount.toLocaleString()}
              </div>
            </div>
            <Slider min={8000} max={500000} value={loanAmount} setValue={setLoanAmount} />
            <div  style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between text-[#838383] text-[14px] md:text-[18px]'>
              <span>8k</span><span>5L</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className='flex items-center'>
              <h1 className='text-[16px] md:text-xl font-bold'>Interest rate</h1>
              <div  style={{ fontFamily: 'PovetaracSansBold' }}  className='border ml-auto border-[#e6e6e6] py-1 md:py-2 px-4 md:px-8 text-[16px] rounded-full'>
                {interestRate}%
              </div>
            </div>
            <Slider min={12} max={30} value={interestRate} setValue={setInterestRate} />
             <div  style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between text-[#838383] text-[14px] md:text-[18px]'>
              <span>12%</span><span>30%</span>
            </div>
          </div>

          {/* EMI Duration */}
          <div>
            <div className='flex items-center'>
              <h1 className='text-[16px] md:text-xl font-bold'>Select EMI option</h1>
               <div  style={{ fontFamily: 'PovetaracSansBold' }}  className='border ml-auto border-[#e6e6e6] py-1 md:py-2 px-4 md:px-8 text-[16px] rounded-full'>
                {emiMonths} Months
              </div>
            </div>
            <Slider min={6} max={36} value={emiMonths} setValue={setEmiMonths} />
             <div  style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between text-[#838383] text-[14px] md:text-[18px]'>
              <span>6 Months</span><span>36 Months</span>
            </div>
          </div>
        </div>
         <div className='py-6 px-5 bg-[#fafcff]'>
              <div  style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between mb-2'>
                <span className='text-[#838383] text-[16px]'>Total interest</span>
                <h1 className='text-[16px] md:text-[20px] font-bold'>₹{totalInterest.toLocaleString()}</h1>
              </div>
              <div  style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between'>
                <span className='text-[#838383] text-[16px]'>Principal amount</span>
                <h1 className='text-[16px] md:text-[20px] font-bold'>₹{loanAmount.toLocaleString()}</h1>
              </div>
              <hr className='my-4 border-dashed border-[#C4C4C4]' />
              <div  style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between'>
                <span className='text-[18px] font-bold'>Total amount</span>
                <h1 className='text-[20px] font-bold'>₹{totalPayable.toLocaleString()}</h1>
              </div>
              <div className='pt-5'>
                <button  style={{ fontFamily: 'PovetaracSansBold' }} className='w-full text-lg py-4 text-[#0162D9] rounded-2xl border border-[#0162D9] font-bold'>
                  Apply Now
                </button>
              </div>
            </div>
       </div>

      {/* Desktop view */}
      <div className={`border border-[#C4C4C4] bg-white hidden lg:flex h-[470px] gap-5 rounded-2xl p-5`}>
        <div className='flex-1 flex flex-col gap-6 py-4 px-5'>
          {/* Loan Amount */}
{/* Loan Amount */}
<div>
  <div className='flex items-center'>
    <h1 className='text-[16px] md:text-xl font-bold'>Loan amount</h1>
    <div style={{ fontFamily: 'PovetaracSansBold' }} className='border ml-auto border-[#e6e6e6] py-1 md:py-2 px-4 md:px-8 text-[16px] rounded-full'>
      ₹{loanAmount.toLocaleString()}
    </div>
  </div>
  <Slider min={8000} max={500000} value={loanAmount} setValue={setLoanAmount} step={1000} />
  <div style={{ fontFamily: 'PovetaracSansBold' }} className='flex justify-between text-[#838383] text-[14px] md:text-[18px]'>
    <span>8k</span><span>5L</span>
  </div>
</div>


          {/* Interest Rate */}
          <div>
            <div style={{ fontFamily: 'PovetaracSansBold' }} className='flex items-center'>
              <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className='text-xl'>Interest rate</h1>
              <div className='border ml-auto border-[#e6e6e6] pt-2 pb-1 px-8 text-[18px] rounded-full'>
                {interestRate}%
              </div>
            </div>
            <Slider min={12} max={30} value={interestRate} setValue={setInterestRate} />
            <div className='flex justify-between text-[#838383] text-[18px]'>
              <span>12%</span><span>30%</span>
            </div>
          </div>

          {/* EMI Duration */}
          <div>
            <div style={{ fontFamily: 'PovetaracSansBold' }} className='flex items-center'>
               <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className='text-xl'>Select EMI option</h1>
              <div className='border ml-auto border-[#e6e6e6] pt-2 pb-1 px-8 text-[18px] rounded-full'>
                {emiMonths} Months
              </div>
            </div>
            <Slider min={6} max={36} value={emiMonths} setValue={setEmiMonths} />
            <div className='flex justify-between text-[#838383] text-[18px]'>
              <span>6 Months</span><span>36 Months</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className='w-full max-w-[325px]'>
          <div className='border border-[#C4C4C4] rounded-3xl overflow-hidden'>
            <div  style={{ fontFamily: 'PovetaracSansBold' }} className='bg-[#E0EEFF] py-8 flex flex-col items-center gap-1.5 justify-center'>
              <h1 className='text-[14px]'>Your monthly instalment</h1>
              <h1 className='text-4xl'>₹{monthlyEMI.toLocaleString()}</h1>
            </div>
            <div  style={{ fontFamily: 'PovetaracSansBold' }} className='py-6 px-5'>
              <div className='flex justify-between mb-2'>
                <span className='text-[#838383] text-[16px]'>Total interest</span>
                <h1 className='text-[20px]'>₹{totalInterest.toLocaleString()}</h1>
              </div>
              <div className='flex justify-between'>
                <span className='text-[#838383] text-[16px]'>Principal amount</span>
                <h1 className='text-[20px]'>₹{loanAmount.toLocaleString()}</h1>
              </div>
              <hr className='my-4 border-dashed border-[#C4C4C4]' />
              <div className='flex justify-between'>
                <span style={{ fontFamily: 'PovetaracSansBlack' }}  className='text-[18px]'>Total amount</span>
                <h1 className='text-[20px] font-bold'>₹{totalPayable.toLocaleString()}</h1>
              </div>
              <div className='pt-5'>
                <button className='w-full text-lg py-4 text-[#0162D9] rounded-2xl border border-[#0162D9] font-bold'>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
