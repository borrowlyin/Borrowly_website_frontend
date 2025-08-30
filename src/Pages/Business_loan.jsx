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
import Business_loan from '../assets/Images/Business_loan.avif';
import Check_1_1 from '../assets/Images/check_1_.avif';
import Check_2_1 from '../assets/Images/check_2_.avif';
import Featurn from '../assets/Images/Featurn_5.avif';

const BusinessLoan = () => {
  return (
    <div className="cursor-default mx-auto">
      <div className="px-3 max-w-screen-2xl mx-auto">
        <Breadcrumbs/>
        <Section_1 
          tag="Business Loans"
          title="For Every Leap You Take, We’re Right Behind You."
          description="Your business deserves more than just funding — it deserves a partner. At Borrowly, our business loans are built around your goals. Whether you're expanding operations, hiring talent, or investing."
          image={Business_loan}
        />
      </div>

      <div className="px-5 max-w-screen-2xl mx-auto">
     
        
        <Section_2 
          description='Now get a business loan online at your fingertips with competitive interest rates and flexible tenures. What’s more, you can explore pre-approved business loans from 30+ banks and NBFCs, all in one place.

Borrowly provides smarter financial solutions to help you start, manage, or expand your business. Whether it’s working capital, equipment purchase, shop renovation, or scaling operations — find the best offers, interest rates, and EMI options, all online.'/>
        <Section_3/>

<Section_4
  featureImg={Featurn}
  loanType="Business Loan"
  whoCanApply={["21–65 years", "₹25,000 or more"]}
 whoCanApplyNote="We don’t discriminate between salaried or self–employed applicants — everyone is welcome!"
  requiredDocs={["PAN Card", "Aadhaar Card", "Income Proof","Business-related documents (GST, ITR, Registration, Bank Statements)"]}
  requiredDocsNote="Get credit easily in just 5 minutes! Keep these handy:"
  loanDetails={[
    { label: "Interest Rate", value: "Starting from 10.99% p.a. onwards" },
    { label: "Loan Amount", value: "From ₹1 lakh to ₹50 lakhs" },
    { label: "Tenure", value: "Flexible repayment terms ranging from 12 months to 5 years" },
    { label: "Processing Fees", value: "1% to 3% of loan amount (varies by lender)" },
    { label: "Coverage:", value: "Working Capital Loans | Equipment / Machinery Purchase | Shop / Office Renovation | Business Expansion" },

  ]}
  docSections={[
  {
    title: "Salaried Applicants",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "Latest 3–6 months salary slips / bank statements" }
    ]
  },
  {
    title: "Self-Employed",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "ITR + audited financials (last 2 yrs) & bank statements (6–12 months)" },
      { label: "Business Proof:", value: "GST certificate / Udyam / Business registration / Trade license" }
    ]
  },
  {
    title: "NRI Applicants",
    items: [
      { label: "Passport & Visa:", value: "Valid passport and visa" },
      { label: "Employment Proof:", value: "Official work email/HR email, salary slips" },
      { label: "Banking:", value: "NRE/NRO and salary account statements (last 6 months)" },
      { label: "KYC:", value: "ID, address, income & asset proof" },
      { label: "Photos:", value: "Recent passport-size (self & guarantor, if required)" },
      { label: "Business Proof:", value: "Investment / Ownership documents" }
    ]
  },
  {
    title: "Pro tips",
    tips: [
      { text: "Keep business financials and GST returns ready for faster approval.", bold: true },
      { text: "Ensure PAN details match KYC & business registration docs.", bold: true },
      { text: "Clear digital scans are acceptable — no originals needed online.", bold: true }
    ]
  }
]

}
/>

      </div>

      <div className="pt-10 px-5 w-fit mx-auto">
        <img src={Check_2_1} alt="" className="w-full max-w-[800px]"/>
      </div>

      <div className="mt-5">
        <EmiCalculator options={false} title="Business Loan Calculators" subtitle="Find the ideal loan plan for you using our easy-to-use Business Loan Calculator." />
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

export default BusinessLoan;
