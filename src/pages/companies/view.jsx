import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { NotificationManager } from 'react-notifications';

// Components
import Layout from '../../components/layout/app';
import Datatable from '../../components/datatables';
import Modal from '../../components/modal';
import CompanyForm from '../../components/forms/company';

// Datatable Schema
import tableSchema from './tableSchema';

export default function CompanyPage({
  companyActions: { paginate, create, edit, update, destroy }
}) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
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

  return (
    <Layout title="Companies">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12">
          <div className="p-3">
            <a className="btn btn-warning float-rigth btn-sm" onClick={() => setShowModal(true)}>
              Add company
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
      <Modal show={showModal} title="Companies form" action={setShowModal} size="md">
        <CompanyForm submit={handleSubmit} defaultValues={editingItem} />
      </Modal>
    </Layout>
  );
}

CompanyPage.propTypes = {
  companyActions: PropTypes.shape({
    paginate: PropTypes.func,
    create: PropTypes.func,
    edit: PropTypes.func,
    destroy: PropTypes.func,
    update: PropTypes.func
  })
};
