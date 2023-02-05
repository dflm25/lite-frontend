import React from 'react';

// Components
import Layout from '../../components/layout/app';
import Image from '.././../assets/img/lite-thinking.png';

export default function HomePage() {
  return (
    <Layout title="Welcome to Lite Thinking">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="shadow-2-strong">
            <div className="card-body p-5">
              <img src={Image} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
