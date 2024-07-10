import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function CounterParent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <CounterDisplay count={count }increment={increment} decrement={decrement} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterParent;
