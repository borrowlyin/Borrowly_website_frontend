import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Arrowup from '../assets/Icons/Arrow-up.svg';
import ThemeToggle from './ThemeToggle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import famicons_call from '../assets/Icons/famicons_call.svg';
import iconoir_mail_solid from '../assets/Icons/iconoir_mail-solid.svg';

const menuItems = [
  {
    label: 'Services',
    dropdown: [
      { title: 'Personal Loan', desc: 'Quick funds for personal needs', link: '/' },
      { title: 'Home Loan', desc: 'Finance your dream home easily', link: '/' },
      { title: 'Business Loan', desc: 'Boost your business growth', link: '/' },
      { title: 'Education Loan', desc: 'Support your educational goals', link: '' },
      { title: 'Vehicle Loan', desc: 'Get your new vehicle hassle-free', link: '/' },
      { title: 'Insurance', desc: 'Protect what matters most', link: '/' },
    ],
  },
  {
    label: 'Resources',
    dropdown: [
      { title: 'Blog', desc: 'Latest updates and articles', link: '/Blogs' },
      { title: 'Guides', desc: 'Helpful loan guides', link: '/' },
      { title: 'Tools', desc: 'Financial calculators', link: '/Tools' },
    ],
  },
  {
    label: 'About',
    dropdown: [
      { title: 'Company', desc: 'Learn about us', link: '/About_us' },
      { title: 'Team', desc: 'Meet our team', link: '/' },
      { title: 'Careers', desc: 'Work with us', link: '/Carriers' },
    ],
  },
  {
    label: 'Contact Us',
    dropdown: [
      { title: 'Support', desc: 'Get help and support', link: '/Support' },
      { title: 'Locations', desc: 'Find a branch near you', link: '/' },
      { title: 'Contact', desc: 'Tell us what you think', link: '/Contact_us' },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, pointerEvents: 'none', transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3 } },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'tween', duration: 0.25 } },
  exit: { x: '100%', transition: { type: 'tween', duration: 0.2 } },
};

const mobileSubVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.2 } },
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null); // mobile: which top-level is expanded
  const drawerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // lock scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpandedSection(null);
  }, [location.pathname]);

  // click outside to close (on mobile)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const msg = 'Get 15% off on loan processing charges when you apply through Borrowly. Use code: FREEDOM15 | Valid till 31st August';

  return (
    <>
      <style>{` @keyframes ticker { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-50%,0,0)} }`}</style>

      {/* Top ticker */}
      <div className="h-[30px] w-full bg-gradient-to-r from-[#00C2CC]/35 via-[#fff] to-[#00C2CC]/35 overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap font-medium text-black will-change-transform animate-[ticker_12s_linear_infinite] md:animate-[ticker_20s_linear_infinite]" style={{ transform: 'translateZ(0)' }} aria-label={msg}>
          <div className="flex min-w-[200%] text-[12px]">
            <span className="mx-10">{msg}</span>
            <span className="mx-10">{msg}</span>
            <span className="mx-10">{msg}</span>
            <span className="mx-10">{msg}</span>
          </div>
        </div>
      </div>

       <div className="max-w-screen-2xl mx-auto px-3 md:px-10 flex justify-between items-center h-full">
          {/* Left: Logo */}
          <div className="flex items-center overflow-hidden gap-2 pr-2">
            <img
              src="/Company_icon.svg"
              onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
              alt="Logo"
              className="pt-2 cursor-pointer h-[60px] md:-mt-2.5 md:h-[75px]"
            />
          </div>

          {/* Right: Desktop quick actions */}
          <div className="w-full items-center justify-end hidden md:flex">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <img src={famicons_call} alt="call icon" className="w-4 h-4" />
                <div className="flex gap-3">
                  <a href="tel:18003134151">1800 313 4151</a>/<a href="tel:8980685509">89806 85509</a>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <img src={iconoir_mail_solid} alt="mail icon" className="w-4 h-4" />
                <a href="mailto:Support@Borrowly.in">Support@Borrowly.in</a>
              </div>

              {/* <button
                style={{ fontFamily: 'PovetaracSansBold' }}
                className="py-1 flex items-center justify-center px-4 text-[16px] cursor-pointer rounded-lg text-[#666866] border border-[#CCCCCC]"
              >
                <span>My account</span>
              </button> */}
            </div>
          </div>

          {/* Right: Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center mt-2 p-2 rounded-lg border border-[#e5e5e5]"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

      {/* Header bar */}
      <div className="cursor-default sticky top-0 bg-white border border-t-0 border-l-0 border-r-0 pb-2 md:pb-0 border-b-[#d4d4d4] md:border-b-0 z-50 w-full">
        {/* Desktop nav row */}
        <div className="px-3 bg-[#003478] hidden md:flex h-[50px] mx-auto justify-between items-center">
          <div className="w-fit mx-auto hidden md:flex flex-row">
            <ul
              style={{ fontFamily: 'PovetaracSansBold' }}
              className="flex text-[#111111] justify-left items-center gap-10 relative"
            >
              {menuItems.map(({ label, dropdown }) => (
                <li
                  key={label}
                  className="text-[16px] py-4 cursor-pointer text-white flex items-center gap-2 relative"
                  onMouseEnter={() => setOpenDropdown(label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>{label}</span>
                  <FaChevronDown
                    className={`w-3 h-3 stroke-[1.5] transition-transform duration-300 ${
                      openDropdown === label ? 'rotate-180' : 'rotate-0'
                    }`}
                  />

                  {/* Desktop dropdown */}
                  <AnimatePresence>
                    {openDropdown === label && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 text-[16px] z-50 bg-white dark:bg-[#1a1a1a] overflow-hidden rounded-lg shadow-lg w-80 border border-[#ebf0f5] text-black dark:text-white font-normal"
                        style={{ fontFamily: 'PovetaracSansBold' }}
                      >
                        {dropdown.map(({ title, desc, link }) => (
                          <li
                            key={title}
                            className={`group px-4 py-3 cursor-pointer hover:bg-[#00C2CC] hover:text-white ${
                              selectedDropdownItem === title ? 'bg-[#00C2CC] text-white dark:text-white' : ''
                            }`}
                            onClick={() => {
                              navigate(link);
                              window.scrollTo(0, 0);
                            }}
                          >
                            {title}
                            <p
                              className={`text-[14px] ${
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
        </div>
      </div>

      {/* ===== Mobile Drawer & Overlay ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              ref={drawerRef}
              className="fixed right-0 top-0 bottom-0 w-full bg-white z-[70] shadow-xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-4 py-3 border border-t-0 border-l-0 border-r-0 border-b-[#CCCCCC]">
                <div className="flex items-center gap-2">
                  <img
                    src="/Company_icon.svg"
                    alt="Logo"
                    className="h-16 w-auto"
                    onClick={() => { navigate('/'); setMobileOpen(false); }}
                  />
                </div>
                <button
                  className="p-2 rounded-lg border border-[#CCCCCC]"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              {/* Menu list */}
              <nav className="flex-1 overflow-y-auto">
               <ul style={{ fontFamily: 'PovetaracSansBold' }} className="divide-y divide-[#CCCCCC]">
                  {menuItems.map(({ label, dropdown }) => {
                    const open = expandedSection === label;
                    return (
                      <li key={label} className="px-2">
                        <button
                          className="w-full flex items-center justify-between p-4  text-left"
                          onClick={() =>
                            setExpandedSection((prev) => (prev === label ? null : label))
                          }
                          aria-expanded={open}
                          aria-controls={`section-${label}`}
                        >
                          <span className="text-[16px] font-semibold">{label}</span>
                          <FaChevronDown
                            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
                          />
                        </button>

                        {/* Sub-list */}
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.ul
                              id={`section-${label}`}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={mobileSubVariants}
                              className="pl-3 pb-2"
                            >
                              {dropdown.map(({ title, desc, link }) => (
                                <li key={title}>
                                  <button
                                    className="w-full text-left px-3 py-3 rounded-lg hover:bg-[#f5f7fb]"
                                    onClick={() => {
                                      navigate(link);
                                      window.scrollTo(0, 0);
                                      setMobileOpen(false);
                                      setExpandedSection(null);
                                    }}
                                  >
                                    <div className="text-[15px] font-medium">{title}</div>
                                    <div className="text-[13px] text-[#666]">{desc}</div>
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer actions */}
              <div className="p-4 flex items-center gap-3">
                <button
                  style={{ fontFamily: 'PovetaracSansBlack' }}
                  className="flex-1 py-2.5 rounded-lg border border-[#CCCCCC] text-[16px]"
                  onClick={() => {
                    navigate('/Contact_us');
                    setMobileOpen(false);
                  }}
                >
                  Contact
                </button>
                {/* <button
                  style={{ fontFamily: 'PovetaracSansBlack' }}
                  className="flex-1 py-2.5 rounded-lg border border-[#CCCCCC] text-[16px]"
                  onClick={() => {
                    navigate('/');
                    setMobileOpen(false);
                  }}
                >
                  My account
                </button> */}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
