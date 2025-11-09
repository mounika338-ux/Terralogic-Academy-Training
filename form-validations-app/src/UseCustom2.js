import React from "react";
import useCounter from "./useCounter";

export default function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
