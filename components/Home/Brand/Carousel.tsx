"use client";

import "./Carousel.css";
import { useState } from "react";
import Image from "next/image";

const images = [
    { src: "/image/C1.webp", alt: "Image 1", title: "ACADEMY", desc: "Perfect the fundamentals of bartending and service, with modules covering everything from product knowledge to the art of creating great drinks." },
    { src: "/image/C2.webp", alt: "Image 2", title: "ACADEMY", desc: "Learn advanced bartending techniques, from flair to mixology, and master the art of crafting unique and memorable cocktails." },
    { src: "/image/C3.webp", alt: "Image 3", title: "ACADEMY", desc: "Gain comprehensive knowledge about different types of spirits and their origins, and how to use them in various cocktails." },
];

const BrandCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handlePrev = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setIsFading(false);
        }, 500);
    };

    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setIsFading(false);
        }, 500);
    };

    return (
        <section className="py-40">
            <div className="">
                <div className="block md:hidden w-full pb-4">
                    <div className="flex flex-col">
                        <div className="bg-[#416E80] p-4 flex items-center justify-center">{images[currentIndex].title}</div>
                        <div className="bg-[#E9E2CF] text-[#416E80] p-4">
                            <p>{images[currentIndex].desc}</p>
                        </div>
                    </div>
                </div>
                <div className="md:pl-[56px] flex items-center gap-4">
                    <button onClick={handlePrev} aria-label="Previous Image" className="hidden md:block">
                        <Image
                            src="/svg/arrowL.svg"
                            alt="LEFT"
                            width={0}
                            height={0}
                            className="w-[50px] h-[50px]"
                        />
                    </button>
                    <div className="carousel-container w-full md:w-2/3 h-[60vh] relative">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-image ${index === currentIndex ? "active" : ""} ${isFading ? "fading" : ""}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        ))}
                        <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1 max-w-[400px] opacity-85">
                            <div className="flex flex-col">
                                <div className="bg-[#416E80] p-4 flex items-center justify-center">{images[currentIndex].title}</div>
                                <div className="bg-[#E9E2CF] text-[#416E80] p-4">
                                    <p>{images[currentIndex].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleNext} aria-label="Next Image" className="hidden md:block">
                        <Image
                            src="/svg/arrowR.svg"
                            alt="RIGHT"
                            width={0}
                            height={0}
                            className="w-[50px] h-[50px]"
                        />
                    </button>
                    <div className="hidden md:block w-1/3 h-[250px] relative opacity-60">
                        <Image
                            src={images[(currentIndex + 1) % images.length].src}
                            alt={images[(currentIndex + 1) % images.length].alt}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center right"
                        />
                    </div>
                </div>
                <div className="flex gap-6 block md:hidden">
                    <button onClick={handlePrev} aria-label="Previous Image">
                        <Image
                            src="/svg/arrowL.svg"
                            alt="LEFT"
                            width={0}
                            height={0}
                            className="w-[50px] h-[50px]"
                        />
                    </button>
                    <button onClick={handleNext} aria-label="Next Image">
                        <Image
                            src="/svg/arrowR.svg"
                            alt="RIGHT"
                            width={0}
                            height={0}
                            className="w-[50px] h-[50px]"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
