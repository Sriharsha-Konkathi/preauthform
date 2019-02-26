import React, { Component } from 'react';
import './App.css';
import FormikApp from './Forms/PreAuthForm';
import HospitalLoginPage from './Pages/HospitalLoginPage';


class App extends Component {
  render() {
    return (
      // <FormikApp email="raju@gmail.com" patientname="Raju Bhai"/>
      <div >
      {/* <FormikApp hospital="hospital2" address="Bellandur" zipcode='506103' city="Bangalore" state="Karnataka" /> */}
      <HospitalLoginPage />
      </div>
    );
  }
}

export default App;
