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
    };
  }

  wordCount(event) {
    this.setState({ valueone:event.target.value });
  }

  wordCountThree(event) {
    this.setState({ valueFour:event.target.value });
  }

  render() {
    let count = 0,
    lengthOne = this.state.valueone?this.state.valueone.length:0,
    lengthTwo = this.state.valueThree?this.state.valueThree.length:0;
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
        <h1 class="headTitle">Writing Toolkit</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5 toolkitWebsite">
            <Card>
              <Card.Header>
                <h3>Write Like Me</h3>
              </Card.Header>
              <Card.Body>
                <p>Hero text positions your product in the customer's mind</p>
                <Form className="p-0">
                  <Form.Group className="mb-4" controlId="topic">
                    <Form.Label>Topic *</Form.Label>
                    <Form.Control type="text" name="topic" value={this.state.topic} maxLength="20" 
                    
                    onChange={(event)=>this.wordCount(event)}
                    
                    />
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="writing">
                    <Form.Label>Paste what you are writing here *</Form.Label>
                    <Form.Control type="text" maxLength="20" name="writing"  value={this.state.writing}   onChange={(event)=>this.wordCountTwo(event)}/>
                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
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
