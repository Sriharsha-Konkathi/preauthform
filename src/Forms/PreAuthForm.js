import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import './PreAuthForm.css';

// import selectvalues from './selectoptions';

const App = ({ values, errors, touched, isSubmitting }) => (

    <div className="body">
        <center>
            <h1>Pre Authorization Form</h1>
            <h3 className="subtitle">Patient Information</h3>
            <Form>
                {/* <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <label>Email:  
        <Field type="email" name="email" placeholder="Email" />       
        </label>
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label>Password
        <Field type="password" name="password" placeholder="Password" /></label>
      </div> */}
                {/* <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label> 
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>*/}
                {/* <div>
                    {touched.patientname && errors.patientname && <p>{errors.patientname}</p>}
                    <label>Patient Full Name:
                    <Field type="text" name="patientname" placeholder="Full Name" /></label>
                </div> */}
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label>First Name:
                            <Field type="text" name="firstname" placeholder="First Name" /></label>
                        </div>
                        <div className="col-md-6">
                            <label>Last Name:
                            <Field type="text" name="lastname" placeholder="Last Name" /></label>
                        </div>
                    </div>                    
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label> Sex:
                            <Field component="select" name="sex">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                            </Field></label>
                        </div>
                        <div className="col-md-6">
                                {touched.phone && errors.phone && <p>{errors.phone}</p>}
                                <label>Contact Number :
                                <Field type="tel" name="contact" placeholder="Mobile Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" /></label>
                        </div>    
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            {touched.age && errors.age && <p>{errors.age}</p>}
                            <label>Age :
                            <Field type="number" name="age" placeholder="Age" /></label>
                        </div>
                        <div className="col-md-6">
                            <label>Address:
                            <Field type="text" name="paddress" placeholder="Address" /></label>
                        </div>
                    </div>
                </div>


                <h3 className="subtitle">Insurance Information</h3>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label> Insurance Provider:
                            <Field component="select" name="insurer">
                            <option value="insurer1">Anthem</option>
                            <option value="insurer2">Blue Cross</option>
                            <option value="insurer3">Blue Shield</option>
                            </Field></label>
                        </div>
                        <div className="col-md-6">
                            {touched.insuranceid && errors.insuranceid && <p>{errors.insuranceid}</p>}
                            <label>Patient's Insurance ID:
                            <Field type="text" name="insuranceid" placeholder="Insurance ID Number" /></label>
                        </div>
                    </div>
                </div>

                <h3 className="subtitle">Provider Information</h3>
                
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label> Hospital Name:
                            <Field component="select" name="hospital" disabled>
                            <option value="hospital1">Hospital 1</option>
                            <option value="hospital2">Hospital 2</option>
                            <option value="hospital3">Hospital 3</option>
                            </Field></label>
                        </div>
                        <div className="col-md-6">
                            <label> Doctor Name:
                            <Field component="select" name="doctor">
                            <option value="doctor1">Doctor 1</option>
                            <option value="doctor2">Doctor 2</option>
                            <option value="doctor3">Doctor 3</option>
                            </Field></label>
                        </div>
                    </div>
                </div>
                <center>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-*">
                        <label>Address:
                        <Field type="text" name="address" placeholder="Address" disabled /></label>
                        </div>
                        <div className="col-md-*">
                        <label>City:
                        <Field type="text" name="city" placeholder="City" disabled /></label>
                        </div>
                        <div className="col-md-*">
                        <label>State:
                        <Field type="text" name="state" placeholder="State" disabled /></label>
                        </div>
                        <div className="col-md-*">
                        <label>Zip Code:
                        <Field type="number" name="zipcode" placeholder="Zip Code" disabled /></label>  
                        </div>
                    </div>
                </div>
                </center>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label> Treatment Requested:
                            <Field component="select" name="treatment">
                            <option value="treatment1">Treatment 1</option>
                            <option value="treatment2">Treatment 2</option>
                            <option value="treatment3">Treatment 3</option>
                            </Field></label>
                        </div>
                        <div className="col-md-6 date">
                        <label> Date of Admission:
                            <Field type="date" name="date">
                            </Field>
                        </label>
                        </div>
                    </div>
                </div>

                          
                

                {/* <label> Insurance Plan: 
      <Field component="select" name="insuranceplan">
        <option value="insuranceplan1">InsurancePlan 1</option>
        <option value="insuranceplan2">InsurancePlan 2</option>
        <option value="insuranceplan3">InsurancePlan 3</option>
      </Field></label> */}

                {/* <label> Insurance Plan:
      <Field component="select" name="insuranceplan">
                        <option value="insuranceplan1">InsurancePlan 1</option>
                        <option value="insuranceplan2">InsurancePlan 2</option>
                        <option value="insuranceplan3">InsurancePlan 3</option>
                    </Field></label> */}

            



                <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#myModal" disabled={isSubmitting}>
                    Submit
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                            <div className="modal-content">                                          
                                            <div className="modal-header">
                                              <h4 className="modal-title">Pre Authrization Form Submitted Successfully</h4>
                                              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>   
                            </div>
                    </div>
                </div>

            </Form>
        </center>
    </div>
);

const FormikApp = withFormik({
    mapPropsToValues({ email, password, newsletter, plan, patientname, doctor, sex, age, contact, insuranceid, insurer, insuranceplan, treatment, hospital, address, zipcode, city, state }) {
        return {
            email: email || "",
            password: password || "",
            newsletter: newsletter || false,
            plan: plan || "free",
            patientname: patientname || "",
            doctor: doctor || "doctor1",
            sex: sex || "male",
            age: age || 1,
            contact: contact,
            insuranceid: insuranceid,
            insurer: insurer || "insurer1",
            insuranceplan: insuranceplan || "insuranceplan3",
            treatment: treatment || "treatment2",
            hospital: hospital,
            address: address,
            zipcode: zipcode,
            city: city,
            state: state




        };
    },
    validationSchema: Yup.object({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(4)
            .required(),
        patientname: Yup.string()
            .min(3)
            .required(),
        age: Yup.number().min(1).required(),
        contact: Yup.number(),
        insuranceid: Yup.string().min(6).required()

    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            if (values.email === "s@gmail.com") {
                setErrors({ email: "This email is already taken" });
            } else {
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
        console.log(values);
    }
})(App);


export default FormikApp;

