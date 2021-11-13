import React, { useState } from 'react';
import Square from './Square';
import Input from './Input';


function ColorParent() {
  console.log('hiiii');
  const [color, setColor] = useState('');
  return (
    <div>
      <Square colorValue={color} />
      <Input color={color} setColor={setColor} />
    </div>
  );
}

export default ColorParent;
