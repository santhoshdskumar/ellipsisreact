import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

class PasswordChange extends Component {
  constructor() {
    super();
    this.state = {
      value1: '',
      value2: '',
      value3: '',
    };

    this.handleChange1 = (event) => {
      this.setState({
        value1: event.target.value,
      });
    };

    this.handleChange2 = (event) => {
      this.setState({
        value2: event.target.value,
      });
    };

    this.handleChange3 = (event) => {
      this.setState({
        value3: event.target.value,
      });
    };
  }
  handleSubmitClick = (e) => {
    e.preventDefault();
    axios
      .post(`https://app2.ellipsis-ai.com/accounts/password_change/`)
      .then(function (response) {
        console.log(response);
      });
  };
  render() {
    const Button = styled.button`
      background: #5433ff;
      border: 1px solid #5433ff;
      mix-blend-mode: normal;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
      border-radius: 8px;
      text-transform: uppercase;
      margin-bottom: 30px;
      font-family: Lato;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;

      color: #ffffff;
      &:hover {
        background: #fff;
        color: #5433ff;
        transition: 0.3s ease-in;
      }
    `;
    let colour1 = 'red',
      colour2 = 'red',
      colour3 = 'red',
      colour4 = 'red',
      colour5 = 'red';
    if (this.state.value3.length >= '8') {
      colour1 = 'green';
    }
    if (this.state.value3.match(/[A-Z]/)) {
      colour2 = 'green';
    }
    if (this.state.value1.length >= '8') {
      colour1 = 'green';
    }
    if (this.state.value1.match(/[A-Z]/)) {
      colour2 = 'green';
    }
    if (this.state.value1.match(/[a-z]/)) {
      colour3 = 'green';
    }
    if (this.state.value1.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
      colour4 = 'green';
    }
    if (this.state.value1 === this.state.value2 && this.state.value1 !== '') {
      colour5 = 'green';
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-12">
            <Card>
              <Card.Header>Password change</Card.Header>
              <Card.Body>
                <p>
                  Please enter your old password, for security’s sake, and then
                  enter your new password twice so we can verify you typed it in
                  correctly.
                </p>
                <Form className="p-0">
                  <p style={{ fontWeight: 'bold' }}>
                    All checkmarks must turn green, password must have:
                  </p>
                  <p>
                    <i
                      style={{ color: colour1, fontSize: '20px' }}
                      class="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>{' '}
                    At least 8 characters
                  </p>
                  <p>
                    <i
                      style={{ color: colour2, fontSize: '20px' }}
                      class="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>{' '}
                    At least 1 uppercase letter
                  </p>
                  <p>
                    <i
                      style={{ color: colour3, fontSize: '20px' }}
                      class="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>{' '}
                    At least 1 lowercase letter
                  </p>
                  <p>
                    <i
                      style={{ color: colour4, fontSize: '20px' }}
                      class="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>{' '}
                    At least 1 number or special character
                  </p>
                  <p>
                    <i
                      style={{ color: colour5, fontSize: '20px' }}
                      class="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>{' '}
                    Password === Confirm Password
                  </p>
                  <Form.Group className="mb-4">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.value3}
                      onChange={this.handleChange3}
                      placeholder="Old Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.value1}
                      onChange={this.handleChange1}
                      placeholder="New Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.value2}
                      onChange={this.handleChange2}
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleSubmitClick}
                  >
                    Update
                  </Button>
                  {this.state.value2 === '' ? (
                    ''
                  ) : this.state.value1 === this.state.value2 ? (
                    <p style={{ color: 'green', fontWeight: 'bold' }}>
                      {' '}
                      Passwords match{' '}
                    </p>
                  ) : (
                    <p style={{ color: 'red', fontWeight: 'bold' }}>
                      {' '}
                      Passwords not match{' '}
                    </p>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default PasswordChange;
