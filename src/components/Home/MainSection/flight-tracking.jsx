import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FlightTracking() {
  return (
    <div className=" bg-green-50 grid grid-cols-1 md:grid-cols-2 justify-between mx-2 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-70 p-10 rounded-2xl ">
      <div >
        <h1 className=" mb-4 text-4xl font-bold">Flight Tracking Made Easy</h1>
        <p>With Takeoff, track your flight is a breeze! <br /> Stay updated on your flight effortlessly using our handy flight <br /> tracker .</p>
        <button className="mt-5 bg-gradient-to-r from-yellow-400 to-orange-500  text-white flex items-center items-center gap-2 p-3 rounded-4xl">Open Flight Tracker <FaArrowRightLong /> </button>
      </div>

      <div className="flex justify-end items-center">
        <video
        autoPlay
        loop
        muted
        playsInline 
        preload="auto"
        className="h-[200px] w-[200px] object-cover mix-blend-multiply">
        <source src="/flight-video.mp4" type="video/mp4" />

        </video>
      </div>
    </div>
  ); 
}
