import { useEffect, useState } from "react";

export const useNumber = (initialState = 0) => {
  const [value, setValue] = useState(initialState);

  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);

  return {
    value,
    setValue,
    increase,
    decrease,
  };
};

export const useToggle = (initialState = false) => {
  const [value, setValue] = useState(false);

  const inverse = () => setValue(!value);

  return {
    value,
    setValue,
    inverse,
  };
};

export const useInput = (defaultValue = "", options = {}) => {
  const initial = options.persist
    ? window.localStorage.getItem(options.persist) ?? ""
    : defaultValue;

  const [value, setValue] = useState(initial);

  useEffect(
    () => {
      if (options.persist) {
        window.localStorage.setItem(options.persist, value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    value,
    isValid: () => value && value.trim() !== "",
  };
};

export const useDocumentTitle = (title) => {
  useEffect(() => {
    window.document.title = title;
    console.log(title);
  }, [title]);
};

export const useMeasureWindow = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const resize = () => {
      setWidth(window.screen.width);
      setHeight(window.screen.height);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return {
    width,
    height,
  };
};

export const useTimer = () => {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    timer,
  };
};
