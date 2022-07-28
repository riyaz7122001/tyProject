import React, { useState } from "react";
import "./newLogin.css";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const NewLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (!value.email || !value.password) {
      setError("Please Fill the details !!!");
    }
    setError("");

    // doing button disabled
    setButtonDisabled(true);

    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (response) => {
        setButtonDisabled(false);

        // after completion of the signup we can redirect to...

        navigate("/");
      })
      .catch((error) => {
        // after we have received the data we have to set button disabled to abled
        setButtonDisabled(false);
        setError(error.message);
      });
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        autoCapitalize="false"
        autoComplete="false"
        placeholder="Enter your email"
        onChange={handleChange}
        value={value.email}
      />
      <input
        type="password"
        name="password"
        autoCapitalize="false"
        autoCorrect="false"
        autoComplete="false"
        placeholder="Enter your password"
        onChange={handleChange}
        value={value.password}
      />

      <div className="footer">
        <span className="error">{error}</span>
        <button onClick={handleLogin} disabled={buttonDisabled}>
          Login
        </button>
        <p>
          By signing-in you Agree to Amazon's Condition of Use & Sale. Please
          See our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
        </p>
        <p>
          Do not have any account?{" "}
          <span>
            <NavLink exact to="/signup">
              Signup
            </NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewLogin;
