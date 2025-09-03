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
import Home_loan from '../assets/Images/Home_loan.avif';
import Check_1_1 from '../assets/Images/check_1_.avif';
import Check_2_1 from '../assets/Images/check_2_.avif';
import Featurn from '../assets/Images/Featurn_3.avif';

const HomeLoan = () => {
  return (
    <div className="cursor-default mx-auto">
      <div className="px-3 max-w-screen-2xl mx-auto">
        <Breadcrumbs/>
        <Section_1 
          loanType="Home Loan"
          tag="Home Loan"
          title="Turning Blueprints Into Reality — With Trust and Ease"
          description="At Borrowly, we believe a home loan is more than just financing — it’s the foundation of a future well-lived. Whether it’s your first home or your next big move, we make the process seamless."
          image={Home_loan}
        />
      </div>

      <div className="px-5 max-w-screen-2xl mx-auto">
     
        
        <Section_2 
          description='Now get a home loan online at your fingertips with competitive interest rates and flexible tenures. What’s more, you can explore pre-approved home loans from 30+ banks and NBFCs, all in one place.

          Borrowly provides smarter financial solutions to help you buy your dream house, renovate your existing home, or invest in property. Whether it’s your first home, a bigger space for your family, or a smart investment — find the best offers, interest rates, and EMI options, all online'/>
        <Section_3/>

<Section_4
  featureImg={Featurn}
  loanType="Home Loan"
  whoCanApply={["18–65 years", "₹15,000 or more" ,"Salaried, self-employed, or business owners "]}
 whoCanApplyNote="We don’t discriminate between salaried or self–employed applicants — everyone is welcome!"
  requiredDocs={["PAN Card", "Aadhaar Card", "Income Proof","Property-related documents"]}
  requiredDocsNote="Get credit easily in just 5 minutes! Keep these handy:"
  loanDetails={[
    { label: "Interest Rate", value: "Starting from 8.25% p.a. onwards" },
    { label: "Loan Amount", value: " From ₹3 lakhs to ₹5 crores" },
    { label: "Tenure", value: "Flexible terms ranging from 5 years to 30 years" },
    { label: "Processing Fees", value: "0.25% to 1% of loan amount (varies by lender)" },
    { label: "Coverage:", value: "New Home Purchase,Home Construction, Home Renovation / Extension,Plot + Construction Loans" },
  ]}
  docSections={[
  {
    title: "Salaried Applicants",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "Latest 3–6 months salary slips / bank statements" },
      { label: "Property Documents:", value: "Sale deed / Allotment letter / Builder agreement" },
    ],
  },
  {
    title: "Self-Employed",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "ITR + audited financials (last 2 yrs) & bank statements (6–12 months)" },
      { label: "Property Documents:", value: "Sale deed / Title deed / NOC / Approved building plan" },
    ],
  },
  {
    title: "NRI Applicants",
    items: [
      { label: "Passport & Visa:", value: "Valid passport and visa" },
      { label: "Employment Proof:", value: "Official work email/HR email, salary slips" },
      { label: "Banking:", value: "NRE/NRO and salary account statements (last 6 months)" },
      { label: "KYC:", value: "ID, address, income & asset proof" },
      { label: "Property Documents:", value: "Sale deed / Allotment letter / Builder NOC" },
      { label: "Photos:", value: "Recent passport-size photos (self & guarantor, if required)" },
    ],
  },
  {
    title: "Pro tips",
    tips: [
      { text: "Keep property-related documents ready for faster approval.", bold: true ,},
      { text: "Ensure your PAN matches your KYC & bank details.", bold: true },
      { text: "Clear digital scans are acceptable — no need for originals during online apply.", bold: true },
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
        <EmiCalculator options={false} title="Home Loan Calculators" subtitle="Find the ideal loan plan for you using our easy-to-use Home Loan Calculator." />
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

export default HomeLoan;
