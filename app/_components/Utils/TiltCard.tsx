"use client";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

type TiltCardProps = {
  className?: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: Record<string, any>;
};

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ style, children, className }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = innerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const width = rect.width;
      const height = rect.height;

      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;

      x.set(rX);
      y.set(rY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform, ...style }}
        className={cn(
          "relative w-full h-full rounded-xl bg-transparent",
          className
        )}
      >
        <div
          className={cn("w-full h-full")}
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);

TiltCard.displayName = "TiltCard";

export default TiltCard;
