// Router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage'; // Assuming LoginPage exists
import StudentLogin from './StudentLogin'; // Import StudentLogin component

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/WelcomePage" element={<WelcomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} /> 
      <Route path="/StudentLogin" element={<StudentLogin />} /> {/* Route for StudentLogin */}
    </Routes>
  );
};

export default Router;
