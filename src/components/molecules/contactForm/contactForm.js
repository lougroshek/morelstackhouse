import React, { useState } from 'react';
import { useFormik, CircularProgress } from 'formik';
// import { Formik, Field, Form, ErrorMessage, CircularProgress } from 'formik';
import * as Yup from 'yup';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const ContactForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .required('Required'),
      message: Yup.string()
        .required('Required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1400);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className={formik.isSubmitting ? 'submitting':'not-submitting'}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div>{formik.errors.subject}</div>
      ) : null}
      <input
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}
      <button type="submit" disabled={formik.isSubmitting ? 'disabled' : false}>Submit</button>
      {formik.isSubmitting ?
        <div class="spinner-border spinner-border-sm ml-2" role="status">
          <span class="sr-only">Submitting...</span>
        </div> : null
      }
    </form>
  );
};

export default ContactForm
