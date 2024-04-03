import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';


const Quiz = () => {
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
       
      </div>
    );
  };
  
  export default Quiz;