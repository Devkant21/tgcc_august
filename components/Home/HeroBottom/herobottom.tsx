"use client";

import "./herobottom.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerVariants, childVariants } from "@/components/utils/Animation";

const HeroBottom = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <section id='whoweare' className="py-40 bg-[var(--primaryColor)] flex items-center justify-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-6 flex flex-col items-center justify-center p-4 md:p-0"
      >
        <motion.h2 variants={childVariants} className="text-center">
          In The Pursuit Of Good
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="bottomP text-center md:text-justify font-thin max-w-[800px]"
        >
          We exist in the passionate pursuit of the good. We are driven to
          become a benchmark for positive change in the world by producing more
          conscious spirits that help us give back in any way we can.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroBottom;
