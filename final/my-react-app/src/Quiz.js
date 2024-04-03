import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();

  // Function to handle navigation to start the quiz
  const startQuiz = () => {
    // Navigate to the quiz page when the Start Quiz button is clicked
    navigate('/quiz-start');
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
      
      {/* Quiz instructions */}
      <div className="quiz-instructions">
        <h1>Quiz Instructions</h1>
        <div className='quiz-content'>
        <p> <h2>Answer all questions</h2></p>
        <p>Make sure to attempt all questions to get your score at the end.</p>
        </div>
        <div className='quiz-content'>
        <p> <h2>No time limit</h2></p>
        <p>Take your time to think through each question carefully.</p>
        </div>
        {/* Start Quiz button */}
        <button className="start-quiz-button" onClick={startQuiz}>Start Quiz</button>
      </div>
    </div>
  );
};

export default Quiz;
