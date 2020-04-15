import React, { useContext } from "react";
import { UserContext } from "../../user-context";

const Footer = () => {
  const { user } = useContext(UserContext);

  return user.name ? <p>{`The surname is ${user.surname}`}</p> : null;
};

export default Footer;
