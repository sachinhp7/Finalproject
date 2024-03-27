import React from 'react';
import './App.css';
import mylogo from './logo.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Switch
import NewPage from './NewPage'; // Import the NewPage component
import App from './App'; // Import the App component

function AppWrapper() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/newpage" component={NewPage} />
      </Switch>
    </Router>
  );
}

export default AppWrapper;

