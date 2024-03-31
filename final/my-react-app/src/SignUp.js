import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css'; // Assuming you have a WelcomePage.css file
import './SignUp.css'; // Import SignUp.css for styling
import mylogo from './logo.png';
import { FaSignInAlt, FaUser, FaLock, FaEnvelope } from 'react-icons/fa'; // Import the icons from react-icons
import userImage from './userlogin.png'; // Corrected import statement

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    if (username && email && password) {
      navigate('/dashboard');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="App">
      <div className="content-box black-background">
        <img src={mylogo} className="logo" alt="logo" />
        <div className="content">
          <nav className="navigation">
            <button className="nav-button">Home</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Contact</button>
          </nav>
        </div>
      </div>
      <header className="App-login-page-background">
        <div className="header-content">
          <div className="signup-form">
            <form onSubmit={handleSignUp} className="login-form">
              <h2 className='h2'>Sign Up</h2>
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
                <label htmlFor="email" className="label"><FaEnvelope /> Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <button type="submit" className="signup-button">
                <FaSignInAlt /> Sign Up
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignUp;
