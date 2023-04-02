import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter has been mounted!");
    return () => {
      console.log("Counter has been unmounted!");
    };
  }, []);

  useEffect(() => {
    console.log("Counter has been updated!");
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
}

export default Counter;
