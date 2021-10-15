import React, { SyntheticEvent } from "react";

const Register = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
