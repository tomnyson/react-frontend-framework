import React from 'react';
import { Route } from 'react-router-dom';

type IProps = {
  path: string;
  component: any;
};

const PublicRoute = ({ path }: { path: string; component: JSX.Element }) => {
  console.log('path', path);
  return <Route path={path} element={<h1>ajjaja</h1>} />;
};
export default PublicRoute;
