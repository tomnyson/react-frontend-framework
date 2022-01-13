import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './public.route';
import PrivateRoute from './private.route';
import { LoginScreen } from '../pages/login';
import { RegisterScreen } from '../pages/register';
import { CategoryScreen } from '../pages/category';

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
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <CategoryScreen />
            </PrivateRoute>
          }></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>
        <Route path="/" element={<LoginScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteScreen;
