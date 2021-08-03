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
        valueone:'',
        valueThree:'',
        valueFour:'',
    };
  }

  wordCount(event) {
    this.setState({ valueone:event.target.value });
  }

  wordCountTwo(event) {
    this.setState({ valueThree:event.target.value });
  }

  wordCountThree(event) {
    this.setState({ valueFour:event.target.value });
  }

  render() {
    let count = 0,
    lengthOne = this.state.valueone?this.state.valueone.length:0,
    lengthTwo = this.state.valueThree?this.state.valueThree.length:0,
    lengthThree = this.state.valueFour?this.state.valueFour.length:0;
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
        <h1 class="headTitle">Google Adwords</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5 toolkitWebsite">
            <Card>
              <Card.Header>
                <h3>Google Adwords</h3>
              </Card.Header>
              <Card.Body>
                <p>Hero text positions your product in the customer's mind</p>
                <Form className="p-0">
                  <Form.Group className="mb-4" controlId="companyname">
                    <Form.Label>Enter company / product name *</Form.Label>
                    <Form.Control type="text" name="companyname" value={this.state.companyname} maxLength="20" 
                    
                    onChange={(event)=>this.wordCount(event)}
                    
                    />
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="audeince">
                    <Form.Label>Who is your audeince *</Form.Label>
                    <Form.Control type="text" maxLength="20" name="audience"  value={this.state.audience}   onChange={(event)=>this.wordCountTwo(event)}/>
                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="product">
                    <Form.Label>Description of your product</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      maxLength="140"
                      name="companyname"
                      value={this.state.companyname}
                      onChange={(event)=>this.wordCountThree(event)}
                    />
                    <p className="float-end"><span>{lengthThree}/</span><span>120</span></p>
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
