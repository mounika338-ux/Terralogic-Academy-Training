import React, { useState } from "react";

const IncrementComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count>0? count - 1:count); 
  };

  return (
    <div >
      <p >Count: {count}</p>
      <div className="flex space-x-4">
        <button
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default IncrementComponent;
