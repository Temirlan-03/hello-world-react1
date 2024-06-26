// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
