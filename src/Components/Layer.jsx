import React,{useContext,useEffect,useState} from 'react'
import { DataContext } from '../Contexts/DataContext'
import { Text, DropDown,Slider } from '../Utilities/Utilities'
import {LayerContext} from '../Contexts/LayerContext'
//import style.css

function Layer({Layer,name}) {
  const art_styles_list = [
    "Chaotic",
    "Striped Horizontal",
    "Striped Vertical",
    "Mosaic",
    "Cornered",
    "Centered",
    "Empty"
]

  const art_shapes_list = [
    "Lines",
    "Circles",
    "Squares",
    "Hollow Polygons",
    "Filled Polygons",
    "Dots",
    "Curves",
    "Rings"
  ]
  // set values of the layer in the request object
  const {request,setRequest} = useContext(DataContext);
  const [layer,setLayer]=useState(request[name])
  const handleChanges = (e) => {
    layer[e.target.name]=e.target.value
    setLayer(layer)
    request[name]=layer
    setRequest({...request})
  }
  useEffect(() => {
    setLayer(request[name])
  },[])
  const dropDownHandleChange = (e) => {
    let index=-1;
    if(e.target.name==="Shape"){
      index=art_shapes_list.indexOf(e.target.value)
      layer["Shape"]=index
      e.target.value=art_shapes_list[index]
    }
    else if(e.target.name==="Styles"){
      index=art_styles_list.indexOf(e.target.value)
      layer["Styles"]=index
      e.target.value=art_styles_list[index]
    }
    setLayer(layer)
    request[name]=layer
    setRequest({...request})
  }
  return (
    <div className="card">
      <LayerContext.Provider value={{handleChanges,dropDownHandleChange,layer}}>
        <Text Text={`LAYER ${Layer}`} Color="#fff" Weight="bolder" Size="1rem"></Text>
        <DropDown options={art_shapes_list} name="Shape"/>
        <DropDown options={art_styles_list} name="Styles"/>
        <Slider min="10" max="30" head={`LAYER ${Layer} COMPLEXITY`} name="Complexity"></Slider>
        <Slider min="50" max="400" head={`LAYER ${Layer} SHAPE SIZE`} name="Size"></Slider>
      </LayerContext.Provider>
    </div>
  )
}

export default Layer