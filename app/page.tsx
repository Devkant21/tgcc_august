import SmoothScroll from "@/components/utils/SmoothScroll";

import About from "@/components/Home/About/About";
import BookNow from "@/components/Home/BookNow/BookNow";
import Brand from "@/components/Home/Brand/Brand";
import BrandCarousel from "@/components/Home/Brand/Carousel";
import Cards from "@/components/Home/Cards/Cards";
import Hero from "@/components/Home/Hero/hero";
import BottomCarousel from "@/components/Home/HeroBottom/bottomCarousel";
import HeroBottom from "@/components/Home/HeroBottom/herobottom";
import MapSection from "@/components/Home/Map/MapSection";

export default function Home() {
  return (
    <main>
      <SmoothScroll>
        <Hero />
        <HeroBottom />
        {/* <BottomCarousel /> */}
        <MapSection />
        <About />
        <div className="bg-gradient-to-b from-[#416E80] to-[#2E4149] to-95% p-2 md:p-0">
          <Brand />
          <Cards />
          <BookNow />
          {/* <BrandCarousel /> */}
        </div>
      </SmoothScroll>
    </main>
  );
}
