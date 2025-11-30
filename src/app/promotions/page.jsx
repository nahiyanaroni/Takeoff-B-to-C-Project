"use client";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import promotionData from "@/data/promotion.json";

export default function Promotions() {
  const [active, setActive] = useState("all");
  const [items, setItems] = useState(promotionData);

  useEffect(() => {
    fetch("/promotion.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

  return (
    <div className="bg-white min-h-screen">
 <Image
  src="/pro.jpg"
  alt="download"
  width={1920}
  height={600}
  className="w-full h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 object-cover rounded-lg"
/>

      <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40 p-5 md:mt-10 mb-20">
        <h1 className="text-4xl font-bold">Promotions</h1>

        {/* Buttons */}
        <div className="flex gap-2 bg-blue-100 rounded-4xl p-1 w-fit my-5">
          {/* All Offers */}
          <button
            onClick={() => setActive("all")}
            className={`rounded-4xl px-4 py-2 cursor-pointer transition-all 
              ${
                active === "all"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold" // active
                  : "bg-transparent text-black font-medium hover:bg-amber-100"
              }
            `}
          >
            All Offers
          </button>

          {/* Flight */}
          <button
            onClick={() => setActive("flight")}
            className={`rounded-4xl px-4 py-2 cursor-pointer transition-all 
              ${
                active === "flight"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold" // active
                  : "bg-transparent text-black font-medium hover:bg-amber-100"
              }
            `}
          >
            Flight
          </button>
        </div>

        {/* Promotion List */}
        <div className="grid grid-cols-1  md:grid-cols-2  gap-6 mt-6">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-lg shadow-md p-3 bg-white">
              <div className="relative   h-30 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover "
                />
              </div>

            <div className="grid grid-cols-1">
                <h2 className="text-xl font-bold mt-3">{item.title}</h2>
              <p className="flex gap-1 text-amber-600 text-lg justify-start items-center text-center">Details <IoIosArrowForward /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
