// SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSignInAlt, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="App">
      <header className="App-login-page-background">
        <div className="header-content">
          <div className="signup-form">
            <form onSubmit={handleSignUp} className="login-form">
              <h2 className='h2'>Sign Up</h2>
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
