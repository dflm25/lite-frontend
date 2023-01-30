/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';

import LoginPage from '../pages/login';
import HomePage from '../pages/home';

import { AuthContext } from '../context/authContext';

import 'bootstrap/scss/bootstrap.scss';
import '../assets/sass/custom.scss';

export default function App() {
  const token = React.useContext(AuthContext);
  console.log('token', token);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
