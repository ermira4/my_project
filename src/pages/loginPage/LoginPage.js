import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginPage.css'; 

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

function LoginPage() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login-page">
      <div />
      <Container className="login-container">
        <h2 className="text-center mb-4">Login</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Field
                  name="username"
                  as={Form.Control}
                  isInvalid={!!errors.username && touched.username}
                />
                <ErrorMessage name="username" component="div" className="invalid-feedback" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Field
                  name="password"
                  type="password"
                  as={Form.Control}
                  isInvalid={!!errors.password && touched.password}
                />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </Form.Group>
              <Button 
                type="submit" 
                className="w-100" 
                style={{ backgroundColor: '#333333', border: 'none', color: '#fff', borderRadius: '4px', padding: '0.75rem' }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default LoginPage;





