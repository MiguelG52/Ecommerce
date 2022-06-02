import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='bg-neutral-300 m-4 md:ml-12 md:mr-12 rounded-lg'>
      <div className='p-10 md:p-l-12 md:p-r-12'>
        <p className='text-lg font-semibold text-gray-800'>Beats solo</p>
        <h3 className='capitalize font-bold grid text-3xl'>wireless<span className="uppercase text-white text-4xl">headphones</span></h3>
        <img src='' alt='headphones' className=''/>

        <div className='md:flex md:justify-between mt-40'>
          <div className='align-v-center'>
            <Link href="/product/ID">
              <button className=' rounded-xl text-semibold transition-smooth bg-red-500 px-5 text-white hover:bg-red-700 py-1'>
                Buy Now!
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-end text-left">
            <h5 className='text-gray-800 font-semibold'>Description</h5>
            <p className='text-gray-500 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic ullam rem pariatur?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner