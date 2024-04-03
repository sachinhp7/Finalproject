import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';
import './Question1.css';

const Question1 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle navigation to the next question or result page
  const nextQuestion = () => {
    // Here you would typically handle the logic to move to the next question or display the result
    // For demonstration purposes, let's navigate to Question 2
    navigate('/Question2');
  };

  // MCQ options
  const options = [
    { value: 'The set of all even numbers.', label: 'The set of all even numbers.' },
    { value: 'The set of all multiples of 5.', label: 'The set of all multiples of 5.' },
    { value: 'The set of all planets in our solar system.', label: 'The set of all planets in our solar system.' },
    { value: 'The set of all prime numbers.', label: 'The set of all prime numbers.' },
  ];

  return (
    <div className="question-container">
      <div className="content-box black-background">
        <img src={mylogo} className="logo" alt="logo" />
        <nav className="navigation">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Contact</button>
        </nav>
      </div>

      <div className="question">
        <center><h1>Question 1</h1></center>
        
      </div>

      <div className="options">
      <p>Which of the following sets is finite?</p>
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

    <center> <button className="next-button" onClick={nextQuestion}>
        Next Question
      </button> </center> 
    </div>
  );
};

export default Question1;
