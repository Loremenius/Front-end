import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import FormikSignupForms from './components/SignUpForm';
// import FormikLoginForms from './components/LoginForm';

function App() {
  return (
    <div className="App">

      
      <Route exact path="/"/>
      <Route path="/journal"/>
      <Route path="/register"/>
      <Route path="/journal/:id"/>
      <FormikSignupForms />
    </div>
  );
}

export default App;
