import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';

const WelcomePage = () => {
  const navigate = useNavigate();

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
      <header className="green-background">
        <div className="header-content">
          <h1 className="welcome">Welcome to Math Solver</h1>
          <p className="welpara">Solve math problems with ease</p>
        </div>
        <div>
          {/* Update the onClick handler to navigate to '/LoginPage' */}
          <button className="header-button" onClick={() => navigate('/LoginPage')}>
            Login
          </button>
        </div>
        <div>
          <button className="header-button" onClick={() => navigate('/SignUp')}>
            SignUp
          </button>
        </div>
      </header>
    </div>
  );
};

export default WelcomePage;
