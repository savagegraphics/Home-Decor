import Five from '@/components/Home/Extended/Featured/Five'
import Footer from '@/components/Home/Extended/Spaces/Footer'
import React from 'react'
import HomePage from '@/components/Home/Extended/Spaces/HomePage'
import RoomInspiration from '@/components/Home/Extended/Spaces/RoomInspirations'
import FourImagesSection from '@/components/Home/Extended/Spaces/FourImagesSection'
import ProductCard from '@/components/Home/Extended/Spaces/ProductCard'
import Products from '@/components/Home/Products'
import Service from '@/components/Home/Service'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
      <HomePage/>
    <Products/>
      <Service/>
    <ProductCard/>
    <Footer/>
    </div>
  )
}

export default Spaces