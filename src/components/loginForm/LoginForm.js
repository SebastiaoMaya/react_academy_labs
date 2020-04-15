import React, { useContext } from "react";
import { UserContext } from "../../user-context";
import { useInput } from "../utils/hooks";

const LoginForm = () => {
  const name = useInput("");
  const surname = useInput("");
  const fields = [name, surname];

  const { setUser } = useContext(UserContext);

  const submit = (e) => {
    e.preventDefault();
    let user = {
      name: name.value,
      surname: surname.value,
    };
    setUser(user);
  };

  const areFieldsValid = fields.every((field) => field.isValid());

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" {...name.bind} placeholder="name" />
        <input type="text" {...surname.bind} placeholder="surname" />
        <button type="submit" disabled={!areFieldsValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
