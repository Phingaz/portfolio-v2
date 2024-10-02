"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface GradientBlobProps {
  size?: number;
  animationSpeed?: number;
  startDirection?: "left" | "right";
}

export default function GradientBlob({
  size = 0.2,
  animationSpeed = 0.005,
  startDirection = "left",
}: GradientBlobProps) {
  const { resolvedTheme, theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (x: number, y: number, radius: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0.1, "rgba(5, 5, 218, 0.4)");
      gradient.addColorStop(0.3, "rgba(5, 5, 218, 0.3)");
      gradient.addColorStop(0.5, "rgba(5, 5, 218, 0.2)");
      gradient.addColorStop(0.7, "rgba(5, 5, 218, 0.1)");
      gradient.addColorStop(1, "rgba(5, 5, 218, 0)");
      return gradient;
    };

    const drawBlob = (x: number, y: number, radius: number) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.closePath();
    };

    const animate = () => {
      time += animationSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startOffset = startDirection === "left" ? -0.5 : 0.5;
      const x = (Math.sin(time * 0.5) * startOffset + 0.5) * canvas.width;
      const y = (Math.cos(time * 0.7) * 0.5 + 0.5) * canvas.height;

      const baseRadius = Math.min(canvas.width, canvas.height) * size;
      const gradient = createGradient(x, y, baseRadius);

      ctx.fillStyle = gradient;
      drawBlob(x, y, baseRadius);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [theme, resolvedTheme, size, animationSpeed, startDirection]);

  return (
    <>
      {resolvedTheme === "dark" || theme === "dark" ? (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none"
          style={{ mixBlendMode: "color-dodge", zIndex: 1 }}
        ></canvas>
      ) : null}
    </>
  );
}
