const customStyles = {
  rows: {
    style: {
      minHeight: '48px' // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '4px', // override the cell padding for head cells
      paddingRight: '4px',
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Poppins,sans-serif',
      color: '#4a5c7',
      textAlign: 'center'
      // fontWeight: 'bold'
    }
  },
  cells: {
    style: {
      paddingLeft: '4px', // override the cell padding for data cells
      paddingRight: '4px',
      fontSize: '1rem',
      fontWeight: 300,
      fontFamily: 'Poppins,sans-serif',
      color: '#6e7272'
    }
  }
};

export default customStyles;
