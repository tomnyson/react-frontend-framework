import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: any }) => {
  const authed = false; // isauth() returns true or false based on localStorage

  return authed ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
