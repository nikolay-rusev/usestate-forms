import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (ev) => {
    ev.preventDefault();
    if (userName === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      alert(`Welcome ${userName}`);
      setUserName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h1>Please Register</h1>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            className="form-control"
            onChange={(ev) => {
              setUserName(ev.target.value);
            }}
            value={userName}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            value={password}
          />

          <input type="submit" value="Register" className="btn btn-primary" />
        </form>
      </div>
      {JSON.stringify(userName)}
      {JSON.stringify(email)}
      {JSON.stringify(password)}
    </div>
  );
};

export default RegistrationForm;
