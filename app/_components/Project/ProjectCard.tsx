"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "../Utils/TiltCard";
import { cn } from "@/lib/utils";
import { TProject } from "../../types";
import Link from "next/link";

const MotionLink = motion.create(Link);

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
    <MotionLink
      href={project.link}
      target="_blank"
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
        priority={false}
        src={project.image}
        alt={project.title}
        className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 object-cover object-center"
      />
    </MotionLink>
  );
}

function InfoCardWithTilt({ project }: { project: TProject }) {
  return (
    <TiltCard className="lg:w-[50%] lg:aspect-[16/9] bg-gray-50 shadow-2xl">
      <MotionLink
        target="_blank"
        href={project.link}
        initial={{ y: 100, opacity: 0, scale: 0.01 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.3, delay: 0.01 + 0.1 },
        }}
        className="w-full min-h-full h-full flex justify-center flex-col shadow-lg relative rounded-xl group"
      >
        <div
          style={{ backdropFilter: "brightness(0.3)" }}
          className="transition-all duration-500 bg-transparent backdrop-blur-lg shadow-lg w-full min-h-full p-8 rounded-xl overflow-clip"
        >
          <h3 className="text-project-head font-[500] mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-gray-200 font-[400] text-sm">
            {project.description}
          </p>
        </div>
        <Image
          width={200}
          height={100}
          priority={false}
          src={project.image}
          alt={project.title}
          className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-full rounded-xl overflow-hidden absolute top-0 left-0 -z-10 object-cover object-center"
        />
      </MotionLink>
    </TiltCard>
  );
}
