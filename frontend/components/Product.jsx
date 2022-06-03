import React from 'react'
import Link from 'next/link'

const Product = ({product}) => {
  return (
    <div className='cursor-pointer shadow-xl rounded-xl p-2 transform hover:scale-110 transition-smooth'>
      <Link href={`/product/${product._id}`}>
        <div className='relative'>
          {product.isBestProduct ? (
            <div className='absolute z-10 w-1/3 m-2 text-center bg-red-500 text-white text-sm p-1 rounded-xl  '>
              <p>Most Sold</p>
            </div>):
            null
          }
          <img className='bg-neutral-300 hover:bg-neutral-400  rounded-xl transition-smooth '
            width={250}
            height={250}
            src={product.img.url} alt={`${product.name}`}
          />
          <p className='capitalize text-gray-600 font-thin'>{product.name}</p>
          <p className='font-semibold'>${product.price}</p>
          
        </div>
      </Link>
    </div>
  )
}

export default Product