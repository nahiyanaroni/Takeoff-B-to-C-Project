import FromToForm from "./ExchangeButton";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IoIosPeople } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { TbArmchair } from "react-icons/tb";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className=" bg-white min-h-screen">
      <div className="relative w-full h-230 md:h-210 lg:200 xl:h-240 pt-10">
        <Image
          src="/business.jpg"
          alt="promotion-banner"
          fill
          className="object-cover  quality-100 brightness-75"
          priority
        />
          
        <div className="absolute  inset-0 flex flex-col px-4 md:pl-10 lg:pl-20 xl:pl-50 2xl:pl-100 mt-40 md:mt-70 lg:mt-60 xl:mt-90">
          <h1 className=" max-w-[596px] text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-100 mb-3 drop-shadow-lg">
            Discover the Best Business Class Flight Deals with Takeoff Travels
          </h1>
          <p className="text-lg md:text-xl  lg:text-2xl  text-white drop-shadow-lg">
            Discover premium travel experiences at unbeatable prices.
          </p>
        </div>

        {/* Search Card */}
        <div className="absolute w-full px-2 sm:px-6 md:px-10 lg:px-20 xl:px-50 2xl:px-100 top-100 md:top-110 lg:top-120 xl:top-150 ">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">  
            {/* Trip Type Radio Buttons */}
            <RadioGroup
              defaultValue="option-one"
              className="flex flex-wrap gap-4 w-full pb-4"
            >
              <div className="flex items-center space-x-2 hover:text-yellow-600 cursor-pointer">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">One Way</Label>
              </div>

              <div className="flex items-center space-x-2 hover:text-yellow-600 cursor-pointer">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Round Trip</Label>
              </div>

              <div className="flex items-center space-x-2 hover:text-yellow-600 cursor-pointer">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Multi-City</Label>
              </div>
            </RadioGroup>

            {/* From-To Form */}
            <FromToForm />

<div className=" grid gap-2 grid-cols-1 md:grid-cols-2">
  <div className="flex justify-between gap-2 border-2 border-gray-300 rounded-lg px-2 py-3">
  <div className="flex">
      <div className="flex items-center space-x-2 border-r pr-4">
<IoIosPeople  className=" text-gray-400  size-8  "/>
</div>
<p className=" text-black font-bold  mt-1 pl-3 ">1 Traveller</p>
  </div>

<FaAngleDown className=" mt-2" />


  </div>
 <div className="flex justify-between gap-2 border-2 border-gray-300 rounded-lg px-2 py-3">
  <div className="flex">
      <div className="flex items-center space-x-2 border-r pr-4">
<TbArmchair  className=" text-gray-400  size-7 "/>
</div>
<p className=" text-black font-bold  mt-1 pl-3 ">Business</p>
  </div>

<FaAngleDown className=" mt-2" />


  </div>

</div>

<button className="w-full mt-5 py-4 text-center text-white font-semibold 
bg-gradient-to-r from-yellow-400 to-orange-500 
rounded-full shadow-md">
  Search Flight
</button>

           
          </div>
        </div>
      </div>
    </div>
  );
}
