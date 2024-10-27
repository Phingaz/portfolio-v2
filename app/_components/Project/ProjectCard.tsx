"use client";
import React from "react";
import TiltCard from "../Utils/TiltCard";
import { TProject } from "../../types";
import ImageCard from "./ImageCard";

const ProjectCard = ({
  isOdd,
  project,
}: {
  isOdd: boolean;
  project: TProject;
}) => {
  return (
    <div className="flex gap-5 lg:gap-12 items-center w-full h-[300px]">
      <TiltCard className="w-full h-full bg-gray-50 shadow-2xl dark:bg-gray-900 z-10">
        <ImageCard isOdd={isOdd} project={project} />
      </TiltCard>
    </div>
  );
};

export default ProjectCard;
