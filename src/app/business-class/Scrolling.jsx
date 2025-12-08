"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Scrolling() {
  const plugin = React.useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
    })
  );

  const images = [
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg",
    "/p4.jpg",
    "/p5.jpg",
    "/p6.jpg",
    "/p7.jpg",
  ];

  return (
    <div className="w-full py-10 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-70">
      {/* Heading + Filter Buttons */}
      <div>
     

      {/* Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-3">
                <div className="overflow-hidden rounded-2xl shadow-md bg-white">
                  <Image
                    src={src}
                    alt={`promo-${index}`}
                    width={500}
                    height={300}
                    className="w-250 h-70 object-cover rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="hidden md:flex" /> */}
        {/* <CarouselNext className="hidden md:flex" /> */}
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 mt-4">
  {/* Dot 1 */}
  <div className="w-1 h-1 bg-amber-300  rounded-full"></div>

  {/* Dot 2 */}
  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>

  {/* Active Dot */}
  <div className="relative">
    <div className="w-3 h-3 bg-amber-700  rounded-full"></div>
    <div className="absolute inset-0 w-4 h-4 rounded-full bg-amber-400 opacity-60 -m-0.5"></div>
  </div>

  {/* Dot 4 */}
  <div className="w-2 h-2 bg-amber-300  rounded-full"></div>

  {/* Dot 5 */}
  <div className="w-1 h-1 bg-amber-300 rounded-full"></div>
</div>

    </div>
</div>

  );
}
