import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import vector_down from '../Assets/Icons/vector_down.svg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Person_loan_icon from '../assets/Icons/section_1Icons/Person_loan_Selected.svg'
import Credit_cards_icon from '../assets/Icons/section_1Icons/Credit_cards_Selected.svg'
import Home_equity_icon from '../assets/Icons/section_1Icons/Home_equity_Selected.svg'
import Home_purchase_icon from '../assets/Icons/section_1Icons/Home_purchase_Selected.svg'
import Insurance_icon from '../assets/Icons/section_1Icons/Insurance_Selected.svg'
import Business_loan_icon from '../assets/Icons/section_1Icons/Business_loans_Selected.svg'

import Business_Loan from '../assets/Icons/section_1Icons/Business_Loans.svg';
import Credit_Cards from '../assets/Icons/section_1Icons/Credit_Cards.svg';
import Home_Equity from '../assets/Icons/section_1Icons/Home_Equity.svg';
import Home_Purchase from '../assets/Icons/section_1Icons/Home_Purchase.svg';
import Insurance from '../assets/Icons/section_1Icons/Insurance.svg';
import Person_loan from '../assets/Icons/section_1Icons/Person_loan.svg';

import Downarrow from '../assets/Icons/section_1Icons/Downarrow.svg';
import more_icon from '../assets/Icons/section_1Icons/More_icon.svg';
import Apply_arrow from '../assets/Icons/Apply_arrow.svg'; 
import Download_icon from '../assets/Icons/Download_icon.svg'; 

import Privacy_icon from '../assets/Icons/Privacy_icon.svg';

import Personal_loan_banner from '../assets/Icons/section_1Icons/Person_loan_Banner.png';

const MobileAccordionItem = ({ item, isExpanded, onToggle }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (!contentRef.current) return;

    if (isExpanded) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }, [isExpanded]);

  return (
    <div className="border border-[#C5D3E5] bg-[#F4F6FA] rounded-xl overflow-hidden">
      <div
        onClick={onToggle}
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <img
            src={isExpanded ? item.Normal_icon : item.Normal_icon}
            alt={`${item.name} Icon`}
            className="w-[40px] h-[40px]"
          />
          <span
            style={{ fontFamily: 'PovetaracSansBold' }}
            className={`text-[16px] mt-1 ${isExpanded ? 'text-[#3C3B3B]' : 'text-[#3C3B3B]'}`}
          >
            {item.name}
          </span>
        </div>
        {isExpanded ? (
          <FaChevronUp className="text-[#00C2CC]" />
        ) : (
          <FaChevronDown className="text-[#3C3B3B]" />
        )}
      </div>

      <div
        ref={contentRef}
        className="px-4 text-[14px] text-[#3C3B3B] overflow-hidden h-0 opacity-0"
      >
        <div className="py-4">
          <h1  style={{ fontFamily: 'PovetaracSansHeavy' }} className='text-left text-[18px] pb-2'>{item.headline}</h1>
          <p style={{ fontFamily: 'PovetaracSansBold' }} className='text-left text-[14px] text-[#7c7c7c]'>{item.description}</p>
          <div className='flex items-center gap-2 mt-4'>
            <button style={{ fontFamily: 'PovetaracSansHeavy' }} className='flex-1 py-3 bg-[#00C2CC] flex items-center justify-center text-white text-[16px] rounded-lg'>
              Apply Loan
              <img src={Apply_arrow} alt="Apply Arrow" className='inline w-[22px] ml-2' />
            </button>
            <button  style={{ fontFamily: 'PovetaracSansHeavy' }} className='flex-1 flex items-center justify-center py-3 bg-transparent border border-[#55575B] text-[16px] rounded-lg'>
              <img src={Download_icon} alt="Download Icon" className='inline w-[22px] mr-2' />
               Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



const Section_1 = ({ isDarkMode }) => {
  const wordsloop = ['Best Rate.', 'lowest EMI', 'Fastest approval', 'Smartest loan'];
  const wordRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(wordRef.current, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          setCurrentWordIndex(prev => (prev + 1) % wordsloop.length);
          gsap.to(wordRef.current, { opacity: 1, duration: 0.4 });
        },
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const [selectedId, setSelectedId] = useState(1);
const [menulist, setMenulist] = useState([
  {
    name: 'Personal Loan',
    Selected_icon: Person_loan_icon,
    Normal_icon: Person_loan,
    id: 1,
    headline: 'Find the right personal loan rate for you',
    description: 'Need to consolidate debt or make a large purchase? We bring the lenders to you so you can shop and compare personal loan offers in minutes.'
  },
  {
    name: 'Home Equity',
    Selected_icon: Home_equity_icon,
    Normal_icon: Home_Equity,
    id: 2,
    headline: 'Tap into your home’s value',
    description: 'Access funds by leveraging the equity in your home. Great for renovations, large expenses, or debt consolidation.'
  },
  {
    name: 'Credit Cards',
    Selected_icon: Credit_cards_icon,
    Normal_icon: Credit_Cards,
    id: 3,
    headline: 'Compare and choose the best credit card',
    description: 'Find credit cards that fit your lifestyle—from cash back and rewards to balance transfers and low interest rates.'
  },
  {
    name: 'Home Purchase',
    Selected_icon: Home_purchase_icon,
    Normal_icon: Home_Purchase,
    id: 4,
    headline: 'Your dream home starts here',
    description: 'Compare mortgage rates and loan options to make your home buying journey smooth and affordable.'
  },
  {
    name: 'Insurance',
    Selected_icon: Insurance_icon,
    Normal_icon: Insurance,
    id: 5,
    headline: 'Protect what matters most',
    description: 'Explore insurance plans for health, life, auto, and more—designed to give you peace of mind.'
  },
  {
    name: 'Business Loan',
    Selected_icon: Business_loan_icon,
    Normal_icon: Business_Loan,
    id: 6,
    headline: 'Fuel your business growth',
    description: 'Whether you\'re starting up or scaling operations, find financing solutions tailored to your business needs.'
  }
]);


  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? menulist : menulist.slice(0, 4);
  const selectedItem = menulist.find(item => item.id === selectedId);

  return (
    <div className={`h-auto pt-36 flex items-end pb-10 cursor-default justify-center`}>
      <div className="w-full lg:container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title  */}
          <div className="flex flex-col items-center md:gap-3">
            <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-2xl lg:text-3xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
              We compete for your loan. You get the 
              <span ref={wordRef} style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-3xl lg:text-4xl ml-3 ${isDarkMode ? 'text-white' : 'text-black'}`} >
                {wordsloop[currentWordIndex]}
              </span>
            </h1>
            <div className='md:ml-auto'>
              <img src={vector_down} alt="Vector Down" className="md:-mt-2" />
            </div>
          </div>
          {/* Selection */}
          <div className='w-full hidden  md:block lg:container  mx-auto mt-10'>
             <div className='relative w-full max-w-[1150px] flex overflow-visible  h-[130px] mx-auto bg-[#F4F6FA] border border-[#C5D3E5] rounded-2xl'>
                {menulist.map((item) => {
                  const isSelected = selectedId === item.id;
                  return (
                    <div key={item.id} onClick={() => setSelectedId(item.id)} className={`relative cursor-pointer flex-1 h-full`}>
                      <div className={`flex flex-col items-center justify-center h-full gap-3 transition-all duration-300 
                      ${item.id === 1 ? 'rounded-l-2xl' : ''} 
                      ${ isSelected ? 'bg-[#00C2CC] text-white' : 'text-[#3C3B3B]' }`} >
                        <img  src={isSelected ? item.Selected_icon : item.Normal_icon} alt={`${item.name} Icon`} className='w-[40px] lg:w-[50px] mx-auto' />
                        <h1 style={{ fontFamily: 'PovetaracSansBold' }} className='text-[14px] lg:text-[16px]'> {item.name}</h1>
                      </div>
                     {isSelected && (
                        <img src={Downarrow} alt="Down Arrow" className='absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-[20px] z-10' /> )}
                     </div>
                  );
                })}
                <div className='flex-1 border-l border-[#55575B]'>
                   <div className='flex flex-col items-center justify-center cursor-pointer h-full gap-3 transition-all duration-300 '>
                     <img  src={more_icon} alt={`more_icon Icon`} className='w-[40px] md:w-[50px] mx-auto' />
                     <h1 style={{ fontFamily: 'PovetaracSansHeavy' }} className='text-[16px]  hidden lg:block'>More Options</h1>
                   </div>
                </div>
              </div>
<div className='relative w-full max-w-[1150px] h-[500px] flex flex-col lg:flex-row overflow-visible mx-auto rounded-2xl'>
  <div className='flex-1 p-5 flex flex-col justify-center'>
    <p
      style={{ fontFamily: 'PovetaracSansBold' }}
      className='text-[#084DB3] text-[14px] bg-[#DEE8F6] text-left rounded-full w-fit px-4 py-1.5'
    >
      {selectedItem?.name}
    </p>
    <h1
      style={{ fontFamily: 'PovetaracSansBlack' }}
      className={`text-left mt-4 text-[28px] lg:text-[40px] leading-[1.1] ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}
    >
      {selectedItem?.headline}
    </h1>
    <p
      style={{ fontFamily: 'PovetaracSansBold' }}
      className={`text-left mt-2 text-[14px] lg:text-lg text-[#696868] ${
        isDarkMode ? 'text-[#CCCCCC]' : 'text-black'
      }`}
    >
      {selectedItem?.description}
    </p>
    <div className='flex items-center gap-2 mt-4'>
      <button
        style={{ fontFamily: 'PovetaracSansHeavy' }}
        className='flex-1 py-3 bg-[#00C2CC] flex items-center justify-center text-white text-[16px] lg:text-[18px] rounded-lg'
      >
        <span className='mt-1'>Apply Loan</span>
        <img src={Apply_arrow} alt='Apply Arrow' className='inline w-[22px] ml-2' />
      </button>
      <button
        style={{ fontFamily: 'PovetaracSansHeavy' }}
        className={`flex-1 ${
          isDarkMode ? 'text-white border border-[#ffffff]' : 'text-black border border-[#55575B]'
        } flex items-center justify-center py-3 bg-transparent text-[16px] lg:text-[18px] rounded-lg`}
      >
        <img src={Download_icon} alt='Download Icon' className='inline w-[22px] mr-2' />
        <span className='mt-1'>Download</span>
      </button>
    </div>
    <div className='flex flex-row items-center pt-12 gap-1 opacity-40'>
      <img src={Privacy_icon} alt='Privacy Icon' />
      <h1 className='text-center mt-0.5 text-[12px] md:text-[14px] lg:text-[16px]'>
        Privacy Secured | Advertising Disclosures
      </h1>
    </div>
  </div>
  <div className='flex-1'>
    
      <img
        src={Personal_loan_banner} // Optional: Update this too if you have different banners per item
        alt={`${selectedItem?.name} Banner`}
        className='w-[750px] mx-auto lg:w-full  h-full object-cover rounded-2xl'
      />
   
  </div>
</div>

              
          </div>
          {/* Mobile Accordion List */}
             <div className="w-full md:hidden mt-6 pb-5 space-y-0.75">
                  {visibleItems.map((item) => {
                    const isExpanded = selectedId === item.id;
                    return (
                      <MobileAccordionItem
                        key={item.id}
                        item={item}
                        isExpanded={isExpanded}
                        onToggle={() => setSelectedId(isExpanded ? null : item.id)}
                      />
                    );
                  })}
             
                  {menulist.length > 4 && (
                    <div className="text-center pt-4">
                      <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-[#00C2CC] font-medium hover:underline"
                      >
                        {showAll ? 'Show Less' : 'More Loan Options'}
                      </button>
                    </div>
                  )}
                  <div className='flex flex-row items-center justify-center gap-1 opacity-40'>
                    <img src={Privacy_icon} alt="Privacy Icon" className='' />
                    <h1 className='text-center mt-0.5 text-[12px] md:text-[14px] lg:text-[16px]'>Privacy Secured | Advertising Disclosures</h1>
                  </div>
             </div>
          </div>
        </div>
    </div>
  );
};

export default Section_1;
