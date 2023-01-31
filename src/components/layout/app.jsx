import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Sidebar from './sidebar';

const App = ({ children, title }) => (
  <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>{title}</h1>
          </div>

          <div className="section-body bg-white">{children}</div>
        </section>
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default App;
