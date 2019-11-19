import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"

import JournalEntry from './components/JournalEntry';

import FormikLoginForms from './components/LoginForm';
import FormikSignupForms from './components/SignUpForm';


function App() {
  return (
    <div className="App">

      
      <Route exact path="/" component={FormikLoginForms}/>
      <Route path="/journal"/>
      <Route path="/register" component={FormikSignupForms}/>
      <Route path="/journal/:id"/>
    </div>
  );
}

export default App;
