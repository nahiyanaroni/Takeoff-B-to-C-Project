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
      <div className="py-4 px-0 rounded-xl flex flex-col md:flex-row gap-4 md:gap-2 justify-between items-center relative w-full">
        {/* Main grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-2 w-full">
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
              absolute 
              md:static
              md:relative
              md:transform-none
              md:w-auto md:h-auto
              md:bg-transparent
              md:shadow-none
              md:text-yellow-600
              md:hover:bg-gray-100
              left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              md:translate-x-0 md:translate-y-0
              md:order-3
              md:col-span-1
              md:flex md:items-center md:justify-center
              bg-yellow-600 hover:bg-yellow-700
              text-white md:text-current
              rounded-full
              w-10 h-10 md:w-auto md:h-auto
              flex items-center justify-center
              shadow-md transition
              z-10
            "
          >
            <FaArrowRightArrowLeft className="text-sm md:text-base" />
            <span className="hidden md:inline ml-2 text-sm font-medium">Swap</span>
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
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button
            type="submit"
            className="
              bg-yellow-600 hover:bg-yellow-700 
              text-white 
              rounded-xl
              flex items-center justify-center
              w-full md:w-16 lg:w-20
              h-12 md:h-16 lg:h-20
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