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
  const [fields, updateFields] = useState({});
  const [errors, updateErrors] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleValidation = () => {
    let updateFields = fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields['firstname']) {
      formIsValid = false;
      errors['firstname'] = 'Cannot be empty';
    }

    if (typeof fields['firstname'] !== 'undefined') {
      if (!fields['firstname'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['firstname'] = 'Only letters';
      }
    }

    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = 'Cannot be empty';
    }
    if (typeof fields['password'] !== 'undefined') {
      if (!fields['password'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['password'] = 'Comination of letters and numbers';
      }
    }

    //Email
    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Cannot be empty';
    }

    if (typeof fields['email'] !== 'undefined') {
      let lastAtPos = fields['email'].lastIndexOf('@');
      let lastDotPos = fields['email'].lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields['email'].indexOf('@@') == -1 &&
          lastDotPos > 2 &&
          fields['email'].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
      }
    }

    updateErrors({ errors: errors });
    return formIsValid;
  };

  const handleSubmit = (e) => {
    if (formData.firstname || formData.password || formData.email > 0) {
      axios
        .post(`https://app2.ellipsis-ai.com/user_api/signup/`, {
          email: formData.email,
          firstname: formData.firstname,
          password: formData.password,
        })
        .then((res) => {
          history.push('/Login');
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast('User is already registred with this email id');
          }
        });
    } else {
      toast('Please fill all the fields and accet terms and conditions ');
    }
  };

  return (
    <React.Fragment>
      <Row className="row no-gutter reverse-order">
        <div className="col-sm-12 col-md-12 d-lg-none d-md-none d-sm-none">
          <img
            src="https://app2.ellipsis-ai.com/static/media/bg/image-05@2x.79d60b84af12.jpg"
            className="w-100 img-fluid"
            alt=""
          />
        </div>
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
                <span className="error">{errors['firstname']}</span>
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
                <span className="error">{errors.email}</span>
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
                  <Link to="https://www.ellipsis-ai.com/terms-conditions">
                    Terms &amp; Conditions
                  </Link>
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
