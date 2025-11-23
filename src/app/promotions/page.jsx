import Image from 'next/image'
import React from 'react'

export default function Promotions() {
  return (
    <div className='bg-white h-200 '>
      <Image src="/pro.avif" alt="promotion-banner" width={2000} height={500} className='w-full h-50  md:h-80 xl:h-120 pt-10 object-cover'/>
    <div className='mx-2 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-70 p-10 md:mt-10'>
    <h1>Promotions</h1>
   <div>
    <button></button>
    <button></button>
   </div>
   <div>
    <Image src="/promo1.jpg" alt="promotion1" width={500} height={300} className='w-full h-auto object-cover rounded-lg mb-5'/>
    <div>
      <h1></h1>
      <p></p>
    </div>
   </div>
    </div>
      </div>
  )
}
