import React from 'react'

function DropDown({options}) {
  return (
    <div>
        {/* make a dropdown */}
        <select className='dropdown'>
            {options.map((option) => (
                <option value={option} className="option">{option}</option>
            ))}
        </select>
    </div>
  )
}

export default DropDown