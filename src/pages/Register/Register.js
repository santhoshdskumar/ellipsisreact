import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: '',
    firstname: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [emailError, setemailError] = useState();
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://app2.ellipsis-ai.com/user_api/signup/`, {
        email: formData.email,
        firstname: formData.firstname,
        password: formData.password,
      })
      .then((res) => {
        history.push('/Login');
        console.log(res.status);
      })
      .catch((error) => {
        toast('User Name with this email id already exists');
      });
  };

  return (
    <React.Fragment>
      <Row className="row no-gutter reverse-order">
        <div className="col-one-half middle padding">
          <div className="max-width-s">
            <h5>Welcome!</h5>
            <p className="paragraph">
              Enter your details to create an account.
            </p>
            <Form className="main-form p-0" noValidate>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  fullWidth
                  id="firstname"
                  name="firstname"
                  autoComplete="firstname"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <input id="tandc" type="checkbox" name="tandc" />
                <label for="tandc" class="checkbox">
                  I agree to the{' '}
                  <a
                    href="https://www.ellipsis-ai.com/terms-conditions"
                    target="_blank"
                  >
                    Terms &amp; Conditions
                  </a>
                </label>
              </Form.Group>

              <Form.Group>
                <button className="update" type="button" onClick={handleSubmit}>
                  Create Account
                </button>
              </Form.Group>
            </Form>
          </div>
          <div className="text-center max-width-s already">
            <span className="muted">Already have an account? </span>
            <Link to="/Login">Login</Link>
          </div>
        </div>
        <div className="col-one-half bg-image-05 featured-image"></div>
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
    </React.Fragment>
  );
};

export default Register;
