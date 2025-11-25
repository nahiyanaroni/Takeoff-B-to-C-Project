import FromToForm from "./ExchangeButton";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className=" bg-white min-h-screen">
      <div className="relative w-full h-100 md:h-200 xl:h-250 pt-10">
        <Image
          src="/business.jpg"
          alt="promotion-banner"
          fill
          className="  object-cover rounded-lg quality-100 brightness-75"
          priority
        />

        <div className="absolute inset-0 flex flex-col px-100 mt-60">
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-gray-100 mb-3 drop-shadow-lg">
            Discover the Best Business <br /> Class Flight Deals with Takeoff <br /> Travels
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-bold text-white drop-shadow-lg">
            Discover premium travel experiences at unbeatable prices.
          </p>
        </div>

        {/* Search Card */}
        <div className="absolute w-full px-2 sm:px-6 md:px-10 lg:px-20 xl:px-100 top-60 md:top-80 lg:top-0 xl:top-150 ">
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

            {/* Fare Type Radios */}
            <RadioGroup
              defaultValue="option-one"
              className="flex flex-wrap gap-4 w-full pt-4 "
            >
              <div className="flex items-center space-x-2 hover:text-yellow-600 cursor-pointer">
                <RadioGroupItem value="option-one" id="fare-one" />
                <Label htmlFor="fare-one">Regular Fare</Label>
              </div>

              <div className="flex items-center space-x-2 hover:text-yellow-600 cursor-pointer">
                <RadioGroupItem value="option-two" id="fare-two" />
                <Label htmlFor="fare-two">Student Fare</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
