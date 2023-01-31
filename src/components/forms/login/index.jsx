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
    defaultValues: { email: 'dflm25@gmail.com', password: '12345678' }
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="typeEmailX-2 text-left">
          Email
        </label>
        <input type="email" {...register('email')} className="form-control form-control-lg" />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="typePasswordX-2 ">
          Password
        </label>
        <input type="password" {...register('password')} className="form-control form-control-lg" />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <button className="btn btn-primary btn-lg btn-block w-100" type="submit">
        Login
      </button>
    </form>
  );
}
