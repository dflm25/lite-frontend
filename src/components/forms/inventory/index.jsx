import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';

import schema from './scheme';

export default function CompanyForm({ submit, defaultValues, companies }) {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const onSubmit = (data) => submit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row form-group">
        <div className="col-md-4">
          <label className="form-label text-left" htmlFor="sku">
            SKU
          </label>
          <input type="text" {...register('sku')} className="form-control" />
          {errors.sku && <span className="error">{errors.sku.message}</span>}
        </div>
        <div className="col-md-8">
          <label className="form-label text-left" htmlFor="product_name">
            Producto
          </label>
          <input type="text" {...register('product_name')} className="form-control" />
          {errors.product_name && <span className="error">{errors.product_name.message}</span>}
        </div>
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="nit">
          Company
        </label>
        <Controller
          control={control}
          defaultValue={''}
          name="company_nit"
          render={({ field: { onChange, value } }) => (
            <Select
              options={companies}
              value={companies.filter((c) => c.nit === value)}
              onChange={(val) => onChange(val.nit)}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.nit}
              isClearable
            />
          )}
        />
        {errors.company_nit && <span className="error">{errors.company_nit.message}</span>}
      </div>
      <div className="row form-group">
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            Buy price
          </label>
          <input type="text" {...register('buy_price')} className="form-control" />
          {errors.buy_price && <span className="error">{errors.buy_price.message}</span>}
        </div>
        <div className="col-md-6">
          <label className="form-label text-left" htmlFor="sell_price">
            Sell price
          </label>
          <input type="text" {...register('sell_price')} className="form-control" />
          {errors.sell_price && <span className="error">{errors.sell_price.message}</span>}
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          <label className="form-label text-left" htmlFor="sell_price">
            On stock
          </label>
          <input type="text" {...register('on_stock')} className="form-control" />
          {errors.on_stock && <span className="error">{errors.on_stock.message}</span>}
        </div>
      </div>
      <div className="form-outline mb-4">
        <label className="form-label text-left" htmlFor="phone">
          Description
        </label>
        <textarea
          type="text"
          {...register('description')}
          className="form-control form-control-lg"
        />
        {errors.description && <span className="error">{errors.description.message}</span>}
      </div>
      <button className="btn btn-primary btn-lg btn-block w-100" type="submit">
        Save
      </button>
    </form>
  );
}

CompanyForm.propTypes = {
  submit: PropTypes.func.isRequired,
  defaultValues: PropTypes.oneOfType([PropTypes.bool, PropTypes.bject]),
  companies: PropTypes.arrayOf(PropTypes.object).isRequired
};

CompanyForm.defaultProps = {
  defaultValues: {}
};
