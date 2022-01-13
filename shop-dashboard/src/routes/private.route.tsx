import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/Layout';
const PrivateRoute = ({ children }: { children: any }) => {
  const authed = true; // isauth() returns true or false based on localStorage

  return authed ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" />;
};
export default PrivateRoute;
