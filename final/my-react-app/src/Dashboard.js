import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Dashboard.css';

const Dashboard = () => {
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
      
      {/* Dashboard content */}
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        {/* 2x2 table layout */}
        <div className="dashboard-grid">
          <div className="dashboard-item">Item 1</div>
          <div className="dashboard-item">Item 2</div>
          <div className="dashboard-item">Item 3</div>
          <div className="dashboard-item">Item 4</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
