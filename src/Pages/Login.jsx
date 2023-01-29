import React from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    fetch("https://reqres.in/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,password}),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(loginSuccess(data.token));
        navigate('/')
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch(loginFailure());
      });
  };
  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          data-testid="login-submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
