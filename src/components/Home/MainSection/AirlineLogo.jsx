import Image from 'next/image'
import React from 'react'

export default function AirlineLogo() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-2 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-70 p-10 md:mt-10'>
<Image src="/01.png" alt="airline-logos" width={1200} height={200} className='w-full h-auto object-contain' />
<Image src="/02.png" alt="airline-logos" width={1200} height={200} className='w-full h-auto object-contain' />
<Image src="/03.png" alt="airline-logos" width={1200} height={200} className='w-full h-auto object-contain' />
<Image src="/04.png" alt="airline-logos" width={1200} height={200} className='w-full h-auto object-contain' />





    </div>
  )
}
