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
import EditProfile from './component/profile/Edit.Profile';
import AddEducation from './component/profile/Add.Education';
import AddExperience from './component/profile/Add.Experience';
import Profiles from './component/profile/Profiles';
import Profile from './component/profile/Profile';
import Posts from './component/post/Posts';
import Post from './component/post/Post';

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
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute
                exact
                path="/post"
                component={Posts}
              />
              <PrivateRoute
                exact
                path="/post/:id"
                component={Post}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
