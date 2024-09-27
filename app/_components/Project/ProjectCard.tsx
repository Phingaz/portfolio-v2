"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "../Utils/TiltCard";
import { cn } from "@/lib/utils";
import { TProject } from "../../types";

const ProjectCard = ({
  isOdd,
  project,
}: {
  isOdd: boolean;
  project: TProject;
}) => {
  return (
    <div className="flex gap-5 lg:gap-12 items-center w-full min-h-full">
      <ImageCard isOdd={isOdd} project={project} />
      <InfoCardWithTilt project={project} />
    </div>
  );
};

export default ProjectCard;

function ImageCard({ isOdd, project }: { isOdd: boolean; project: TProject }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.5 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: 0.01 },
      }}
      className={cn(
        "relative hidden lg:block bg-gray-50 w-[50%] h-full rounded-xl group overflow-clip",
        isOdd && "order-2"
      )}
    >
      <Image
        fill
        sizes="100%"
        src={project.image}
        alt={project.title}
        className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 object-cover object-center"
      />
    </motion.div>
  );
}

function InfoCardWithTilt({ project }: { project: TProject }) {
  return (
    <TiltCard className="lg:w-[50%] lg:aspect-[16/9]">
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.01 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.3, delay: 0.01 + 0.1 },
        }}
        className="w-full min-h-full h-full flex justify-center flex-col shadow-lg relative rounded-xl group bg-gray-100"
      >
        <div
          style={{ backdropFilter: "brightness(0.3)" }}
          className="transition-all duration-500 bg-transparent backdrop-blur-lg shadow-lg w-full min-h-full p-8 rounded-xl overflow-clip"
        >
          <h3 className="text-project-head font-bold mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-gray-200">{project.description}</p>
        </div>
        <Image
          width={200}
          height={100}
          src={project.image}
          alt={project.title}
          className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-full rounded-xl overflow-hidden absolute top-0 left-0 -z-10 object-cover object-center"
        />
      </motion.div>
    </TiltCard>
  );
}
