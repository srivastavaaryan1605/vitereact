import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
  };

  const removeValue = () => {
    if(counter>0)
      setCounter(counter-1);
  };

  return (
    <>
      <h1>Hello Atashi</h1>
      <h2>How much do you love me: {counter}</h2>

      <button onClick={addValue}>Add love: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove love: {counter}</button>
    </>
  );
}

export default App;