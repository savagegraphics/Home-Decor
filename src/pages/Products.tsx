import Footer from '@/components/Home/Extended/Spaces/Footer'
import HomePage from '@/components/Home/Extended/Spaces/HomePage'
import React from 'react'
import Feature from '@/components/Home/Extended/Products/Feature'
import Imaged from '@/components/Home/Extended/Products/Imaged'
import ProductCard from '@/components/Home/Extended/Spaces/ProductCard'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
          <HomePage/>
      <Feature/>
    <Imaged/>
    <ProductCard/>
    <Footer/>
    </div>
  )
}

export default Spaces