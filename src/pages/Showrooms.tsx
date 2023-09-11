import Five from '@/components/Home/Extended/Featured/Five'
import Three from '@/components/Home/Extended/Products/Three'
import Two from '@/components/Home/Extended/Spaces/Two'
import Zero from '@/components/Home/Extended/Spaces/Zero'
import Footer from '@/components/Home/Extended/Spaces/Footer'
import React from 'react'
import ProductCard from '@/components/Home/Extended/Spaces/ProductCard'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
            <Three/>
            <Zero/>
            <Two/>
            <ProductCard/>
            <Footer/>
    </div>
  )
}

export default Spaces