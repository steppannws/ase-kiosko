import Yup from 'yup';

// TODO: translate

// Parameters should be the same as field names
const signInValidation = Yup.object().shape({
  cuil: Yup.string()
    .required('Ingrese su CUIL')
    .test('is-int', 'Tiene que ser un número', value => {
      return Number.isInteger(+value);
    }),
  password: Yup.string(),
  // .required('Ingrese su contraseña')
  // .min(2, 'Contraseña invalida'),
});

const emailValidation = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect e-mail')
    .required()
    .min(2, 'Invalid name'),
});

export { signInValidation, emailValidation };
