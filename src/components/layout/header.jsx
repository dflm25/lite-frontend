import React, { Component } from 'react';
// import * as actions from '../store/actions';

import Avatar from '../../assets/img/avatar.png';

class Header extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    // this.props.dispatch(actions.authLogout());
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg main-navbar">
        <ul className="navbar-nav navbar-right">
          <li className="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img alt="image" src={Avatar} className="rounded-circle mr-2" />
              <div className="d-sm-none d-lg-inline-block ml-5">Daniel Lucumi</div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
              </a>
              <a href="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i> Activities
              </a>
              <a href="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog"></i> Settings
              </a>
              <div className="dropdown-divider"></div>
              <a onClick={this.handleLogout} className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
