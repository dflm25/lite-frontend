import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './scheme';

export default function LoginForm() {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', password: '' }
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="typeEmailX-2 text-left">
          Company name
        </label>
        <input type="text" {...register('name')} className="form-control form-control-lg" />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="typePasswordX-2 ">
          Address
        </label>
        <input type="text" {...register('direccion')} className="form-control form-control-lg" />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="typePasswordX-2 ">
          Phone
        </label>
        <input type="text" {...register('phone')} className="form-control form-control-lg" />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="typePasswordX-2 ">
          NIT
        </label>
        <input type="text" {...register('nit')} className="form-control form-control-lg" />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <button className="btn btn-primary btn-lg btn-block w-100" type="submit">
        Update
      </button>
    </form>
  );
}
