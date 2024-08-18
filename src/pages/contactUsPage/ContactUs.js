

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import  './ContactUs.css';

const ContactUsSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  description: Yup.string().required('Description is required'),
  recaptcha: Yup.string().required('Please complete the CAPTCHA'),
});

const ContactUs = () => {
  const handleSubmit = (values, { resetForm }) => {
    
    console.log(values);
    resetForm();
  };

  return (
    <div className="contactUsContainer">
    
      <main>
        <h1 className="contactUsTitle">Contact Us</h1>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            age: '',
            email: '',
            description: '',
            recaptcha: '',
          }}
          validationSchema={ContactUsSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="contactUsForm">
              <div className="contactUsFieldGroup">
                <label htmlFor="firstname" className="contactUsLabel">First Name</label>
                <Field name="firstname" type="text" className="contactUsInput" />
                <ErrorMessage name="firstname" component="div" className="contactUsError" />
              </div>

              <div className="contactUsFieldGroup">
                <label htmlFor="lastname" className="contactUsLabel">Last Name</label>
                <Field name="lastname" type="text" className="contactUsInput" />
                <ErrorMessage name="lastname" component="div" className="contactUsError" />
              </div>

              <div className="contactUsFieldGroup">
                <label htmlFor="age" className="contactUsLabel">Age</label>
                <Field name="age" type="number" className="contactUsInput" />
                <ErrorMessage name="age" component="div" className="contactUsError" />
              </div>

              <div className="contactUsFieldGroup">
                <label htmlFor="email" className="contactUsLabel">Email </label>
                <Field name="email" type="email" className="contactUsInput" />
                <ErrorMessage name="email" component="div" className="contactUsError" />
              </div>

              <div className="contactUsFieldGroup">
                <label htmlFor="description" className="contactUsLabel">Description</label>
                <Field name="description" as="textarea" className="contactUsTextarea" />
                <ErrorMessage name="description" component="div" className="contactUsError" />
              </div>

              <div className="contactUsFieldGroup">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(value) => setFieldValue('recaptcha', value)}
                />
                <ErrorMessage name="recaptcha" component="div" className="contactUsError" />
              </div>

              <button type="submit" className="contactUsButton">Submit</button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default ContactUs;



