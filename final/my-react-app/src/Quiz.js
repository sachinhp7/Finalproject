import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';
import { FaQuestionCircle } from 'react-icons/fa'; // Import FaQuestionCircle icon
import Question1 from './Question1';

const Quiz = () => {
  const navigate = useNavigate();

  // Function to handle navigation to start the quiz
  const startQuiz = () => {
    // Navigate to the quiz page when the Start Quiz button is clicked
    navigate('/Question1');
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
          <h2><FaQuestionCircle className="instruction-icon" /> Answer all questions</h2>
          <p>Make sure to attempt all questions to get your score at the end.</p>
        </div>
        <div className='quiz-content'>
          <h2><FaQuestionCircle className="instruction-icon" /> No time limit</h2>
          <p>Take your time to think through each question carefully.</p>
        </div>
        <div className="start-quiz-button-container">
          <button className="start-quiz-button" onClick={startQuiz}>Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
