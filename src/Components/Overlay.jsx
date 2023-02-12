import React from 'react'
import Image from '../Utilities/Image'
import overlay1 from '../Overlays/overlay1.png'
import overlay2 from '../Overlays/overlay2.png'
import overlay3 from '../Overlays/overlay3.png'
import overlay4 from '../Overlays/overlay4.png'
import overlay5 from '../Overlays/overlay5.png'
import overlay6 from '../Overlays/overlay6.png'

function Overlay() {
   
  return (
    <div id='overlay'>
        <Image src={overlay1} alt="overlay" position="1"/>
        <Image src={overlay2} alt="overlay" position="2"/>
        <Image src={overlay3} alt="overlay" position="3"/>
        <Image src={overlay4} alt="overlay" position="4"/>
        <Image src={overlay5} alt="overlay" position="5"/>
        <Image src={overlay6} alt="overlay" position="6"/>
    </div>
  )
}

export default Overlay