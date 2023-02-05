import * as yup from 'yup';

const schema = yup.object().shape({
  sku: yup.string().required(),
  product_name: yup.string().required(),
  company_nit: yup.string().required(),
  buy_price: yup.number().required(),
  sell_price: yup.number().required()
});

export default schema;
