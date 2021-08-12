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
import axios from 'axios';
import { AllNotificationData, FavNotificationData } from '../NotificationData';
class GoogleAds extends React.Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
        valueOne:'',
        valueTwo:'',
        valueThree:'',
        valueFour:'',
        valueFive:'',
        valueSix:'',
        consumedData:null,
        allCount:'',
        form: {
          company: "",
          product: "",
          name: "",
          audience:'',
          background:'',
          offer:'',
        },
        formErrors: {
          company: null,
          product: null,
          name: null,
          audience:null,
          background:null,
          offer:null,
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
    this.setState({ [e.target.name]: e.target.value });
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
      case "company":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "name":
          if (!value) errorMsg = "Please fill the required field.";
          break;
      case "audience":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "product":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "offer":
        if (!value) errorMsg = "Please fill the required field.";
        break;
      case "background":
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
  
  formSubmit(e) {
    e.preventDefault();
    const schedule_product_demo = {
      company: this.state.company,
      product: this.state.product,
      audience: this.state.audience,
      name:this.state.name,
      offer: this.state.offer,
      background: this.state.background,
    }
    axios.post("https://app2.ellipsis-ai.com/api/v1/schedule_product_demo/", schedule_product_demo,{auth:{
      username: 'jaffrinkirthiga@gmail.com',
      password: 'demo@123'
    }},).then(res => {
      let retData = res.data.data.output;
       this.setState({
         consumedData:retData
       })
       this.setState({
         allCount:retData.length
       })
    });
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
        <h1 class="headTitle">Email Toolkit</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5 toolkitWebsite">
            <Card>
              <Card.Header>
                <h3>Schedule background Demo</h3>
              </Card.Header>
              <Card.Body>
                <p>Get that time time commitment from users for demo</p>
                <Form className="p-0" onSubmit={this.formSubmit}>
                  <Form.Group className="mb-4" controlId="company">
                    <Form.Label>Enter your Company/Brand name*</Form.Label>
                    <Form.Control type="text" name="company" value={this.state.Brand} maxLength="20" 
                    onChange={e => { this.wordCountOne(e); this.handleChange(e)}}
                    />
                    {formErrors.company && (
                      <span className="err">{formErrors.company}</span>
                    )}
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="company">
                    <Form.Label>Describe your customer*</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} maxLength="20" 
                    onChange={e => { this.wordCountTwo(e); this.handleChange(e)}}
                    />
                    {formErrors.name && (
                      <span className="err">{formErrors.name}</span>
                    )}
                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="audience">
                    <Form.Label>Who are you reaching out to*</Form.Label>
                    <Form.Control type="text" name="audience" value={this.state.audience} maxLength="20" 
                   onChange={e => { this.wordCountThree(e); this.handleChange(e)}}
                   />
                   {formErrors.audience && (
                     <span className="err">{formErrors.audience}</span>
                   )}
                    <p className="float-end"><span>{lengthThree}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="product">
                    <Form.Label>Product Category*</Form.Label>
                    <Form.Control type="text" name="product" value={this.state.product} maxLength="20" 
                   onChange={e => { this.wordCountFour(e); this.handleChange(e)}}
                   />
                   {formErrors.product && (
                     <span className="err">{formErrors.product}</span>
                   )}
                    <p className="float-end"><span>{lengthFour}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="offer">
                    <Form.Label>Offers or promotions?*</Form.Label>
                    <Form.Control type="text" maxLength="20" name="offer"  value={this.state.offer}   
                    onChange={e => { this.wordCountFive(e); this.handleChange(e)}}
                    />
                    {formErrors.offer && (
                      <span className="err">{formErrors.offer}</span>
                    )}
                    
                    <p className="float-end"><span>{lengthFive}/</span><span>20</span></p>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="background">
                    <Form.Label>Explain what your product does</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      maxLength="140"
                      name="background"
                      value={this.state.background}
                      onChange={e => { this.wordCountSix(e); this.handleChange(e)}}
                      />
                    <p className="float-end"><span>{lengthSix}/</span><span>120</span></p>
                  </Form.Group>
                  <Button class="update"  type="submit"  onClick={this.handleSubmit}>
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
                <Tab eventKey="all" title={`All ${this.state.allCount}`}>
                  <ToolkitNotification notifcation={this.state.consumedData} />
                </Tab>
                <Tab eventKey="favourite" title="Favourite(1)">
                  <ToolkitNotification notifcation={FavNotificationData} />
                  <Link to="/workspaceedit" className="viewAll">Edit your fav items &gt; &gt;</Link>
                </Tab>
              </Tabs>
              <div className="clearConsole">
                <a onClick={this.resetInputField} className="clear">Clear Output</a>
                <a href="#" className="clear">Select All</a>
              </div>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default GoogleAds;
