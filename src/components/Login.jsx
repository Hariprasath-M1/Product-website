import React from 'react';
import './css/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
