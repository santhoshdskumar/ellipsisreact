import './assets/scss/common.scss';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavBar from './components/Header/NavBar';
import SideMain from './components/Sidebar/SideMain';
import Routing from './Routing/Routing';
import CssBaseline from '@material-ui/core/CssBaseline';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Navbar } from 'react-bootstrap';
import AllTools from './pages/AllTools';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const App = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Router>
          {props.location.pathname === '/Register' ||
          props.location.pathname === '/Login' ||
          props.location.pathname === '/password_reset' ? null : (
            <SideMain />
          )}
          <main className={classes.content}>
            <Routing />
          </main>
        </Router>
      </div>

      {/* <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <div className={classes.root}>
              <SideMain />
              <main className={classes.content}>
                <Routing />
              </main>
            </div>
          </PrivateRoute>
          <Route exact path="/">
            <Redirect exact from="/" to="Alltools" />
          </Route>
          <Route path="*">
            <Redirect from="/" to="Alltools" />
          </Route>
        </Switch>
      </Router> */}
    </React.Fragment>
  );
};

export default withRouter(App);
