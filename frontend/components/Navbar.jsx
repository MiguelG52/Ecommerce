import React from 'react'

import Link from 'next/dist/client/link'
import Cart from './Cart'



const Navbar = () => {
  
  return (
    <nav className='p-5 md:pl-12 md:pr-12 fixed z-20 w-screen bg-white shadow-lg'>
      
      <div className="flex justify-between items-center"> 
        <div className='cursor-pointer'>
          <div className='border-red-500 border-2 w-10'/>
          <div className='border-red-500 border-2 w-10 mt-1'/>
          <div className='border-red-500 border-2 w-10 mt-1'/>
        </div>

        <Link href="/" className='font-light md:text-xl capitalize'>
          Next.js Ecommerce
        </Link>


        <Cart/>
      </div>
      
    </nav>
  )
}

export default Navbar