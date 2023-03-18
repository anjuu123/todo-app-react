import React from "react";

export const Login = ()=> {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="enter password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
