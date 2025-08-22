import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const jobs = [
  {
    role: "Growth Analyst",
    team: "Data Analytics",
    location: "Chennai, India",
    description:
      "We are looking for an experienced Growth Analyst to be a central part of the operational side of the Growth team, specifically within our Delivery & Rides vertical, as we embark on an amazing journey to take Bolt to new heights!",
  },
  {
    role: "Growth Analyst",
    team: "Data Analytics",
    location: "Chennai, India",
    description:
      "We are looking for an experienced Growth Analyst to be a central part of the operational side of the Growth team, specifically within our Delivery & Rides vertical, as we embark on an amazing journey to take Bolt to new heights!",
  },
  {
    role: "Growth Analyst",
    team: "Data Analytics",
    location: "Chennai, India",
    description:
      "We are looking for an experienced Growth Analyst to be a central part of the operational side of the Growth team, specifically within our Delivery & Rides vertical, as we embark on an amazing journey to take Bolt to new heights!",
  },
];

const Sec_carrier2 = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <input
          type="text"
          placeholder="Search roles"
          className="bg-gray-100 py-3 px-4 rounded-lg outline-none flex-1"
        />
        <select className="bg-gray-100 py-3 px-4 rounded-lg outline-none flex-1">
          <option>All teams</option>
        </select>
        <select className="bg-gray-100 py-3 px-4 rounded-lg outline-none flex-1">
          <option>All locations</option>
        </select>
      </div>
      <p className="mb-6 text-center text-gray-600">
        Showing <span className="font-semibold">all roles</span> in <span className="font-semibold">all locations</span> and <span className="font-semibold">all teams</span>
        <span className="ml-2 text-gray-400 cursor-pointer select-none">Clear all filters</span>
      </p>

      {/* Table header */}
      <div className="hidden md:grid grid-cols-3 px-6 pb-2 text-gray-400 text-sm font-medium">
        <div>Role</div>
        <div>Teams</div>
        <div>Location</div>
      </div>

      {/* Job cards */}
      <div className="flex flex-col gap-8">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl px-6 py-5 shadow-sm"
          >
            <div className="grid md:grid-cols-3 gap-2">
              <div className="font-semibold text-lg text-gray-700">
                {job.role}
              </div>
              <div className="text-gray-400 text-base font-medium">
                {job.team}
              </div>
              <div className="text-gray-500 text-base font-medium text-right md:text-right">
                {job.location}
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-sm">{job.description}</p>
            <button className="flex items-center gap-2 mt-4 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition">
              Apply Now <IoIosArrowForward />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec_carrier2;
