import { useState } from "react";

function Input(props) {
  const [inputValues, setInput] = useState([]);
  return (
    <>
      <h1>{inputValues}</h1>

      <div className="input">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </>
  );
}

export default Input;
