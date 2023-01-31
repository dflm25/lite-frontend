import * as yup from 'yup';

// const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,16}$/;

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(7)
  // .matches(regex, 'un Numero, una mayuscula y un caracter especial')
});

export default schema;
