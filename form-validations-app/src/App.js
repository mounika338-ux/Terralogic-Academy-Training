import React from "react"
// import MyForm from "./MyForm";
// import CustomForm from "./CustomForm";
// import FormWithError from "./FormWithError";

import useCounter from "./UseCustom";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Custom Hook Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

