import React from 'react'

function Input({color,setColor}) {
  return (
    <div>
      <input placeholder="enter color name" type="text" value={color} onChange={(e)=> setColor(e.target.value)}  />
    </div>
  )
}

export default Input
