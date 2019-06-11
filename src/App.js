import React from 'react';
import { Router, Route } from 'react-router';
import './App.css';
import HelloWorld from './HelloWorld';
import Home from "./Home";
import { createBrowserHistory } from "history";
import Components from './Components';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={HelloWorld} />
      <Route path="/components" component={Components} />
    </Router>
  );
}

export default App;
