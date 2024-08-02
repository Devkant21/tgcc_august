"use client";

import './about.css';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { containerVariants, childVariants } from '@/components/utils/Animation';

const About = () => {
    const [imageSrc, setImageSrc] = useState('/image/about2.webp');
    const [fadeClass, setFadeClass] = useState('fadeIn');
    const ref = useRef(null);
    const isInView = useIntersectionObserver(ref, { threshold: 0.5 });

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass('fadeOut');

            setTimeout(() => {
                setImageSrc(prevSrc =>
                    prevSrc === '/image/about2.webp' ? '/image/about.webp' : '/image/about2.webp'
                );
                setFadeClass('fadeIn');
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id='experience' className='p-4 md:p-0 aboutBody flex items-center justify-center h-auto w-full py-20 md:py-0'>
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto text-[#E9E2CF] md:space-x-20">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="w-full md:w-2/3 md:pl-[7rem] max-w-[1080px] space-y-6 md:py-20"
                >
                    <motion.div variants={childVariants} className='heading'>The Story <br /> Behind Our Craft</motion.div>
                    <motion.hr variants={childVariants} className='border-t-2' />
                    <motion.p variants={childVariants}>
                        Discover, explore and experience the rich history and magnificent presence of Indian crafted spirits through our lens. Dive into experiences that are inspired by goodness and crafted to give back. Led by curiosity and amplified by Indian roots, our Flavour Lab and Flavour Market offer a world that opens up to an epicurean adventure.
                    </motion.p>
                </motion.div>
                <div className="w-full md:w-1/2 h-[400px] md:h-[610px] relative">
                    <Image src={imageSrc} alt='About Image' layout='fill' objectFit='cover' className={`aboutImage ${fadeClass}`} />
                </div>
            </div>
        </section>
    );
}

export default About;
