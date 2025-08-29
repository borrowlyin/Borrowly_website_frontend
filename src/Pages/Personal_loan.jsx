import Breadcrumbs from "../Components/Breadcrumbs"
import Section_1 from '../Components/Loan_section/Section_1'
import Section_2 from "../Components/Loan_section/Section_2"
import Section_3 from "../Components/Loan_section/Section_3"
import Section_4 from "../Components/Loan_section/Section_4"
import ContactusBanner from '../Components/ContactusBanner'
import EmiCalculator from '../Components/Section_4'
import Section_11 from "../Components/Section_11"
import Footer_New from "../Components/Footer_New"
import Footer_subscribe from "../Components/Footer_subscribe"

import Check_1_1 from '../assets/Images/check_1_.avif'
import Check_2_1 from '../assets/Images/check_2_.avif'

const Personal_loan = () => {
  return (
    <div className="cursor-default mx-auto">
        <div className="px-3 max-w-screen-2xl mx-auto">
            <Breadcrumbs/>
            <Section_1/>
        </div>
        <div className="px-5 max-w-screen-2xl mx-auto">
            <Section_2/>
            <Section_3/>
            <Section_4/>
        </div>
        <div className="pt-10 px-5 w-fit mx-auto">
            <img src={Check_2_1} alt="" className="w-full max-w-[800px]"/>
        </div>
        <div className="mt-5">
            <EmiCalculator options={false} title="Personal Loan Calculators" subtitle="Find the ideal loan plan for you using our easy-to-use Personal Loan Calculator." />
        </div>
        <div className="pt-10 px-5 w-fit mx-auto">
            <img src={Check_1_1} alt="" className="w-full max-w-[800px]"/>
        </div>
        <Section_11/>
        <ContactusBanner/>
        <Footer_subscribe/>
        <Footer_New/>
    </div>
  )
}

export default Personal_loan
