import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Next.js Ecommerce</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='max-w-[1900px] pt-14 overflow-hidden relative'>
        {children}
        <Footer/>
      </main>
    </>
  ) 
  
}

export default Layout