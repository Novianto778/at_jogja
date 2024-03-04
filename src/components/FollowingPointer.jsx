// Core component that receives mouse positions and renders pointer and content
"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/utils/lib";

export const FollowerPointerCard = ({ children, className, title }) => {
  const ref = useRef(null);
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [rect, setRect] = useState(null);
  const [isInside, setIsInside] = useState(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  // useEffect(() => {
  //   const handleMouseMouse = (e) => {
  //     if (rect) {
  //       // const scrollX = window.scrollX;
  //       // const scrollY = window.scrollY;

  //       x.set(e.clientX - 160);
  //       y.set(e.clientY - 160);
  //     }
  //   };
  //   window.addEventListener("mousemove", handleMouseMouse);
  //   return () => window.removeEventListener("mousemove", handleMouseMouse);
  // }, [rect]);

  const handleMouseMove = (e) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // x.set(e.clientX - rect.left + scrollX);
      // y.set(e.clientY - rect.top + scrollY);
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence mode="wait">
        {isInside && <FollowPointer x={position.x} y={position.y} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({ x, y }) => {
  return (
    <motion.div
      className="rounded-full absolute z-50 p-4 bg-white"
      style={{
        top: y - 80,
        left: x - 80,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </motion.div>
  );
};
