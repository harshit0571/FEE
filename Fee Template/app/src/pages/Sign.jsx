import React from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

const Sign = () => {
  return (
    <div>
      <Header />
      <form class="login">
        <h2>Welcome, User!</h2>
        <p>Please Register</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign In" />
        <div class="links">
          <a href="#">Forgot password</a>
          <a href="/login">Login</a>
        </div>
      </form>
      <Fotter />
    </div>
  );
};

export default Sign;
