import React from 'react';
import styled from 'styled-components';
import useSignupForm from '../hooks/useSignupForm';
import { BaseContainer } from './baseComponents';

const UseCustomFormHookExample: React.FC = () => {
  const { handleSubmit, errors, touched, values, handleChange, isSubmitting } =
    useSignupForm();
  return (
    <StyledBaseContainer>
      <h1>Use Custom FormHook Example</h1>
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

export default UseCustomFormHookExample;
