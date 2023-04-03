import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../index.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleLogin = async () => {
    const response = await fetch('https://ecommerce-backend-auwm.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.ok) {
      // Login successful, redirect to dashboard or homepage
      history.push('/products'); // Replace with the actual dashboard route
    } else {
      // Login failed, display error message
      setErrorMessage('Invalid email or password');
    }
  };

  const handleSignup = async () => {
    const response = await fetch('https://ecommerce-backend-auwm.onrender.com/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        address,
        password
      })
    });
    if (response.ok) {
      // Signup successful, redirect to dashboard or homepage
      history.push('/products'); // Replace with the actual dashboard route
    } else {
      // Signup failed, display error message
      const data = await response.json();
      setErrorMessage(data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const handleForgotPassword = () => {
    history.push('/reset-pass');
  };

  return (
    <div className="login-signup-container">
      <h2 className="form-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            />
            </div>
            {!isLogin && (
            <div className="form-group">
            <label htmlFor="address" className="form-label">
            Address:
            </label>
            <input
                       type="text"
                       id="address"
                       className="form-control"
                       value={address}
                       onChange={handleAddressChange}
                     />
            </div>
            )}
            <div className="form-group">
            <label htmlFor="password" className="form-label">
            Password:
            </label>
            <input
                     type="password"
                     id="password"
                     className="form-control"
                     value={password}
                     onChange={handlePasswordChange}
                   />
            </div>
            <div className="form-group">
            <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Sign Up'}
            </button>
            </div>
            <div className="form-group">
            {isLogin ? (
            <>
            <button type="button" className="submit-button" onClick={handleToggle}>
            Sign Up
            </button>
            <button
                         type="button"
                         className="btn btn-link"
                         onClick={handleForgotPassword}
                       >
            Forgot password?
            </button>
            </>
            ) : (
            <button type="button" className="submit-button" onClick={handleToggle}>
            Back to Login
            </button>
            )}
            </div>
            {errorMessage && (
            <div className="form-error">
            <p>{errorMessage}</p>
            </div>
            )}
            </form>
            </div>
            );
            };
            
            export default Login;
