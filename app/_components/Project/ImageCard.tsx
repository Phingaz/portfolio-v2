"use client";

import { TProject } from "@/app/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ImageCard({
  isOdd,
  project,
}: {
  isOdd: boolean;
  project: TProject;
}) {
  const [activeCard, setActiveCard] = React.useState(false);

  const handleMouseEnter = () => {
    setActiveCard(true);
  };

  const handleMouseLeave = () => {
    setActiveCard(false);
  };

  return (
    <>
      {project.linkToGH ? (
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex bg-gray-50 w-full h-full rounded-xl z-10 group overflow-hidden dark:bg-black",
            isOdd && "order-2"
          )}
        >
          <motion.div
            initial={{ width: "100%", height: "100%" }}
            animate={{
              width: activeCard ? "60%" : "100%",
              height: activeCard ? "100%" : "100%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              fill
              sizes="100%"
              priority={false}
              src={project.image}
              alt={project.title}
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 flex justify-end w-full h-full min-w-fit">
            <div className="mr-6 flex flex-col justify-center items-center gap-4">
              <Link
                target="_blank"
                href={project.linkToGH ?? "/"}
                className="flex items-start gap-2 text-sm hover:underline underline-offset-2 w-full"
              >
                <Github size={20} />
                View on Github
              </Link>
              <Link
                target="_blank"
                href={project.link ?? "/"}
                className="flex items-start gap-2 text-sm hover:underline underline-offset-2 w-full"
              >
                <ArrowUpRight size={20} />
                Live Url Here
              </Link>
            </div>
          </div>
        </motion.div>
      ) : (
        <Link
          href={project.link}
          target="_blank"
          className={cn(
            "relative block bg-gray-50 w-full h-full rounded-xl z-10 group overflow-clip",
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
        </Link>
      )}
    </>
  );
}
