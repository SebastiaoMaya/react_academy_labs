import React from "react";
import { useDocumentTitle, useNumber } from "../../utils/hooks";

const Exercise2 = () => {
  const counter = useNumber();
  const title = `Counter is ${counter.value}`;
  useDocumentTitle(title);
  return (
    <div>
      <button onClick={counter.increase}>increase</button>
      <p>{title}</p>
      <button onClick={counter.decrease}>decrease</button>
    </div>
  );
};

export default Exercise2;
