import React from 'react';

// Components
import Layout from '../../components/layout/app';
// import CompanyForm from '../../components/forms/company';

export default function HomePage() {
  return (
    <Layout title="Company">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong">
            <div className="card-body p-5"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
