import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './scheme';

export default function CompanyForm({ submit, defaultValues }) {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const onSubmit = (data) => submit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="nit">
          NIT
        </label>
        <input
          type="text"
          {...register('nit')}
          className="form-control form-control-lg"
          disabled={defaultValues}
        />
        {errors.nit && <span className="error">{errors.nit.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="name">
          Company name
        </label>
        <input type="text" {...register('name')} className="form-control form-control-lg" />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="address">
          Address
        </label>
        <input type="text" {...register('address')} className="form-control form-control-lg" />
        {errors.address && <span className="error">{errors.address.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="phone">
          Phone
        </label>
        <input type="text" {...register('phone')} className="form-control form-control-lg" />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>
      <button className="btn btn-primary btn-lg btn-block w-100" type="submit">
        Save
      </button>
    </form>
  );
}

CompanyForm.propTypes = {
  submit: PropTypes.func.isRequired,
  defaultValues: PropTypes.oneOfType([PropTypes.bool, PropTypes.bject])
};

CompanyForm.defaultProps = {
  defaultValues: {}
};
