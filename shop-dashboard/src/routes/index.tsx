import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './public.route';
import PrivateRoute from './private.route';
import LoginScreen from '../pages/login/login';

const RouteScreen = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/test"
          element={
            <PrivateRoute>
              <LoginScreen />
            </PrivateRoute>
          }></Route>
        <Route path="/" element={<LoginScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteScreen;
