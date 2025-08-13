import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Arrowup from '../assets/Icons/Arrow-up.svg';
import ThemeToggle from './ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    label: 'Services',
    dropdown: [
      { title: 'Personal Loan', desc: 'Quick funds for personal needs' },
      { title: 'Home Loan', desc: 'Finance your dream home easily' },
      { title: 'Business Loan', desc: 'Boost your business growth' },
      { title: 'Education Loan', desc: 'Support your educational goals' },
      { title: 'Vehicle Loan', desc: 'Get your new vehicle hassle-free' },
      { title: 'Insurance', desc: 'Protect what matters most' },
    ],
  },
  {
    label: 'Resources',
    dropdown: [
      { title: 'Blog', desc: 'Latest updates and articles' },
      { title: 'Guides', desc: 'Helpful loan guides' },
      { title: 'Tools', desc: 'Financial calculators' },
    ],
  },
  {
    label: 'About',
    dropdown: [
      { title: 'Company', desc: 'Learn about us' },
      { title: 'Team', desc: 'Meet our team' },
      { title: 'Careers', desc: 'Work with us' },
    ],
  },
  {
    label: 'Contact Us',
    dropdown: [
      { title: 'Support', desc: 'Get help and support' },
      { title: 'Locations', desc: 'Find a branch near you' },
      { title: 'Feedback', desc: 'Tell us what you think' },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, pointerEvents: 'none', transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3 } },
};

const Header = ({ isDarkMode, toggleTheme }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const navigate = useNavigate();

  const toggleSection = (label) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="cursor-default p-2 md:p-0 px-2 absolute top-0 w-full">
        <div className="px-3 lg:container mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 xl:w-full xl:max-w-[320px]">
            <img src="/Company_icon.svg" alt="Logo" className="pt-2 h-[70px] md:h-auto" />
          </div>

          {/* Main Navigation */}
          <div className="flex-1 hidden lg:block">
            <ul
              style={{ fontFamily: 'PovetaracSansBold' }}
              className="flex text-[#111111] justify-center items-center gap-6 relative"
            >
              {menuItems.map(({ label, dropdown }) => (
                <li
                  key={label}
                  className={`text-[18px] py-4 cursor-pointer flex items-center gap-2 relative ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                  onMouseEnter={() => setOpenDropdown(label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>{label}</span>
                  <FaChevronDown
                    className={`w-3 h-3 stroke-[1.5] transition-transform duration-300 ${
                      openDropdown === label ? 'rotate-180' : 'rotate-0'
                    } ${isDarkMode ? 'text-[#ffffff]' : 'text-[#000000]'}`}
                  />

                  {/* Dropdown with Framer Motion */}
                  <AnimatePresence>
                    {openDropdown === label && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 text-lg z-50 bg-white dark:bg-[#1a1a1a] overflow-hidden rounded-lg shadow-lg w-80 border border-[#ebf0f5] text-black dark:text-white font-normal"
                        style={{ fontFamily: 'PovetaracSansBold' }}
                      >
                        {dropdown.map(({ title, desc }) => (
                          <li
                            key={title}
                            className={`group px-4 py-2 cursor-pointer hover:bg-[#00C2CC] hover:text-white ${
                              selectedDropdownItem === title ? 'bg-[#00C2CC] text-white dark:text-white' : ''
                            }`}
                            onClick={() => setSelectedDropdownItem(title)}
                          >
                            {title}
                            <p
                              className={`text-sm ${
                                selectedDropdownItem === title
                                  ? 'text-white'
                                  : 'text-[#707070] dark:text-gray-400 group-hover:text-white'
                              }`}
                            >
                              {desc}
                            </p>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Buttons */}
          <div className="w-full max-w-[320px] items-center justify-end hidden lg:flex">
            <div className="flex items-center gap-6">
              <Link
                to="/login"
                style={{ fontFamily: 'PovetaracSansBold' }}
                className={`text-lg underline underline-offset-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                Login
              </Link>
              <button
                style={{ fontFamily: 'PovetaracSansBold' }}
                className={`${
                  isDarkMode ? 'bg-[#00C2CC]' : 'bg-[#013476]'
                } border border-[#55575B] py-2 flex items-center justify-center px-6 text-[18px] rounded-xl text-white`}
              >
                <span>Apply Now</span>
                <img src={Arrowup} alt="Arrow Up" className="mb-1 ml-2" />
              </button>
              <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="bg-gray-100 lg:hidden p-2 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => {
                setMobileOpen(true);
                window.scrollTo(0, 0);
              }}
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-white dark:bg-[#1a1a1a] p-2 z-[100] flex flex-col">
            {/* Top Bar */}
            <div className="px-3 w-full mx-auto flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center gap-2 xl:w-full xl:max-w-[320px]">
                <img src="/Company_icon.svg" alt="Logo" className="pt-2 h-[70px] md:h-auto" />
              </div>

              {/* Close Icon */}
              <div className="lg:hidden flex items-center">
                <div className="bg-gray-100 p-2 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isDarkMode ? 'white' : 'black'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => setMobileOpen(false)}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Accordion Menu */}
            <div className="flex flex-col gap-2 overflow-scroll pt-6 p-2">
              <div
                className={`flex justify-between items-center px-4 py-4 rounded-2xl bg-gray-50 cursor-pointer`}
                onClick={() => {
                  navigate('/');
                  setMobileOpen(false);
                }}
              >
                <span className="text-lg font-bold">Home</span>
              </div>
              {menuItems.map(({ label, dropdown }) => (
                <div key={label} className="">
                  <div
                    className={`flex justify-between items-center px-4 py-4 bg-gray-50 cursor-pointer ${
                      expandedSection === label ? 'rounded-t-xl ' : 'rounded-xl'
                    }`}
                    onClick={() => toggleSection(label)}
                  >
                    <span className="text-lg font-bold">{label}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        expandedSection === label ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Expanded Dropdown */}
                  {expandedSection === label && (
                    <ul className="pb-6 bg-gray-50 px-5 rounded-b-2xl space-y-2">
                      {dropdown.map(({ title }) => (
                        <li
                          key={title}
                          className="text-[16px] cursor-pointer hover:text-[#00C2CC]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Buttons at Bottom */}
              <div className="mt-6 flex flex-row gap-1.5">
                <button
                  onClick={() => {
                    navigate('/login');
                    window.scrollTo(0, 0);
                  }}
                  style={{ fontFamily: 'PovetaracSansBlack' }}
                  className={`${
                    isDarkMode ? 'bg-[#00C2CC]' : 'bg-[#00C2CC]'
                  } flex-1 py-4 flex items-center justify-center px-6 text-[18px] rounded-xl text-white`}
                >
                  <span>Login</span>
                </button>
                <button
                  style={{ fontFamily: 'PovetaracSansBlack' }}
                  className={`${
                    isDarkMode ? 'bg-[#00C2CC]' : 'bg-[#013476]'
                  } border border-[#55575B] py-4 flex-1 flex items-center justify-center px-6 text-[18px] rounded-xl text-white`}
                >
                  <span>Apply Now</span>
                  <img src={Arrowup} alt="Arrow Up" className="mb-1 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
