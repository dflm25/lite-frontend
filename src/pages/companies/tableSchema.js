const columns = (edit, remove) => {
  return [
    {
      selector: (row) => row.nit,
      name: 'NIT',
      sortable: true
    },
    {
      selector: (row) => row.name,
      name: 'name',
      sortable: true
    },
    {
      selector: (row) => row.phone,
      name: 'Phone',
      sortable: true
    },
    {
      selector: (row) => row.address,
      name: 'Address',
      sortable: true
    },
    {
      name: 'Actions',
      center: true,
      cell: (row) => (
        <div className="flex">
          <a className="btn btn-primary btn-sm m-2" onClick={() => edit(row.nit)}>
            <i className="fas fa-edit"></i>
          </a>

          <a className="btn btn-danger btn-sm" onClick={() => remove(row.nit)}>
            <i className="fas fa-trash"></i>
          </a>
        </div>
      )
    }
  ];
};

export default columns;
