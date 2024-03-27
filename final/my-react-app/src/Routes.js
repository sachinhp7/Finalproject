
// App.js or Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          {/* Other routes go here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;