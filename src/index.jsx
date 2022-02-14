import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import routes from './utilities/router';
import Homepage from './components/Homepage';
import ProtectedRoute from './utilities/ProtectedRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <ProtectedRoute path={routes.homepageRoute} component={Homepage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
