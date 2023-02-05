import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { NotificationManager } from 'react-notifications';

// Components
import Layout from '../../components/layout/app';
import Datatable from '../../components/datatables';
import Modal from '../../components/modal';
import InventoryForm from '../../components/forms/inventory';

// Datatable Schema
import tableSchema from './tableSchema';

export default function CompanyPage({
  inventoryActions: { paginate, create, edit, update, destroy, getPdf },
  companyActions: { getAll: getAllCompanies }
}) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);
  const [editingItem, setEditingItem] = useState(false);

  const getPaginate = () => {
    paginate({ page }, (type, response) => {
      if (type === 'success') {
        const { data } = response;
        setData(data);
      }
    });
  };

  useEffect(() => {
    getPaginate();
    getAllCompanies((type, response) => {
      if (type === 'success') {
        setCompanies(response);
      }
    });
  }, []);

  const handleSubmit = (data) => {
    if (!editingItem) {
      create(data, (type, response) => {
        if (type === 'success') {
          NotificationManager.success(response, 'Good job!');
          setShowModal(false);
          getPaginate();
        }
      });
    } else {
      update({ id: data.nit, ...data }, (type, response) => {
        if (type === 'success') {
          NotificationManager.success(response, 'Good job!');
          setShowModal(false);
          setEditingItem(false);
          getPaginate();
        }
      });
    }
  };

  const getEdit = (id) => {
    edit({ id }, (type, response) => {
      if (type === 'success') {
        setEditingItem(response);
        setShowModal(true);
      }
    });
  };

  const removeItem = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover it!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        destroy({ id }, (type, response) => {
          if (type === 'success') {
            NotificationManager.success(response, 'Good job!');
            getPaginate();
          }
        });
      }
    });
  };

  const generatePdf = (sendEmail) => {
    getPdf({ sendEmail }, (type, response) => {
      if (type === 'success') {
        response;
        // window.open('http://localhost:3002/v1/pdf', '_blank').focus();
      }
    });
  };

  return (
    <Layout title="Inventory">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12">
          <div className="p-3">
            <a className="btn btn-warning float-rigth btn-sm" onClick={() => setShowModal(true)}>
              Add inventory
            </a>
            <a
              className="btn btn-primary float-rigth btn-sm m-2"
              onClick={() => generatePdf(false)}>
              Get PDF
            </a>
            <a className="btn btn-success float-rigth btn-sm m-2" onClick={() => generatePdf(true)}>
              Send email
            </a>
          </div>
          <div className="shadow-2-strong">
            <div className="card-body p-3">
              <Datatable
                data={data}
                loading={false}
                schema={tableSchema(getEdit, removeItem)}
                totalRows={data.length}
                actions={{ setPage }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} title="Inventory form" action={setShowModal} size="md">
        <InventoryForm submit={handleSubmit} defaultValues={editingItem} companies={companies} />
      </Modal>
    </Layout>
  );
}

CompanyPage.propTypes = {
  inventoryActions: PropTypes.shape({
    paginate: PropTypes.func,
    create: PropTypes.func,
    edit: PropTypes.func,
    destroy: PropTypes.func,
    update: PropTypes.func,
    getPdf: PropTypes.func
  }),
  companyActions: PropTypes.shape({
    getAll: PropTypes.func
  })
};
