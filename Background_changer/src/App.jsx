import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed -translate-x-1/2 bottom-12 left-1/2">
        <div className="flex flex-wrap gap-3 px-3 py-2 shadow-lg bg-slate-50 rounded-3xl">

          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
           Orange
          </button>

        </div>
      </div>
    </>
  );
}

export default App;