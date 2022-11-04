import React from "react";
import { useState } from "react";

const Auth = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  const inputChangeHandler = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>{isLogin ? "Login" : "SignUp"} Page</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formDetails.email}
            name="email"
            onChange={inputChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={formDetails.password}
            name="password"
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <button>{!isLogin ? "Sign up" : "Login"}</button>
        </div>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? click to signup"
          : "Have an account? Login"}
      </button>
    </div>
  );
};

export default Auth;
