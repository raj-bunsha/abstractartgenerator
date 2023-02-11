import React from 'react'
import { Text, DropDown,Slider } from '../Utilities/Utilities'
//import style.css

function Layer({Layer}) {
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
  return (
    <div className="card">
        <Text Text={`LAYER ${Layer}`} Color="#fff" Weight="bolder" Size="1rem"></Text>
        <DropDown options={art_shapes_list} name="Shapes"/>
        <DropDown options={art_styles_list} name="Styles"/>
        <Slider min="0" max="100" value="50" head={`LAYER ${Layer} COMPLEXITY`}></Slider>
        <Slider min="0" max="100" value="50" head={`LAYER ${Layer} SHAPE SIZE`}></Slider>
    </div>
  )
}

export default Layer