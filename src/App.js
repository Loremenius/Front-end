import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"

import JournalEntry from './components/JournalEntry';

import FormikLoginForms from './components/LoginForm';
import FormikSignupForms from './components/SignUpForm';
import PrivateRoute from "./components/PrivateRoute";
import Journal from "./components/Journal"
import UpdateEntry from "./components/UpdateEntry";


function App() {
  return (
    <div className="App">

      
      <Route exact path="/" component={FormikLoginForms}/>
      <PrivateRoute exact path="/journal">
            <Route exact path="/journal" component ={Journal}/>
      </PrivateRoute>
      <Route path="/register" component={FormikSignupForms}/>
      <Route path="/journal/:id" component={UpdateEntry}/>
    </div>
  );
}

export default App;
