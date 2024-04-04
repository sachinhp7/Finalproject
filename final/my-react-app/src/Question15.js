import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './WelcomePage.css';
import mylogo from './logo.png';
import './Quiz.css';
import './Question1.css';

const Question15 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle navigation to the next question or result page
  const nextQuestion = () => {
    // Here you would typically handle the logic to move to the next question or display the result
    // For demonstration purposes, let's navigate to Question 3
    navigate('/Score');
  };

  const backQuestion = () => {
    // Here you would typically handle the logic to move to the previous question
    // For demonstration purposes, let's navigate back to Question 1
    navigate('/Question14');
  };

  // MCQ options
  const options = [
    { value: '1', label: 'p^2 - 7p + 12' }, 
    { value: '2', label: 'p^2 - 4p + 3' },
    { value: '3', label: 'p^2 - 3p - 4' },
    { value: '4', label: 'p^2 + 7p - 12' },
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
            <center><h1>Question 15</h1></center>
          </div>

          <div className="options">
          <p className='h'>What is the result of expanding (p - 4) (p - 3)?</p>


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
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question15;
