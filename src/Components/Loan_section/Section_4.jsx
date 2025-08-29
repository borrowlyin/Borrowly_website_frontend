import tickdone from "../../assets/Icons/tickdone.svg"
import feature_1 from '../../assets/Images/Featurn_1.avif'

const DocItem = ({ label, children }) => (
  <p
    className="mt-2 text-[16px] text-[#474040]"
    style={{ fontFamily: "PovetaracSansBold" }}
  >
    <span style={{ fontFamily: "PovetaracSansBlack" }} className="text-[#000]">{label}:</span> {children}
  </p>
);

const Section_4 = () => {
  return (
      <div className="bg-[#F9F9F9] max-w-screen-xl mt-8 mx-auto  rounded-4xl p-2 md:p-5"> 
            <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-center text-black text-[24px] pb-5 py-10 lg:text-[32px] leading-[1.1]">
                Loan Features & Benefits
            </h1>
            <div className="lg:px-10 lg:py-10">
                <div className="bg-white rounded-4xl overflow-hidden flex flex-col md:flex-row gap-3">
                    <div className="flex-1 bg-gradient-to-b flex items-end from-[#00C2CC] to-[#0153C0]">
                        <img src={feature_1} alt="" className="w-[600px] mx-auto"/>
                    </div>
                    <div className="flex-1 flex flex-col justify-center p-5">
                        <div>
                           <h3 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-left md:mt-5 text-black text-xl leading-[1.1]">
                             Who Can Apply?
                           </h3>
                           <div className="py-2 flex flex-wrap gap-1">
                             <div style={{ fontFamily: 'PovetaracSansBlack' }} className="bg-[#0151BB]  px-2.5 py-1.5 text-[12px] md:text-[16px] flex items-center text-white gap-2 rounded-lg">
                                 <img src={tickdone} alt="" className="w-6"/>
                                 <h1 className="pr-3 mt-1">18-65 years</h1>
                             </div>
                             <div style={{ fontFamily: 'PovetaracSansBlack' }} className="bg-[#0151BB]  px-2.5  text-[12px] md:text-[16px]  py-1.5 flex items-center text-white gap-2 rounded-lg">
                                 <img src={tickdone} alt="" className="w-6"/>
                                 <h1 className="pr-3 mt-1">₹15,000 or more</h1>
                             </div>
                           </div>
                           <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-left mt-2 text-[12px] md:text-[16px] text-[#474040]">
                             We don’t discriminate between salaried or self-employed applicants – everyone is welcome!
                           </p>
                        </div>
                         <div className="pb-5">
                           <h3 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-left mt-5 text-black text-xl leading-[1.1]">
                             What Documents Are Required?
                           </h3>
                           <div className="py-2 flex flex-wrap gap-1">
                             <div style={{ fontFamily: 'PovetaracSansBlack' }} className="bg-[#0151BB]  text-[12px] md:text-[16px] px-2.5 py-1.5 flex items-center text-white gap-2 rounded-lg">
                                 <img src={tickdone} alt="" className="w-6"/>
                                 <h1 className="pr-3 mt-1">PAN Card</h1>
                             </div>
                             <div style={{ fontFamily: 'PovetaracSansBlack' }} className="bg-[#0151BB]   text-[12px] md:text-[16px]  px-2.5 py-1.5 flex items-center text-white gap-2 rounded-lg">
                                 <img src={tickdone} alt="" className="w-6"/>
                                 <h1 className="pr-3 mt-1">Aadhaar Card</h1>
                             </div>
                             <div style={{ fontFamily: 'PovetaracSansBlack' }} className="bg-[#0151BB]   text-[12px] md:text-[16px] px-2.5 py-1.5 flex items-center text-white gap-2 rounded-lg">
                                 <img src={tickdone} alt="" className="w-6"/>
                                 <h1 className="pr-3 mt-1">Income Proof</h1>
                             </div>
                           </div>
                           <p style={{ fontFamily: 'PovetaracSansBold' }} className="text-left mt-2 text-[12px] md:text-[16px] text-[#474040]">
                             Get credit easily in just 5 minutes! Keep these handy:
                           </p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-center text-black text-[28px] pb-5 py-10 lg:text-[32px] leading-[1.1]">
                Personal Loan Details
            </h1>
            <div className="w-full max-w-[1200px] px-5 py-4 md:py-10 mx-auto flex flex-wrap gap-8">
              <div className="w-full sm:w-[45%] md:w-[22%]">
                <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-xl text-[#0151BB]">Interest Rate</h1>
                <p style={{ fontFamily: 'PovetaracSansBold' }} className="mt-1 text-[16px] text-[#474040]">
                  Starting from 11.99% p.a. onwards
                </p>
              </div>
              <div className="w-full sm:w-[45%] md:w-[22%]">
                <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-xl text-[#0151BB]">Loan Amount</h1>
                <p style={{ fontFamily: 'PovetaracSansBold' }} className="mt-1 text-[16px] text-[#474040]">
                  From ₹10,000 to ₹15 lakhs
                </p>
              </div>
              <div className="w-full sm:w-[45%] md:w-[22%]">
                <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-xl text-[#0151BB]">Tenure</h1>
                <p style={{ fontFamily: 'PovetaracSansBold' }} className="mt-1 text-[16px] text-[#474040]">
                  Flexible terms ranging from 6 months to 5 years
                </p>
              </div>
              <div className="w-full sm:w-[45%] md:w-[22%]">
                <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-xl text-[#0151BB]">Processing Fees</h1>
                <p style={{ fontFamily: 'PovetaracSansBold' }} className="mt-1 text-[16px] text-[#474040]">
                  0.5% to 4% of loan amount (may vary across lenders)
                </p>
              </div>
            </div>
            <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-center text-black text-[28px] pb-5 py-10 lg:text-[32px] leading-[1.1]">
               Documents You’ll Need
            </h1>
           <div className="w-full max-w-[1200px] px-5 py-8 md:py-12 mx-auto">

      <div className="flex flex-wrap gap-8">

        {/* Salaried */}
        <div className="w-full sm:w-[45%] md:w-[45%]">
          <h1
            style={{ fontFamily: "PovetaracSansBlack" }}
            className="text-xl text-[#0151BB]"
          >
            Salaried
          </h1>
          <DocItem label="ID Proof">PAN / Aadhaar / Passport / DL / Voter ID</DocItem>
          <DocItem label="Address Proof">Aadhaar / Passport / Utility bill</DocItem>
          <DocItem label="Income Proof">
            Last 3–6 months salary slips or bank statements (Form 16 if asked)
          </DocItem>
        </div>

        {/* Self-Employed */}
        <div className="w-full sm:w-[45%] md:w-[45%]">
          <h1
            style={{ fontFamily: "PovetaracSansBlack" }}
            className="text-xl text-[#0151BB]"
          >
            Self-Employed
          </h1>
          <DocItem label="ID Proof">PAN / Aadhaar / Passport / DL / Voter ID</DocItem>
          <DocItem label="Address Proof">Aadhaar / Passport / Utility bill</DocItem>
          <DocItem label="Income Proof">
            ITR + audited financials (last 2 yrs) and bank statements (6–12 months)
          </DocItem>
        </div>

        {/* NRI Applicants */}
        <div className="w-full sm:w-[45%] md:w-[45%]">
          <h1
            style={{ fontFamily: "PovetaracSansBlack" }}
            className="text-xl text-[#0151BB]"
          >
            NRI Applicants
          </h1>
          <DocItem label="Passport & Visa">Required</DocItem>
          <DocItem label="Employment proof">
            Official work email/HR email, salary slips
          </DocItem>
          <DocItem label="Banking">
            NRE/NRO and salary account statements (last 6 months)
          </DocItem>
          <DocItem label="KYC">ID, address, income & asset proof</DocItem>
          <DocItem label="Photos">
            Recent passport-size (self & guarantor, if required)
          </DocItem>
        </div>

        {/* Pro Tips */}
        <div className="w-full sm:w-[45%] md:w-[45%]">
          <h1
            style={{ fontFamily: "PovetaracSansBlack" }}
            className="text-xl text-[#0151BB]"
          >
            Pro tips
          </h1>
          <p
            className="mt-2 text-[16px] text-[#474040]"
            style={{ fontFamily: "PovetaracSansBold" }}
          >
            Clear scans/photos are fine—no originals needed during online apply.
          </p>
          <p
            className="mt-2 text-[16px] text-[#474040]"
            style={{ fontFamily: "PovetaracSansBold" }}
          >
            Make sure your PAN matches your bank/KYC details.
          </p>
        </div>
      </div>
    </div>

        </div>
  )
}

export default Section_4
