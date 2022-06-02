import React from 'react'
import { FooterBanner, Product, HeroBanner } from '../components'
const index = () => {
  return (
    <>
      <HeroBanner/>
      <div className='w-screen align-v-center '>
        <h2 className='font-bold text-indigo-900 text-xl md:text-4xl capitalize '>Best Selling products</h2>
        <p className='md:text-lg font-thin'>Speakers of many variations</p>
      </div>
      <FooterBanner/>
    </>
  )
}

export default index