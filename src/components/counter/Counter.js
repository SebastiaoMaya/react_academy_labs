import React from "react";
import { useNumber } from "../utils/hooks";

const Counter = () => {
  const counter = useNumber();

  return (
    <div>
      <div>You clicked {counter.value} times</div>
      <button onClick={counter.decrease}>decrease</button>
      <button onClick={counter.increase}>increase</button>
    </div>
  );
};

export default Counter;
