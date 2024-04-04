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
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import Question11 from './Question11';
import Question12 from './Question12';
import Question13 from './Question13';

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
      <Route path='/Question4' element={<Question4 />} />
      <Route path='/Question5' element={<Question5 />} />
      <Route path='/Question6' element={<Question6 />} />
      <Route path='/Question7' element={<Question7 />} />
      <Route path='/Question8' element={<Question8 />} />
      <Route path='/Question9' element={<Question9 />} />
      <Route path='/Question10' element={<Question10 />} />
      <Route path='/Question11' element={<Question11/>} />
      <Route path='/Question12' element={<Question12 />} />
      <Route path='/Question13' element={<Question13 />} />
      

    </Routes>
  </BrowserRouter>
);

reportWebVitals();
