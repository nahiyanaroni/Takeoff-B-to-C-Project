



import { Checkbox } from '@radix-ui/react-checkbox'
import React from 'react'

export default function Banner() {
  return (
    <div className='relative overflow-hidden w-full '>
        <video
        className="w-full h-150 object-cover"
        autoPlay
        loop
        muted
        >
        <source src="/sunSky.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-100 mb-6 drop-shadow-lg">
         It's Time To
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
         Explore The World
        </h1>
      </div>

      <div className=" bg-red-700">
 <Checkbox />

      </div>
    </div>
  )
}
