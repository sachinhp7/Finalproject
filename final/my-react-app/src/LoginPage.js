import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css'; // Assuming you have a WelcomePage.css file
import './LoginPage.css'; // Import LoginPage.css
import mylogo from './logo.png';

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
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LoginPage;
