import React from 'react';
import { useScore } from './ScoreContext';
import './App.css';
import './Question1.css'; // Import any other necessary CSS files
import mylogo from './logo.png'; // Import the logo image
import './ResultPage.css';

const ResultPage = () => {
  const { scores } = useScore();

  // Calculate the number of correct and incorrect answers
  const correctCount = scores.filter(score => score.correct).length;
  const incorrectCount = scores.length - correctCount;

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
      <div className="result-container">
        <h1>Quiz Results</h1>
        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">Correct Answers:</span>
            <span className="stat-value">{correctCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Incorrect Answers:</span>
            <span className="stat-value">{incorrectCount}</span>
          </div>
        </div>
        <div className="result-details">
          <h2>Answers Summary</h2>
          <ul className="answer-list">
            {scores.map((score, index) => (
              <li key={index} className={`answer-item ${score.correct ? 'correct' : 'incorrect'}`}>
                <span>Question {score.questionNumber}:</span> 
                <span>{score.selectedOption}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
