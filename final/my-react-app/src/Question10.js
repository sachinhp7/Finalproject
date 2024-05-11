import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';
import './Question1.css';
import { useScore } from './ScoreContext'; // Import useScore hook

const Question10 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const { addScore } = useScore(); // Use the addScore function from the context

  // Function to handle navigation to the next question or result page
  const nextQuestion = () => {
    // Here you would typically handle the logic to move to the next question or display the result
    // For demonstration purposes, let's navigate to Question 3
    const isCorrect = options.find(option => option.value === selectedOption)?.correct || false;
    addScore(10, selectedOption,isCorrect); // Add selected answer to context
    navigate('/Question11');
  };

  const backQuestion = () => {
    // Here you would typically handle the logic to move to the previous question
    // For demonstration purposes, let's navigate back to Question 1
    navigate('/Question9');
  };

  // MCQ options
  const options = [
    { value: '1', label: 'x^(a + b)' , correct: true }, 
    { value: '2', label: 'x^(a - b)' , correct: false },
    { value: '3', label: 'x^ab' , correct: false },
    { value: '4', label: 'x^(b/a)', correct: false  },
  ];

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

      {/* Background image container */}
      <div className='cover'>
        {/* Content */}
        <div className='c'>
          <div className="question">
            <center><h1>Question 10</h1></center>
          </div>

          <div className="options">
          <p className='h'>How do we simplify (x^a)^b?</p>


            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => setSelectedOption(option.value)}
                    />
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Next and Back buttons */}
          <div className="button-container">
            <button className="next-button" onClick={backQuestion}>
              Previous Question
            </button>
            <button className="next-button" onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question10;