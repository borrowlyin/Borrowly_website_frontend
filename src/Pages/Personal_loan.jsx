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
import Person_loan from '../assets/Images/Personal_loan.avif';
import Check_1_1 from '../assets/Images/check_1_.avif';
import Check_2_1 from '../assets/Images/check_2_.avif';
import Featurn from '../assets/Images/Featurn_1.avif';

const PersonalLoan = () => {
  return (
    <div className="cursor-default mx-auto">
      <div className="px-3 max-w-screen-2xl mx-auto">
        <Breadcrumbs/>
        <Section_1 
          tag="Personal Loans"
          title="Find the right personal Loan rate for you"
          description="Need to consolidate debt or make a large purchase? we bring the lenders to you so you can shop and compare personal loan offers in minutes."
          image={Person_loan}
        />
      </div>

      <div className="px-5 max-w-screen-2xl mx-auto">
     
        
        <Section_2 
          description='Now get a personal loan online at your fingertips with a competitive interest rate. It gets better as there are flexible loan tenures. You can now benefit the most from pre-approved personal loans online with more than 30+ banks and NBFCs as lending options.

        Buddy Loan provides better financial solutions to fund your marriage, medical, and travel expenses. There is more to it; you can now avail of an online personal loan for home renovation, education, and car purchases. Read on to know more about personal loan lenders, offers, interest rates and EMI options.'
        />
        <Section_3/>

<Section_4
  featureImg={Featurn}
  loanType="Personal Loan"
  whoCanApply={["18–65 years", "₹15,000 or more"]}
 whoCanApplyNote="We don’t discriminate between salaried or self–employed applicants — everyone is welcome!"
  requiredDocs={["PAN Card", "Aadhaar Card", "Income Proof"]}
  requiredDocsNote="Get credit easily in just 5 minutes! Keep these handy:"
  loanDetails={[
    { label: "Interest Rate", value: "Starting from 11.99% p.a. onwards" },
    { label: "Loan Amount", value: "From ₹10,000 to ₹15 lakhs" },
    { label: "Tenure", value: "Flexible terms ranging from 6 months to 5 years" },
    { label: "Processing Fees", value: "0.5% to 4% of loan amount (may vary across lenders)" },
  ]}
  docSections={[
  {
    title: "Salaried",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "Last 3–6 months’ salary slips or bank statements (Form 16 if asked)" },
    ],
  },
  {
    title: "Self-Employed",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      { label: "Income Proof:", value: "ITR + audited financials (last 2 yrs) and bank statements (6–12 months)" },
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
    ],
  },
  {
    title: "Pro tips",
    tips: [
      { text: "Clear scans/photos are fine—no originals needed during online apply.", bold: true },
      { text: "Make sure your PAN matches your bank/KYC details.", bold: true },
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

export default PersonalLoan;
