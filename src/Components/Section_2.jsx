import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import section_2_Dark from '../assets/Icons/Section_2_LightBG.svg';
import section_3_light from '../assets/Icons/Section_2_DarkBG.svg';

gsap.registerPlugin(ScrollTrigger);

const Section_2 = ({ isDarkMode }) => {
  const bgImage = isDarkMode ? section_3_light : section_2_Dark;

  const statsRef = useRef([]);
  const containerRef = useRef(null);

  const numbers = [
    { value: 18.7, suffix: '+', prefix: '₹', label: 'Cr Disbursed', decimal: true },
    { value: 2500, suffix: '+', prefix: '', label: 'Happy Customers' },
    { value: 30, suffix: '+', prefix: '', label: 'Cities Served' },
    { value: 97, suffix: '%', prefix: '', label: 'Customer Satisfaction' }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    statsRef.current.forEach((el, index) => {
      const { value, suffix, prefix, decimal } = numbers[index];
      const obj = { count: value / 2 };


      gsap.to(obj, {
        count: value,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (el) {
            el.innerText =
              prefix +
              (decimal
                ? obj.count.toFixed(1)
                : Math.floor(obj.count).toLocaleString()) +
              suffix;
          }
        },
      });
    });

    if (headingRef.current) {
  gsap.fromTo(
    headingRef.current,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
}

  }, []);

  const headingRef = useRef(null);

  return (
    <div ref={containerRef} className={`${isDarkMode ? 'bg-white' : 'bg-[#001C40]'} relative py-14 w-full overflow-hidden border`}>
      <img src={bgImage} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-70"/>
      <div className="relative container mx-auto h-full z-10 flex flex-col items-center justify-center">

        <h1
  ref={headingRef}
  style={{ fontFamily: 'PovetaracSansBold' }}
  className={`text-4xl text-center ${isDarkMode?'text-black':'text-white'}`}
>
  Trusted Lending — <br className="block md:hidden" /> From Day One
</h1>
        <div className="text-center py-3 px-2 flex items-center justify-center flex-wrap mt-8 gap-14">
          {numbers.map((item, index) => (
            <div key={index} className={`${isDarkMode?'text-black':'text-white'}`}>
              <h1 ref={(el) => (statsRef.current[index] = el)} style={{ fontFamily: 'PovetaracSansBold' }} className="text-5xl md:text-6xl">0{item.suffix}</h1>
              <p style={{ fontFamily: 'PovetaracSansbold' }} className="text-xl md:text-2xl text-[#686666]">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Section_2;
