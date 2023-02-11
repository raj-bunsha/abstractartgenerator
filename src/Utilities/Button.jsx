import React from 'react'
import './style.css'

function Button({Text,onClick}) {
    // return a button

  return (
    <div>
        <button type='button' className='button' onClick={onClick}>{Text}</button>
    </div>
  )
}

export default Button