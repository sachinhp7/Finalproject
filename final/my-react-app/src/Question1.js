import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScore } from './ScoreContext'; // Import useScore hook
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';
import './Question1.css';

const Question1 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const { addScore } = useScore(); // Use the addScore function from the context

  // Function to handle navigation to the next question or result page
  const nextQuestion = () => {
    addScore(1, selectedOption); // Add selected answer to context
    navigate('/Question2');
  };

  // MCQ options
  const options = [
    { value: '1', label: 'The set of all even numbers.' }, 
    { value: '2', label: 'The set of all multiples of 5.' },
    { value: '3', label: 'The set of all planets in our solar system.' },
    { value: '4', label: 'The set of all prime numbers.' },
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
            <center><h1>Question 1</h1></center>
          </div>

          <div className="options">
            <p className='h'>Which of the following sets is finite?</p>
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

          {/* Next button */}
          <center>
            <button className="next-button" onClick={nextQuestion}>
              Next Question
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Question1;
