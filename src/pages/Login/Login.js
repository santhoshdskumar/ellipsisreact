import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import jwt from 'jwt-decode'; // import dependency
import 'react-toastify/dist/ReactToastify.css';
const Login = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    successMessage: null,
    rememberMe: false,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(`https://app2.ellipsis-ai.com/user_api/login/`, {
        user: {
          email: payload.email,
          password: payload.password,
        },
      })
      .then(function (response) {
        window.localStorage.clear();
        console.log(response.data.user);
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: 'Login successful. Redirecting to home page..',
          }));

          localStorage.setItem('login_access_token', response.data.user.token);
          localStorage.setItem('user_id', response.data.user.user_id);
          redirectToHome();
        } else if (response.code === 400) {
          props.showError('Username and password do not match');
        } else {
          props.showError('Username does not exists');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const redirectToHome = () => {
    props.history.push('/Dashboard');
  };

  return (
    <React.Fragment>
      <Row className="row no-gutter reverse-order">
        <div class="col-one-half middle padding">
          <div class="max-width-s">
            <h5>Welcome back.</h5>
            <p class="paragraph">Enter your details to create an account.</p>
            <Form className="main-form p-0" noValidate>
              <Form.Group className="mb-4">
                <Form.Label for="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  value={state.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label for="password">Password:</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={state.password}
                  fullWidth
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                <Link to="/password_reset" className="form-help">
                  Forgot password?
                </Link>
              </Form.Group>

              <Form.Group className="mb-4">
                <input id="tandc" type="checkbox" name="tandc" />
                <label for="tandc" class="checkbox">
                  Remomber Me
                </label>
              </Form.Group>

              <Form.Group>
                <button
                  className="update"
                  type="submit"
                  onClick={handleSubmitClick}
                >
                  Log In
                </button>
              </Form.Group>
            </Form>
          </div>
          <div class="text-center max-width-s already">
            <span class="muted">Don't have an account? </span>
            <Link to="/Register">Sign Up</Link>
          </div>
        </div>
        <div class="col-one-half bg-image-05 featured-image"></div>
      </Row>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? 'block' : 'none' }}
        role="alert"
      >
        {state.successMessage}
      </div>
    </React.Fragment>
  );
};

export default Login;
