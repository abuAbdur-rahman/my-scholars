import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Plugin for auto slide
import { useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel"; //
import { lecturers } from "@/constants/lecturer";



const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }
  }, [api, currentIndex]);

  return (
    <section className='m-2 border rounded-lg pb-5'>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 2000 })]} // Auto slide every 2 seconds
        className='w-full center'
      >
        <CarouselContent className="">
          {lecturers.map((item) => (
            <CarouselItem key={item.name} className='w-full center h-[250px]'>
          <img
          src="https://via.placeholder.com/300x200"
          alt="Album Cover"
          className="w-full object-cover rounded-lg"
        />
              {item.name}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot Indicators */}
      <div className='flex justify-center mt-3'>
        {lecturers.map((_, index) => (
          <span
            key={index}
            className={`mx-4 w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-white"
                : currentIndex === index - 1 || currentIndex === index + 1
                ? "bg-gray-400"
                : "bg-gray-600"
            }
            `}
          ></span>
        ))}
      </div>
    </section>
  );
};
export default Hero;
