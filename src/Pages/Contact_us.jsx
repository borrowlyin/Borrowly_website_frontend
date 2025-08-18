import Header_contactus from "../Components/Header_contactus";
import SupportSection from "../Components/SupportSection";
import BorrowerAegntSection from "../components/BorrowerAegntSection";
import MobileApp from "../Components/MobileApp";
import ServiceRequest from "../Components/ServiceRequest";
import Footer_New from "../Components/Footer_New";


const Contact_us = () => {
  return (
    <div>
      <div className="container mx-auto cursor-default">
        <Header_contactus />
      </div>

      <div className="bg-[#F8F9F9] ">
          <SupportSection />
      </div>

      <div className="container mx-auto cursor-default">
        <div className="px-5 lg:px-12">
          <BorrowerAegntSection />
        </div>
        <MobileApp />
        <ServiceRequest /> 
      </div>
      <div className="bg-[#111111] w-full">
        <Footer_New/>
      </div>
    </div>
  )
}

export default Contact_us
