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
  let hours = 1;
  let saved = localStorage.getItem('saved');
  if (saved && new Date().getTime() - saved > hours * 60 * 60 * 1000) {
    localStorage.clear();
  }
  return (
    <React.Fragment>
      <Routing />
    </React.Fragment>
  );
};

export default withRouter(App);
