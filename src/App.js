import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Route exact path="/"/>
      <Route path="/journal"/>
      <Route path="/register"/>
      <Route path="/journal/:id"/>
    </div>
  );
}

export default App;
