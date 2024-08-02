import './Carousel.css'

import Image from "next/image";

const Brand = () => {
    return (
        <section id='brands' className="md:px-[112px] py-20 md:py-40">
            <div className="relative w-full h-[500px]">
                <Image src='/image/brand.webp' alt='BRAND' layout="fill" objectFit="cover" objectPosition="bottom" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 md:bottom-20 md:left-20 p-6">
                    <div className="text-5xl font-semibold">Flavour Labs</div>
                    <p className="max-w-[400px]">Discover the magic of rare Indian spirits with a guided of our experience centre</p>
                </div>
            </div>
        </section>
    );
}

export default Brand;