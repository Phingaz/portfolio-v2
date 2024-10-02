"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TimelineDate from "./ExperienceDate";
import TiltCard from "../Utils/TiltCard";
import { TJob } from "../../types";

const ExperienceCard = ({ job, isOdd }: { isOdd: boolean; job: TJob }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start -100px", "start end"],
  });

  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const animatedProgress = useSpring(scrollYProgress, springConfig);
  const opacity = useTransform(animatedProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div
      className={`flex md:flex-row flex-col w-full relative ${
        isOdd ? "lg:justify-end" : "lg:justify-start"
      } mb-9`}
    >
      <TimelineDate date={job.time} isOdd={isOdd} />
      <TiltCard
        ref={cardRef}
        ROTATION_RANGE={15}
        style={{ opacity }}
        className={`lg:w-5/12 hover:shadow-md rounded-lg overflow-clip ${
          isOdd ? "lg:ml-8" : "lg:mr-8"
        }`}
      >
        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
          <div className="p-6 rounded-lg border border-gray-600 shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-gray-100 mb-4">
              {job.title}
            </h4>
            <p className="text-sm font-[300] text-gray-200">{job.text}</p>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
};

export default ExperienceCard;
