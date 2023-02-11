import React from 'react'

function Text({Text,Color,Size,Weight}) {
  return (
    <>
      <p style={{color:Color,fontSize:Size,fontWeight:Weight,padding:"0",margin:"5%"}}>{Text}</p>
    </>
  )
}

export default Text