import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Billing, Order } from './ProfileData';
import ProductsCustom from '../components/ProductsCustom';
class Profile extends React.Component {
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
              <Col xl={3} lg={3} md={3} sm={12}>
                <Image
                  src="https://via.placeholder.com/150/000000"
                  roundedCircle
                  fluid
                />
              </Col>

              <Col xl={9} lg={9} md={9} sm={12}>
                <Form>
                  <Row>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Rangababu" />
                      </Form.Group>
                    </Col>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="yvrangababu@gmail.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="phone">
                        <Form.Label>Primary Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="9739616283" />
                      </Form.Group>
                    </Col>
                    <Col xl={6} sm={12} md={12} lg={6}>
                      <Form.Group className="mb-4" controlId="currency">
                        <Form.Label>Default Currency</Form.Label>
                        <Form.Control type="tex" placeholder="IND" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} sm={12} md={12} lg={12}>
                      <Form.Group className="mb-4" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                  <Link to="/Passwordchange" className="changepassword">Change Password</Link>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row className="billingRow mt-5">
          <Col xl={4} lg={4} md="4" sm={12}>
            <ProductsCustom products={Billing} />
          </Col>
          <Col xl={4} lg={4} md="4" sm={12}>
            <Link to="/Usage">
            <ProductsCustom products={Order} />
            </Link>
          </Col>
  
        </Row>
      </React.Fragment>
    );
  }
}

export default Profile;
