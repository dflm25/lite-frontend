import React from 'react';

// componets
import LoginForm from '../../components/forms/login';

export default function LoginPage() {
  return (
    <section className="vh-100 bg-primary">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5">
                <h3 className="mb-5 text-center">Sign in</h3>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
