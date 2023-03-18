import './App.css';
import React, { useState } from "react";
import {Login } from './Component/Login';
import { Signup } from './Component/Signup';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  // when button is clicked function is triggred
  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {/* showSignup is true then signup component is rendered else login is rendered */}
      {showSignup ? <Signup /> : <Login />}
      <button onClick={toggleForm}>
        {showSignup ? "Already have an account? SignIn" : "Don't have an account? Create here"}
      </button>
    </div>
  );
}

export default App;
