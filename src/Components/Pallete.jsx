import React,{useState,useContext, useEffect} from 'react'
import { DataContext } from '../Contexts/DataContext'
import { LayerContext } from '../Contexts/LayerContext'
import DropDown from '../Utilities/DropDown'
import Text from '../Utilities/Text'


function Pallete() {
  const color_palette_names = [
    "Forest",
    "Futuristic",
    "Sunset",
    "Vintage",
    "Crimson",
    "Vampire",
    "Lightning",
    "Pastel",
    "Lava",
    "Neon",
    "Lilac",
    "Soft Gray",
    "Low Saturation",
    "Poison",
    "Spring",
    "Black & White",
    "Corruption",
    "Ivy",
    "Ocean",
    "Royalty"
]
  const {request,setRequest} = useContext(DataContext);
  const [layer,setLayer]=useState({"pallete":request["pallete"]})
  const dropDownHandleChange = (e) => 
  {
    let index=-1;
    index=color_palette_names.indexOf(e.target.value)
    // console.log(index,layer)
    layer["pallete"]=index
    setLayer(layer)
    setRequest({...request,"pallete":layer["pallete"]})
  }
  useEffect(() => {
    setLayer({"pallete":request["pallete"]})
  },[request["pallete"]])
  return (
    <div className="card">
      <LayerContext.Provider value={{dropDownHandleChange,layer}}>
        {/* make a dropdown */}
        <Text Text="COLOR PALLETE" Size="1.2rem" />
        <DropDown options={color_palette_names} name="pallete"/>
      </LayerContext.Provider>
    </div>
  )
}

export default Pallete