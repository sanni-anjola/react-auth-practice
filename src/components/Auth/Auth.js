import React from "react";
import { useState } from "react";
import { firebase } from "./../../api/firebase";

const Auth = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  const inputChangeHandler = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let endpoint;
    if (!isLogin) endpoint = "/accounts:signUp";
    else endpoint = "/accounts:signInWithPassword";
    const res = await firebase.post(endpoint, {
      email: formDetails.email,
      password: formDetails.password,
      returnSecureToken: true,
    });

    console.log(res)
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
