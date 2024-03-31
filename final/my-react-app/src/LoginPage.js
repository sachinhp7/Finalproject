import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    // For now, just navigate to another page
    navigate('/dashboard'); // Example navigation to a dashboard page
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
     </div>
  );
};

export default LoginPage;
