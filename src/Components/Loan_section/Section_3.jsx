import React, { useEffect, useRef, useState } from 'react';

import img1 from '../../assets/Images/Person_loan_appscreen_1.avif';
import img2 from '../../assets/Images/Person_loan_appscreen_2.avif';
import img3 from '../../assets/Images/Person_loan_appscreen_3.avif';

import Tick from '../../assets/Icons/tick_Send.svg';
import congrt from '../../assets/Images/Congrt.avif';

const Section_3 = () => {
  const slides = [
    {
      title: '1. Install & Choose',
      text: 'Get the Borrowly app, choose your loan amount, and set a tenure <br/>that suits you.',
      image: img1,
      light: true,
    },
    {
      title: '2. Verify & Apply',
      text: 'Verify your mobile number and fill in a few basic details to complete your application',
      image: img2,
      light: true,
    },
    {
      title: '3. Eligible Loan Amount',
      text: 'After KYC and credit check, view your eligible loan amount and pick repayment terms that suit you',
      image: img3,
      light: true,
    },
    {
      title: 'Congratulations',
      text: 'Your Borrowly loan has been disbursed to your account with ABC Bank.',
      image: congrt,
      light: false,
    },
  ];

  const sectionRef = useRef(null);  // 👈 reference to entire section
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollTo = (i) => {
    const target = cardRefs.current[i];
    target?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  };

  // ✅ Observe visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // 30% visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Run autoplay ONLY if visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % slides.length;
        scrollTo(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, slides.length]);
  return (
    <div  ref={sectionRef}>
      <h1
        style={{ fontFamily: 'PovetaracSansBlack' }}
        className="text-center mt-5 text-black text-[28px] pb-5 lg:text-[32px] leading-[1.1]"
      >
        3 steps and you have the loan
      </h1>

      {/* --- Mobile (<md): auto carousel with dots --- */}
      <div className="md:hidden mt-5">
        <div
          ref={scrollerRef}
          className="
            flex gap-3 overflow-x-auto pb-2
            snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          style={{ scrollBehavior: 'smooth' }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {slides.map((s, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="snap-start  w-full shrink-0 px-1"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div
                className={`rounded-3xl overflow-hidden ${
                  s.light ? 'bg-[#F2F4FB]' : 'bg-gradient-to-b from-[#014094] to-[#015FDA] text-white'
                }`}
              >
                <div className="px-5 py-4">
                  {!s.light && <img src={Tick} alt="" className="w-12 mx-auto" />}
                  <h2
                    style={{ fontFamily: 'PovetaracSansBlack' }}
                    className={`mt-4 ${s.light ? 'text-black' : 'text-white text-center'} text-xl leading-[1.1]`}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{ fontFamily: 'PovetaracSansBold' }}
                    className={`mt-2 text-[16px] ${s.light ? 'text-[#474040]' : 'text-white/90 text-center'}`}
                  >
                    {s.text}
                  </p>
                </div>
                <div className="h-[500px] flex items-center justify-center">
      <img src={s.image} alt="" className="w-full h-full object-contain" />
    </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                index === i ? 'w-6 bg-[#000000]' : 'w-2 bg-[#cfcfcf]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* --- md+ : grid layout --- */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
        {/* 1 */}
        <div className="bg-[#F2F4FB] rounded-3xl">
          <div className="px-5 py-5">
            <h3 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-left mt-5 text-black text-xl leading-[1.1]">
              1. Install & Choose
            </h3>
            <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-left mt-2 text-[16px] text-[#474040]">
              Get the Borrowly app, choose your loan amount, and set a tenure that suits you.
            </p>
          </div>
          <div className="h-[450px]">
            <img src={img1} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* 2 */}
        <div className="bg-[#F2F4FB] rounded-3xl">
          <div className="px-5 py-5">
            <h3 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-left mt-5 text-black text-xl leading-[1.1]">
              2. Verify & Apply
            </h3>
            <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-left mt-2 text-[16px] text-[#474040]">
              Verify your mobile number and fill in a few basic details to complete your application
            </p>
          </div>
          <div className="h-[450px]">
            <img src={img2} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* 3 */}
        <div className="bg-[#F2F4FB] rounded-3xl">
          <div className="px-5 py-5">
            <h3 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-left mt-5 text-black text-xl leading-[1.1]">
              3. Eligible Loan Amount
            </h3>
            <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-left mt-2 text-[16px] text-[#474040]">
              After KYC and credit check, view your eligible loan amount and pick repayment terms that suit you
            </p>
          </div>
          <div className="h-[450px]">
            <img src={img3} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* 4 */}
        <div className="bg-gradient-to-b from-[#014094] to-[#015FDA] rounded-3xl text-white flex flex-col">
          <div className="flex flex-1 items-center justify-center px-5 py-5 flex-col">
            <img src={Tick} className="" alt="" />
            <h3 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-left mt-5 text-white text-3xl lg:text-2xl leading-[1.1]">
              Congratulations
            </h3>
            <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-center mt-2 text-[16px] text-white">
              Your Borrowly loan has been disbursed to your account with ABC Bank.
            </p>
          </div>
          <div className=''>
            <img src={congrt} alt="" className="w-[350px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
