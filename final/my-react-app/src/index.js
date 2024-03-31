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
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
