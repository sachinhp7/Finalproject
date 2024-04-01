// Router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage'; // Assuming LoginPage exists
import StudentLogin from './StudentLogin'; // Import StudentLogin component
import SignUp from './SignUp';
import Dashboard from './Dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/WelcomePage" element={<WelcomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} /> 
      <Route path="/StudentLogin" element={<StudentLogin />} /> {/* Route for StudentLogin */}
      <Route path='/SignUp' element={<SignUp />} /> 
      <Route path='/Dashboard' element={<Dashboard />} /> 
    </Routes>
  );
};

export default Router;
