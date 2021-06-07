import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Homepage from './components/Homepage';
// import Insurance from './components/Insurance';
import './styles.scss';

// <Route path="/home" component={Homepage} />
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
      </Router>  
      <Home />
    </div>
  );
}

export default App;
