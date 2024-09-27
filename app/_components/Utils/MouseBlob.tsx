"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generateRandomBorderRadius = () => {
  return {
    topLeft: `${Math.floor(Math.random() * 100)}%`,
    topRight: `${Math.floor(Math.random() * 100)}%`,
    bottomLeft: `${Math.floor(Math.random() * 100)}%`,
    bottomRight: `${Math.floor(Math.random() * 100)}%`,
  };
};

const MouseBlob = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [borderRadius, setBorderRadius] = useState(
    generateRandomBorderRadius()
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    const borderRadiusInterval = setInterval(() => {
      setBorderRadius(generateRandomBorderRadius());
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(borderRadiusInterval);
    };
  }, []);

  return (
    <motion.div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-[51] animate-pulse">
      <motion.div
        className="absolute size-[200px] bg-accent/20 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          scale: [1, 1.2, 1],
          borderTopLeftRadius: borderRadius.topLeft,
          borderTopRightRadius: borderRadius.topRight,
          borderBottomLeftRadius: borderRadius.bottomLeft,
          borderBottomRightRadius: borderRadius.bottomRight,
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 20 },
          y: { type: "spring", stiffness: 300, damping: 20 },
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          borderTopLeftRadius: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          },
          borderTopRightRadius: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          },
          borderBottomLeftRadius: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          },
          borderBottomRightRadius: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />
    </motion.div>
  );
};

export default MouseBlob;
