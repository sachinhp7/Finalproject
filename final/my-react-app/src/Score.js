import React from 'react';
import { useScore } from './ScoreContext';
import './Score.css'; // Import CSS file for styling
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';
import './Question1.css';

const Score = () => {
  const { scores } = useScore();

  // Function to handle submitting the score
  const handleSubmit = () => {
    // Add logic here to handle submitting the score
    console.log('Score submitted!');
  };

  return (
    <div className="App blue-background">
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

      <div className="score-container">
        <h1 className="score-title">Your Choice</h1>
        <div className="score-table-container">
          <table className="score-table">
            <thead>
              <tr>
                <th>Question Number</th>
                <th>Selected Option</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index} className="score-row">
                  <td>{score.questionNumber}</td>
                  <td>{score.selectedOption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
      {/* Submit button */}
     <center> <button className="submit-button" onClick={handleSubmit}>Submit</button></center>
    </div>
  );
};

export default Score;
