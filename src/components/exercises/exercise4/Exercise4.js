import React from "react";
import { useTimer, useToggle } from "../../utils/hooks";

const Exercise4 = () => {
  const { timer } = useTimer();
  const { value, inverse } = useToggle();

  return (
    <div>
      <button onClick={inverse}>{value ? "Hide timer" : "Show timer"}</button>
      {value && <p>{`counter is ${timer}`}</p>}
    </div>
  );
};

export default Exercise4;
