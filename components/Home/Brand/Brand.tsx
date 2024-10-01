"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.css';

const CarouselData = [
    {
        img: '/image/brand.webp',
        title: 'Flavour Labs',
        desc: 'Delve into the magic of rare Indian spirits with an educational, immersive tour at our experience center, where exploration and learning go hand in hand.',
    },
    {
        img: '/image/brand2.webp',
        title: 'Spirit Haven',
        desc: 'Experience the finest collection of handcrafted spirits from across India.',
    },
];

const Brand = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const selectHandler = () => {
            setCurrentIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', selectHandler);

        return () => {
            emblaApi.off('select', selectHandler);
        };
    }, [emblaApi]);

    const nextSlide = () => emblaApi && emblaApi.scrollNext();
    const prevSlide = () => emblaApi && emblaApi.scrollPrev();

    return (
        <section id="brands" className="md:px-[112px] py-20 md:py-40">
            <div className="relative w-full h-[500px]">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {CarouselData.map((item, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="relative w-full h-[500px]">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="bottom"
                                        className="w-full h-full"
                                    />
                                    <div className="absolute bottom-0 left-0 md:bottom-20 md:left-20 p-6">
                                        <div className="brandH">{item.title}</div>
                                        <p className="brandp max-w-[700px]">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default Brand;
