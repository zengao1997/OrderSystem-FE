import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import dayjs from 'dayjs';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('order-token');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token === dayjs().format('YYYY-MM-DD')) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}

export default ProtectedRoute;
