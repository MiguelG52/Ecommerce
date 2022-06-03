import React from 'react'

const FooterBanner = () => {
  return (
    <div className='w-screen p-5 md:p-14 relative'>
      <div className='flex flex-col justify-between items-center md:flex-row  w-full h-[500px] md:h-[22rem]  bg-red-500 rounded-xl p-5'>
        
        <div className='md:text-right uppercase text-white flex flex-col w-full  md:w-1/3'>
          <p>20% off</p>
          <h3 className='font-semibold md:text-4xl xl:text-9xl'>FINE SMILE</h3>
          <p>15 jun to 15 jul</p>
        </div>
        
        <img src='https://res.cloudinary.com/dkaclgxsc/image/upload/v1654209565/MERN_Ecommerce/main_page/header/header_j7ehgr.webp'
            alt="headphones"
            width={180}
            className=" md:w-[20rem] xl:w-[30rem]"
        />
        
        <div className='text-white md:w-1/3'>
          <p className='text capitalize font-thin'>beats solo air</p>
          <h3 className='text-2xl md:texy-4xl xl:text-7xl'>Summer Sale</h3>
          <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <button className='mt-10 bg-white text-red-500 w-32 h-10 rounded-xl capitalize font-semibold hover:bg-neutral-500 hover:text-white transition-smooth'>shop now </button>
        </div>

      </div>

    </div>
  )
}

export default FooterBanner