import React from 'react'
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuTicketsPlane } from "react-icons/lu";
import { TbHeartHandshake } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Smallcard() {
  return (
    <div className='pt-150 md:pt-120 lg:pt-70 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center text-center items-center gap-10 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-70'>
      <div className='text-center'>
        <FaHandHoldingDollar className='text-8xl text-yellow-400 mb-7 mx-auto' />
        <h1 className=" mb-3 text-xl font-bold text-yellow-600">Best Price Guarantee</h1>
        <p>our Price Guarantee is valid for purchases made within 30 days</p>
      </div>
      <div className='text-center'>
        <LuTicketsPlane className='text-8xl text-yellow-400 mb-7 mx-auto' />
        <h1 className=" mb-3 text-xl font-bold text-yellow-600">Easy & Quick Booking</h1>
        <p>Book with us today,and let us take care of the details.</p>
      </div>
      <div className='text-center'>
        <TbHeartHandshake className='text-8xl text-yellow-400 mb-7 mx-auto' />
        <h1 className=" mb-3 text-xl font-bold text-yellow-600">Safest & Reliable</h1>
        <p>We are proud of our impeccable safety record and the trust of our  passengers</p>
      </div>
      <div className='text-center'>
        <MdOutlineSupportAgent className='text-8xl text-yellow-400 mb-7 mx-auto' />
        <h1 className=" mb-3 text-xl font-bold text-yellow-600">24/7 Customer Support</h1>
        <p>Our dedicated support team is available around the clock to assist you.</p>
      </div>
    </div>
  )
}