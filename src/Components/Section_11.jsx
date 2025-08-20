import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is the Borrowly Affiliate Program?',
    answer:
      `The Borrowly Affiliate Program allows anyone to earn income by referring users to our platform.\n\nYou’ll earn:\n- ₹500+ on every successful loan disbursal\n- 50% commission on every agent or course referral\n\nAll earnings are tracked in real time through your personal dashboard.`,
  },
  {
    question: 'How do I become a Borrowly Trusted Agent?',
    answer:
      `To become a verified Borrowly agent:\n\n- Enroll in our one-time ₹1499 certification program\n- Complete onboarding and get access to your affiliate dashboard\n- Start sharing your referral link to earn commissions\n\nOnce registered, you’ll be recognized as a Borrowly Trusted Agent with full access to our services and lifetime earnings.`,
  },
  {
    question: 'Do I need experience to join as an agent or affiliate?',
    answer:
      `No. Our platform is designed for everyone — students, freelancers, influencers, or full-time professionals.\n\nWe provide full support and tools to get you started, even if you have no prior experience.`,
  },
  {
    question: 'What is CIBIL, and why should I check it with Borrowly?',
    answer:
      `CIBIL is a credit score that reflects your financial health. Borrowly helps you check your CIBIL score instantly — for free or at a minimal cost — and understand your loan eligibility.\n\nChecking your score through Borrowly offers:\n- Better loan recommendations\n- Pre-approved offers based on your credit profile\n- Full transparency with zero hidden charges`,
  },
  {
    question: 'How does checking my CIBIL score help with loan approvals?',
    answer:
      `Lenders use your CIBIL score to evaluate your creditworthiness. A higher score increases your chances of getting loans at better interest rates.\n\nBorrowly ensures:\n- You understand your score\n- You apply for loans that match your profile\n- Your loan approval chances are maximized`,
  },
  {
    question: 'What types of loans can I refer or apply for through Borrowly?',
    answer:
      `Borrowly supports:\n- Personal loans\n- Business loans\n- Instant digital loans\n- NBFC and Bank tie-ups\n\nYou or your referrals can compare loan offers and apply directly through our app or website.`,
  },
  {
    question: 'How much can I earn as a Borrowly agent?',
    answer:
      `There’s no earning limit. Agents typically earn:\n- ₹500+ per approved loan\n- 50% commission on every course/agent referral\n- Ongoing income through our lifetime affiliate model\n\nTop performers earn ₹10,000–₹50,000+ monthly, depending on their network size and activity.`,
  },
  {
    question: 'Is this affiliate program legal and transparent?',
    answer:
      `Yes, Borrowly operates under Wiseway Consultants Pvt Ltd, a registered private limited entity.\n\nAll earnings, referrals, and payouts are tracked transparently. Payouts are direct and on time.`,
  },
  {
    question: 'How do I track my referrals and earnings?',
    answer:
      `You get a personal affiliate dashboard where you can:\n- View referrals and loan applications\n- Track course enrollments\n- Monitor your commission in real time\n- Request support and payout history`,
  },
  {
    question: 'What support do I get as a Borrowly Agent?',
    answer:
      `We provide:\n- Onboarding assistance\n- Training materials\n- Ongoing affiliate support\n- Marketing creatives (banners, links, PDFs)`,
  },
];

const Section_11 = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="cursor-default pt-12 md:pt-24">
      <div className="max-w-screen-xl mx-auto pt-12 md:py-18 flex flex-col items-center justify-center h-full">
        <p  style={{ fontFamily: 'PovetaracSansBold' }}  className="text-[#084DB3] text-[14px] bg-[#DEE8F6] text-left rounded-full w-fit px-4 py-1.5" >
          WE’VE GOT YOU COVERED
        </p>
        <h1  style={{ fontFamily: 'PovetaracSansBlack' }} className={`text-center mt-4 text-[28px] lg:text-[36px] xl:text-[40px] leading-[1.1] ${ isDarkMode ? 'text-white' : 'text-black' }`} >
          Frequently Asked Questions
        </h1>

        <div className="py-12 px-5 w-full max-w-[1000px]">
          {visibleFaqs.map((faq, index) => {
            const actualIndex = faqData.indexOf(faq);
            const isActive = activeIndex === actualIndex;

            return (
              <div key={actualIndex}  className="border border-[#C4D2E5] bg-[#F4F6FA] rounded-lg md:rounded-2xl mb-2 md:mb-4 overflow-hidden transition-all duration-300">
                <button  className="flex justify-between cursor-pointer items-center w-full py-4 md:py-6 px-4 md:px-6 lg:px-8 focus:outline-none"  onClick={() => toggleFAQ(actualIndex)}>
                  <h2 style={{ fontFamily: 'PovetaracSansBlack' }}  className="text-black text-[14px] lg:text-xl text-left" >
                    {faq.question}
                  </h2>
                  <span className="text-[#084DB3] text-sm md:text-lg">
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div  className={`px-4 md:px-6 lg:px-8 transition-all duration-300 ease-in-out overflow-hidden ${  isActive ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pt-0 pb-0' }`} >
                  <p  style={{ fontFamily: 'PovetaracSansBold' }}   className="text-[#696969] text-[14px] lg:text-lg whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}

          {faqData.length > 5 && (
            <div className="flex justify-center mt-8">
              <button
                style={{ fontFamily: 'PovetaracSansBlack' }}
                onClick={() => setShowAll((prev) => !prev)}
                className="text-[#7a7a7a] font-medium hover:underline cursor-pointer underline-offset-4 text-xl" 
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section_11;
