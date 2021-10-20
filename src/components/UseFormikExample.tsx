import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
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

const UseFormikExample: React.FC = () => {
  const { handleSubmit, errors, touched, values, handleChange, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <StyledBaseContainer>
      <h1>Use Formik Example</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          placeholder="Enter First Name"
          className={errors.firstName && touched.firstName ? 'error' : ''}
          onChange={handleChange}
          value={values.firstName}
        />
        {errors.firstName && touched.firstName && (
          <small>{errors.firstName}</small>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name"
          className={errors.lastName && touched.lastName ? 'error' : ''}
          onChange={handleChange}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName && (
          <small>{errors.lastName}</small>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Enter Email"
          type="email"
          className={errors.email && touched.email ? 'error' : ''}
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email && <small>{errors.email}</small>}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </StyledBaseContainer>
  );
};

const StyledBaseContainer = styled(BaseContainer)`
  max-width: 400px;
  form {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
`;

export default UseFormikExample;
