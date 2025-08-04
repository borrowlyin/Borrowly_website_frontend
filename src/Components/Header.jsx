import { FaChevronDown, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import Arrowup from '../assets/icons/Arrow-up.svg';
import ThemeToggle from './ThemeToggle';


const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="cursor-default p-2 md:p-0 px-2 absolute top-0 w-full">
      <div className="px-3 lg:container mx-auto flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2 xl:w-full  xl:max-w-[320px]">
          <img src="/Company_icon.svg" alt="Logo" className='pt-2 h-[70px] md:h-auto'/>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 hidden lg:block">
          <ul
            style={{ fontFamily: 'PovetaracSansBold' }}
            className="flex text-[#111111] justify-center items-center gap-6"
          >
            {['Services', 'Resources', 'About', 'Contact Us'].map((item, index) => (
              <li key={index} className={`text-[18px] cursor-pointer flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <span>{item}</span>
                <FaChevronDown className={`w-3 h-3 stroke-[1.5] ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="w-full max-w-[320px] items-center justify-end hidden lg:flex">
          <div className="flex items-center gap-6">
            <h1 style={{ fontFamily: 'PovetaracSansBold' }} className={`text-lg underline underline-offset-8 ${isDarkMode ? 'text-white' : 'text-black'}`}> Login</h1>
            <button style={{ fontFamily: 'PovetaracSansBold' }}className={` ${isDarkMode?'bg-[#00C2CC]':'bg-[#013476]'} border border-[#55575B] py-2 flex items-center justify-center px-6 text-[18px] rounded-xl text-white`}>
              <span>Apply Now</span>
              <img src={Arrowup} alt="Arrow Up" className="mb-1 ml-2" />
            </button>
            <ThemeToggle  toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
          </div> 
        </div>

        {/* Mobile Menu Icon (Shown below lg) */}
        <div className="lg:hidden flex items-center">
          <FaBars className={`text-2xl ${isDarkMode ? 'text-white' : 'text-[#013476]'} cursor-pointer`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
