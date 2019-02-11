import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import selectvalues from './selectoptions';

const App = ({ values, errors, touched, isSubmitting }) => (
    
    <div>
        <center>
        <h1>Insurance PreAuthorization Request Form</h1>
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <label>Email:  
        <Field type="email" name="email" placeholder="Email" />       
        </label>
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label>Password
        <Field type="password" name="password" placeholder="Password" /></label>
      </div>
      {/* <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label> 
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>*/}
      <div>
            {touched.patientname && errors.patientname && <p>{errors.patientname}</p>}
            <label>Patient Full Name:
          <Field type="text" name="patientname" placeholder="Full Name" /></label>
      </div>
      
          <label> Doctor Name:
      <Field component="select" name="doctor">
        <option value="doctor1">Doctor 1</option>
        <option value="doctor2">Doctor 2</option>
        <option value="doctor3">Doctor 3</option>
      </Field></label>
      <div>
            {touched.age && errors.age && <p>{errors.age}</p>}
            <label>Age :
          <Field type="number" name="age" placeholder="Age" /></label>
      </div>
      <label> Sex: 
      <Field component="select" name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </Field></label>
      <div>
      {touched.phone && errors.phone && <p>{errors.phone}</p>}
            <label>Contact Number :
          <Field type="tel" name="contact" placeholder="Mobile Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" /></label>

      </div>
      <div>
            {touched.insuranceid && errors.insuranceid && <p>{errors.insuranceid}</p>}
            <label>Patient's Insurance ID:
          <Field type="text" name="insuranceid" placeholder="Insurance ID Number" /></label>
      </div>
      <label> Insurance Provider: 
      <Field component="select" name="insurer">
        <option value="insurer1">Insurer 1</option>
        <option value="insurer2">Insurer 2</option>
        <option value="insurer3">Insurer 3</option>
      </Field></label>

      {/* <label> Insurance Plan: 
      <Field component="select" name="insuranceplan">
        <option value="insuranceplan1">InsurancePlan 1</option>
        <option value="insuranceplan2">InsurancePlan 2</option>
        <option value="insuranceplan3">InsurancePlan 3</option>
      </Field></label> */}

      <label> Insurance Plan: 
      <Field component="select" name="insuranceplan">
        
      </Field></label>

      <label> Treatment Requested: 
      <Field component="select" name="treatment">
        <option value="treatment1">Treatment 1</option>
        <option value="treatment2">Treatment 2</option>
        <option value="treatment3">Treatment 3</option>
      </Field></label>

      <label> Hospital Name: 
      <Field component="select" name="hospital" disabled>
        <option value="hospital1">Hospital 1</option>
        <option value="hospital2">Hospital 2</option>
        <option value="hospital3">Hospital 3</option>
      </Field></label>

      <div><label>Address: 
      <Field type="text" name="address" placeholder="Address" disabled/></label>
      </div>

      <div><label>City: 
      <Field type="text" name="city" placeholder="City" disabled/></label>
      </div>
      <div><label>State: 
      <Field type="text" name="state" placeholder="State" disabled/></label>
      </div>

      <div><label>Zip Code: 
      <Field type="number" name="zipcode" placeholder="Zip Code" disabled/></label>
      </div>



      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      
    </Form>
    </center>
    </div>
  );
  
  const FormikApp = withFormik({
    mapPropsToValues({ email, password, newsletter, plan, patientname,doctor,sex,age,contact,insuranceid,insurer,insuranceplan,treatment, hospital,address,zipcode,city,state }) {
      return {
        email: email || "",
        password: password || "",
        newsletter: newsletter || false,
        plan: plan || "free",
        patientname: patientname || "",
        doctor: doctor || "doctor1",
        sex: sex || "male",
        age: age || 1,
        contact: contact ,
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

