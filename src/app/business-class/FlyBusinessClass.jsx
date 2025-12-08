import React from "react";
import Scrolling from "./Scrolling";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FlyBusinessClass() {
  return (
    <div>
      <div className="px-80 py-30">
        <h1 className="text-4xl font-bold text-amber-400 ">
          Why Fly Business Class
        </h1>
        <p className="text-xl max-w-[820px] mt-2">
          Business Class turns your journey into part of the destination — where
          comfort begins the moment you board. From extra legroom and lie-flat
          seats to gourmet meals and personalized service, every detail is
          designed to make your travel experience relaxing, productive, and
          unforgettable.
        </p>
      </div>
      <Scrolling />

      <div className="px-80 py-30">
        <h1 className="text-4xl font-bold text-amber-400 ">
          What’s It Like Flying Business Class?
        </h1>
        <p className="text-xl max-w-[1100px] mt-2">
          Flying business class is an experience of comfort, privacy, and
          premium service that transforms long-haul travel into pure indulgence.
          From spacious seats that recline into fully flat beds to gourmet
          meals, priority check-in, and lounge access — business class flight
          facilities are designed to elevate every aspect of your journey.
          Whether you’re flying with Qatar Airways, Singapore Airlines, Turkish
          Airlines, or Emirates, each carrier offers a unique and luxurious take
          on the business class experience.
        </p>
        <div>
          {/* card-1 */}
        <div className="flex gap-40 justify-center items-center">
          <div>
            <h1 className="text-6xl font-semibold max-w-[400px] text-amber-400 ">
              Unwind in Full Comfort
            </h1>
            <p className="text-xl max-w-[1100px] mt-2">
              Sink into plush, lie-flat seats designed to help you relax, sleep,
              or stretch out mid-air comfort that turns hours into bliss.
            </p>

             <button className="mt-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex items-center  gap-2 p-3 rounded-4xl">Book a Flight<FaArrowRightLong /> </button>
          </div>
           <Image
          src="/flying-business-class-1.png"
          alt="business-class-1"
          width={1200}
          height={600}
          className="w-full h-auto mt-5   object-cover"
        />
        </div>
{/* card-2 */}
        <div className="flex gap-40 flex-row-reverse justify-center items-center">
          <div>
            <h1 className="text-6xl font-semibold max-w-[400px] text-amber-400 ">
              Work or Rest, Your Way
            </h1>
            <p className="text-xl max-w-[1100px] mt-2">
              Enjoy your personal space with ample room, a large tray table, and in-seat power ideal for focused work or peaceful rest.
            </p>

             <button className="mt-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex items-center  gap-2 p-3 rounded-4xl">Book a Flight <FaArrowRightLong /> </button>
          </div>
           <Image
          src="/flying-business-class-2.png"
          alt="business-class-2"
          width={1200}
          height={600}
          className="w-full h-auto mt-5  object-cover"
        />
        </div>

{/* card-3 */}
        <div className="flex gap-40 justify-center items-center">
          <div>
            <h1 className="text-6xl font-semibold max-w-[400px] text-amber-400 ">
              Savor Every Bite at 35,000 ft
            </h1>
            <p className="text-xl max-w-[1100px] mt-2">
              Sink into plush, lie-flat seats designed to help you relax, sleep, or stretch out mid-air comfort that turns hours into bliss.
            </p>

             <button className="mt-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex items-center  gap-2 p-3 rounded-4xl">Book a Flight <FaArrowRightLong /> </button>
          </div>
           <Image
          src="/flying-business-class-3.png"
          alt="business-class-3"
          width={1200}
          height={600}
          className="w-full h-auto mt-5   object-cover"
        />
        </div>
        </div>
       
      </div>
      <div className="px-80 py-10">
        <h1 className="text-4xl font-bold text-amber-400 ">Top Airlines Offering Business Class</h1>
        <p className="text-xl max-w-[1100px] mt-2">Experience world-class travel with leading carriers that operate business class flights from Bangladesh. From Qatar Airways, Emirates, and Singapore Airlines to Turkish Airlines and Biman Bangladesh, these airlines offer exceptional service, luxury, and comfort for your next premium journey.</p>
      </div>
    </div>
  )};

