import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import FromToForm from "./ExchangeButton";

export default function Banner() {
  return (
    <div className="relative w-full ">
      <video className="w-full h-100 object-cover" autoPlay loop muted>
        <source src="/fly.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-100 mb-6 drop-shadow-lg">
            It&apos;s Time To
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Explore The World
          </h1>
        </div>
        <div className="absolute -bottom-20 w-full px-3 md:px-20 lg:px-40 bg-opacity-90">
  <div className="bg-white rounded-2xl shadow-2xl p-5">
    {/* Radio buttons */}
    <RadioGroup
      defaultValue="option-one"
      className="flex flex-wrap gap-4 bg-white w-full pt-2 px-2"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">One Way</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Round Trip</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Multi-City</Label>
      </div>
    </RadioGroup>

    {/* From-To Form */}
    <FromToForm />
  </div>
</div>

      </>
    </div>
  );
}
