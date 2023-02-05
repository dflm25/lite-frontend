import React from 'react';
import DataTable from 'react-data-table-component';
import ReactLoading from 'react-loading';

// styles
import customStyles from './styles';

export default function index({ actions, loading, data, schema, totalRows }) {
  return (
    <DataTable
      progressPending={loading}
      progressComponent={<ReactLoading type="spin" color="#e5e5e5" height={120} width={120} />}
      columns={schema}
      data={data}
      customStyles={customStyles}
      pagination
      paginationServer
      onChangePage={actions.setPage}
      onChangeRowsPerPage={actions.setPerPage}
      paginationTotalRows={totalRows}
    />
  );
}
