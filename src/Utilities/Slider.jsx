import React, { useContext } from "react";
import {LayerContext} from '../Contexts/LayerContext'
import Text from './Text'

function Slider({head,name,max,min}) {
  const {handleChanges,layer}=useContext(LayerContext);
  return (
    <>
        {/* make a slider */}
        <Text Text={`${head}`} Color="#a693b9" Size="1rem"/>
        <input type="range" min={min} max={max} value={layer[name]} className="slider" id="myRange" onChange={handleChanges} name={name}></input>
    </>
  )
}

export default Slider