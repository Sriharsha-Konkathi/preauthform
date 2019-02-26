import React, { Component } from 'react';
// import {withFormik} from 'formik';
// import Yup from 'yup';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class HospitalSearchForm extends Component {
    constructor() {
        super();

        this.state = {
            insid: '',
            from: 'pharmacy',
            fact: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = "http://localhost:5000/api/v1/resources/patients/all";
        axios.get('http://localhost:5000/api/v1/resources/patients?insid='+this.state.insid)
            .then(response => {
                this.setState({ fact: response.data.value });
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        

    }



    render() {
        return (
            <div className="appointment-box">
                <h2 className="d-flex align-items-center">Patient Search</h2>

                <form className="d-flex flex-wrap justify-content-between" onSubmit={this.handleSubmit} >
                    <select className="select-department" id="from" name="from" value={this.state.from} onChange={this.handleChange}>
                        <option value="reception">Hospital Reception</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="labs">Labs</option>
                    </select>

                    <input type="text" name="insid" id="insid" placeholder="Insurance ID" value={this.state.insid} onChange={this.handleChange} />


                    {/* <select class="select-department">
                        <option value="value3">Cardiology</option>
                        <option value="value1">Gastroenterology</option>
                        <option value="value2">Dental Care</option>

                    </select>

                    <input type="text" placeholder="Name" />

                    <select class="select-doctor">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>

                    <select class="select-department">
                        <option value="anthem">Anthem</option>
                        <option value="bluecross">Blue Cross</option>
                        <option value="blueshield">Blue Shield</option>

                    </select> */}



                    <input className="button gradient-bg" type="submit" value="Pre Auth Form" />
                </form>
            </div>
        );
    }
}

export default HospitalSearchForm;

