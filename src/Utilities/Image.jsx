import { useContext } from "react"
import { OverlayContext } from "../Contexts/OverlayContext"
import React from 'react'

function Image({src,position}) {
    const {overlay,setOverlay} = useContext(OverlayContext);
    //if the value of input is changed then set the overlay to the position of the image
    const handleChange = (e) => {
        if (e.target.checked) {
            setOverlay(position)
        }
        else
        {
            setOverlay("0")
        }
    }
    if (overlay === position) {
        return (
            <div className='image'>
                <img src={src} alt="Lights" height={100} width={150} />
                <input type="checkbox" id="vehicle1" name="vehicle1" checked onChange={handleChange}/>
            </div>
        )
    }
    else
    {
      return (
        <div className='image'>
            <img src={src} alt="Lights" height={100} width={150}/>
            <input type="checkbox" id="vehicle1" name="vehicle1" onChange={handleChange}/>
        </div>
      )
    }
}

export default Image