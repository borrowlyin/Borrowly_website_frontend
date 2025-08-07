import React, { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import India_Map from '../assets/Icons/India_Map.svg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cityData = [
  { name: 'Hyderabad', x: 341, y: 578, available: true },
  { name: 'Delhi', x: 303, y: 281, available: true },
];

const Section_10 = ({ isDarkMode }) => {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const autoCycleRef = useRef();
  const interactionTimeout = useRef();

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);


  useEffect(() => {
    let index = 0;

    const cycleCities = () => {
      setHovered(index);
      index = (index + 1) % cityData.length;
    };

    autoCycleRef.current = gsap.timeline({ repeat: -1, paused: false });
    autoCycleRef.current.call(cycleCities).to({}, { duration: 5 });

    return () => {
      if (autoCycleRef.current) autoCycleRef.current.kill();
    };
  }, []);

  const handleInteraction = (index) => {
    if (isMobile) {
      setHovered((prev) => (prev === index ? null : index));
    } else {
      setHovered(index);
    }

    if (autoCycleRef.current) autoCycleRef.current.pause();

    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      autoCycleRef.current && autoCycleRef.current.resume();
    }, 4000);
  };


   const patchColor = isDarkMode ? "#006AEC" : "#25CBD3";
  const leftPatchRef = useRef(null);
  const rightPatchRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Animate patches
    gsap.to([leftPatchRef.current, rightPatchRef.current], {
      opacity: 0.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate content on scroll into view
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          // Add these two lines to improve mobile reliability
          invalidateOnRefresh: true,
          markers: false, // Set to true for debugging
        },
      }
    );

    // Section trigger to manage visibility state
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setIsInView(true),
      onLeave: () => setIsInView(false),
      onEnterBack: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
      invalidateOnRefresh: true,
      markers: false,
    });

    // Refresh positions after setup (especially useful on mobile)
    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill()); // Optional: Clean up all triggers if needed
    };
  }, []);



  return (
    <div ref={sectionRef} className="relative cursor-default px-5 pt-12 md:mt-24">
  <div ref={leftPatchRef} className="absolute top-[25%] left-[5%] w-[200px] md:w-[400px] h-[400px] hidden md:block rounded-full blur-2xl md:blur-[140px] opacity-60 pointer-events-none z-0" style={{ backgroundColor: patchColor }}/>
      <div ref={rightPatchRef} className="absolute top-[25%] right-[5%] w-[200px] md:w-[400px] h-[400px] hidden md:block rounded-full blur-[140px] opacity-60 pointer-events-none z-0" style={{ backgroundColor: patchColor }}/>
      <div className="lg:container mx-auto py-12 md:py-18 flex flex-col items-center justify-center h-full">
        <h1  style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-center mt-4 text-[28px] lg:text-[36px] xl:text-[40px] leading-[1.1] ${  isDarkMode ? 'text-white' : 'text-black' }`}>
          Crafted in India, designed for Indians
        </h1>
        <p style={{ fontFamily: 'PovetaracSansBold' }} className={`mt-2 px-5 w-full max-w-[900px] text-[14px] text-center lg:text-[14px] xl:text-lg ${  isDarkMode ? 'text-[#CCCCCC]' : 'text-[#696868]' }`}>
          120+ cities, 100+ PIN codes, unlimited taps
        </p>
      </div>

      {/* Map */}
      <div className="relative max-w-[900px] mx-auto">
        <img src={India_Map} alt="India Map" className="w-full h-auto" />

        {cityData.map((city, index) => {
          const isActive = hovered === index;

          return (
            <div key={index} className="absolute group" style={{  left: `${(city.x / 900) * 100}%`, top: `${(city.y / 900) * 100}%`, transform: 'translate(-50%, -50%)',  }}
              onMouseEnter={() => !isMobile && handleInteraction(index)}
              onMouseLeave={() => !isMobile && setHovered(null)}
              onClick={() => handleInteraction(index)}
            >
              <div className="w-3 h-3 bg-white rounded-full cursor-pointer border-2 border-white shadow-lg" />
              {isActive && (
                <div className="absolute z-10 bg-[#B2EDF1] text-black px-3 py-1 text-xs rounded-md shadow-md mt-2 whitespace-nowrap flex items-center gap-2">
                  {city.available ? (
                    <div className="flex flex-col">
                      <h1 style={{ fontFamily: 'PovetaracSansBold' }} className="text-sm -mb-1" >
                        Now Live in
                      </h1>
                      <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-2xl">
                        {city.name}
                      </h1>
                    </div>
                  ) : (
                    <>
                      <FaTimesCircle className="text-red-600 w-4 h-4" />
                      <span> Coming Soon: <strong>{city.name}</strong> </span>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_10;
