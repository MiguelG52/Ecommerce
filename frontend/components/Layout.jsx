import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Next.js Ecommerce</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='max-w-[1900px]'>
        {children}
        <Footer/>
      </main>
    </div>
  ) 
  
}

export default Layout