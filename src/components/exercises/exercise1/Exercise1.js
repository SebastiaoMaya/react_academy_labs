import React from "react";
import { useInput } from "../../utils/hooks";

const Exercise1 = () => {
  //const toggle = useToggle();
  const email = useInput("", { persist: "email" });
  const password = useInput("", { persist: "password" });

  const submit = (e) => {
    e.preventDefault();
    alert(`user info is: ${email.value} ${password.value}`);
  };
  return (
    // <div>
    //   <button onClick={toggle.inverse}>
    //     {toggle.value ? "Hide Counter" : "Show Counter"}
    //   </button>
    //   {toggle.value && <Counter />}
    // </div>
    <div>
      <h1>A simple form</h1>
      <form onSubmit={submit}>
        <p>email</p>
        <input type="text" {...email.bind} placeholder="email" />
        <p>password</p>
        <input type="password" {...password.bind} placeholder="password" />
        <br />
        <input
          type="submit"
          disabled={email.value === "" || password.value === ""}
        />
      </form>
    </div>
  );
};

export default Exercise1;
