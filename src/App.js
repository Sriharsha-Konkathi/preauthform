import React, { Component } from 'react';
import './App.css';
import FormikApp from './Forms/PreAuthForm';

class App extends Component {
  render() {
    return (
      // <FormikApp email="raju@gmail.com" patientname="Raju Bhai"/>
      <div className="container">
      <FormikApp hospital="hospital2" address="Bellandur" zipcode='506103' city="Bangalore" state="Karnataka" />
      </div>
    );
  }
}

export default App;
