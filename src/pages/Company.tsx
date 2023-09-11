import EightX from '@/components/Home/Extended/Featured/EightX'
import Seven from '@/components/Home/Extended/Media/Seven'
import SevenX from '@/components/Home/Extended/Media/SevenX'
import Footer from '@/components/Home/Extended/Spaces/Footer'
import RoomInspiration from '@/components/Home/Extended/Spaces/RoomInspirations'
import React from 'react'

type Props = {}

const Spaces = (props: Props) => {
  return (
    <div>
             <SevenX/>
             <RoomInspiration/>
           <Seven/>
    <Footer/>
    </div>
  )
}

export default Spaces