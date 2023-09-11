import React from 'react'
import 'tailwindcss/tailwind.css';
import Hero from '@/components/Home/Hero'
import Featured from '@/components/Home/Extended/Spaces/Featured'
import Footer from '@/components/Home/Extended/Spaces/Footer';
import Products from '@/components/Home/Products';
import Services from '@/components/Home/Services';
import WHYUS from '@/components/Home/WHYUS';
import Service from '@/components/Home/Service';
import Product from '@/components/Home/Product';

type Props = {}

const index = (props: Props) => {
  return (
    <div className='bg-white'>
      <Hero/>
      <Featured/>
      <Products/>
      <Services/>
      <WHYUS/>
      <Product/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default index