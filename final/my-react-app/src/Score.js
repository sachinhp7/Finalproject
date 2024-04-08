import React, { useState } from 'react';
import { useScore } from './ScoreContext';
import './Score.css';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import ResultPage from './ResultPage';

const Score = () => {
  const { scores } = useScore();
  const [submitted, setSubmitted] = useState(false);

  // Function to handle submitting the score
  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    // Calculate the number of correct and wrong answers
    const correctCount = scores.filter(score => score.correct).length;
    const wrongCount = scores.filter(score => !score.correct).length;

    return <ResultPage scores={scores} correctCount={correctCount} wrongCount={wrongCount} />;
  }

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
