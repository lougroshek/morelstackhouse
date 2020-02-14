import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, CircularProgress } from 'formik';
import * as Yup from 'yup';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const ContactForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // const [isSubmitting, setIsSubmitting] = useState(true)
  // const formik = useFormikContext();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      }}
      validationSchema={Yup.object({
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
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        // setIsSubmitting(true)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // setIsSubmitting(false)
        }, 2000);
      }}
    >
     {formik => (
      <Form className={formik.isSubmitting ? 'blah' : null} >
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="subject">Subject</label>
        <Field name="subject" type="text" />
        <ErrorMessage name="subject" />
        <label htmlFor="message">Message</label>
        <Field name="message" type="text" />
        <ErrorMessage name="message" />
        <button type="submit" disabled={formik.isSubmitting ? 'disabled' : null}>Submit</button>
        <React.Fragment>
           {formik.isSubmitting ? ( // isSubmitting IS A FORMIK PROPS
                <CircularProgress
                    color="inherit"
                    size={20}
                />
            ) : null}
        </React.Fragment>
      </Form>
    )}
    </Formik>
  );
  
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .required('Required'),
  //     lastName: Yup.string()
  //       .max(20, 'Must be 20 characters or less')
  //       .required('Required'),
  //     email: Yup.string()
  //       .email('Invalid email address')
  //       .required('Required'),
  //     subject: Yup.string()
  //       .required('Required'),
  //     message: Yup.string()
  //       .required('Required'),
  //   }),
  //   onSubmit={(values, { setSubmitting }) => {
  //         setTimeout(() => {
  //           alert(JSON.stringify(values, null, 2));
  //           setSubmitting(false);
  //         }, 400);
  //       }}
  // });
  // return (
  //   <form onSubmit={formik.handleSubmit}>
  //     <label htmlFor="firstName">First Name</label>
  //     <input
  //       id="firstName"
  //       name="firstName"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.firstName}
  //     />
  //     {formik.touched.firstName && formik.errors.firstName ? (
  //       <div>{formik.errors.firstName}</div>
  //     ) : null}
  //     <label htmlFor="lastName">Last Name</label>
  //     <input
  //       id="lastName"
  //       name="lastName"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.lastName}
  //     />
  //     {formik.touched.lastName && formik.errors.lastName ? (
  //       <div>{formik.errors.lastName}</div>
  //     ) : null}
  //     <label htmlFor="email">Email Address</label>
  //     <input
  //       id="email"
  //       name="email"
  //       type="email"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.email}
  //     />
  //     {formik.touched.email && formik.errors.email ? (
  //       <div>{formik.errors.email}</div>
  //     ) : null}
  //     <label htmlFor="subject">Subject</label>
  //     <input
  //       id="subject"
  //       name="subject"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.subject}
  //     />
  //     {formik.touched.subject && formik.errors.subject ? (
  //       <div>{formik.errors.subject}</div>
  //     ) : null}
  //     <input
  //       id="message"
  //       name="message"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.message}
  //     />
  //     {formik.touched.message && formik.errors.message ? (
  //       <div>{formik.errors.message}</div>
  //     ) : null}
  //     <button type="submit">Submit</button>
  //   </form>
  // );
};

export default ContactForm
