"use client";

import React, { useEffect, useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import Homedestination from "@/data/fromDestination.json";

export default function FromToForm() {
  const [from, setFrom] = useState("Dhaka");
  const [airportFrom, setAirportFrom] = useState(
    "DAC,Hazrat Shahjalal International Airport"
  );
  const [airportTo, setAirportTo] = useState("DAC,Cox's Bazar Airport");
  const [to, setTo] = useState("Cox's Bazar");
  const [fromDrop, setFromDrop] = useState(false);
  const [toDrop, setToDrop] = useState(false);

  const [items, setItems] = useState(Homedestination);
  const [fromDestination, setFromDestination] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fromSearchTerm, setFromSearchTerm] = useState(""); // Separate search term for "from"
  const [toSearchTerm, setToSearchTerm] = useState("");

  const filteredcity = items.filter(
    (city) =>
      city.town.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.airportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("/fromDestination.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  },[]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAirportFrom(airportTo);
    setAirportTo(airportFrom);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`From: ${from}\nTo: ${to}`);
  };
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-4 px-0 rounded-xl flex flex-col lg:flex-row gap-4 lg:gap-3 justify-between items-center relative w-full">
        {/* Main grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap- w-full ">
          {/* FROM */}
          <div
            onClick={() => {
              setFromDrop(!fromDrop);
              setToDrop(false);
              handleInputFocus();
              
            }}
            className="dropdown "
          >
            { isInputFocused ?<div>
              <input 
              
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Airport/City"
                className="w-full border rounded-lg px-3 py-3 col-span-1"
              />
            </div>:
            <div className="relative flex items-center gap-2 border rounded-lg px-3 py-3  col-span-1">
              <h3 className="font-semibold  text-gray-900 text-sm lg:text-base ">
                {from}
              </h3>
              <div className="border-l-2 pl-2 border-gray-300  ">
                <p className="text-xs text-black">From</p>
                <p className="text-xs text-blue-600 truncate ">
                  {airportFrom.substring(0, 15)}...
                </p>
              </div>
            </div>}

            {fromDrop ? (
              <div className="absolute">
                <div className="bg-white h-80 rounded-lg overflow-y-auto ">
                  {filteredcity.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setFrom(item.town);
                        setAirportFrom(
                          `${item.shortName}, ${item.airportName}`
                        );
                        setFromDrop(false);
                        setSearchTerm("");
                      }}
                      className="flex justify-between  items-center rounded-lg  w-100 p-4 "
                    >
                      <div className="flex gap-3">
                        <BiSolidPlaneAlt className=" text-amber-500 size-6" />
                        <div>
                          <h3 className="font-bold">{item.town}, Bangladash</h3>
                          <p className="text-gray-500">{item.airportName}</p>
                        </div>
                      </div>
                      <h2 className="text-lg font-bold">{item.shortName}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {/* SWAP BUTTON */}
          <button
            type="button"
            onClick={handleSwap}
            className="
        /* Mobile - floating center button */
        absolute
        right-0 top-20 md:top-6 md:left-75  lg:left-45 xl:left-56
        -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0
       bg-gradient-to-r from-yellow-400 to-orange-500   hover:from-yellow-500 hover:to-orange-600 
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
            <svg
              className="w-6 h-6 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </button>

          {/* TO */}
          <div
            onClick={() => {
              setToDrop(!toDrop);
              setFromDrop(false); // close FROM dropdown
            }}
            className="dropdown"
          >
            <div className=" relative flex items-center gap-2  border rounded-lg px-3 py-3  col-span-1">
              <h3 className="font-semibold pr-2 text-gray-900 text-sm lg:text-base">
                {to}
              </h3>
              <div className="border-l-2 pl-2 border-gray-300  ">
                <p className="text-xs text-black">To</p>
                <p className="text-xs text-blue-600 truncate">
                  {airportTo.substring(0, 15)}...
                </p>
              </div>
            </div>
            {toDrop ? (
              <div className="absolute">
                <div className="bg-white h-80 rounded-lg overflow-y-auto ">
                  {filteredcity.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setTo(item.town);
                        setAirportTo(`${item.shortName}, ${item.airportName}`);
                        setToDrop(false);
                        setSearchTerm("");
                      }}
                      className="flex justify-between  items-center rounded-lg  w-100 p-4 "
                    >
                      <div className="flex gap-3">
                        <BiSolidPlaneAlt className=" text-amber-500 size-6" />
                        <div>
                          <h3 className="font-bold">{item.town}, Bangladash</h3>
                          <p className="text-gray-500">{item.airportName}</p>
                        </div>
                      </div>
                      <h2 className="text-lg font-bold">{item.shortName}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* DEPARTURE & RETURN CONTAINER */}
          <div className="grid grid-cols-2 col-span-1 sm:col-span-2 lg:col-span-2 gap-4">
            <div className="flex items-center gap-2  border rounded-lg px-2  relative col-span-1">
              <h3 className="font-semibold pr-2 text-gray-900 text-sm lg:text-base">
                12
              </h3>
              <div className="border-l-2 pl-2 border-gray-300  ">
                <p className="text-xs text-black">December</p>
                <p className="text-xs text-blue-600 truncate">Friday,2025</p>
              </div>
            </div>
            <div className="flex items-center gap-2  border rounded-lg px-2  relative col-span-1">
              <h3 className="font-semibold pr-2 text-gray-900 text-sm lg:text-base">
                15
              </h3>
              <div className="border-l-2 pl-2 border-gray-300  ">
                <p className="text-xs text-black">December</p>
                <p className="text-xs text-blue-600 truncate">Monday,2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
