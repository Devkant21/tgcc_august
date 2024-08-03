"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import './Carousel.css';

const CarouselData = [
    {
        img: '/image/brand.webp',
        title: 'Flavour Labs',
        desc: 'Discover the magic of rare Indian spirits with a guided tour of our experience centre',
    },
    {
        img: '/image/brand.webp',
        title: 'Spirit Haven',
        desc: 'Experience the finest collection of handcrafted spirits from across India.',
    },
    {
        img: '/image/brand.webp',
        title: 'Crafted Elixirs',
        desc: 'Uncover the secrets of ancient brewing techniques and modern innovation.',
    },
];

const Brand = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length);
    };

    return (
        <section id='brands' className="md:px-[112px] py-20 md:py-40">
            <div className="relative w-full h-[500px]">
                {CarouselData.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" objectPosition="bottom" className="w-full h-full" />
                        <div className="absolute bottom-0 left-0 md:bottom-20 md:left-20 p-6">
                            <div className="brandH">{item.title}</div>
                            <p className="brandp max-w-[700px]">{item.desc}</p>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                    &lt;
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default Brand;
