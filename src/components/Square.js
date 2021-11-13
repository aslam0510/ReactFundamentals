import React from 'react'

function Square({colorValue}) {
  return (
    <div className="square my-3" style={{backgroundColor : colorValue}}>
      <h2>{colorValue ? colorValue : 'Empty Value'}</h2>
    </div>
  )
}

export default Square
