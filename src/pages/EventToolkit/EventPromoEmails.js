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
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ToolkitNotification } from './../../components/ToolkitNotification';
import { AllNotificationData, FavNotificationData } from '../NotificationData';
class GoogleAds extends React.Component {
  constructor() {
    super();
    this.state = {
        valueOne:'',
        valueTwo:'',
        valueThree:'',
        valueFour:'',
        valueFive:'',
        valueSix:'',
    };
  }

  wordCountOne(event) {
    this.setState({ valueOne:event.target.value });
  }

  wordCountTwo(event) {
    this.setState({ valueTwo:event.target.value });
  }
  wordCountThree(event) {
    this.setState({ valueThree:event.target.value });
  }

  wordCountFour(event) {
    this.setState({ valueFour:event.target.value });
  }
  wordCountFive(event) {
    this.setState({ valueFive:event.target.value });
  }

  wordCountSix(event) {
    this.setState({ valueSix:event.target.value });
  }

  render() {
    let count = 0,
    lengthOne = this.state.valueOne?this.state.valueOne.length:0,
    lengthTwo = this.state.valueTwo?this.state.valueTwo.length:0,
    lengthThree = this.state.valueThree?this.state.valueThree.length:0,
    lengthFour = this.state.valueFour?this.state.valueFour.length:0,
    lengthFive = this.state.valueFive?this.state.valueFive.length:0,
    lengthSix = this.state.valueSix?this.state.valueSix.length:0;
    const Button = styled.button`
      background: #5433ff;
      mix-blend-mode: normal;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
      border-radius: 8px;
      text-align: center;
      display: block;
      width: 100%;
      letter-spacing:0.05rem;
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
        <h1 class="headTitle">Event Toolkit</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5 toolkitWebsite">
            <Card>
              <Card.Header>
                <h3>Event Promo Emails</h3>
              </Card.Header>
              <Card.Body>
                <p>Hero text positions your product in the customer's mind</p>
                <Form className="p-0">
                  <Form.Group className="mb-4" controlId="companyname">
                    <Form.Label>Event Name *</Form.Label>
                    <Form.Control type="text" name="Brand" value={this.state.Brand} maxLength="20" 
                    onChange={(event)=>this.wordCountOne(event)}
                    />
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="companyname">
                    <Form.Label>Describe your audience *</Form.Label>
                    <Form.Control type="text" name="customer" value={this.state.customer} maxLength="20" 
                    onChange={(event)=>this.wordCountTwo(event)}
                    />
                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
                  </Form.Group>
                             
                  <Form.Group className="mb-4" controlId="Category">
                    <Form.Label>Event Category *</Form.Label>
                    <Form.Control type="text" name="Category" value={this.state.Category} maxLength="20" 
                    onChange={(event)=>this.wordCountThree(event)}
                    />
                    <p className="float-end"><span>{lengthThree}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="Date">
                    <Form.Label>Event Date *</Form.Label>
                    <Form.Control type="text" name="Date" value={this.state.Category} maxLength="20" 
                    onChange={(event)=>this.wordCountFour(event)}
                    />
                    <p className="float-end"><span>{lengthFour}/</span><span>20</span></p>
                  </Form.Group>
   

                  <Form.Group className="mb-4" controlId="promotions">
                    <Form.Label>Any offers or promotions? *</Form.Label>
                    <Form.Control type="text" maxLength="20" name="promotions"  value={this.state.audience}   onChange={(event)=>this.wordCountFive(event)}/>
                    <p className="float-end"><span>{lengthFive}/</span><span>20</span></p>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="event">
                    <Form.Label>Why should one attend the event?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      maxLength="140"
                      name="event"
                      value={this.state.event}
                      onChange={(event)=>this.wordCountSix(event)}
                    />
                    <p className="float-end"><span>{lengthSix}/</span><span>120</span></p>
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
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="all" title="All(6)">
                  <ToolkitNotification notifcation={AllNotificationData} />
                </Tab>
                <Tab eventKey="favourite" title="Favourite(1)">
                  <ToolkitNotification notifcation={FavNotificationData} />
                  <Link to="/workspaceedit" className="viewAll">Edit your fav items &gt; &gt;</Link>
                </Tab>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default GoogleAds;
