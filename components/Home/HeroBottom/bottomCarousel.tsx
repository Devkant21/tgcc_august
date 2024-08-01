"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";

const CaroData = [
    {
        title: 'CLAY POTS',
        desc: 'The traditional vessels distilling Mahua liquor.',
        img: '/image/clay.webp',
    },
    {
        title: 'CLAY POTS',
        desc: 'The traditional vessels distilling Mahua liquor.',
        img: '/image/clay2.webp',
    },
    {
        title: 'CLAY POTS 3',
        desc: 'The traditional vessels distilling Mahua liquor.',
        img: '/image/clay.webp',
    },
];

const BottomCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavClick = (index: SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <section className="bottomCarousel">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 h-[550px] relative">
                    <Image
                        src={CaroData[currentIndex].img}
                        alt={CaroData[currentIndex].title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full md:w-1/2 px-10 flex flex-col justify-center CarRight relative py-10 md:py-0">
                    <div className="pl-20 space-y-6">
                        <h4>{CaroData[currentIndex].title}</h4>
                        <p className="bottomP">{CaroData[currentIndex].desc}</p>
                        <ul className="flex gap-4 text-[1.25rem]">
                            {CaroData.map((_, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleNavClick(index)}
                                    className={`cursor-pointer ${currentIndex === index ? 'text-primary' : ''}`}
                                >
                                    {index + 1}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image src='/svg/bottle.svg' alt='' width={0} height={0} className="hidden md:block w-[150px] h-auto absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0" />
                </div>
            </div>
        </section>
    );
};

export default BottomCarousel;
