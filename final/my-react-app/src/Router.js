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
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import Question11 from './Question11';
import Question12 from './Question12';
import Question13 from './Question13';


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
      <Route path='/Question7' element={<Question7 />} />
      <Route path='/Question8' element={<Question8 />} />
      <Route path='/Question9' element={<Question9 />} />
      <Route path='/Question10' element={<Question10 />} />
      <Route path='/Question11' element={<Question11/>} />
      <Route path='/Question12' element={<Question12 />} />
      <Route path='/Question13' element={<Question13 />} />
     
    </Routes>
  );
};

export default Router;
