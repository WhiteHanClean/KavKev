import React from 'react';
import { Formik, Form } from 'formik';

const initialValues = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
};

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

function Registration() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues
        validate={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, handleChange, handleSubmit }) => <Form></Form>}
      </Formik>
    </div>
  );
}

export default Registration;
