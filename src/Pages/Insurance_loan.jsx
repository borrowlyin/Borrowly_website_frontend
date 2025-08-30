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
import Insurance from '../assets/Images/Insurance.avif';
import Check_1_1 from '../assets/Images/check_1_.avif';
import Check_2_1 from '../assets/Images/check_2_.avif';
import Featurn from '../assets/Images/Featurn_6.avif';

const InsuranceLoan = () => {
  return (
    <div className="cursor-default mx-auto">
      <div className="px-3 max-w-screen-2xl mx-auto">
        <Breadcrumbs/>
        <Section_1 
          tag="Insurance"
          title="From First Rides to Fleet Upgrades We Make It Easy"
          description="Whether it’s your dream car, a two-wheeler for daily travel, or commercial vehicles to grow your business — Borrowly’s vehicle loans are tailored for speed, simplicity, and support."
          image={Insurance}
        />
      </div>

      <div className="px-5 max-w-screen-2xl mx-auto">
     
        
        <Section_2 
          description='Now get insurance online at your fingertips with affordable premiums and wide coverage options. What’s more, you can explore pre-approved insurance plans from 30+ trusted providers, all in one place.

Borrowly provides smarter financial protection for your health, life, vehicle, and home. Whether it’s securing your family’s future, covering medical expenses, or safeguarding your assets — find the best plans, premiums, and benefits, all online.'/>
        <Section_3/>

<Section_4
  featureImg={Featurn}
  loanType="Insurance"
  whoCanApply={["18–65 years", "Salaried, self-employed, or business"," health, life, vehicle, or property coverage"]}
 whoCanApplyNote="We don’t discriminate between salaried or self–employed applicants — everyone is welcome!"
  requiredDocs={["PAN Card", "Aadhaar Card", "Income Proof","Insurance-specific documents"]}
  requiredDocsNote="Get credit easily in just 5 minutes! Keep these handy:"
  loanDetails={[
    { label: "Premiums", value: "Starting from as low as ₹500 per month" },
    { label: "Coverage Amount", value: "From ₹1 lakh to ₹1 crore+" },
    { label: "Tenure", value: "Flexible policy terms from 1 year to lifetime cover" },
    { label: "Processing Fees", value: "Zero to minimal (varies by insurer)" },
    { label: "Coverage:", value: "Health Insurance | Life Insurance | Vehicle Insurance | Property / Home Insurance" },

  ]}
  docSections={ [
  {
    title: "Salaried Applicants",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      {
        label: "Income Proof:",
        value: "Salary slips / Bank statements (if required for policy type)",
      },
      {
        label: "Medical Proof:",
        value: "Health reports (for applicable policies)",
      },
    ],
  },
  {
    title: "Self-Employed",
    items: [
      { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
      { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
      {
        label: "Income Proof:",
        value: "ITR / Bank statements (6–12 months)",
      },
      {
        label: "Medical Proof:",
        value: "Health check-up reports (for certain health/life policies)",
      },
    ],
  },
  {
    title: "NRI Applicants",
    items: [
      { label: "Passport & Visa:", value: "Valid passport and visa" },
      { label: "Employment Proof:", value: "Work contract / HR letter" },
      {
        label: "Banking:",
        value: "NRE/NRO account statements (last 6 months)",
      },
      { label: "KYC:", value: "ID, address, income & asset proof" },
      {
        label: "Insurance Proof:",
        value: "Medical or property-related documents depending on plan",
      },
    ],
  },
  {
    title: "Pro tips",
    tips: [
      {
        text: "Clear scans are fine — no originals needed online",
        bold: true,
      },
      {
        text: "Health insurance may require medical tests depending on age & sum assured",
        bold: true,
      },
      {
        text: "Ensure PAN & Aadhaar are updated for faster approval",
        bold: true,
      },
   ],
    }
    ]
  }
/>

      </div>

      <div className="pt-10 px-5 w-fit mx-auto">
        <img src={Check_2_1} alt="" className="w-full max-w-[800px]"/>
      </div>

      <div className="mt-5">
        <EmiCalculator options={false} title="Insurance Calculators" subtitle="Find the ideal loan plan for you using our easy-to-use Insurance Loan Calculator." />
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

export default InsuranceLoan;
