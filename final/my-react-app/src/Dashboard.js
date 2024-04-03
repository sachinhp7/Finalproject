import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Dashboard.css';
import quizdashboard from './quizdashboard.jpg'; // Correct import path
import progressdashboard from './progressdashboard.jpg'; // Correct import path
import resourcesdashboard from './resourcesdashboard.jpg'; // Correct import path
import recommendationdashboard from './recommendationdashboard.jpg'; // Correct import path
import Quiz from './Quiz';

const Dashboard = () => {
  const navigate = useNavigate();

  // Function to handle navigation when an item is clicked
  const handleItemClick = (route) => {
    navigate(route);
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
      
      {/* Dashboard content */}
      <div className="dashboard-content">
        <h1 className='dash'>Dashboard</h1>
        {/* 2x2 table layout */}
        <div className="dashboard-grid">
          <div className="dashboard-item" onClick={() => handleItemClick('/Quiz')}>
            <img src={quizdashboard} alt="Item 1" />
            <p>Quiz</p>
          </div>
          <div className="dashboard-item" onClick={() => handleItemClick('/item2')}>
            {/* Use correct image variable here */}
            <img src={progressdashboard} alt="Item 2" />
            <p>Progress</p>
          </div>
          <div className="dashboard-item" onClick={() => handleItemClick('/item3')}>
            <img src={resourcesdashboard} alt="Item 3" />
            <p>Resources</p>
          </div>
          <div className="dashboard-item" onClick={() => handleItemClick('/item4')}>
            <img src={recommendationdashboard} alt="Item 4" />
            <p>Recomendation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
