import Breadcrumbs from "../Components/Breadcrumbs";
import Section_1 from "../Components/Loan_section/Section_1";
import Section_2 from "../Components/Loan_section/Section_2";
import Section_3 from "../Components/Loan_section/Section_3";
import Section_4 from "../Components/Loan_section/Section_4";
import ContactusBanner from '../Components/ContactusBanner';
import EmiCalculator from '../Components/Section_4';
import Section_11 from "../Components/Section_11";
import Footer_New from "../Components/Footer_New";
import Footer_subscribe from "../Components/Footer_subscribe";
import Vehicle_loan from '../assets/Images/Vehicle_loan.avif';
import Check_1_1 from '../assets/Images/check_1_.avif';
import Check_2_1 from '../assets/Images/check_2_.avif';
import Featurn from '../assets/Images/Featurn_2.avif';

const VehicleLoan = () => {
  return (
    <div className="cursor-default mx-auto">
      <div className="px-3 max-w-screen-2xl mx-auto">
        <Breadcrumbs/>
        <Section_1 
          tag="Vehicle Loans"
          title="From First Ride to Dream Drive — We Make It Easy."
          description="From your dream car to a daily two-wheeler or even commercial vehicles for your business — Borrowly makes it simple. Get fast approvals, competitive rates, and flexible tenures with a hassle-free loan experience."
          image={Vehicle_loan}
        />
      </div>

      <div className="px-5 max-w-screen-2xl mx-auto">
        <Section_2 
          description="Now get a vehicle loan online at your fingertips with competitive interest rates and flexible tenures. What’s more, you can explore pre-approved vehicle loans from 30+ banks and NBFCs, all in one place.

Borrowly provides smarter financial solutions to help you own your dream car, a two-wheeler for daily rides, or commercial vehicles to grow your business. Whether it’s a first bike, a family car, or a fleet upgrade — find the best offers, interest rates, and EMI options, all online."
        />
        <Section_3/>
         <Section_4
      featureImg={Featurn}
      loanType="Vehicle Loan"
      whoCanApply={[
        "18–65 years",
        "₹15,000 or more",
      ]}
       whoCanApplyNote="We don’t discriminate between salaried or self–employed applicants — everyone is welcome!"

      requiredDocs={[
        "PAN Card",
        "Aadhaar Card",
        "Income Proof",
        "Vehicle-related documents",
      ]}
        requiredDocsNote="Get credit easily in just 5 minutes! Keep these handy:"

      loanDetails={[
        { label: "Interest Rate", value: "Starting from 8.99% p.a. onwards" },
        { label: "Loan Amount", value: "From ₹50,000 to ₹25 lakhs" },
        { label: "Tenure", value: "Flexible terms ranging from 12 months to 7 years" },
        { label: "Processing Fees", value: " 0.5% to 3% of loan amount (varies by lender)" },
        { label: "Coverage:", value: " Car Loans | Two-Wheeler Loans | Commercial Vehicle Loans" },
      ]}
      docSections={[
  {
    title: "Salaried Applicants",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "Latest 3–6 months salary slips / bank statements" },
      { label: "Vehicle Proof:", value: "Quotation / Proforma Invoice from dealer" },
    ],
  },
  {
    title: "Self-Employed",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "ITR + audited financials (last 2 yrs) & bank statements (6–12 months)" },
      { label: "Vehicle Proof:", value: "Quotation / Invoice" },
    ],
  },
  {
    title: "NRI Applicants",
    items: [
      { label: "Passport & Visa:", value: "Valid passport and visa" },
      { label: "Employment Proof:", value: "Official work email/HR email, salary slips" },
      { label: "Banking:", value: "NRE/NRO and salary account statements (last 6 months)" },
      { label: "KYC:", value: "ID, address, income & asset proof" },
      { label: "Photos:", value: "Recent passport-size (self & guarantor, if required)" },
      { label: "Vehicle Proof:", value: "Proforma invoice / RC copy" },
    ],
  },
  {
    title: "Pro tips",
    tips: [
      { text: "Clear scans are fine — no originals needed online.", bold: true },
      { text: "Ensure your PAN matches your KYC & bank details.", bold: true },
    ],
  },
]
}
    />
      </div>

      <div className="pt-10 px-5 w-fit mx-auto">
        <img src={Check_2_1} alt="" className="w-full max-w-[800px]"/>
      </div>

      <div className="mt-5">
        <EmiCalculator options={false} title="Vehicle Loan Calculators" subtitle="Find the ideal loan plan for you using our easy-to-use Vehicle Loan Calculator." />
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

export default VehicleLoan;
