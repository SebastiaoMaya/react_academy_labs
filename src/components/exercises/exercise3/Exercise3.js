import React from "react";
import { useMeasureWindow } from "../../utils/hooks";

const Exercise3 = () => {
  const { width, height } = useMeasureWindow();

  return (
    <div>
      <p>{`The width is ${width}`}</p>
      <p>{`The height is ${height}`}</p>
    </div>
  );
};

export default Exercise3;
