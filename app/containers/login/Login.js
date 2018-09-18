// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
// import Yup from 'yup';
// import { signInValidation } from '../../utils/form-validations';
import Button from '../../components/main-button';

import styles from './styles.css';

export default class Login extends Component {
  static propTypes = {
    test: PropTypes.string,

    // Actions
    login: PropTypes.func.isRequired
  };

  static defaultProps = {
    test: ''
  };

  constructor(props) {
    super(props);

    this.inputNames = {
      CUIL: 'cuil',
      PASSWORD: 'password'
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.logo} src="./static/images/logo.png" />
        <div className={styles.cardWrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}> ¡Bienvenidos! </span>
          </div>
          <div className={styles.formWrapper}>
            <Formik
              ref={ref => {
                this.form = ref;
              }}
              initialValues={{
                // cuil: '',
                // password: '',
                cuil: '20628464872',
                password: '16984597'
                // cuil: '20108931664',
                // password: '123456',
              }}
              // validationSchema={signInValidation}
              // eslint-disable-next-line no-unused-vars
              onSubmit={(values, actions) => {
                // alert(values);
                console.log('ERROR');
                // if (values.password === '') {
                // this.form.setFieldError('password', 'Ingrese su contraseña');
                // this.form.setFieldError('cuil', 'Ingrese su usuario');
                // return;
                // }
                this.props
                  .login({ cuil: values.cuil, password: values.password })
                  .then(response => {
                    if (response.status === 2) {
                      //   window.confirm('Loggedin');
                    }
                  });
              }}
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles.inputWrapper}>
                    <span className={styles.label}>
                      Usuario (CUIL sin guiones)
                    </span>
                    <input
                      className={`${styles.input} ${errors.cuil &&
                        styles.inputError}`}
                      type="text"
                      name="cuil"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={values.cuil}
                    />
                    {errors.cuil && (
                      <span className={styles.errorText}>{errors.cuil}</span>
                    )}
                  </div>
                  <div className={styles.inputWrapper}>
                    <span className={styles.label}>Contraseña</span>
                    <input
                      className={`${styles.input} ${errors.password &&
                        styles.inputError}`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && (
                      <span className={styles.errorText}>
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <Button text="Ingresar" onPress={handleSubmit} />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
