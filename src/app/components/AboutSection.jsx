"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-x-8 list-disc pl-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>prisma</li>
        <li>Node.js</li>
        <li>express.js</li>
        <li>PostgreSQL</li>
        <li>tailwindcss</li>
        <li>Python</li>
        <li>MongoDB</li>
        <li>API</li>
        <li>c++</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>udacity nondegree Advanced Full-Stack Web Development</li>
        <li>
          Bachelor of Computer Science and Information from Ain Shams
          University&apos;s degree, Computer science
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Advanced Full-Stack Web Development</li>
        <li>Arab International 2023</li>
        <li>Cambridge 2023</li>
        <li>Python Development Certificate 2024</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:border-[#33353F] sm:border rounded-md ">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Eng. Gomaa Shaban, a Full Stack Web Developer dedicated to
            crafting modern, fast, and secure digital experiences. With strong
            expertise in JavaScript, React, Next.js, Node.js, Express,
            PostgreSQL, Prisma, MongoDB, and Git, I constantly strive to stay
            ahead of the ever-evolving tech landscape. My passion goes beyond
            writing code — I create complete digital experiences that truly make
            an impact. With a collaborative mindset and a drive for excellence,
            I turn ideas into successful, high-quality projects that exceed
            expectations.
          </p>
          <div className="flex flex-col xs:flex-row  justify-start mt-8 sm:mt-12">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
