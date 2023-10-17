import React from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

const Login = () => {
  return (
    <div>
      <Header />

      <form class="login">
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log In" />
        <div class="links">
          <a href="#">Forgot password</a>
          <a href="/sign-in">Register</a>
        </div>
      </form>
      <Fotter />
    </div>
  );
};

export default Login;
