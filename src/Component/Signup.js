import React from "react";

export const Signup = ()=> {

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="enter your name" />
        </label>

        <label>
          Email:
          <input type="email" placeholder="enter your email" />
        </label>

        <label>
          Password:
          <input type="password" placeholder="enter password" />
        </label>
        <label>
          Confirm Password:
          <input type="cpassword" placeholder="confirm password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
