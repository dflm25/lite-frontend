const columns = (edit, remove) => {
  return [
    {
      selector: (row) => row.sku,
      name: 'SKU',
      sortable: true
    },
    {
      selector: (row) => row.product_name,
      name: 'Product',
      sortable: true
    },
    {
      selector: (row) => row.description,
      name: 'Description',
      sortable: true
    },
    {
      selector: (row) => row.buy_price,
      name: 'Price',
      sortable: true
    },
    {
      selector: (row) => row.sell_price,
      name: 'Sell price',
      sortable: true
    },
    {
      selector: (row) => row.on_stock,
      name: 'Sell price',
      sortable: true
    },
    {
      name: 'Actions',
      center: true,
      cell: (row) => (
        <div className="flex">
          <a className="btn btn-primary btn-sm m-2" onClick={() => edit(row.id)}>
            <i className="fas fa-edit"></i>
          </a>

          <a className="btn btn-danger btn-sm" onClick={() => remove(row.id)}>
            <i className="fas fa-trash"></i>
          </a>
        </div>
      )
    }
  ];
};

export default columns;
