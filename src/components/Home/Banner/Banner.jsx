import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import FromToForm from "./ExchangeButton";

export default function Banner() {
  return (
    <div className="relative w-full">

      {/* Background Video (hidden on mobile) */}
      <video
        className="hidden md:block w-full h-[400px] lg:h-[550px] object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/fly.mp4" type="video/mp4" />
      </video>

      {/* MOBILE BACKGROUND (optional) */}
      <div className="block md:hidden w-full h-[320px] bg-gradient-to-b from-blue-300 to-blue-200"></div>

      {/* Center Title Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-100 mb-3 drop-shadow-lg">
          It&apos;s Time To
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Explore The World
        </h1>
      </div>

      {/* Search Card */}
      <div className="absolute w-full px-2 sm:px-6 md:px-10 lg:px-20 top-60 md:top-80 lg:top-120 xl:top-120 xl:px-70">
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
  );
}
