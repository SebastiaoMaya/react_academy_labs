import React, { createContext, useState } from "react";

export const SelectContext = createContext({});

const Select = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const selectOption = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  const openSelect = () => setOpen(true);

  return (
    <div>
      {open ? (
        <SelectContext.Provider value={{ selectedOption, selectOption }}>
          {children}
        </SelectContext.Provider>
      ) : (
        <div onClick={openSelect}>
          {selectedOption ? selectedOption.children : "Pick one"}
        </div>
      )}
    </div>
  );
};

export default Select;
