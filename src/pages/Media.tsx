import FiveX from '@/components/Home/Extended/Featured/FiveX'
import Seven from '@/components/Home/Extended/Media/Seven'
import Footer from '@/components/Home/Extended/Spaces/Footer'
import React from 'react'
import Feature from '@/components/Home/Extended/Products/Feature'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
              <Feature/>
           <Seven/>
    <FiveX/>
    <Footer/>
    </div>
  )
}

export default Spaces