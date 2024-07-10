import React from 'react';


function CounterDisplay({ count,increment,decrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button className='increment' onClick={increment}>Increment'ch'</button>
      <button className='decrement' onClick={decrement}>Decrement'ch'</button>
    </div>
    
  );
}

export default CounterDisplay;
