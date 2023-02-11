import React, { useState } from "react";
import Text from './Text'

function Slider({head}) {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
        {/* make a slider */}
        <Text Text={`${head}`} Color="#a693b9" Size="1rem"/>
        <input type="range" min="1" max="100" value={value} className="slider" id="myRange" onChange={handleChange}></input>
    </>
  )
}

export default Slider