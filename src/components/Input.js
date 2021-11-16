import React from 'react'

function Input({color,setColor}) {
  return (
    <div className="d-flex justify-content-center">
      <input placeholder="enter color name" type="text" value={color} onChange={(e)=> setColor(e.target.value)}  />
    </div>
  )
}

export default Input
