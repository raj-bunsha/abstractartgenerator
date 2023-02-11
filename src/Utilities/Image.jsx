import React from 'react'

function Image({src}) {
  return (
    <div className='image'>
        <img src={src} alt="Lights"/>
        <input type="checkbox" id="vehicle1" name="vehicle1"/>
    </div>
  )
}

export default Image