// Router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage'; // Assuming LoginPage exists
import StudentLogin from './StudentLogin'; // Import StudentLogin component
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Quiz from './Quiz';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question6 from './Question6';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/WelcomePage" element={<WelcomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} /> 
      <Route path="/StudentLogin" element={<StudentLogin />} /> {/* Route for StudentLogin */}
      <Route path='/SignUp' element={<SignUp />} /> 
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Quiz' element={<Quiz />} /> 
      <Route path='/Question1' element={<Question1 />} />
      <Route path='/Question2' element={<Question2 />} />
      <Route path='/Question3' element={<Question3 />} />
      <Route path='/Question4' element={<Question4 />} />
      <Route path='/Question6' element={<Question6 />} />
    </Routes>
  );
};

export default Router;
