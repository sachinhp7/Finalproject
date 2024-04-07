// ScoreContext.js
import React, { createContext, useContext, useState } from 'react';

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
  const [scores, setScores] = useState([]);

  const addScore = (questionNumber, selectedOption) => {
    setScores([...scores, { questionNumber, selectedOption }]);
  };

  return (
    <ScoreContext.Provider value={{ scores, addScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
