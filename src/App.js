import './App.css';
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoTask from './components/TodoTask';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className = "App">
      <Router>
        <Switch>
          <Route path = "/" exact component = {Login}/>
          <Route path = "/Signup" component = {Signup}/>
          {/* <Route path = "/TodoTask" component = {TodoTask}/> */}
        </Switch>
      </Router>
    </div>
  );
}

