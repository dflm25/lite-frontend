import * as yup from 'yup';

const schema = yup.object().shape({
  nit: yup.string().required(),
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required()
});

export default schema;
