import CIBIL_Home_image from '../assets/Images/CIBIL_Home_image_new.avif';

const Footer_subscribe = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-[#08325D] to-[#1D6390]">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-center px-5 gap-8">
        <div className="flex-1 flex flex-col gap-4 justify-center text-center lg:text-left">
          <h1  style={{ fontFamily: "PovetaracSansBlack" }}  className="mt-2 text-[28px] lg:text-[32px] xl:text-[38px] leading-[1.2] text-white">
            Launching soon Borrowly app – your loan journey made simple.
          </h1>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <img src="/Apple_download.svg" alt="Apple Download" className="w-[140px] sm:w-[150px]" />
            <img src="/Google_download.svg" alt="Google Download" className="w-[140px] sm:w-[150px]" />
          </div>
          
          <div>
            <p 
              style={{ fontFamily: 'PovetaracSansBold' }} 
              className="mt-2 text-white max-w-[800px] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-lg text-center lg:text-left"
            >
              or get the link on your phone
            </p>

            <div 
              style={{ fontFamily: "PovetaracSansBold" }} 
              className="bg-white flex flex-col sm:flex-row items-center mx-auto lg:mx-0 gap-2 w-full sm:w-fit mt-3 rounded-lg shadow-md border border-gray-200 p-2"
            >
              <div className="flex-1 w-full max-w-[500px]">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 outline-none text-gray-700 placeholder-gray-400 rounded-md"
                />
              </div>
              <button className="bg-[#0CC066] cursor-pointer hover:bg-[#0aa956] transition text-white px-5 py-2 rounded-lg w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
          <img src={CIBIL_Home_image} alt="Borrowly App Preview" className="w-full max-w-[350px] sm:max-w-[450px]" />
        </div>
      </div>
    </div>
  )
}

export default Footer_subscribe;
