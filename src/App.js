import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/Layout/NavBar';
import Landing from './component/Layout/Landing';
import Login from '../src/component/Auth/Login';
import Register from '../src/component/Auth/Register';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
