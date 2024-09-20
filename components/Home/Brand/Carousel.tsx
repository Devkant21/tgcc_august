"use client";

import "./Carousel.css";
import { useState } from "react";
import Image from "next/image";

const images = [
    { src: "/image/C1.webp", alt: "Image 1", title: "ACADEMY", desc: "The Good Craft Co Academy offers an immersive experience into the world of Indian craft spirits, where visitors can learn about artisanal distilling techniques, and the rich heritage of local ingredients. Attendees will gain hands-on knowledge of crafting premium spirits and an appreciation for the artistry and innovation that define the craft spirits industry. This academy is a must-visit for anyone passionate about fine beverages and eager to deepen their understanding of the craft behind exceptional spirits.", mdesc: "Immerse in Indian craft spirits at The Good Craft Co Academy. Learn artisanal distilling techniques and the heritage of local ingredients." },
    { src: "/image/carousel1.webp", alt: "Image 2", title: "LAB", desc: "The Good Craft Co Lab offers a unique glimpse into the science of spirit-making, allowing visitors to explore the intricate processes behind crafting exceptional spirits. Guests will experience the world of rare spirits and Indian cocktails, gaining insights into flavor profiles, distillation techniques, and the innovation driving the craft spirits industry.", mdesc: "Explore the science of spirit-making at The Good Craft Co Lab. Discover flavor profiles, distillation techniques, and industry innovations." },
    { src: "/image/carousel2.webp", alt: "Image 3", title: "FERMENTARY", desc: "The Good Craft Co Fermentary showcases natural fermentation techniques, pushing the boundaries of flavors in craft spirits. Visitors can witness the transformative power of fermentation and learn how innovative methods create unique and complex tastes. This is a must-visit for those interested in the art and science behind exceptional flavor development in craft beverages.", mdesc: "Experience natural fermentation at The Good Craft Co Fermentary. See how innovative methods create unique and complex flavors in craft beverages." },
    // { src: "/image/finale.webp", alt: "Image 4", title: "THE FINALE", desc: "The tour will round-off/conclude with an authentic Indian meal and experimental Indian brews and spirits at Bangalore’s famed Windmills Brewery.", mdesc: "The tour will round-off/conclude with an authentic Indian meal and experimental Indian brews and spirits at Bangalore’s famed Windmills Brewery." },
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
        <section className="py-10 md:py-40">
            <div className="">
                {/* <div className="block md:hidden w-full pb-4">
                    <div className="flex flex-col">
                        <div className="bg-[#416E80] p-4 flex items-center justify-center">{images[currentIndex].title}</div>
                        <div className="bg-[#E9E2CF] text-[#416E80] p-4">
                            <p className="hidden md:block">{images[currentIndex].desc}</p>
                            <p className="block md:hidden">{images[currentIndex].mdesc}</p>
                        </div>
                    </div>
                </div> */}
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
                        <div className="absolute top-1/2 right-0 transform md:-translate-y-1 max-w-[600px] h-auto opacity-85">
                            <div className="flex flex-col">
                                <div className="bg-[#416E80] p-4 flex items-center justify-center">{images[currentIndex].title}</div>
                                <div className="bg-[#E9E2CF] text-[#416E80] p-4 py-4">
                                    <p className="hidden md:block text-[14px]">{images[currentIndex].mdesc}</p>
                                    <p className="block md:hidden text-[14px]">{images[currentIndex].mdesc}</p>
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
