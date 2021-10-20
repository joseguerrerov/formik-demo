import React from 'react';
import * as Yup from 'yup';

import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import { BaseContainer } from './baseComponents';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const BasicFormikExample: React.FC = () => (
  <StyledBaseContainer>
    <h1>{'<Formik>'}</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            className={errors.firstName && touched.firstName ? 'error' : ''}
          />
          {errors.firstName && touched.firstName && (
            <small>{errors.firstName}</small>
          )}

          <label htmlFor="lastName">Last Name</label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            className={errors.lastName && touched.lastName ? 'error' : ''}
          />
          {errors.lastName && touched.lastName && (
            <small>{errors.lastName}</small>
          )}

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
            className={errors.email && touched.email ? 'error' : ''}
          />
          {errors.email && touched.email && <small>{errors.email}</small>}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </StyledBaseContainer>
);

const StyledBaseContainer = styled(BaseContainer)`
  max-width: 400px;
  form {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
`;

export default BasicFormikExample;
