import React, { Fragment } from 'react';
import './App.scss';
import MainNavbar from './_shared/components/MainNavbar';
// import MainFooter from './_shared/components/MainFooter';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Names from './views/Names';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import Users from './views/Users';

function App() {
  return (
    <Fragment>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/names" component={Names} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <MainFooter /> */}
    </Fragment>
  );
}

export default App;
