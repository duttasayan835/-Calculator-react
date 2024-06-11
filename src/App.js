import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult((prev) => prev.concat(e.target.id));
  };
  const clearAll = (e) => setResult("");
  const deleteOne = () => setResult(result.slice(0, -1));
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-3">
      <h1 className="text-4xl text-pink-800 font-bold">Calculator</h1>
      <div className="bg-rose-400 p-4 max-w-96 rounded-md border-4 border-pink-400 shadow-[0_1px_6px_5px #000">
        <input
          type="text"
          value={result}
          disabled
          className="bg-slate-900/80 rounded-md p-4 w-full text-2xl font-semibold text-white text-right tracking-wider border-2 border-pink-200 shadow-inner shadow-current"
        />
        <p className="bg-slate-300 inline-block rounded-full px-3 py-1 my-2 text-red-500 text-sm tracking-wider border border-slate-400">
          Brand Calculator
        </p>
        <div className="grid grid-cols-4 gap-2 ">
          {/* 1st row begins */}
          <button onClick={clearAll} type="button" className="operator ">
            AC
          </button>
          <button onClick={deleteOne} type="button" className="operator ">
            DEL
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="."
          >
            .
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="/"
          >
            /
          </button>
          {/* 1st row ends */}
          {/* 2nd row begins */}
          <button onClick={handleClick} type="button" className="number" id="7">
            7
          </button>
          <button onClick={handleClick} type="button" className="number" id="8">
            8
          </button>
          <button onClick={handleClick} type="button" className="number" id="9">
            9
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="*"
          >
            *
          </button>
          {/* 2nd row ends */}
          <button onClick={handleClick} type="button" className="number" id="4">
            4
          </button>
          <button onClick={handleClick} type="button" className="number" id="5">
            5
          </button>
          <button onClick={handleClick} type="button" className="number" id="6">
            6
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="-"
          >
            -
          </button>
          {/* 3rd row begins */}
          <button onClick={handleClick} type="button" className="number" id="1">
            1
          </button>
          <button onClick={handleClick} type="button" className="number" id="2">
            2
          </button>
          <button onClick={handleClick} type="button" className="number" id="3">
            3
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="+"
          >
            +
          </button>
          {/* 3rd row ends */}
          {/* 4th row begins */}
          <button
            onClick={handleClick}
            type="button"
            className="number"
            id="00"
          >
            00
          </button>
          <button onClick={handleClick} type="button" className="number" id="0">
            0
          </button>
          <button
            onClick={calculate}
            type="button"
            className="operator col-span-2"
            id="="
          >
            =
          </button>
          {/* 4th row ends */}
        </div>
      </div>
    </div>
  );
}

export default App;
