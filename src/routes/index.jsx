/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page components
import LoginPage from '../pages/login';
import InventoryPage from '../pages/inventory';
import HomePage from '../pages/home';
import NoMatch from '../pages/noMatch';
import PrivateRoutes from './private';

// Styles
import '../assets/sass/custom.scss';

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
