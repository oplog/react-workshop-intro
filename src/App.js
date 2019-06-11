import React from 'react';
import { Router, Route } from 'react-router';
import './App.css';
import HelloWorld from './HelloWorld';
import Home from "./Home";

import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Route exact path="/" component={Home} />
      <Route path="/helloworld" component={HelloWorld} />
    </Router>
  );
}

export default App;
