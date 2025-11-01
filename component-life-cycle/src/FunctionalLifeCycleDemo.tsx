import React, { useState, useEffect } from 'react';

const FunctionalLifecycleDemo = () => {
  const [count, setCount] = useState<number>(0);

  // runs once when component mounts
  useEffect(() => {
    console.log(' Component Mounted');
    
    // runs when component unmounts
    return () => {
      console.log(' Component  Unmounted');
    };
  }, []);

  // Updating9runs on every re-render
  useEffect(() => {
    
      console.log(' Component Updated - count changed:', count);
    
  }, [count]);

  return (
    <div>
      <h1>Functional Life Cycle Demo {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionalLifecycleDemo;
