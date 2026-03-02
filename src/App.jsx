import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*/";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">
        Password Generator
      </h1>

      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-blue-600 bg-gray-700 rounded-lg shadow-md">
        <h1 className="my-3 text-center text-white">Password</h1>

        {/* Password Box */}
        <div className="flex mb-4 overflow-hidden bg-white rounded-lg shadow">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className="px-3 py-1 text-white bg-green-400 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={100}
              min={1}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="text-orange-400">
              Length: {length}
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-orange-400" htmlFor="numberInput">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className="text-orange-400" htmlFor="charInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;