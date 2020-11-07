import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../pages/_layouts/default';

const RouteWrapper = ({ component: Component, ...rest }: any) => {
  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
