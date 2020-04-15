import React from "react";
import { useUserContext } from "../userManager/UserManager";

const Header = () => {
  const { user } = useUserContext();

  return user.name ? <p>{`The name is ${user.name}`}</p> : null;
};

export default Header;
