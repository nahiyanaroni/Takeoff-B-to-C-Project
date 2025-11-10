"use client";
import React, { useState } from "react";
// import { FaExchangeAlt, FaSearch } from "react-icons/fa";
import { FaArrowRightArrowLeft} from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";


export default function FromToForm() {
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`From: ${from}\nTo: ${to}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-3"
    >
      {/* From */}
      <div className="relative flex-1 border rounded-lg px-4 py-2">
        <p className="text-xs text-gray-500">From</p>
        <h3 className="font-semibold text-gray-900">{from}</h3>
        <p className="text-xs text-gray-400 truncate">
          DAC, Hazrat Shahjalal Int.
        </p>
      </div>

      {/* Swap Button */}
      <button
        type="button"
        onClick={handleSwap}
        className="absolute left-113 bottom-15 z-10 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-md transition"
      >
           <FaArrowRightArrowLeft />
      </button>

      {/* To */}
      <div className="relative flex-1 border rounded-lg px-4 py-2">
        <p className="text-xs text-gray-500">To</p>
        <h3 className="font-semibold text-gray-900">{to}</h3>
        <p className="text-xs text-gray-400 truncate">CXB, Cox’s Bazar</p>
      </div>

      {/* Departure */}
      <div className="flex-1 border rounded-lg px-4 py-2">
        <p className="text-xs text-gray-500">Departure</p>
        <h3 className="font-semibold text-gray-900">12 Nov, 2025</h3>
        <p className="text-xs text-gray-400">Wednesday</p>
      </div>

      {/* Return */}
      <div className="flex-1 border rounded-lg px-4 py-2">
        <p className="text-xs text-gray-500">Return</p>
        <h3 className="font-semibold text-gray-900">15 Nov, 2025</h3>
        <p className="text-xs text-gray-400">Saturday</p>
      </div>

      {/* Traveller */}
      <div className="flex-1 border rounded-lg px-4 py-2">
        <p className="text-xs text-gray-500">Traveller, Class</p>
        <h3 className="font-semibold text-gray-900">1 Traveller</h3>
        <p className="text-xs text-gray-400">Economy</p>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg p-4 flex items-center justify-center transition"
      >
   <IoIosSearch />

      </button>
    </form>
  );
}
