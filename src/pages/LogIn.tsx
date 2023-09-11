import Eight from '@/components/Home/Extended/Featured/Eight'
import EightX from '@/components/Home/Extended/Featured/EightX'
import Five from '@/components/Home/Extended/Featured/Five'
import FiveX from '@/components/Home/Extended/Featured/FiveX'
import Seven from '@/components/Home/Extended/Media/Seven'
import SevenX from '@/components/Home/Extended/Media/SevenX'
import One from '@/components/Home/Extended/Products/One'
import Three from '@/components/Home/Extended/Products/Three'
import Six from '@/components/Home/Extended/Showrooms/Six'
import SixX from '@/components/Home/Extended/Showrooms/SixX'
import HomePage from '@/components/Home/Extended/Spaces/HomePage'
import Two from '@/components/Home/Extended/Spaces/Two'
import Zero from '@/components/Home/Extended/Spaces/Zero'
import React from 'react'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
      <HomePage/>
     <Zero/>
   <One/>
    <Two/>
    <Three/>
    <Five/>
    <FiveX/>
    <Six/>
     <Seven/>
     <SixX/>
     <SevenX/>
     <Eight/>
     <EightX/>
    </div>
  )
}

export default Spaces