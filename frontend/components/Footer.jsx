import React from 'react'
import Image from 'next/image'
import { visaIcon, mcIcon, paypalIcon } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='w-screen p-5 md:p-12 '>
      <div className='border-t-[1px] font-light text-gray-700  border-t-neutral-300 flex justify-between items-center'>
        <div className='capitalize pt-5'>
          <p> @2022 <span className="font-bold">Miguel Gonzalez</span> all rights reserved.</p>
        </div>

        <div className='flex justify-between items-center gap-4 pt-5'>
          
          <div className="paymentIcon">
            <Image src={paypalIcon}/>
          </div>
          <div className="paymentIcon">
            <Image src={mcIcon}/>
          </div>
          <div className="paymentIcon">
            <Image src={visaIcon}/>
          </div>

        </div>
        
        <div className='capitalize pt-5'>
          <p>Stay connected</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer