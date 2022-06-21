import React from 'react'
import { FooterBanner, Product, HeroBanner, CategorysBanner } from '../components'
import { loadBestProducts } from '../lib/products';

const index = ({bestProducts}) => {

  return (
    <>
      <HeroBanner/>
      
      <section className='w-screen max-w-screen align-v-center mt-10'>
        <h2 className='font-bold text-stone-800 text-xl md:text-4xl capitalize '>Best Selling products</h2>
        <p className='md:text-lg font-thin'>Speakers of many variations</p>
    
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 p-5'>
          {bestProducts.map((data)=> <Product key={data._id} product={data}/> )}
        </div>


      </section>
      <FooterBanner/>
    </>
  );
}


export async function getStaticProps(){
  const res = await loadBestProducts();
  const bestProducts = await res.data;

  return{
    props:{
      bestProducts,
    },
  }
}


export default index;