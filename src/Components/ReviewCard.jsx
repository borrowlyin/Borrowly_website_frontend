import React, { useRef, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Review_Image from '../assets/Images/Review_Image.png';

gsap.registerPlugin(ScrollToPlugin);

const reviewList = [
  {
    name: 'Lokesh',
    age: 32,
    quote: `“ I have been using LazyPay for a while now and the experience has just been amazing and hassle-free! Literally one-tap is all you need to checkout on apps. So whenever I'm hungry, I just skip to the ordering part. It's so fast that I'm never going back to other payment methods. “`,
    image: Review_Image,
  },
  {
    name: 'Anjali',
    age: 28,
    quote: `“ I have been using LazyPay for a while now and the experience has just been amazing and hassle-free! Literally one-tap is all you need to checkout on apps. So whenever I'm hungry, I just skip to the ordering part. It's so fast that I'm never going back to other payment methods. “`,
    image: Review_Image,
  },
  {
    name: 'Rahul',
    age: 35,
    quote: `“ I have been using LazyPay for a while now and the experience has just been amazing and hassle-free! Literally one-tap is all you need to checkout on apps. So whenever I'm hungry, I just skip to the ordering part. It's so fast that I'm never going back to other payment methods. “`,
    image: Review_Image,
  },
  {
    name: 'Meena',
    age: 26,
    quote: `“ I have been using LazyPay for a while now and the experience has just been amazing and hassle-free! Literally one-tap is all you need to checkout on apps. So whenever I'm hungry, I just skip to the ordering part. It's so fast that I'm never going back to other payment methods. “`,
    image: Review_Image,
  },
  {
    name: 'Karthik',
    age: 30,
    quote: `“ I have been using LazyPay for a while now and the experience has just been amazing and hassle-free! Literally one-tap is all you need to checkout on apps. So whenever I'm hungry, I just skip to the ordering part. It's so fast that I'm never going back to other payment methods. “`,
    image: Review_Image,
  },
];

const GAP = 20;
const VISIBLE_CARDS = 3;

const getCardWidth = (width) => {
  if (width >= 1024) return 800;
  if (width >= 768) return 600;
  return 350;
};

const ReviewCard = () => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const [, setTick] = useState(0);
  const [cardWidth, setCardWidth] = useState(getCardWidth(window.innerWidth));
  const [currentIndex, setCurrentIndex] = useState(1); // For dot tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const reviews = [
    reviewList[reviewList.length - 1],
    ...reviewList,
    reviewList[0],
  ];

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardStep = cardWidth + GAP;
    container.scrollLeft = cardStep;

    const interval = setInterval(() => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const currentScroll = container.scrollLeft;
      const maxScroll = (reviews.length - 1) * cardStep;
      const target = currentScroll + cardStep;

      gsap.to(container, {
        scrollTo: { x: target },
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          if (target >= maxScroll - cardStep / 2) {
            container.scrollLeft = cardStep;
          }
          isScrolling.current = false;
        },
      });
    }, 3000);

    const onScroll = () => {
      const index = getCenterIndex();
      setCurrentIndex(index);
      setTick((t) => t + 1);
    };
    container.addEventListener('scroll', onScroll);

    return () => {
      clearInterval(interval);
      container.removeEventListener('scroll', onScroll);
    };
  }, [cardWidth]);

  const scroll = (direction) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    const container = scrollRef.current;
    if (!container) return;

    const cardStep = cardWidth + GAP;
    const currentScroll = container.scrollLeft;
    const maxScroll = (reviews.length - 1) * cardStep;
    const target =
      direction === 'left'
        ? currentScroll - cardStep
        : currentScroll + cardStep;

    gsap.to(container, {
      scrollTo: { x: target },
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        if (direction === 'right' && target >= maxScroll - cardStep / 2) {
          container.scrollLeft = cardStep;
        } else if (direction === 'left' && target <= cardStep / 2) {
          container.scrollLeft = maxScroll - cardStep * 2;
        }
        isScrolling.current = false;
      },
    });
  };

  const getCenterIndex = () => {
    const container = scrollRef.current;
    if (!container) return 0;

    const cardStep = cardWidth + GAP;
    const scrollLeft = container.scrollLeft;
    return Math.round(scrollLeft / cardStep);
  };

  const getCardOpacity = (index) => {
    return index === getCenterIndex() ? 1 : 0.25;
  };

  const containerWidth = cardWidth * VISIBLE_CARDS + GAP * (VISIBLE_CARDS - 1);
  const sidePadding = (containerWidth - cardWidth) / 2;

  // Mobile swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        scroll('right');
      } else {
        scroll('left');
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center">
      <div
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex flex-row items-center px-5 pb-5 hide-scrollbar"
        style={{
          width: `${containerWidth}px`,
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          gap: `${GAP}px`,
          paddingLeft: `${sidePadding}px`,
          paddingRight: `${sidePadding}px`,
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="h-[350px] md:h-[400px] flex-shrink-0 relative bg-[#F8F6F6] rounded-4xl p-3 transition-opacity duration-300"
            style={{
              scrollSnapAlign: 'center',
              opacity: getCardOpacity(index),
              width: `${cardWidth}px`,
            }}
          >
            {getCenterIndex() === index && (
              <>
                {/* Arrows visible only on md and above */}
                <button  className="absolute z-10 -left-6 top-1/2 transform cursor-pointer -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:scale-110 transition hidden md:flex"  onClick={() => scroll('left')}>
                  <IoIosArrowBack className="w-8 h-8" />
                </button>

                <button className="absolute z-10 -right-6 top-1/2 transform cursor-pointer -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:scale-110 transition hidden md:flex" onClick={() => scroll('right')} >
                  <IoIosArrowForward className="w-8 h-8" />
                </button>
              </>
            )}

            <div className="flex flex-row h-full">
              <img src={review.image} alt="" className="h-full hidden md:flex" />
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex-1 flex items-center">
                  <h1 style={{ fontFamily: 'PovetaracSansBold' }}>{review.quote}</h1>
                </div>
                <div className="py-6 flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={review.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col px-4">
                    <h1 className="text-lg" style={{ fontFamily: 'PovetaracSansBlack' }}>{review.name}</h1>
                    <h1 className="text-[14px]" style={{ fontFamily: 'PovetaracSansBold' }}>Age - {review.age}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for mobile */}
      <div className="flex pb-3 justify-center md:hidden">
        {reviewList.map((_, index) => {
          const adjustedIndex = index + 1;
          return (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                currentIndex === adjustedIndex ? 'bg-black scale-125' : 'bg-gray-400'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
