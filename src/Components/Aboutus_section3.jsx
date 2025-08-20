import React from "react";

const Aboutus_section3 = () => {
  const items = [
    {
      id: "1",
      title: "Our Mission",
      desc: "Making finance accessible to everyone with quick loan approvals and transparent repayment options.",
    },
    {
      id: "2",
      title: "Our Values",
      desc: "Trust, transparency, and technology-driven solutions for secure borrowing and smart financial planning.",
    },
    {
      id: "3",
      title: "Our Vision",
      desc: "To become the most reliable digital financial partner, simplifying borrowing for individuals, students, and businesses.",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-10 grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 items-start">
          {/* Number */}
          <div className="bg-blue-100 text-black font-bold w-25 h-10 flex items-center justify-center rounded-md">
            {item.id}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Aboutus_section3;
