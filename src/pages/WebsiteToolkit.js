import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Tab,
  Tabs,
} from 'react-bootstrap';
import styled from 'styled-components';
import { ToolkitNotification } from '../components/ToolkitNotification';
import { AllNotificationData, FavNotificationData } from './NotificationData';
class WebsiteToolkit extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const Button = styled.button`
      background: #5433ff;
      mix-blend-mode: normal;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
      border-radius: 8px;
      text-align: center;
      display: block;
      width: 100%;
      border: 1px solid #5433ff;
      margin-bottom: 30px;
      &:hover {
        background: #fff;
        color: #5433ff;
        transition: 0.3s ease-in;
      }
    `;
    return (
      <React.Fragment>
        <h1 class="headTitle">Website Toolkit</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5">
            <Card>
              <Card.Header>
                <h3>Website Headlie</h3>
              </Card.Header>
              <Card.Body>
                <p>Hero text positions your product in the customer's mind</p>
                <Form className="p-0">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Compan/Brand* </Form.Label>
                    <Form.Control type="text" placeholder="UI and UX" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="comments">
                    <Form.Label>Describe your product & benefits*</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Lorem ipsum is a description"
                    />
                  </Form.Group>
                  <Button class="update" type="submit">
                    Generate Copy
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}  lg={8} sm={12} className="NotificationEdit">
            <Card>
              <Tabs
                transition={false}
                defaultActiveKey="digital"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="digital" title="All(6)">
                  <ToolkitNotification notifcation={AllNotificationData} />
                </Tab>
                <Tab eventKey="email" title="Favourite(1)">
                  <ToolkitNotification notifcation={FavNotificationData} />
                </Tab>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default WebsiteToolkit;
