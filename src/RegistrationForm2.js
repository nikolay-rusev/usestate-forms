import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const userObj = {
  userName: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const [user, setUser] = useState(userObj);

  const formHandler = (ev) => {
    ev.preventDefault();

    if (user.userName === "" || user.email === "" || user.password === "") {
      alert("Please fill in all fields");
    } else {
      alert(`Welcome ${user.userName}`);
      setUser(userObj);
    }
  };

  const handleInputChange = (ev) => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
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
            onChange={handleInputChange}
            value={user.userName}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            onChange={handleInputChange}
            value={user.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            onChange={handleInputChange}
            value={user.password}
          />

          <input type="submit" value="Register" className="btn btn-primary" />
        </form>
      </div>
      {JSON.stringify(user)}
    </div>
  );
};

export default RegistrationForm;
