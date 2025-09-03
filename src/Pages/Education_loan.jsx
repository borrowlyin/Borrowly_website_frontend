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
import Education_loan from '../assets/Images/Education_loan.avif';
import Check_1_1 from '../assets/Images/check_1_.avif';
import Check_2_1 from '../assets/Images/check_2_.avif';
import Featurn from '../assets/Images/Featurn_4.avif';

const EducationLoan = () => {
  return (
    <div className="cursor-default mx-auto">
      <div className="px-3 max-w-screen-2xl mx-auto">
        <Breadcrumbs/>
        <Section_1 
          loanType="Education Loan"
          tag="Education loan"
          title="Turning Study Abroad Plans Into Reality."
          description="Studying overseas is a life-changing experience — we make it financially possible. At Borrowly, our Foreign Education Loans cover tuition, living costs, travel, and more, with fast approvals."
          image={Education_loan}
        />
      </div>

      <div className="px-5 max-w-screen-2xl mx-auto">
     
        
        <Section_2 
          description='Now get an education loan online at your fingertips with competitive interest rates and flexible repayment options. What’s more, you can explore pre-approved education loans from 30+ banks and NBFCs, all in one place.

Borrowly provides smarter financial solutions to help you pursue higher studies in India or abroad. Whether it’s tuition fees, living expenses, study materials, or travel — find the best offers, interest rates, and EMI options, all online.'/>
        <Section_3/>

<Section_4
  featureImg={Featurn}
  loanType="Education Loan"
  whoCanApply={["18–65 years", "₹15,000 or more","higher studies in India or abroad"]}
 whoCanApplyNote="We don’t discriminate between salaried or self–employed applicants — everyone is welcome!"
  requiredDocs={["PAN Card", "Aadhaar Card", "Income Proof","Admission Letter","Fee Structure"]}
  requiredDocsNote="Get credit easily in just 5 minutes! Keep these handy:"
  loanDetails={[
    { label: "Interest Rate", value: "Starting from 8.99% p.a. onwards" },
    { label: "Loan Amount", value: "From ₹50,000 to ₹40 lakhs" },
    { label: "Tenure", value: "Flexible terms ranging from 1 year to 15 years" },
    { label: "Processing Fees", value: "0.5% to 2% of loan amount (varies by lender)" },
    { label: "Coverage:", value: "Tuition Fees | Hostel / Living Expenses | Study Materials & Equipment | Travel & Visa Expenses (for abroad studies)" },

  ]}
  docSections={[
    {
      title: "Salaried Applicants",
      items: [
        { label: "ID Proof:", value: "PAN / Aadhaar / Passport / DL / Voter ID" },
        { label: "Address Proof:", value: "Aadhaar / Passport / Utility bill" },
        {
          label: "Income Proof:",
          value: "Latest 3–6 months salary slips / bank statements, Form 16",
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
          value:
            "ITR + audited financials (last 2 yrs) & bank statements (6–12 months)",
        },
        {
          label: "Business Proof:",
          value:
            "GST certificate / Udyam / Business registration / Trade license",
        },
      ],
    },
    {
      title: "NRI Applicants",
      tips: [
        {
          text: "Passport & Visa",
          bold: true,
        },
        {
          text: "University Admission Letter",
          bold: true,
        },
        {
          text: "Bank Statements / Income Proof of Sponsor",
          bold: true,
        },
        {
          text: "Travel & Visa-related documents",
          bold: true,
        },
      ],
    },
    {
      title: "Pro tips",
      tips: [
        {
          text: "Keep your admission letter & fee structure handy — it’s mandatory.",
          bold: true,
        },
        {
          text: "Ensure co-applicant (parent/guardian) documents are ready for faster approval.",
          bold: true,
        },
        {
          text: "Clear scans are fine — no originals needed online.",
          bold: true,
        },
      ],
    },
    {
      title: "Student Applicants",
      items: [
        { label: "ID Proof:", value: "Aadhaar / Passport" },
        {
          label: "Admission Proof:",
          value: "Offer / Admission letter from university or college",
        },
        {
          label: "Academic Records:",
          value: "Mark sheets & certificates (10th, 12th, degree, etc.)",
        },
        {
          label: "Fee Structure:",
          value: "Official fee schedule from institution",
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
        <EmiCalculator options={false} title="Education Loan Calculators" subtitle="Find the ideal loan plan for you using our easy-to-use Education Loan Calculator." />
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

export default EducationLoan;
