
import React, { useState } from 'react';


function ChildComponent({ isOn, toggleSwitch }) {
  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleSwitch}>
        {isOn ? 'Switch OFF' : 'Switch ON'}
      </button>
    </div>
  );
}





export default ChildComponent;
