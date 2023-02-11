import React,{useContext} from 'react'
import {LayerContext} from '../Contexts/LayerContext'

function DropDown({options,name}) {
  const {dropDownHandleChange,layer} = useContext(LayerContext)
  return (
    <div>
        {/* make a dropdown */}
        <select className='dropdown' value={options[layer[name]]} name={name} onChange={dropDownHandleChange}>
            {options.map((option) => (
                <option value={option} className="option">{option}</option>
            ))}
        </select>
    </div>
  )
}

export default DropDown