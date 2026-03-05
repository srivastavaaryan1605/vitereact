import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);



  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);

  }, [password]);



  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);



  return (
    <>
      <h1 className="mt-6 text-4xl text-center text-white">
        Password Generator
      </h1>

      <div className="w-full max-w-md px-4 py-4 mx-auto my-8 bg-gray-700 rounded-lg shadow-md">

        <h2 className="mb-3 text-center text-white">Password</h2>

        {/* password box */}

        <div className="flex mb-4 overflow-hidden bg-white rounded-lg shadow">

          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 text-black outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className="px-4 font-semibold text-white transition bg-green-500 hover:bg-green-600"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

        </div>

        {copied && (
          <p className="mb-3 text-sm text-center text-green-400">
            Copied to clipboard!
          </p>
        )}

        {/* controls */}

        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:justify-between">

          <div className="flex items-center gap-2">
            <input
              type="range"
              max={100}
              min={1}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-orange-400">
              Length: {length}
            </label>
          </div>

          <div className="flex items-center gap-2">
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

          <div className="flex items-center gap-2">
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