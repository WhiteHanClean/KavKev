import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import classes from './Registration.module.scss';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { signUpUser } from '../../redux/products/registration.slice';
<<<<<<< HEAD

=======
import logo from '../../assets/logo2.png';
import Image from 'next/image';
import Link from 'next/link';
>>>>>>> cc9520cc6ecaac6674faf5623395323d6c8e278c

const initialValues = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .required('Введите номер телефона корректно!'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Введите пароль!'),
  first_name: Yup.string().required('Введите Имя корректно!'),
  last_name: Yup.string().required('Введите Фамилию корректно!'),
});

function Registration() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    await dispatch(signUpUser(values));
    if (localStorage.getItem('access')) {
      router.push('/');
    }
  };

  return (
    <div className={classes.registration_block}>
      <div className={classes.logo_img}>
        <Image src={logo} alt={logo} width={100} height={100} />
      </div>
      <h1>Регистрация</h1>
      <div>
        <h3 className={classes.about_signup}>
          Просим ввести настоящие данные так как выдача приза возможна только
          при наличии паспорта или аналогичного идентифицирующего документа
        </h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className={classes.form_inputs}>
            <TextField
              id='outlined-basic_1'
              label='Телефон'
              variant='outlined'
              type='number'
              name='username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && touched.username && (
              <p className={classes.text_danger}>{errors.username}</p>
            )}
            <TextField
              id='outlined-basic_2'
              label='Пароль'
              variant='outlined'
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <p className={classes.text_danger}>{errors.password}</p>
            )}
            <TextField
              id='outlined-basic_3'
              label='Имя'
              name='first_name'
              variant='outlined'
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && touched.first_name && (
              <p className={classes.text_danger}>{errors.first_name}</p>
            )}
            <TextField
              id='outlined-basic_4'
              label='Фамилия'
              variant='outlined'
              name='last_name'
              value={values.last_name}
              onChange={handleChange}
            />
            {errors.last_name && touched.last_name && (
              <p className={classes.text_danger}>{errors.last_name}</p>
            )}
            <div className={classes.link_auth}>
              <Button
                className={classes.link_sign}
                type='submit'
                variant='contained'
              >
                Регистрация
              </Button>
              <div>
                <Link href='/'>
                  <a>
                    <span>Уже есть аккаунт ?</span>
                    <Button
                      className={classes.link_auth_button}
                      variant='contained'
                    >
                      Войти
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
