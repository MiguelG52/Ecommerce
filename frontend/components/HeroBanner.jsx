import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='bg-neutral-300 m-4 md:ml-12 md:mr-12 rounded-lg h-[750px] md:h-[600px]'>
      <div className='p-10 md:p-l-12 md:p-r-12 md:p-20 lg:pt-48 h-full overflow-hidden relative flex flex-col items-center justify-between md:justify-center md:items-start'>
        <div className='z-0'>
          <p className='text-lg font-semibold text-gray-800 z-30 md:text-xl'>Beats solo</p>
          <h3 className='relative z-10 capitalize font-bold grid text-3xl md:text-5xl'>wireless<span className="uppercase text-white text-5xl md:text-7xl xl:text-9xl">headphones</span></h3>
          
          <img src='https://res.cloudinary.com/dkaclgxsc/image/upload/v1654209565/MERN_Ecommerce/main_page/header/header_j7ehgr.webp' 
          alt='headphones' className='md:-top-5 absolute md:right-20 z-0 right-0 sm:right-18 top-[10rem] sm:top-[5rem] '/>
        </div>

        <div className='z-10 md:flex md:justify-between md:items-center w-full md:gap-10 mt-48 lg:mt-36 '>
          <div className='align-v-center'>
            <Link href="/product/ID">
              <button className=' rounded-xl text-semibold transition-smooth bg-red-500 px-5 md:w-44 md:h-12 text-white hover:bg-red-700 py-1'>
                Buy Now!
              </button>
            </Link>
          </div>
          

          <div className="flex flex-col items-end text-left relative">
            <h5 className='text-gray-800 font-semibold md:text-xl'>Description</h5>
            <p className='text-gray-500 w-full lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic ullam rem pariatur?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner