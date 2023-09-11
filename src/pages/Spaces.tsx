import Five from '@/components/Home/Extended/Featured/Five'
import Footer from '@/components/Home/Extended/Spaces/Footer'
import React from 'react'
import HomePage from '@/components/Home/Extended/Spaces/HomePage'
import RoomInspiration from '@/components/Home/Extended/Spaces/RoomInspirations'
import FourImagesSection from '@/components/Home/Extended/Spaces/FourImagesSection'
import ProductCard from '@/components/Home/Extended/Spaces/ProductCard'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
      <HomePage/>
    <RoomInspiration/>
    <FourImagesSection/>
    <ProductCard/>
    <Footer/>
    </div>
  )
}

export default Spaces