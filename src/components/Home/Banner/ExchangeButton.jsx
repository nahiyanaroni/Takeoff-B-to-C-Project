"use client";
import React, { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function FromToForm() {
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`From: ${from}\nTo: ${to}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-4 px-0 rounded-xl flex flex-col lg:flex-row gap-4 lg:gap-2 justify-between items-center relative w-full">
        {/* Main grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-2 w-full">
          {/* FROM */}
          <div className="border rounded-lg px-4 py-3 relative col-span-1">
            <p className="text-xs text-gray-500">From</p>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{from}</h3>
            <p className="text-xs text-gray-400 truncate">
              DAC, Hazrat Shahjalal Int.
            </p>
          </div>

          {/* SWAP BUTTON */}
        <button
    type="button"
    onClick={handleSwap}
    className="
        /* Mobile - floating center button */
        absolute
        right-0 top-25 md:left-74 md:top-9 lg:left-30 xl:left-50
        -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0
        bg-yellow-600 hover:bg-yellow-700
        text-white
        rounded-full
        w-12 h-12 md:w-10 md:h-10
        flex items-center justify-center
        shadow-lg transition-all
        z-50
        md:z-10
        
        /* Desktop - different position */
        md:right-4 md:bottom-4
        md:bg-yellow-600 md:hover:bg-yellow-700
    "
>
    {/* Button content - same for all screens */}
    <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
</button>

          {/* TO */}
          <div className="border rounded-lg px-4 py-3 col-span-1">
            <p className="text-xs text-gray-500">To</p>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{to}</h3>
            <p className="text-xs text-gray-400 truncate">CXB, Cox's Bazar</p>
          </div>

          {/* DEPARTURE & RETURN CONTAINER */}
          <div className="grid grid-cols-2 col-span-1 sm:col-span-2 lg:col-span-2 gap-0">
            <div className="border rounded-l-lg px-3 sm:px-4 py-3">
              <p className="text-xs text-gray-500">Departure</p>
              <h3 className="font-semibold text-gray-900 text-sm lg:text-base">12 Nov, 2025</h3>
              <p className="text-xs text-gray-400">Wednesday</p>
            </div>

            <div className="border border-l-0 rounded-r-lg px-3 sm:px-4 py-3">
              <p className="text-xs text-gray-500">Return</p>
              <h3 className="font-semibold text-gray-900 text-sm lg:text-base">15 Nov, 2025</h3>
              <p className="text-xs text-gray-400">Saturday</p>
            </div>
          </div>

          {/* TRAVELLER */}
          <div className="border rounded-lg px-4 py-3 col-span-1 sm:col-span-2 lg:col-span-1">
            <p className="text-xs text-gray-500">Traveller, Class</p>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">1 Traveller</h3>
            <p className="text-xs text-gray-400">Economy</p>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <button
            type="submit"
            className="
              bg-yellow-600 hover:bg-yellow-700 
              text-white 
              rounded-xl
              flex items-center justify-center
              w-full  lg:w-20
              h-12 lg:h-20
              transition
              text-sm md:text-base
            "
          >
            <IoIosSearch size={24} className="md:size-6 lg:size-8" />
            <span className="ml-2 md:hidden">Search Flights</span>
          </button>
        </div>
      </div>
    </form>
  );
}