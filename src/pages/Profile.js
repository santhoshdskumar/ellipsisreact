import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Billing, Order } from './ProfileData';
import axios from 'axios';
import ProductsCustom from '../components/ProductsCustom';
import { ToastContainer, toast } from 'react-toastify';
let access_token = localStorage.getItem('login_access_token');
let user_id = localStorage.getItem('user_id');
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profileData: '',
      userName: '',
      userEmail: '',
      firstName: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    axios
      .get(`https://app2.ellipsis-ai.com/api/v1/userdata/${user_id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        this.setState({
          firstName: response.data.userdata.first_name,
          userEmail: response.data.userdata.email,
          userName: response.data.userdata.username,
        });
      });
  }

  stripeLogin = () => {
    axios
      .get(`https://app2.ellipsis-ai.com/customer-portal/?user_id=${user_id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = response.data.message;
        } else if (response.status === 304) {
          toast('Billing information is not available');
        }
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
    return (
      <React.Fragment>
        <Card className="profileEdit">
          <Card.Header>
            <h3>Profile</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={3} lg={3} md={3} sm={12} className="d-none">
                <Image
                  src="https://via.placeholder.com/150/000000"
                  roundedCircle
                  fluid
                />
              </Col>

              <Col xl={12} lg={12} md={12} sm={12}>
                <Form>
                  <Row>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                          placeholder={this.state.firstName}
                          value={this.state.value}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                          placeholder={this.state.userEmail}
                          value={this.state.value}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="phone">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                          placeholder={this.state.userName}
                          value={this.state.value}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col xl={6} sm={12} md={12} lg={6} className="d-none">
                      <Form.Group className="mb-4" controlId="currency">
                        <Form.Label>Default Currency</Form.Label>
                        <Form.Control type="tex" placeholder="IND" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-none">
                    <Col xl={12} sm={12} md={12} lg={12}>
                      <Form.Group className="mb-4" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <Button variant="primary" type="submit">
                    Update
                  </Button> */}
                  <Link to="/Passwordchange" className="changepassword">
                    Change Password
                  </Link>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row className="billingRow mt-5">
          <Col xl={4} lg={4} md="4" sm={12}>
            <div onClick={this.stripeLogin}>
              <ProductsCustom products={Billing} />
            </div>
          </Col>
          <Col xl={4} lg={4} md="4" sm={12}>
            <Link to="/Usage">
              <ProductsCustom products={Order} />
            </Link>
          </Col>
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
        </Row>
      </React.Fragment>
    );
  }
}

export default Profile;
