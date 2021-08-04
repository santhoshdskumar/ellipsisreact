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
        form: {
          companyname: "",
          audiencee: "",
          Category:'',
          Date:'',
          event:'',
          promotions:'',
        },
        formErrors: {
          companyname: null,
          audiencee: null,
          Category:null,
          Date:null,
          event:null,
          promotions:null,
        }
    };
  }
  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter(x => x !== value)
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value
      };
    }
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === "password" || name === "confirmPassword") {
        let refValue = this.state.form[
          name === "password" ? "confirmPassword" : "password"
        ];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === "language" ? this.state.form["language"] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "companyname":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "Category":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "Date":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "promotions":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "event":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "audiencee":
        if (!value) errorMsg = "Please fill the required field.";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  
  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map(x => {
      let refValue = null;
      if (x === "password" || x === "confirmPassword") {
        refValue = form[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };


  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    console.log("Data: ", form);
  };
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
    const { form, formErrors } = this.state;

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
                <h3>Event Digital Ads</h3>
              </Card.Header>
              <Card.Body>
                <p>Hero text positions your product in the customer's mind</p>
                <Form className="p-0">
                  <Form.Group className="mb-4" controlId="companyname">
                    <Form.Label>Event Name *</Form.Label>
                    <Form.Control type="text" name="companyname" value={form.companyname} maxLength="20" 
                    onChange={e => { this.wordCountOne(e); this.handleChange(e)}}
                    />
                    {formErrors.companyname && (
                      <span className="err">{formErrors.companyname}</span>
                    )}
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="audiencee">
                    <Form.Label>Describe your audience *</Form.Label>
                    <Form.Control type="text" name="audiencee" value={form.audiencee} maxLength="20" 
                    onChange={e => { this.wordCountTwo(e); this.handleChange(e)}}
                    />

                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
                    {formErrors.audiencee && (
                      <span className="err">{formErrors.audiencee}</span>
                    )}
                  </Form.Group>
                             
                  <Form.Group className="mb-4" controlId="Category">
                    <Form.Label>Event Category *</Form.Label>
                    <Form.Control type="text" name="Category" value={this.state.Category} maxLength="20" 
                    onChange={e => { this.wordCountThree(e); this.handleChange(e)}}
                    />
                    <p className="float-end"><span>{lengthThree}/</span><span>20</span></p>
                    {formErrors.Category && (
                      <span className="err">{formErrors.Category}</span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="Date">
                    <Form.Label>Event Date *</Form.Label>
                    <Form.Control type="text" name="Date" value={this.state.Category} maxLength="20" 
                    onChange={e => { this.wordCountFour(e); this.handleChange(e)}}
                    />
                    <p className="float-end"><span>{lengthFour}/</span><span>20</span></p>
                    {formErrors.Date && (
                      <span className="err">{formErrors.Date}</span>
                    )}
                  </Form.Group>
   

                  <Form.Group className="mb-4" controlId="promotions">
                    <Form.Label>Any offers or promotions? *</Form.Label>
                    <Form.Control type="text" maxLength="20" name="promotions"  value={this.state.audience}   
                    onChange={e => { this.wordCountFive(e); this.handleChange(e)}}
                    />
                    <p className="float-end"><span>{lengthFive}/</span><span>20</span></p>
                    {formErrors.promotions && (
                      <span className="err">{formErrors.promotions}</span>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="event">
                    <Form.Label>Why should one attend the event?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      maxLength="140"
                      name="event"
                      value={this.state.event}
                      onChange={e => { this.wordCountSix(e); this.handleChange(e)}}
                    />
                    <p className="float-end"><span>{lengthSix}/</span><span>120</span></p>
                    {formErrors.event && (
                      <span className="err">{formErrors.event}</span>
                    )}
                  </Form.Group>
                  <Button class="update" type="button" onClick={this.handleSubmit}>
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
