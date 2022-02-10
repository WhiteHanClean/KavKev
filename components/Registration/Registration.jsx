import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import classes from './Registration.module.scss';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/products/registration.slice';
const initialValues = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Введите пароль!'),
  first_name: Yup.string().required('Введите Имя корректно!'),
  last_name: Yup.string().required('Введите Фамилию корректно!'),
});

function Registration() {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    dispatch(signUpUser(values));
  };

  return (
    <div className={classes.registration_block}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className={classes.form_inputs}>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              name='username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && touched.username && (
              <p className={'text-danger'}>{errors.username}</p>
            )}
            <TextField
              id='outlined-basic'
              label='Password'
              variant='outlined'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <p className={'text-danger'}>{errors.password}</p>
            )}
            <TextField
              id='outlined-basic'
              label='First name'
              name='first_name'
              variant='outlined'
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && touched.first_name && (
              <p className={'text-danger'}>{errors.first_name}</p>
            )}
            <TextField
              id='outlined-basic'
              label='Last name'
              variant='outlined'
              name='last_name'
              value={values.last_name}
              onChange={handleChange}
            />
            {errors.last_name && touched.last_name && (
              <p className={'text-danger'}>{errors.last_name}</p>
            )}
            <Button type='submit' variant='contained'>
              Регистрация
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
