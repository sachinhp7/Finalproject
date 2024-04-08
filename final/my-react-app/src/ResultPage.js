import React from 'react';

const ResultPage = ({ scores }) => {
  // Calculate correct and wrong responses
  const correctResponses = scores.filter(score => score.correct);
  const wrongResponses = scores.filter(score => !score.correct);

  return (
    <div>
      <h1>Results</h1>
      <h2>Correct Responses</h2>
      <ul>
        {correctResponses.map((score, index) => (
          <li key={index}>
            Question {score.questionNumber}: {score.selectedOption}
          </li>
        ))}
      </ul>
      <h2>Wrong Responses</h2>
      <ul>
        {wrongResponses.map((score, index) => (
          <li key={index}>
            Question {score.questionNumber}: {score.selectedOption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;
