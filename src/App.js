import React from 'react';
import './App.css';
import { Route } from "react-router-dom"

import FormikLoginForms from './components/LoginForm';
import FormikSignupForms from './components/SignUpForm';
import PrivateRoute from "./components/PrivateRoute";
import Journal from "./components/Journal"
import UpdateEntry from "./components/UpdateEntry";


function App() {
  return (
    <div className="App">

      <div className="container">
        <Route exact path="/" component={FormikLoginForms}/>
        <PrivateRoute exact path="/journal">
              <Route exact path="/journal" component ={Journal}/>
        </PrivateRoute>
        <Route path="/register" component={FormikSignupForms}/>
        
        <PrivateRoute path="/journal/:id">
          <Route path="/journal/:id" component={UpdateEntry}/>
        </PrivateRoute>
      </div>
    </div>
  );
}

export default App;
