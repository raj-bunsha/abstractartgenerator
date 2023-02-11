import React from 'react'
import './style.css'

function Button({Text}) {
    // return a button

  return (
    <div>
        <button type='button' className='button'>{Text}</button>
    </div>
  )
}

export default Button