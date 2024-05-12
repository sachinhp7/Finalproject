import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/LoginPage.css'; // Import LoginPage.css
import mylogo from './logo.png';
import { FaSignInAlt, FaUser, FaLock } from 'react-icons/fa'; // Import the icons from react-icons
import userImage from './userlogin.png'; // Corrected import statement

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // For simplicity, let's assume the login is successful if username and password are not empty
    if (username && password) {
      // Redirect to dashboard on successful login
      navigate('/dashboard');
    } else {
      // Display error if username or password is empty
      setError('Please enter username and password');
    }
  };

  return (
    <div className="App">
      {/* Content box with black background */}
      <div className="content-box black-background">
        {/* Logo on the left */}
        <img src={mylogo} className="logo" alt="logo" />
        <div className="content">
          {/* Navigation bar on the right */}
          <nav className="navigation">
            <button className="nav-button">Home</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Contact</button>
          </nav>
        </div>
      </div>
      {/* Header */}
      <header className="App-login-page-background">
        <div className="header-content">
          {/* Login form */}
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <h2 className='h2'>Login</h2>
              <img src={userImage} alt="User" className="user-image" />
              <div className="form-group">
                <label htmlFor="username" className="label"><FaUser /> Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="label"><FaLock /> Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">
                <FaSignInAlt /> Login
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LoginPage;
