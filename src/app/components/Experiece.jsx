"use client";
import React from "react";

const experiences = [
  {
    country: "UAE",
    role: "Freelance Web Developer",
    period: "2022 - Present",
    projects: [
      "Developed high-performance e-commerce platforms with admin dashboards",
      "Built secure transaction tracking applications",
      "Delivered custom business websites optimized for SEO",
    ],
  },
  {
    country: "Egypt",
    role: "Freelance Web Developer",
    period: "2021 - Present",
    projects: [
      "Created responsive e-commerce solutions tailored to client needs",
      "Designed and implemented business dashboards",
      "Developed professional portfolio and company websites",
    ],
  },
  {
    country: "Online",
    role: "Upwork Web Developer",
    period: "2021 - Present",
    projects: [
      "Worked with international clients on diverse full-stack projects",
      "Maintained a 5-star client satisfaction rating",
      "Specialized in React, Next.js, and Node.js development",
    ],
  },
  {
    country: "Online",
    role: "Fiverr Web Developer",
    period: "2022 - Present",
    projects: [
      "Completed multiple freelance projects for global businesses",
      "Developed user-friendly websites with modern UI/UX principles",
      "Provided post-launch support and improvements",
    ],
  },
];

const Experience = () => {
  return (
    <section className="text-white py-12 px-4 xl:px-16" id="experience">
      {/* العنوان والوصف */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-base lg:text-lg text-[#ADB7BE] max-w-3xl mx-auto">
          Over the years, I have collaborated with clients across the UAE,
          Egypt, and globally — building scalable and innovative web
          applications that drive real results.
        </p>
      </div>

      {/* شبكة الكروت (2 جنب بعض في كل صف) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#181818] rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {exp.role}{" "}
              <span className="text-primary-500">@ {exp.country}</span>
            </h3>
            <span className="block text-sm text-[#9CA2A9] mb-3">
              {exp.period}
            </span>
            <ul className="list-disc pl-5 text-[#ADB7BE] space-y-1">
              {exp.projects.map((proj, i) => (
                <li key={i}>{proj}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
