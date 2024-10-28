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

  return (
    <>
      {project.linkToGH ? (
        <motion.div
          onMouseEnter={() => setActiveCard(true)}
          onMouseLeave={() => setActiveCard(false)}
          className={cn(
            "relative flex bg-gray-50 w-full h-full rounded-xl z-10 group overflow-hidden dark:bg-black",
            isOdd && "order-2"
          )}
        >
          <motion.div
            initial={{
              width: "100%",
              height: "100%",
              filter: "grayscale(100%)",
            }}
            animate={{
              filter: activeCard ? "grayscale(0%)" : "grayscale(100%)",
              width: activeCard ? "40%" : "100%",
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
          <div className="absolute inset-0 flex flex-col p-4 gap-8 items-end justify-center w-full h-full min-w-fit border">
            <div className="flex flex-col gap-3 max-w-[60%] pl-6 text-justify">
              <p className="text-sm font-[500]">{project.title}</p>
              <p className="text-xs text-gray-600">{project.description}</p>
            </div>

            <div className="flex justify-between items-center gap-4 pl-6 w-[60%]">
              <Link
                target="_blank"
                href={project.linkToGH ?? "/"}
                className="flex items-start gap-2 text-xs hover:underline underline-offset-2 w-full"
              >
                <Github size={20} />
                Github
              </Link>
              <Link
                target="_blank"
                href={project.link ?? "/"}
                className="flex items-start gap-2 text-xs hover:underline underline-offset-2 w-full"
              >
                <ArrowUpRight size={20} />
                Live Url
              </Link>
            </div>
          </div>
        </motion.div>
      ) : (
        <Link
          onMouseEnter={() => setActiveCard(true)}
          onMouseLeave={() => setActiveCard(false)}
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
            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 object-cover object-center"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{
              opacity: activeCard ? 1 : 0,
              scale: 1,
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center absolute p-10 gap-3 bg-white/90 w-full h-full text-justify"
          >
            <p className="text-lg font-[500]">{project.title}</p>
            <p className="text-sm text-gray-600">{project.description}</p>
          </motion.div>
        </Link>
      )}
    </>
  );
}
