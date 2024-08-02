"use client";

import "./hero.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { containerVariants, childVariants } from "@/components/utils/Animation";

const Hero = () => {
  const [bgClass, setBgClass] = useState("bgImage1");
  const bgClasses = ["bgImage1", "bgImage2"];
  const changeInterval = 5000;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % bgClasses.length;
      setBgClass(bgClasses[currentIndex]);
    }, changeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    // <section className={`heroBody h-screen w-full flex flex-col justify-center space-y-4 ${bgClass}`}>
    <section
      className={`h-screen w-full flex flex-col justify-center space-y-4 relative overflow-hidden pt-[80px]`}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover pt-[80px]"
        src="/video/bgvid.mp4"
        autoPlay
        loop
        muted
        onCanPlayThrough={() => {
          setIsLoading(false);
        }}
        onLoadedData={() => {
          setIsLoading(false);
        }}
        onLoadedMetadata={() => {
          setIsLoading(false);
        }}
        onPlaying={() => {
          setIsLoading(false);
        }}
      />
      <div className="md:px-[112px] w-full z-[20]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col w-full md:w-1/2 max-w-[569px] space-y-4 p-4 md:p-0"
        >
          <motion.h1 variants={childVariants} className="Manier_Light">
            A Timeless Ode to the Spirits of India
          </motion.h1>
          <motion.div
            variants={childVariants}
            className="para line-clamp-5 "
          >
            Embark on a journey where exploration, tasting, and learning
            intertwine to redefine epicurean experiences.
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=""
      >
        <button className="heroButton p-4 md:min-w-[360px] md:min-h-[81px] flex items-center justify-center gap-4">
          KNOW MORE
          <span>
            <Image
              src="/svg/arrowR.svg"
              alt="Arrow"
              width={0}
              height={0}
              className="w-[30px] h-auto"
            />
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
