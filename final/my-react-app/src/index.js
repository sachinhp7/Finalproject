import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import WelcomePage from './WelcomePage'; 
import LoginPage from './LoginPage'; // Import LoginPage component
import StudentLogin from './StudentLogin';
import Router from './Router';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Quiz from './Quiz';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/WelcomePage' element={<WelcomePage />} />
      {/* Route to LoginPage */}
      <Route path='/LoginPage' element={<LoginPage />} /> 
      <Route path="/Router" element={<Router />} />
      <Route path="/StudentLogin" element={<StudentLogin/>} />
      <Route path='/SignUp' element={<SignUp />} /> 
      <Route path='/Dashboard' element={<Dashboard />} /> 
      <Route path='/Quiz' element={<Quiz />} />
      <Route path='/Question1' element={<Question1 />} />
      <Route path='/Question2' element={<Question2 />} />
      <Route path='/Question3' element={<Question3 />} />

    </Routes>
  </BrowserRouter>
);

reportWebVitals();
