import React from "react";
import SectionHead from "../Utils/SectionHead";
import ExperienceCard from "./ExperienceCard";
import { jobs } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-black to-black"
    >
      <div className="container relative z-10 mx-auto">
        <SectionHead
          first="My"
          second="Experiences"
          className="text-white mb-12"
        />
        <div className="relative">
          <div className="hidden md:block absolute lg:left-1/2 left-4 transform lg:-translate-x-1/2 h-full w-px bg-gray-700"></div>
          {jobs.map((job, i) => {
            const isOdd = i % 2 !== 0;
            return <ExperienceCard key={i} job={job} isOdd={isOdd} />;
          })}
        </div>
      </div>
      <div
        className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gray-50"
        style={{
          clipPath: "ellipse(50% 20% at 50% 100%)",
        }}
      ></div>
    </section>
  );
};

export default Experience;
