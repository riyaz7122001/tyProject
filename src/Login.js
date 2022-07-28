import React from "react";
import { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // const registerPage = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // if successfully created a new user with email and password..
  //       if (auth) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // };
  return (
    <div className="login">
      <NavLink exact to="Login">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </NavLink>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            className="login_input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            className="login_input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="login_signIn" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you Agree to Amazon's Condition of Use & Sale. Please
          See our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
        </p>
        <NavLink to="/newSignup">
          <button className="login_register">Create your Amazon Account</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
