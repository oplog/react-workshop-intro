import React from 'react';
import { Router, Route } from 'react-router';
import './App.css';
import HelloWorld from './HelloWorld';
import Home from "./Home";
import { createBrowserHistory } from "history";
import ComponentExamples from './ComponentExamples';
import StateExamples from './StateExamples';
import EventExamples from './EventExamples';
import ConditionalComponents from './ConditionalComponents';
import Loops from './Loops';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={HelloWorld} />
      <Route path="/components" component={ComponentExamples} />
      <Route path="/state" component={StateExamples} />
      <Route path="/events" component={EventExamples} />
      <Route path="/conditional" component={ConditionalComponents} />
      <Route path="/loops" component={Loops} />
    </Router>
  );
}

export default App;
