import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/Layout/NavBar';
import Landing from './component/Layout/Landing';
import Login from '../src/component/Auth/Login';
import Register from '../src/component/Auth/Register';
import Dashboard from './component/dashboard/Dashboard';
import Alert from './component/Auth/Alert';
import PrivateRoute from './component/routing/PrivateRoute';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/token';

import { loadUser } from './action/auth';
import CreateProfile from './component/profile/Create.Profile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
