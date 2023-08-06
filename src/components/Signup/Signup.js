import React, { useState, useEffect } from 'react';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('User signed up with:', email, password);
  };

  useEffect(() => {
    console.log('Signup component has been rendered');
  },[]);

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="signup-button" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;
