import React, { useContext, useState } from "react";
import { UserContext } from "../../user-context";

export const useUserContext = () => useContext(UserContext);

const UserManager = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserManager;
