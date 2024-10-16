import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button, Form as BootstrapForm } from 'react-bootstrap';
import './../assets/styles/MedicalForm.css';

const MedicalForm = () => {
  const [step, setStep] = useState(1);

  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    age: Yup.number().min(1, "Invalid age").required('Age is required'),
    weight: Yup.number().min(1, "Invalid weight").required('Weight is required'),
    height: Yup.number().min(1, "Invalid height").required('Height is required'),
    symptoms: Yup.string().required('Please describe your symptoms'),
  });

  // Next and previous step handlers
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Form submission handler
  const handleSubmit = (values) => {
    console.log(values);
    alert('Medical information submitted successfully!');
  };

  return (
    <div className="medical-form-page">
      <section className="hero-section text-center py-5">
        <Container>
          <h1 className="hero-title">Enter Your Medical Information</h1>
          <p className="hero-subtitle">Our AI-powered system will use this information to provide accurate predictions and recommendations, validated by certified doctors.</p>
        </Container>
      </section>

      <section className="form-section py-5">
        <Container>
          <Formik
            initialValues={{ age: '', weight: '', height: '', symptoms: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row className="justify-content-center">
                  <Col xs={12} md={8}>
                    {step === 1 && (
                      <div>
                        <h3>Step 1: Basic Information</h3>
                        <BootstrapForm.Group controlId="age">
                          <BootstrapForm.Label>Age</BootstrapForm.Label>
                          <Field type="number" name="age" className="form-control" />
                          <ErrorMessage name="age" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="weight">
                          <BootstrapForm.Label>Weight (kg)</BootstrapForm.Label>
                          <Field type="number" name="weight" className="form-control" />
                          <ErrorMessage name="weight" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="height">
                          <BootstrapForm.Label>Height (cm)</BootstrapForm.Label>
                          <Field type="number" name="height" className="form-control" />
                          <ErrorMessage name="height" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <Button variant="primary" onClick={nextStep} className="mt-3">Next</Button>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h3>Step 2: Symptoms Information</h3>
                        <BootstrapForm.Group controlId="symptoms">
                          <BootstrapForm.Label>Describe Your Symptoms</BootstrapForm.Label>
                          <Field as="textarea" name="symptoms" className="form-control" rows="4" />
                          <ErrorMessage name="symptoms" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <div className="d-flex justify-content-between mt-3">
                          <Button variant="secondary" onClick={prevStep}>Previous</Button>
                          <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Submit
                          </Button>
                        </div>
                      </div>
                    )}
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Container>
      </section>
    </div>
  );
};

export default MedicalForm;
