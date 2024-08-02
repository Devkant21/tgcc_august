"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cardcontainerVariants, cardVariants } from '@/components/utils/Animation';
import BrandCarousel from "../Brand/Carousel";

const CardData = [
    {
        img: '',
        title: '',
        desc: '',
    },
    {
        img: '',
        title: '',
        desc: '',
    },
    {
        img: '',
        title: '',
        desc: '',
    },
]

const Cards = () => {
    const ref = useRef(null);
    const isInView = useIntersectionObserver(ref, { threshold: 0.5 });

    return (
        <section id='academy' className="pb-40 ">
            <div className=" flex flex-col items-center justify-center space-y-8">
                <h1>LOREM IPSUM</h1>
                <div className='w-full'>
                    <BrandCarousel />
                </div>
                {/* <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardcontainerVariants} className="w-full flex flex-col md:flex-row md:justify-evenly items-center justify-center space-y-6 md:space-y-0"
                >
                    <motion.div variants={cardVariants} className="flex flex-col space-y-4 w-full md:max-w-[200px] items-center md:items-start justify-center">
                        <Image src='/svg/AC1.svg' alt='' width={0} height={0} className="w-[150px] h-[200px]" />
                        <Image src='/svg/arrowR.svg' alt='' width={0} height={0} className="w-[30px] h-auto" />
                        <h5>ACADEMY</h5>
                        <p className="text-center md:text-left">Perfect the fundamentals of bartending and service, with modules covering everything</p>
                    </motion.div>
                    <motion.div variants={cardVariants} className="flex flex-col space-y-4 w-full md:max-w-[200px] items-center md:items-start justify-center">
                        <Image src='/svg/AC2.svg' alt='' width={0} height={0} className="w-[200px] h-[200px]" />
                        <Image src='/svg/arrowR.svg' alt='' width={0} height={0} className="w-[30px] h-auto" />
                        <h5>WALK</h5>
                        <p className="text-center md:text-left">Perfect the fundamentals of bartending and service, with modules covering everything</p>
                    </motion.div>
                    <motion.div variants={cardVariants} className="flex flex-col space-y-4 w-full md:max-w-[200px] items-center md:items-start justify-center">
                        <Image src='/svg/AC3.svg' alt='' width={0} height={0} className="w-[100px] h-[200px]" />
                        <Image src='/svg/arrowR.svg' alt='' width={0} height={0} className="w-[30px] h-auto" />
                        <h5>BAR</h5>
                        <p className="text-center md:text-left">Perfect the fundamentals of bartending and service, with modules covering everything</p>
                    </motion.div>
                </motion.div> */}
            </div>
        </section>
    );
}

export default Cards;