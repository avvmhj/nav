
import React, { useState } from 'react';
import ChildComponent from "./ChildComponent";


const ParentComponent = () => {
  const[isOn , setIsOn] = useState(false); 

  const toggleSwitch = () =>{
    setIsOn(prevState => !prevState);
  };

  return(
    <div>
    <ChildComponent isOn={isOn} toggleSwitch={toggleSwitch}/>
    <button onClick={toggleSwitch}>
    {isOn ? 'Turn OFF' : 'Turn ON'}
    </button>
    </div>
  )
}



export default ParentComponent;

