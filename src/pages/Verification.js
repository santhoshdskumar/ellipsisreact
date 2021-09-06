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
              Thanks for sign-up to EllipsisAI. Please verify your email id to complete the sign-up process. Check your inbox!
            </p>
          </div>
          <div className="text-center max-width-s already">
            <span className="muted">Sign In With Your Account </span>
            <Link to="/Login">Login</Link>
          </div>
        </div>
        <div className="col-one-half bg-image-05 featured-image"></div>
      </Row>

    </React.Fragment>
  );
};

export default Register;
