import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as actions from '../store/actions';

class Sidebar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    // this.props.dispatch(actions.authLogout());
  };

  render() {
    return (
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">Lite Thinking</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="nav-item dropdown">
              <Link to={`/`}>Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={`/inventory`}>Inventory</Link>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
