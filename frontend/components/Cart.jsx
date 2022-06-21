import React, {useRef} from 'react'
import { cartIcon } from '../assets/icons'
import Image from 'next/dist/client/image'

import { useCart } from '../context/CartContext'
import { useScreenWidth } from '../hooks'

const Cart = () => {
  const cartRef = useRef();
  const {showCart, handleShowCart, totalQuantities, totalPrice} = useCart();


  return (
    <div ref={cartRef} className=''>

      {/**Cart wrapper */}
      <div className={`${showCart ? 'left-0':'left-full'} top-0 z-20 w-full h-screen absolute transition-smooth`}>
        <div className='w-full h-full grid md:grid-cols-2 relative'>
          
          {
            /** black bar */
            
            <div className='bg-black w-full h-full opacity-40 hidden md:block'/>

          }
          
          
          
          <div className='bg-white'>
          
            {/**Close btn wrapper */}
            
            
            {/** Cart List */}
            <div className='p-5 font-semibold flex flex-col h-full justify-between'>
              <p className='capitalize cursor-pointer' onClick={handleShowCart} > &#60; Your Cart <span className='text-red-500'>{totalQuantities === 0 ? 'is empty': `(${totalQuantities} items)`}</span></p>
              
              <div className='overflow-scroll h-full hide-scroll-bar'>

                { 
                  totalQuantities === 0 ? (
                    <div className='h-full text-center flex items-center'>
                      <p className='text-xl font-semibold'> There are no items in your shopping cart</p>
                    </div>
                  ):(<></>)
                }

              </div>

              <div className='font-semibold flex justify-center flex-col w-full'>
                
                <div className='flex justify-between w-full'>
                  <p>Subtotal:</p>
                  <p>$ {totalPrice}</p>
                </div>
                <button className=' p-3 hover:bg-red-700 transition-smooth bg-red-500 mt-5 rounded-lg text-white font-semibold'>Pay with Stripe</button>

              </div>
            </div>
          </div>


        </div>
      </div>
      
      {/**Cart icon */}
      <div onClick={handleShowCart} className='z-10 w-5 relative md:w-8 cursor-pointer'>
          <Image src={ cartIcon } />
          <div className='text-white text-xs md:text-base top-1/2 left-3/4 bg-red-500 text-center rounded-full absolute h-4 w-4 md:h-6 md:w-6'>
            {totalQuantities}
          </div>
      </div>
      
      
    </div>
  )
}

export default Cart