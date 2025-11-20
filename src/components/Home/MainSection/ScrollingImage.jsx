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

export default function ScrollingImage() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    })
  );

  const images = [
    "/promo1.png",
    "/promo2.png",
    "/promo3.png",
    "/promo4.png",
    "/promo5.png",
  ];

  return (
    <div className="w-full py-10 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-70">
      {/* Heading + Filter Buttons */}
      <div>
      <div className=" lg:flex justify-between items-center text-center mb-8">
        <h1 className="text-3xl mb-8 md:text-4xl font-bold text-gray-900">
          Save Big with Limited-Time Travel Offers
        </h1>

        <div className="flex gap-4 bg-white p-2 rounded-full lg:w-auto w-100px shadow">
          <button className="px-6 py-2 text-gray-700 hover:bg-amber-600 cursor-pointer hover:text-white rounded-full font-semibold">
            All
          </button>
          <button className="px-6 py-2 text-gray-700 hover:bg-amber-600 cursor-pointer hover:text-white rounded-full font-semibold">Flight</button>
          
     
      </div>
       </div>

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
                    className="w-full h-full object-cover rounded-2xl"
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
  <div className="w-2 h-2 bg-amber-500  rounded-full"></div>

  {/* Dot 2 */}
  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>

  {/* Active Dot */}
  <div className="relative">
    <div className="w-3 h-3 bg-amber-800  rounded-full"></div>
    <div className="absolute inset-0 w-5 h-5 rounded-full bg-amber-400 opacity-60 -m-1"></div>
  </div>

  {/* Dot 4 */}
  <div className="w-2 h-2 bg-amber-500  rounded-full"></div>

  {/* Dot 5 */}
  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
</div>

    </div>
</div>

  );
}
