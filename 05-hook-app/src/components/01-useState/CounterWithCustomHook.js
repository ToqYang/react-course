import React from "react";
import useCouter from "../../hooks/useCouter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCouter(100);
  return (
    <>
      <h1>Counter with: {state}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary m-3">
        + 1
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        - 1
      </button>
      <button onClick={reset} className="btn btn-primary m-3">
        Reset
      </button>
    </>
  );
};

export default CounterWithCustomHook;
